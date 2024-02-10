import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";
import * as yup from "yup";

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const take = searchParams.get("take") ?? "10";
  const skip = searchParams.get("skip") ?? "0";

  if (isNaN(+take)) {
    return NextResponse.json({ error: "Invalid take value is not a number" }, { status: 400 });
  }

  if (isNaN(+skip)) {
    return NextResponse.json({ error: "Invalid skip value is not a number" }, { status: 400 });
  }
  const todos = await prisma.todo.findMany({
    take: +take,
    skip: +skip,
  });

  return NextResponse.json(todos);
}

const postChema = yup.object({
  description: yup.string().required(),
  complete: yup.boolean().optional().default(false), //TODO mostrar algo interesante
});

export async function POST(request: Request) {
  try {
    const body = await postChema.validate(await request.json());

    const todo = await prisma.todo.create({
      data: body,
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
