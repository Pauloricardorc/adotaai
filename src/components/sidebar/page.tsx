"use client";
import {
  BracketsCurly,
  GearSix,
  House,
  IdentificationBadge,
  ReadCvLogo,
  SignOut,
  UserList,
} from "@phosphor-icons/react";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Sidebar() {
  const MENU = [
    { name: "Inicio", icon: <House size={20} weight="fill" /> },
    { name: "Cadastro", icon: <ReadCvLogo size={20} weight="fill" /> },
    { name: "Listagem", icon: <UserList size={20} weight="fill" /> },
    { name: "Perfil", icon: <IdentificationBadge size={20} weight="fill" /> },
    { name: "Configurações", icon: <GearSix size={20} weight="fill" /> },
  ];
  const pathname = usePathname();

  console.log(pathname);

  return (
    <div
      className="h-[90vh] shadow-lg rounded-xl bg-gradient-radial-zinc 
      w-[380px] flex justify-between flex-col px-6"
    >
      <div className="flex flex-col gap-2">
        <div
          className="flex items-center justify-center 
        border-b-[1px] border-zinc-800 gap-2 py-4"
        >
          <BracketsCurly size={32} className="text-blue-800" weight="duotone" />
          <p className="text-gray-200 text-lg items-center flex gap-1">
            Adot<span className="text-blue-800 font-semibold">Ai</span>
          </p>
        </div>
        <ul className="flex flex-col gap-2 transition duration-300">
          {MENU.map((menu) => (
            <div
              key={menu.name}
              className="flex items-center gap-4 text-gray-400 
              hover:text-gray-200 hover:bg-zinc-700 active:bg-zinc-800 
              hover:px-6 rounded-md p-3 cursor-pointer transition-all 
              duration-200 hover:shadow-xl hover:shadow-zinc-900"
            >
              <span className="rounded-full">{menu.icon}</span>
              <li>{menu.name}</li>
            </div>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center pb-4">
        <button className="flex gap-4 bg-zinc-900 border border-zinc-800 w-full rounded-md p-3 text-gray-300 text-base active:bg-zinc-900 active:shadow-innerShadow active:shadow-zinc-950 active:text-gray-400 transition-all duration-300">
          <SignOut size={24} className="text-gray-300" weight="thin" />
          Sair
        </button>
      </div>
    </div>
  );
}
