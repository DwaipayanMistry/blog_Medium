import { Hono } from "hono";
import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";
import { jwt, sign, verify } from "hono/jwt";
import Hash from "../interface/hash";
import { signinInput, signupInput } from "@repo/common";
export const userRouter = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };
}>();

// signup
userRouter.post("/signup", async (c) => {
  const prisma = new PrismaClient({
    datasourceUrl: c.env.DATABASE_URL,
  }).$extends(withAccelerate());
  const body = await c.req.json();
  try {
    const { success } = signinInput.safeParse(body); //zod check
    if (!success) {
      c.status(400);
      return c.json({ message: "invalid Input" });
    }
    const hashedpassword = await Hash(body.password);
    const user = await prisma.user.create({
      data: {
        email: body.email,
        name: body.name,
        password: hashedpassword,
      },
    });
    const token = await sign({ id: user.id }, c.env.JWT_SECRET);
    return c.json({
      jwt: token,
    });
  } catch (error) {
    return c.json({ message: "The inputs are wrong" });
  }
});

// signin
userRouter.post("/signin", async (c) => {
  const body = await c.req.json();
  const prisma = new PrismaClient({
      datasourceUrl: c.env.DATABASE_URL,
    }).$extends(withAccelerate());
  try {
    const { success } = signinInput.safeParse(body);
    if (!success) {
      c.status(400);
      return c.json({ message: "Invalid input" });
    }
    const receivedPassword = await Hash(body.password);
    const user = await prisma.user.findUnique({
      where: {
        email: body.email,
      },
      select: {
        id: true,
        password: true,
      },
    });
    if (receivedPassword === user?.password) {
      const jwt = await sign({ id: user.id }, c.env.JWT_SECRET);
      return c.json({ jwt: jwt });
    }
  } catch (error) {
    return c.json({ message: "Something went wrong" });
  }
});
