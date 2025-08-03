import Hero from '@/components/sections/Hero'
import Mission from '@/components/sections/Mission'
import Products from '@/components/sections/Products'
import About from '@/components/sections/About'
import Contact from '@/components/sections/Contact'

export default function Home() {
  return (
    <main className="pt-24">
      <Hero />
      <Mission />
       <Products /> 
      <About /> 
       <Contact /> 
    </main>
  )
}
