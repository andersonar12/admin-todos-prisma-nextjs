import Image from "next/image";
import Link from "next/link";
import { useRouter } from "next/navigation";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center  h-screen">
      <section className="container">
        <h1 className="text-5xl font-bold mb-10">App with Next.js, Prisma, and Vercel Postgres</h1>
        <div className="flex flex-wrap justify-center">
          <div className="w-full sm:w-6/12 text-center p-1">
            <Link
              href="/dashboard"
              type="submit"
              className=" rounded ml-2 bg-sky-500 p-2 text-white hover:bg-sky-700 transition-all"
            >
              Ir al Dashboard
            </Link>
          </div>
          <div className="w-full sm:w-6/12 p-1">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dignissimos atque
              necessitatibus, id similique rem, quas impedit reiciendis veritatis
            </span>
          </div>
          <div className="w-full sm:w-6/12 p-1">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dignissimos atque
              necessitatibus, id similique rem, quas impedit reiciendis veritatis
            </span>
          </div>
          <div className="w-full sm:w-6/12 p-1">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dignissimos atque
              necessitatibus, id similique rem, quas impedit reiciendis veritatis
            </span>
          </div>
        </div>
      </section>
    </main>
  );
}
