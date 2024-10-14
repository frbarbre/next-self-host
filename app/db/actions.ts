"use server";

import { revalidatePath } from "next/cache";
import { db } from "./drizzle";
import { todos } from "./schema";
import { eq, sql } from "drizzle-orm";

export async function addTodoAction(formData: FormData) {
  const content = formData.get("content") as string;
  await db.insert(todos).values({ content });
  revalidatePath("/db");
}

export async function deleteTodoAction(formData: FormData) {
  const id = formData.get("id") as string;
  await db.delete(todos).where(eq(todos.id, Number(id)));
  revalidatePath("/db");
}

export async function createUser(formData: FormData) {
  const email = formData.get("email") as string;
  const password = formData.get("password") as string;
  const username = formData.get("username") as string;

  console.log(email, password, username);

  // Execute the raw SQL query to call the stored procedure
  const result = await db.execute(
    sql`SELECT add_profile(${username}, ${email}, ${password})`
  );

  console.log(result);
}
