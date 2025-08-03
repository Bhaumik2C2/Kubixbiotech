'use client'

import { Button } from '@/components/ui/button'
import { motion } from 'framer-motion'

export default function Hero() {
  return (
    <section
      id="home"
      className="h-screen flex flex-col items-center justify-center text-center bg-gradient-to-b from-white to-slate-100 px-4"
    >
      <motion.h1
        className="text-5xl md:text-6xl font-bold text-indigo-700"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Welcome to NovaBiotech
      </motion.h1>

      <p className="mt-4 text-lg md:text-xl text-slate-600 max-w-xl">
        Innovating the future of biotechnology through science, ethics, and sustainability.
      </p>

      <Button className="mt-6" size="lg">
        Explore Our Products
      </Button>
    </section>
  )
}
