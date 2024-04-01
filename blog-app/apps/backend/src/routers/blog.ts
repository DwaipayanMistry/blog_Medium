import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { jwt, sign, verify } from "hono/jwt";
import { createBlogInput, updateUserPost } from "@repo/common";

export const blogRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
  Variables: {
    userId: string;
  };
}>();

// Middleware CHECK ~~~~~~~~~~~~~~~~~~~~~~~~~~~~~
blogRouter.use("/*", async (c, next) => {
  try {
    const jwt = c.req.header("authorization");
    if (!jwt) {
      c.status(403);
      return c.json({ error: "Unauthorized" });
    }
    const token = jwt.split(" ")[1];
    const payload = await verify(token, c.env.JWT_SECRET);
    if (!payload) {
      c.status(401);
      // next()
      return c.json({ error: "Unauthorized, you are not logged in" });
    }
    c.set("userId", payload.id);
    await next();
  } catch (error) {
    c.status(403);
    return c.json({ message: "You are not logged in" });
  }
});

// create blog
blogRouter.post("/", async (c) => {
  const userId = c.get("userId");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const { success } = createBlogInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({ message: "Invalid input" });
    }
    const blog = await prisma.post.create({
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
        authorId: userId,
      },
    });
    return c.json({
      postId: blog.id,
    });
  } catch (error) {
    c.status(411);
    return c.json({
      message: " Wrong message",
    });
  }
});

// Update the blog post
blogRouter.put("/", async (c) => {
  const userId = c.get("userId");
  const body = await c.req.json();
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const { success } = updateUserPost.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({ message: "Invalid input" });
    }
    const post = await prisma.post.update({
      where: {
        id: body.id,
        authorId: userId,
      },
      data: {
        title: body.title,
        content: body.content,
        published: body.published,
      },
    });
    return c.json({
      post: "updated",
    });
  } catch (error) {
    return c.json({
      message: "Error while updating",
    });
  }
});

// get add bulk data
// TODO: Add pagination
blogRouter.get("/bulk", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());

  try {
    const posts = await prisma.post.findMany({});
    return c.json(posts);
  } catch (error) {
    return c.json({
      message: "Error while fetching posts",
    });
  }
});

// add get post by id
blogRouter.get("/:id", async (c) => {
  const id = c.req.param("id");
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  try {
    const post = await prisma.post.findUnique({
      where: {
        id,
      },
    });
    return c.json(post);
  } catch (error) {
    c.status(403);
    return c.json({ message: "You are not logged in" });
  }
});
