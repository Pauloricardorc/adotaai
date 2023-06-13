"use client";
import Header from "@/components/header/page";
import { MagnifyingGlass } from "@phosphor-icons/react";
import Image from "next/image";

export default function Inicio() {
  return (
    <div className="h-screen w-full p-8 flex flex-col">
      <Header />
      <header className="w-full h-28 rounded-md overflow-hidden bg-fixed grid grid-cols-3 grid-rows-1 items-center justify-center z-20">
        <div className="flex w-full h-full gap-1 col-span-2 px-4 justify-center items-center">
          <input
            type="text"
            className="p-2 border border-gray-200 h-12 w-full rounded-xl outline-none text-lg text-gray-500"
            placeholder="Pesquisar..."
          />
          <button className="w-32 h-12 bg-blue-500 shadow-lg active:shadow-none shadow-blue-400 transition-all duration-500 flex items-center justify-center rounded-md">
            <p className="text-base text-gray-200">Procurar</p>
            {/* <MagnifyingGlass size={24} className="text-white" /> */}
          </button>
        </div>
        <Image
          width={1200}
          height={1200}
          className="w-full h-full  rounded-lg shadow-lg z-10 border"
          src="https://catland.org.br/wp-content/uploads/2023/04/banner-transparencia.png"
          alt=""
        />
      </header>
      <h3 className="text-2xl text-gray-600 mt-8 font-semibold">Filtros</h3>
      <div className="grid grid-cols-8 gap-4 py-4">
        <button className="p-2 bg-gray-200 text-gray-500 text-sm rounded-2xl active:shadow-button transition duration-200">
          Recente
        </button>
        <button className="p-2 bg-gray-200 text-gray-500 text-sm rounded-2xl active:shadow-button transition duration-200">
          Comprados
        </button>
        <button className="p-2 bg-gray-200 text-gray-500 text-sm rounded-2xl active:shadow-button transition duration-200">
          Mais favoritados
        </button>
      </div>
      <h3 className="text-xl text-gray-600 mt-8 font-medium">Animais</h3>
      <div className="grid grid-cols-4 gap-4 py-4"></div>
    </div>
  );
}
