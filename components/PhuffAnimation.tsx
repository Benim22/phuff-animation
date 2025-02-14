"use client"

import type React from "react"
import { useEffect, useRef } from "react"
import { motion } from "framer-motion"

const PhuffAnimation: React.FC = () => {
  const videoRef = useRef<HTMLVideoElement>(null)

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.play()
    }
  }, [])

  // Parent container animation (staggered children effect)
  const containerVariants = {
    hidden: {},
    visible: {
      transition: { staggerChildren: 0.5 }, // Slower appearance between each letter
    },
  }

  // Animation for individual letters (slower motion)
  const letterVariants = {
    hidden: { opacity: 0, rotateY: 90, filter: "blur(15px)", y: 50 },
    visible: { 
      opacity: 1, 
      rotateY: 0, 
      filter: "blur(0px)", 
      y: 0,
      transition: { duration: 1.2, ease: "easeOut" } // Slower fade-in effect
    },
  }

  return (
    <div className="relative w-full h-screen flex justify-center items-center bg-black overflow-hidden">
      {/* Background Video */}
      <video
        ref={videoRef}
        className="absolute inset-0 w-full h-full object-cover"
        src="/smoke.mp4"
        loop
        muted
        playsInline
      />

      {/* Animated Phuff Text (Slow Reveal) */}
      <motion.h1
        className="relative z-10 text-white text-[20vw] md:text-[7vw] font-bold tracking-wide flex gap-2 font-genty"
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {"Phuff".split("").map((letter, index) => (
          <motion.span 
            key={index} 
            variants={letterVariants} 
            className="inline-block"
          >
            {letter}
          </motion.span>
        ))}
      </motion.h1>
    </div>
  )
}

export default PhuffAnimation
