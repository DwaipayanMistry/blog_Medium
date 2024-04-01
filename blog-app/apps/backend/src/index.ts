import { Hono } from 'hono'
import { userRouter } from "./routers/users";
import { blogRouter } from './routers/blog'
const app = new Hono<{
  Bindings: {
    DATABASE_URL: string;
    JWT_SECRET: string;
  };

}>();

app.route("/api/v1/user", userRouter)

app.route("/api/v1/blog", blogRouter)

export default app