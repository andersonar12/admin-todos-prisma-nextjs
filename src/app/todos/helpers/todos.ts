import { Todo } from "@prisma/client";

const sleep = (miliseconds: number) =>
  new Promise((resolve) => setTimeout(resolve, miliseconds * 1000));

export const updateTodo = async (id: string, complete: boolean): Promise<Todo> => {
  const todo = await fetch(`/api/todos/${id}`, {
    method: "PUT",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ complete }),
  }).then((result) => result.json());

  return todo;
};

export const createTodo = async (description: string): Promise<Todo> => {
  const todo = await fetch(`/api/todos`, {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify({ description }),
  }).then((result) => result.json());

  return todo;
};

export const deleteTodo = async (): Promise<void> => {
  const todosDeleted = await fetch(`/api/todos`, {
    method: "DELETE",
    headers: {
      "Content-Type": "application/json",
    },
  }).then((result) => result.json());
};
