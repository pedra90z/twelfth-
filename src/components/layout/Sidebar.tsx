import React from 'react'
import Image from "next/image"
import { NotePencilIcon, HouseIcon, CompassIcon, ShieldIcon, UserIcon, ChatsIcon, GearIcon, UsersIcon, ChartBarIcon, CaretDownIcon } from "@phosphor-icons/react"

export default function Sidebar() {
  return (
    <div className="relative w-70 h-full bg-[#111111] pl-4 py-12">
          <Image
          src="/logo.png"
          alt="logo"
          width={148}
          height={42.75}
          />
          <button className="mt-14 flex gap-2 items-center bg-orange w-60 h-12 justify-center rounded-lg">
          <NotePencilIcon className="text-light" size={24} />
          <p className="font-bold text-light text-[18px] mr-3">Novo post</p>
          </button>
          <ul className="space-y-4 mt-10">
            <li className="px-2 py-2 flex items-center gap-3 text-light text-[18px] font-semibold cursor-pointer relative bg-light/5 rounded-lg">
              <HouseIcon size={24} />Página inicial
              <span className="absolute right-0 top-1/2 -translate-y-1/2 h-10.5 w-1 bg-light rounded"></span>
            </li>
            <li className="px-2 py-2 flex items-center gap-3 text-light text-[18px] font-medium cursor-pointer"><CompassIcon size={24} />Explorar</li>
            <li className="px-2 py-2 flex items-center gap-3 text-light text-[18px] font-medium cursor-pointer"><ShieldIcon size={24} />Seu time</li>
            <li className="px-2 py-2 flex items-center gap-3 text-light text-[18px] font-medium cursor-pointer"><UserIcon size={24} />Perfil</li>
            <li className="px-2 py-2 flex items-center gap-3 text-light text-[18px] font-medium justify-between cursor-pointer">
              <span className="flex items-center gap-3"><UsersIcon size={24} />Comunidades</span>
              <span className="bg-orange text-light rounded-full w-10 h-6 flex items-center justify-center text-sm font-semibold mr-2">99+</span>
            </li>
            <li className="px-2 py-2 flex items-center gap-3 text-light text-[18px] font-medium justify-between cursor-pointer">
              <span className="flex items-center gap-3"><ChatsIcon size={24} />Mensagens</span>
              <span className="bg-orange text-light rounded-full w-10 h-6 flex items-center justify-center text-sm font-semibold mr-2">7</span>
            </li>
            <li className="px-2 py-2 flex items-center gap-3 text-light text-[18px] font-medium cursor-pointer"><ChartBarIcon size={24} />Popular</li>
            <li className="px-2 py-2 flex items-center gap-3 text-light text-[18px] font-medium cursor-pointer"><GearIcon size={24} />Configurações</li>
          </ul>
          <div className="absolute bottom-6 w-full flex justify-between items-end px-2">
            <div className="flex items-center gap-4">
              <img src="https://i.pinimg.com/1200x/8b/83/a3/8b83a35e5f305f9d1b763e8e305d67c8.jpg" alt="User" className="rounded-lg size-10 object-cover" />
              <div className="flex flex-col">
                <span className="text-light text-[16px] font-bold truncate max-w-[120px]">Albana Swora</span>
                <span className="text-light text-[14px] font-normal opacity-70 truncate max-w-[120px]">@alswor</span>
              </div>
              <CaretDownIcon size={26} className="text-light ml-4 cursor-pointer"/>
            </div>
          </div>
        </div>
  )
}
