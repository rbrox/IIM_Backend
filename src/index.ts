import { PrismaClient } from "@prisma/client/edge";
import { withAccelerate } from "@prisma/extension-accelerate";

const prisma = new PrismaClient({
  datasourceUrl: env.DATABASE_URL,
}).$extends(withAccelerate());

import { Hono } from "hono";

const app = new Hono();

app.get("/", (c) => {
  return c.text("Hello Hono!");
});

app.post("/api/v1/signup", (c) => {
  return c.text("Signup route");
});

app.post("/api/v1/signin", (c) => {
  return c.text("Signin route");
});

app.post("/api/v1/blog", (c) => {
  return c.text("Blog route");
});

// Here we use ':' because we want to get the id from the url, id refers to the blog id
app.get("api/v1/blog/:id", (c) => {
  const id = c.req.param("id");
  console.log("Blog num requested for" + id);
  return c.text("Update blog route");
});

app.put("/api/v1/blog", (c) => {
  return c.text("signin route");
});

export default app;
