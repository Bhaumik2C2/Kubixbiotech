'use client'

import Image from 'next/image'
import Link from 'next/link'

export function Navbar() {
  return (
    <header className="fixed top-0 z-50 w-full bg-white shadow-md">
      <nav className="mx-auto max-w-7xl px-6 py-4 flex items-center justify-between">
        {/* Logo & Brand */}
        <div className="flex items-center space-x-3">
          <Image src="/logo.jpg" alt="Logo" width={36} height={36} />
          <span className="text-xl font-bold text-slate-800">NovaBiotech</span>
        </div>

        {/* Navigation */}
        <div className="space-x-6 hidden md:flex">
          {['home', 'about', 'products', 'contact'].map((section) => (
            <a
              key={section}
              href={`#${section}`}
              className="text-slate-700 hover:text-blue-600 transition-colors font-medium"
            >
              {section.charAt(0).toUpperCase() + section.slice(1)}
            </a>
          ))}
        </div>
      </nav>
    </header>
  )
}
