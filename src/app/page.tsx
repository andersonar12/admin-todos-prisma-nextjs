import Image from "next/image";

export default function Home() {
  return (
    <main className="flex min-h-screen items-center  h-screen">
      {/* <div className="grid grid-cols-12 gap-4 p-4 justify-center">
        <div className="col-span-12  sm:col-span-6 md:col-span-8 bg-red-500 text-white p-4">
          <h2 className="font-bold text-xl mb-2">Columna 1</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc a interdum
            condimentum, orci risus fringilla neque, at fringilla diam leo a est.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-8 bg-blue-500 text-white p-4">
          <h2 className="font-bold text-xl mb-2">Columna 2</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc a interdum
            condimentum, orci risus fringilla neque, at fringilla diam leo a est.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-8 bg-green-500 text-white p-4 ">
          <h2 className="font-bold text-xl mb-2">Columna 3</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc a interdum
            condimentum, orci risus fringilla neque, at fringilla diam leo a est.
          </p>
        </div>
        <div className="col-span-12 sm:col-span-6 md:col-span-8 bg-yellow-500 text-white p-4 ">
          <h2 className="font-bold text-xl mb-2">Columna 4</h2>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed euismod, nunc a interdum
            condimentum, orci risus fringilla neque, at fringilla diam leo a est.
          </p>
        </div>
      </div> */}
      <section className="container">
        <h1 className="text-5xl font-bold mb-10">App with Next.js, Prisma, and Vercel Postgres</h1>
        <div className="flex flex-wrap justify-center">
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
          <div className="w-full sm:w-6/12 p-1">
            <span>
              Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ab dignissimos atque
              necessitatibus, id similique rem, quas impedit reiciendis veritatis
            </span>
          </div>
        </div>
      </section>
      {/* <div class="grid grid-cols-12">
        <div class="col-span-8 sm:col-span-6 md:col-span-4 bg-red-500 p-4">Columna 1</div>
        <div class="col-span-4 sm:col-span-6 md:col-span-8 bg-blue-500 p-4">Columna 2</div>
      </div> */}
    </main>
  );
}
