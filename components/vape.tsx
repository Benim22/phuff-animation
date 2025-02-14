"use client"

import React from "react"

const Vape: React.FC = () => {
  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      {/* Vape Video */}
      <video
        src="/Vape.webm" // Ensure this file is inside `public/`
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />
    </div>
  )
}

export default Vape
