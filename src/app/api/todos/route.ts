import { getUserServerSession } from "@/auth/actions/auth-actions";
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
  complete: yup.boolean().optional().default(false),
});

export async function POST(request: Request) {
  const user = await getUserServerSession();

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const { complete, description } = await postChema.validate(await request.json());

    const todo = await prisma.todo.create({
      data: { description, complete, userId: user.id },
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}

export async function DELETE(request: Request) {
  const user = await getUserServerSession();

  if (!user) return NextResponse.json({ error: "Unauthorized" }, { status: 401 });
  try {
    const todo = await prisma.todo.deleteMany({
      where: {
        complete: true,
        userId: user.id,
      },
    });

    return NextResponse.json(todo);
  } catch (error) {
    return NextResponse.json({ error: error }, { status: 400 });
  }
}
