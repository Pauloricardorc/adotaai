import { CardProps } from "@/@types/Card";
import Image from "next/image";

export default function Card({
  image,
  title,
  description,
  status,
  price,
}: CardProps) {
  return (
    <div className="w-full flex flex-col border border-gray-50 shadow-lg shadow-gray-200 overflow-hidden rounded-md transition-all duration-300">
      <div className="w-full bg-cover cursor-pointer hover:brightness-105 transition-all duration-300">
        <Image
          width={1200}
          height={1200}
          src={image}
          alt=""
          className="flex w-full h-52"
        />
      </div>
      <div className="flex flex-col p-4 gap-6">
        <div className="flex w-full justify-between">
          <div className="flex flex-col gap-1">
            <p className="text-xl font-semibold text-gray-700">{title}</p>
            <span className="text-xs font-medium text-gray-500 line-clamp-3 text-left leading-5">
              {description}
            </span>
          </div>
          <div className="text-xs p-2 h-5 items-center justify-center flex rounded-lg">
            <span
              className={
                status === "Macho"
                  ? "bg-green-100 py-1 px-4 rounded-xl text-green-500"
                  : "bg-red-100 py-1 px-4 rounded-xl text-red-400"
              }
            >
              {status}
            </span>
          </div>
        </div>
        <div className="flex justify-between items-center">
          <button className="w-36 h-11 bg-blue-500 text-gray-100 rounded-md items-center justify-center p-2">
            <p className="text-sm">Adotar agora</p>
          </button>
          <p className="text-xl font-semibold text-gray-800">R$ {price}</p>
        </div>
      </div>
    </div>
  );
}
