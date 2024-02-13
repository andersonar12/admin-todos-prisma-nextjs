import { Product, products } from "@/data/products";
import { ItemCard } from "@/app/shopping-cart/components/ItemCard";
import { cookies } from "next/headers";
import WidgetItem from "../../../components/WidgetItem";

export const metadata = {
  title: "Carrito de compras",
  description: "Apartado para ver los productos del carrito",
};

interface ProductInCart {
  product: Product;
  quantity: number;
}

const getProductsInCart = (cart: { [id: string]: number }) => {
  const productsInCart: ProductInCart[] = [];

  for (const id in cart) {
    const product = products.find((product) => product.id === id);
    if (product) {
      productsInCart.push({ product, quantity: cart[id] });
    }
  }

  return productsInCart;
};

export default function CartPage() {
  const cookiesStore = cookies();
  const cart = JSON.parse(cookiesStore.get("cart")?.value || "{}");

  const productsInCart = getProductsInCart(cart);

  const totalToPay = productsInCart.reduce(
    (prev, current) => prev + current.product.price * current.quantity,
    0
  );
  return (
    <div>
      <h1 className="text-3xl"> Productos del carrito</h1>
      <hr className="mb-2" />
      <div className="flex flex-col sm:flex-row gap-2 w-full">
        <div className="flex flex-col gap-2 w-full sm:w-8/12">
          {productsInCart.map(({ product, quantity }) => (
            <ItemCard key={product.id} product={product} quantity={quantity} />
          ))}
        </div>
        <div className="flex flex-col gap-2 w-full sm:w-4/12">
          <WidgetItem title="Total a pagar">
            <div className="mt-2 flex justify-center gap-4">
              <h3 className="text-3xl font-bold text-gray-500">
                $ {(totalToPay * 1.15).toFixed(2)}
              </h3>
            </div>
            <div className="mt-2 flex justify-center gap-4">
              <span className="font-bold text-center text-gray-500">
                Impuestos 15%: $ {(totalToPay * 0.15).toFixed(2)}
              </span>
            </div>
          </WidgetItem>
        </div>
      </div>
    </div>
  );
}
