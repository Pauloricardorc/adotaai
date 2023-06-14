"use client";
import { ShoppingCartSimple } from "@phosphor-icons/react";
import Image from "next/image";

export default function Header() {
  return (
    <div className="w-full px-2 flex items-center">
      <div className="flex flex-1"></div>
      <div className="flex items-center gap-5">
        <div className="relative w-10 h-10 items-center justify-center flex cursor-pointer hover:bg-gray-200 rounded-full">
          <div className="w-1 h-1 rounded-full bg-blue-600 absolute right-2 top-2 " />
          <ShoppingCartSimple size={24} color="#4d00db" weight="regular" />
        </div>
        <Image
          alt=""
          width={42}
          height={42}
          className="rounded-full border-2 border-blue-600"
          src="https://github.com/pauloricardorc.png"
        />
      </div>
    </div>
  );
}
