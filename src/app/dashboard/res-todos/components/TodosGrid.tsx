"use client";
import { Todo } from "@prisma/client";
import TodoItem from "./TodoItem";
import { updateTodo } from "@/app/todos/helpers/todos";
import { useRouter } from "next/navigation";

interface Props {
  todos?: Todo[];
}
export default function TodosGrid({ todos = [] }: Props) {
  const router = useRouter();

  const toggleTodo = async (id: string, complete: boolean) => {
    const todo = await updateTodo(id, complete);
    router.refresh();
    // return todo;
  };
  return (
    <div className="grid  grid-cols-1 sm:grid-cols-3 gap-2">
      {todos.map((todo) => (
        <TodoItem key={todo.id} todo={todo} toggleTodo={toggleTodo} />
      ))}
    </div>
  );
}
