import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request, { params }: { params: { id: string } }) {
  const { id } = params;

  const todo = await prisma.todo.findFirst({
    where: {
      id,
    },
  });

  if (!todo) return NextResponse.json({ error: `Todo with id ${id} not found` }, { status: 404 });

  return NextResponse.json(todo);
}

const updateChema = yup.object({
  description: yup.string().optional(),
  complete: yup.boolean().optional(),
});

export async function PUT(request: Request, { params }: { params: { id: string } }) {
  try {
    const { id } = params;

    const todo = await prisma.todo.findFirst({
      where: {
        id,
      },
    });

    if (!todo) return NextResponse.json({ error: `Todo with id ${id} not found` }, { status: 404 });

    const body = await updateChema.validate(await request.json());

    const updatedTodo = await prisma.todo.update({
      where: {
        id,
      },
      data: body,
    });

    return NextResponse.json(updatedTodo);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
