import { Hono } from "hono";
import { PrismaClient } from '@prisma/client/edge'
import { withAccelerate } from '@prisma/extension-accelerate'
import { jwt, sign, verify } from 'hono/jwt'

export const blogRouter = new Hono<{
    Bindings: {
        DATABASE_URL: string;
        JWT_SECRET: string;
    }
    Variables: {
        userId: string;
    }
}>();

// Middleware
blogRouter.use('/*', async (c, next) => {
    const jwt = c.req.header('authorization');
    if (!jwt) {
        c.status(403);
        return c.json({ error: "Unauthorized" })
    }
    const token = jwt.split(" ")[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
        c.status(401);
        // next()
        return c.json({ error: "Unauthorized, you are not logged in" });
    }
    c.set('userId', payload.id);
    await next()
})

// bloog
blogRouter.post("/", async (c) => {
    const userId = c.get('userId')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const body = await c.req.json()
    try {
        const blog = await prisma.post.create({
            data: {
                title: body.title,
                content: body.content,
                published: body.published,
                authorId: userId,
            }
        })
        return c.json({
            postId: blog.id,
        })
    } catch (error) {
        c.status(411)
        return c.json({
            message: " Wrong message"
        })
    }
})

// Update the blog post
blogRouter.put("/", async (c) => {
    const userId = c.get('userId');
    const body = await c.req.json();
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    try {
        const post = await prisma.post.update({
            where: {
                id: body.id,
                authorId: userId
            },
            data: {
                title: body.title,
                content: body.content,
                published: body.published
            }
        })
        return c.json({
            post: "updated"
        })
    } catch (error) {
        return c.json({
            message: "Error while updating"
        })
    }

})
// TODO: Add pagination
blogRouter.get("/bulk", async (c) => {
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    
    try {
        const posts = await prisma.post.findMany({})
        return c.json(posts);
    } catch (error) {
        return c.json({
            message: "Error while fetching posts"
        })
    }
})

blogRouter.get("/:id", async (c) => {

    const id = c.req.param('id')
    const prisma = new PrismaClient({
        datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
    const post = await prisma.post.findUnique({
        where: {
            id
        }
    })
    return c.json(post)
})
