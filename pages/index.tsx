import { Poppins } from 'next/font/google'
import Navbar from '@/src/home/components/Navbar'
import Hero from '@/src/home/components/sections/Hero'
import HowToOrder from '@/src/home/components/sections/HowToOrder'
import Menu from '@/src/home/components/sections/Menu'

const PoppinsFont = Poppins({
  subsets: ['devanagari', 'latin-ext', 'latin'],
  weight: ["100", "200", "300", "400", "500", "600", "700", "800", "900"]
})

export default function Home() {
  return (
    <div className={PoppinsFont.className}>
      <div className='bg-hero-gradient'>
        <Navbar />
        <Hero />
        <HowToOrder />
        <Menu />
      </div>
    </div>
  )
}
