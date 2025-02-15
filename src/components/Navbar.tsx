import Link from "next/link";
import React from "react";
import Menu from "./Menu";
import CartIcon from "./CartIcon";
import Image from "next/image";

const Navbar = () => {
  const user = false;
  return (
    <div className="flex items-center justify-between p-4 h-12 text-[#B40614] uppercase border-b-2 border-b-[#CFB54F] md:h-24 lg:px-20 xl:px-40">
      {/* LEFT LINKS */}
      <div className="hidden md:flex gap-4 flex-1">
        <Link href="/">Home</Link>
        <Link href="/menu">Menu</Link>
        <Link href="/">Contact</Link>
      </div>
      <div className="text-xl md:font-bold flex-1 md:text-center">
        <Link href="/">Italiano</Link> 
      </div>
      {/*  MOBILE MENU */}
      <div className="md:hidden">
        <Menu />
      </div>
      {/* RIGHT LINKS */}
      <div className="hidden md:flex gap-4 items-center flex-1 justify-end">
        <div className="md:absolute top-3 right-2 lg:static flex items-center gap-2 cursor-pointer bg-[#CFB54F] px-1 rounded-md">
          <Image src='/phone.png' alt="contact" width={20} height={20}/>
          <span>123 5911 65</span>
        </div>
        {!user ? (
          <Link href="/login">Login</Link>
        ) : (
          <Link href="/orders">Orders</Link>
        )}
        <CartIcon />
      </div>
    </div>
  );
};

export default Navbar;
