"use client"

import React, { useEffect, useState } from "react"
import { motion } from "framer-motion"

const TransparentVideo: React.FC = () => {
  const [showText, setShowText] = useState(false)

  // Delay text animation to match smoke timing (~6 seconds)
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowText(true)
    }, 6000)

    return () => clearTimeout(timer)
  }, [])

  // Container animation (stagger effect for letters)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.3 },
    },
  }

  // Letter animation (fade-in effect)
  const letterVariants = {
    hidden: { opacity: 0, y: 50, scale: 0.9, filter: "blur(5px)" },
    visible: {
      opacity: 1,
      y: 0,
      scale: 1,
      filter: "blur(0px)",
      transition: { duration: 0.6, ease: "easeOut" },
    },
  }

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      {/* Transparent Video */}
      <video
        src="/girl_smoke.webm"
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      />

      {/* Animated Text with Correct Font and Spacing */}
      {showText && (
        <motion.h1
          className="absolute z-10 text-white text-[20vw] md:text-[5vw] font-bold tracking-normal flex gap-x-6 font-genty"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {"Phuff".split("").map((letter, index) => (
            <motion.span key={index} variants={letterVariants} className="inline-block">
              {letter}
            </motion.span>
          ))}
        </motion.h1>
      )}
    </div>
  )
}

export default TransparentVideo
