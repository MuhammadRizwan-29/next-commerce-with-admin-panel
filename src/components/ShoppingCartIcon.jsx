"use client";
import useCartStore from "@/store/cart";
import { ShoppingCart } from "lucide-react";
import Link from "next/link";

export default function ShoppingCartIcon() {
  const { cart, hasHydrated } = useCartStore();

  if (!hasHydrated) return null;

  return (
    <Link href={"/cart"} className="relative">
      <ShoppingCart className="w-4 h-4 text-gray-600" />
      <span className="absolute -top-3 -right-3 w-4 h-4 bg-amber-400 text-gray-600 rounded-full flex items-center justify-center text-xs font-medium">
        {cart.reduce((acc, item) => acc + item.quantity, 0)}
      </span>
    </Link>
  );
}
