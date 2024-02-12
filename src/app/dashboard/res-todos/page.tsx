export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import TodosGrid from "../../todos/components/TodosGrid";
import { Todo } from "@prisma/client";
import { NewTodo } from "../../todos/components/NewTodo";

export const metadata = {
  title: "Listado de todos",
  description: "Listado de todos",
};

export default async function ResTodosPage() {
  const todos = await prisma.todo.findMany({ orderBy: { description: "asc" } });

  //   console.log(todos);
  return (
    <div>
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </div>
  );
}
