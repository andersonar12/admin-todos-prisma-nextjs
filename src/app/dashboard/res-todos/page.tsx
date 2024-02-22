export const dynamic = "force-dynamic";

import prisma from "@/lib/prisma";
import TodosGrid from "../../todos/components/TodosGrid";
import { NewTodo } from "../../todos/components/NewTodo";
import { redirect } from "next/navigation";
import { getUserServerSession } from "@/auth/actions/auth-actions";

export const metadata = {
  title: "Listado de todos",
  description: "Listado de todos",
};

export default async function ResTodosPage() {
  const user = await getUserServerSession();
  if (!user) redirect("/api/auth/signin");

  const todos = await prisma.todo.findMany({
    where: { userId: user.id },
    orderBy: { description: "asc" },
  });

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
