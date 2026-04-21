import { Button } from "@/components/ui/button"
import Image from "next/image"

const Hero = () => {
  return (
    <section className='w-full  relative h-[870px] flex items-center overflow-hidden '>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/home-hero.png'
            alt='Vercel logo'
            fill
            className='object-cover'
          />
          <div className='absolute inset-0 bg-linear-to-r from-foreground/40 to-transparent'></div>
        </div>

        <div className='max-w-2xl bg-background/20   backdrop-blur-md md:p-8 p-4 rounded-4xl border absolute left-8 bottom-1/2 translate-y-1/2 max-md:bottom-0 max-md:left-0 max-md:translate-y-0 max-md:rounded-none  max-md:border-none space-y-4 shadow-2xl shadow-primary/20'>
          <h1 className='text-2xl md:text-6xl max-md:text-center font-bold   leading-tight '>
            Wszystko, czego potrzebuje Twój pies, w jednym miejscu
          </h1>
          <p className='text-xl max-md:text-center  font-body '>
            Zadbaj o zdrowie i szczęście swojego pupila z wyselekcjonowanymi
            produktami klasy premium. Naturalne składniki, trwałe akcesoria.
          </p>
          <Button className='h-12 px-10 rounded-full text-lg cursor-pointer hover:bg-primary/80 hover:scale-105 transition-all duration-300 max-md:w-full'>Kup teraz</Button>
        </div>
      </section>
  )
}

export default Hero