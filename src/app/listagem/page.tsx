"use client";
import Card from "@/components/Card/page";
import Header from "@/components/header/page";
import { Animais } from "@/http/json/animais";
import Image from "next/image";
import { useState } from "react";

export default function Listagem() {
  const [animais, setAnimais] = useState(Animais);
  return (
    <div className="w-full h-screen flex flex-col overflow-hidden p-8 gap-4">
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
          className="w-full h-full rounded-lg shadow-lg z-10 border"
          src="https://catland.org.br/wp-content/uploads/2023/04/banner-transparencia.png"
          alt=""
        />
      </header>
      <h3 className="text-3xl text-gray-700 py-6 font-semibold items-center">
        Listagem ✨
      </h3>
      <div className="flex flex-col w-full rounded-md">
        <div className="w-full h-14 bg-gray-200 flex items-center px-4 gap-1">
          <p className="text-base font-semibold text-gray-600">
            Todos os animais
          </p>
          <span className="text-base text-gray-400 font-medium">200</span>
        </div>
        <table className="table-auto rounded-md w-full">
          <thead className="h-11 bg-gray-100 text-gray-500 border text-sm">
            <tr>
              <th className="text-left pl-4 font-medium w-12 items-center justify-center ">
                <input type="checkbox" />
              </th>
              <th className="text-left pl-2 font-semibold">Nome</th>
              <th className="text-left pl-2 font-semibold">Descrição</th>
              <th className="text-left pl-2 font-semibold">Price</th>
              <th className="text-left pl-2 font-semibold">Status</th>
            </tr>
          </thead>
          <tbody className="bg-gray-100 border">
            {animais.map((animal) => (
              <tr
                key={animal.title}
                className="h-20 text-sm text-gray-500 border-b"
              >
                <td className="text-left pl-4 font-medium w-12 items-center justify-center">
                  <input type="checkbox" />
                </td>
                <td className="text-left pl-2 font-medium text-sm text-gray-800 items-center w-36">
                  <div className="flex items-center gap-2">
                    <Image
                      width={100}
                      height={100}
                      src={animal.image}
                      className="w-8 h-8 bg-gray-300 rounded-full"
                      alt=""
                    />
                    {animal.title}
                  </div>
                </td>
                <td className="text-left pl-2 font-light max-w-md">
                  {animal.description}
                </td>
                <td className="text-left pl-2 font-semibold text-blue-400">
                  R$ {animal.price}
                </td>
                <td className="text-left font-medium w-40">
                  <span
                    className={
                      animal.status === "Macho"
                        ? "bg-green-100 py-1 px-4 rounded-xl text-green-500"
                        : "bg-red-100 py-1 px-4 rounded-xl text-red-400"
                    }
                  >
                    {animal.status}
                  </span>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
