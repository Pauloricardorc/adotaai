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
import Link from "next/link";
import { useRouter, usePathname, useSearchParams } from "next/navigation";

export default function Sidebar() {
  const MENU = [
    {
      name: "Inicio",
      rota: "/inicio",
      icon: <House size={20} weight="fill" />,
    },
    {
      name: "Cadastro",
      rota: "/cadastro",
      icon: <ReadCvLogo size={20} weight="fill" />,
    },
    {
      name: "Listagem",
      rota: "/listagem",
      icon: <UserList size={20} weight="fill" />,
    },
    {
      name: "Perfil",
      rota: "/perfil",
      icon: <IdentificationBadge size={20} weight="fill" />,
    },
    {
      name: "Configuração",
      rota: "/configuracao",
      icon: <GearSix size={20} weight="fill" />,
    },
  ];
  const pathname = usePathname();

  return (
    <div
      className="h-screen shadow-lg bg-slate-100 
      w-[350px] flex justify-between flex-col p-8"
    >
      <div className="flex flex-col gap-2">
        <div
          className="flex items-center justify-start 
        border-b-[1px] border-slate-100 gap-2 py-4"
        >
          <BracketsCurly size={32} className="text-blue-800" weight="duotone" />
          <p className="text-gray-700 text-lg items-center flex gap-1">
            Adot<span className="text-blue-800 font-semibold">Ai</span>
          </p>
        </div>
        <ul className="flex flex-col gap-2 mt-4 transition duration-500">
          {MENU.map((menu) => (
            <Link key={menu.name} href={menu.rota}>
              <div
                className={
                  menu.rota !== pathname
                    ? "flex font-light items-center gap-4 text-gray-500 hover:bg-slate-300 hover:px-6 rounded-md p-3 cursor-pointer transition-all duration-200 hover:shadow-shadow-button hover:shadow-gray-300"
                    : "flex font-light items-center gap-4 text-gray-200 bg-blue-400 px-6 rounded-md p-3 cursor-pointer transition-all shadow-shadow-button shadow-blue-400 duration-300"
                }
              >
                <span className="rounded-full">{menu.icon}</span>
                <li>{menu.name}</li>
              </div>
            </Link>
          ))}
        </ul>
      </div>
      <div className="flex items-center justify-center pb-4">
        <button className="flex font-light gap-4 bg-slate-100 w-full rounded-xl p-3 text-gray-600 text-base active:bg-slate-100 active:shadow-2xl active:shadow-slate-400 active:text-gray-500 transition-all duration-500">
          <SignOut size={24} className="text-gray-500" weight="thin" />
          Sair
        </button>
      </div>
    </div>
  );
}
