import Image from "next/image";
import Link from "next/link";
import React from "react";

const CartIcon = () => {
  return (
    <Link href="/cart" className="flex items-center gap-4">
      <div className="relative h-8 w-8 md:w-5 md:h-5">
        <Image src="/cart.png" alt="Cart" fill />
      </div>
      <span>Cart (3)</span>
    </Link>
  );
};

export default CartIcon;
