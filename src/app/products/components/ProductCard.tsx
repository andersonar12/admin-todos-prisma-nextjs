"use client";
import { Product } from "@/data/products";
import Image from "next/image";
import Link from "next/link";
import { IoAddCircleOutline, IoTrashOutline } from "react-icons/io5";
import Star from "./Star";
import { addProductToCart, removeProductFromCart } from "@/app/shopping-cart/actions/actions";
import { useRouter } from "next/navigation";

export default function ProductCard({ product }: { product: Product }) {
  const router = useRouter();
  const onAddToCart = () => {
    addProductToCart(product.id);
    router.refresh();
  };

  const onRemoveFromCart = () => {
    removeProductFromCart(product.id);
    router.refresh();
  };
  return (
    <div className="shadow rounded-lg dark:bg-gray-800 dark:border-gray-100">
      {/* Product Image */}
      <div className="p-2">
        <Image
          width={500}
          height={500}
          className="rounded"
          src={product.image}
          alt="product image"
        />
      </div>

      {/* Title */}
      <div className="px-5 pb-5">
        <Link href="#">
          <h3 className=" font-semibold text-xl tracking-tight dark:text-white">{product.name}</h3>
        </Link>
        <div className="flex items-center mt-2.5 mb-5">
          {/* Stars */}
          <Star rating={product["rating"]} />

          {/* Rating Number */}
          <span className=" text-xs font-semibold mr-2 px-2.5 py-0.5 rounded dark:bg-blue-200 dark:text-blue-800 ml-3">
            {product.rating.toFixed(2)}
          </span>
        </div>

        {/* Price and Add to Cart */}
        <div className="flex items-center justify-between">
          <span className="text-3xl font-bold  dark:text-white">${product.price}</span>

          <div className="flex">
            <button
              onClick={onAddToCart}
              className="text-white mr-2 focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
            >
              <IoAddCircleOutline size={25} />
            </button>
            <button
              onClick={onRemoveFromCart}
              className="text-white focus:ring-4 focus:ring-blue-300 font-medium rounded-lg text-sm px-5 py-2.5 text-center dark:bg-red-600 dark:hover:bg-red-700 dark:focus:ring-red-800"
            >
              <IoTrashOutline size={20} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}
