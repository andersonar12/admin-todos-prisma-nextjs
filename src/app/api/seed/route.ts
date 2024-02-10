import prisma from "@/lib/prisma";
import { NextResponse, NextRequest } from "next/server";

export async function GET(request: Request) {
  await prisma.todo.deleteMany();
  await prisma.todo.createMany({
    data: [
      {
        description: "Piedra del alma",
        complete: true,
      },
      {
        description: "Piedra del tiempo",
        complete: false,
      },
      {
        description: "Piedra del espacio",
        complete: true,
      },
      {
        description: "Piedra del poder",
        complete: false,
      },
      {
        description: "Piedra del destino",
        complete: false,
      },
    ],
  });
  // const todo = await prisma.todo.create({
  //   data: {
  //     description: "Piedra del alma",
  //     complete: true,
  //   },
  // });
  return NextResponse.json({
    message: "Seed successful",
  });
}
