import z from "zod";

// ~~~~~~~~~~~~~~~~~~~ User ~~~~~~~~~~~~
export const signupInput = z.object({
  email: z.string().email(),
  name: z.string(),
  password: z.string().min(6),
});
// type inference of signatureInput
export type SignupInput = z.infer<typeof signupInput>;

// signinInput
export const signinInput = z.object({
  email: z.string().email(),
  password: z.string().min(6),
});
// type inference of signin
export type SigninInput = z.infer<typeof signinInput>;

// ~~~~~~~~~~~~~~~~~~~ Blog ~~~~~~~~~~~~
// create blog
export const createBlogInput = z.object({
  title: z.string(),
  content: z.string(),
  published: z.boolean(),
});
// type interference of create blogInput
export type CreateBlogInput = z.infer<typeof createBlogInput>;

// update user port
export const updateUserPost = z.object({
  id: z.string(),
  title: z.string().optional(),
  content: z.string().optional(),
  published: z.boolean().optional(),
});
// type inference of update Blog
export type UpdateUserPost = z.infer<typeof updateUserPost>;
