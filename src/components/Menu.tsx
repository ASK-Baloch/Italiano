"use client";
import Image from "next/image";
import Link from "next/link";
import React, { useState } from "react";
import CartIcon from "./CartIcon";

const links = [
  { id: 1, title: "Home", href: "/" },
  { id: 2, title: "Menu", href: "/menu" },
  { id: 3, title: "Working Hours", href: "/" },
  { id: 4, title: "Contact", href: "/" },
];

const Menu = () => {
  const [open, setOpen] = useState(false);
  const user = false;
  return (
    <div>
      {!open ? (
        <Image
          src="/open.png"
          alt="Menu"
          width={20}
          height={20}
          onClick={() => setOpen(true)}
        />
      ) : (
        <Image
          src="/close.png"
          alt="Menu"
          width={20}
          height={20}
          onClick={() => setOpen(false)}
        />
      )}
      {open && (
        <div className="bg-[#B40614] text-white absolute left-0 top-24 w-full h-[calc(100vh-6rem)] flex flex-col items-center justify-center gap-8 z-10">
          {links.map((item) => (
            <Link href={item.href} key={item.id} onClick={() => setOpen(false)}>
              {item.title}
            </Link>
          ))}
          {!user ? (
            <Link href="/login" onClick={() => setOpen(false)}>
              Login
            </Link>
          ) : (
            <Link href="/orders" onClick={() => setOpen(false)}>
              Orders
            </Link>
          )}
          <Link href="/cart" onClick={() => setOpen(false)}>
            <CartIcon />
          </Link>
        </div>
      )}
    </div>
  );
};

export default Menu;
