"use server";
import prisma from "@/lib/prisma";
import { Todo } from "@prisma/client";
import { revalidatePath } from "next/cache";
import { sleep } from "../helpers/todos";

export const toggleTodo = async (id: string, complete: boolean): Promise<Todo> => {
  await sleep(3);

  const todo = await prisma.todo.findFirst({
    where: { id },
  });

  if (!todo) throw ` Todo with id ${id} not found`;

  const updatedTodo = await prisma.todo.update({
    where: { id },
    data: { complete },
  });

  revalidatePath("/dashboard/server-todos");
  return updatedTodo;
};

export const addTodo = async (description: string, userId: string) => {
  try {
    const todo = await prisma.todo.create({
      data: {
        userId,
        description,
        complete: false,
      },
    });

    revalidatePath("/dashboard/server-todos");

    return todo;
  } catch (error) {
    return {
      error: "Error creating todo",
    };
  }
};

export const deleteCompleted = async () => {
  try {
    const todo = await prisma.todo.deleteMany({
      where: { complete: true },
    });
    revalidatePath("/dashboard/server-todos");

    return todo;
  } catch (error) {
    return { error: "Error deleting todos" };
  }
};
