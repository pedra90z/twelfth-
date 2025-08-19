"use client"
import Sidebar from "@/components/layout/Sidebar"
import { DotsThreeIcon } from "@phosphor-icons/react"

export default function page() {
  return (
      <div className="h-screen flex gap-30">
        <Sidebar/>
        <div className="w-168 h-full border-x border-lines">
          <div className="relative flex gap-8 justify-center p-2">
            <p className="font-medium text-light text-xl cursor-pointer relative">
              Para você
              <span className="absolute left-0 -bottom-2.5 w-full h-0.5 bg-orange rounded"></span>
            </p>
            <p className="font-medium text-lines text-xl cursor-pointer">Seguindo</p>
          </div>
          <div className="w-full h-0.5 bg-lines"></div>
          <div className="flex gap-2 p-6 items-center justify-between">
            <div className="flex gap-2">
            <img className="size-10 rounded-lg object-cover" src="https://i.pinimg.com/1200x/34/2c/dd/342cdd100417965aed26a73a211bef4f.jpg"/>
            <div>
            <p className="text-light font-bold">Túlio Maravilha</p>
            <p className="text-light text-xs">@tulio</p>
            </div>
            </div>
            <div className="flex gap-2 items-center">
            <p className="text-light text-xs">6h</p>
            <DotsThreeIcon className="text-light" size={20}/>
            </div>

          </div>
        </div>
      </div>
  )
}