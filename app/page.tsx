import { Button } from "@/components/ui/button"
import Image from "next/image"

export default function Home() {
  return (
    <div className='flex flex-col items-center justify-start h-screen p-4'>
      <section className='w-full  relative h-[870px] flex items-center overflow-hidden bg-amber-500'>
        <div className='absolute inset-0 z-0'>
          <Image
            src='/images/home-hero.png'
            alt='Vercel logo'
            fill
            className="object-cover"
            
          />
          <div className='absolute inset-0 bg-linear-to-r from-foreground/60 to-transparent'></div>
        </div>
        <div className='relative z-10  px-8'>
          <div className='max-w-xl bg-background/50  backdrop-blur-md p-12 rounded-xl border '>
            <h1 className='text-2xl md:text-4xl font-bold  mb-6 leading-tight'>
              Wszystko, czego potrzebuje Twój pies, w jednym miejscu
            </h1>
            <p className='text-xl  mb-10 font-body'>
              Zadbaj o zdrowie i szczęście swojego pupila z wyselekcjonowanymi
              produktami klasy premium. Naturalne składniki, trwałe akcesoria.
            </p>
            <Button className='h-12 px-10 rounded-full'>
              Kup teraz
            </Button>
          </div>
        </div>
      </section>
    </div>
  )
}
