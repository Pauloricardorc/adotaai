"use client";
import Card from "@/components/Card/page";
import Header from "@/components/header/page";
import { Animais } from "@/http/json/animais";
import Image from "next/image";
import { useState } from "react";

export default function Inicio() {
  const [animais, setAnimais] = useState(Animais);
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden px-8 pt-8 gap-4">
      <Header />
      <header className="w-full h-28 gap-8 rounded-md bg-fixed grid grid-cols-3 grid-rows-1 items-center justify-center z-20">
        <div className="flex w-full h-full gap-1 col-span-2 justify-end items-end">
          <input
            type="text"
            className="p-2 border border-gray-200 h-12 w-full rounded-xl outline-none text-lg text-gray-500"
            placeholder="Pesquisar..."
          />
          <button className="w-32 h-12 bg-blue-500 hover:shadow-lg shadow-none hover:shadow-blue-400 transition-all duration-500 flex items-center justify-center rounded-md">
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

      <h3 className="text-2xl text-gray-600 mt-2 font-semibold">Filtros</h3>
      <div className="grid grid-cols-2 xl:grid-cols-8 gap-4">
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
      <h3 className="text-xl text-gray-600 mt-2 font-medium">Animais</h3>
      <div className="overflow-y-auto overflow-x-hidden bg-scroll scroll-smooth">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 2xl:grid-cols-4 gap-4 py-4 mr-8">
          {animais.map((animal) => (
            <Card
              key={animal.title}
              image={animal.image}
              title={animal.title}
              description={animal.description}
              status={animal.status}
              price={animal.price}
            />
          ))}
        </div>
      </div>
    </div>
  );
}
