'use client'

import Image from 'next/image'

const products = [
  {
    name: 'DNA Testing Kit',
    image: '/products/img1neer.jpg',
    description: 'Accurate home-based DNA testing kit.',
  },
  {
    name: 'Plant Biostimulant',
    image: '/products/img2neeer.jpg',
    description: 'Boost crop yield sustainably.',
  },
]

export default function Products() {
  return (
    <section id="products" className="py-20 px-6 bg-slate-50">
      <h2 className="text-4xl font-semibold text-center text-indigo-700 mb-10">Our Products</h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto">
        {products.map((product, i) => (
          <div key={i} className="bg-white shadow-md rounded-xl overflow-hidden">
            <Image
              src={product.image}
              alt={product.name}
              width={600}
              height={400}
              className="w-full h-64 object-cover"
            />
            <div className="p-6">
              <h3 className="text-2xl font-bold text-indigo-700">{product.name}</h3>
              <p className="text-slate-600 mt-2">{product.description}</p>
            </div>
          </div>
        ))}
      </div>
    </section>
  )
}
