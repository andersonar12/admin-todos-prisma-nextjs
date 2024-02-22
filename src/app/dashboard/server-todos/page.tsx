export const dynamic = "force-dynamic";
export const revalidate = 0;

import prisma from "@/lib/prisma";
import TodosGrid from "../../todos/components/TodosGrid";
import { Todo } from "@prisma/client";
import { NewTodo } from "../../todos/components/NewTodo";
import { authOptions } from "@/app/api/auth/[...nextauth]/route";
import { getServerSession } from "next-auth";
import { getUserServerSession } from "@/auth/actions/auth-actions";

import { redirect } from "next/navigation";

export const metadata = {
  title: "Server Actions",
  description: "Server Actions",
};

export default async function ServerTodosPage() {
  const user = await getUserServerSession();
  if (!user) redirect("/api/auth/signin");

  const todos = await prisma.todo.findMany({
    where: { userId: "" },
    orderBy: { description: "asc" },
  });

  //   console.log(todos);
  return (
    <>
      <h1 className="text-3xl mb-8">Server Actions</h1>
      {/* <pre>{JSON.stringify(todos, null, 2)}</pre> */}
      <div className="w-full px-3 mx-5 mb-5">
        <NewTodo />
      </div>
      <TodosGrid todos={todos} />
    </>
  );
}
