"use client"
import PhuffAnimation from "../components/PhuffAnimation"
import TransparentVideo from "@/components/TransparentVideo"
import ThinSmoke from "../components/thin-smoke"
import Vape from "@/components/vape"

export default function Home() {
  return (
    <div className="w-full h-screen">
      <PhuffAnimation />
      <TransparentVideo />
      <ThinSmoke />
      <Vape />
    </div>
  )
}

