'use client'
import Link from "next/link"
import { Button } from "@/components/ui/button"
import { Input } from "@/components/ui/input"
import { Camera, Medal } from "lucide-react"
import { toast } from "sonner"

export function Footer() {
  const handleNewsletterSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault()
    const email = (e.currentTarget.elements[0] as HTMLInputElement).value
    toast.success('Dziękujemy za zapisanie się do newslettera!', {
      description: email,
    })
    e.currentTarget.reset()
  }
  return (
    <footer className='bg-[#412E27] text-white pt-10 pb-6 font-sans'>
      <div className='container mx-auto px-4 md:px-8'>
        <div className='bg-[#173809] rounded-4xl p-8 md:p-12 flex flex-col md:flex-row items-center justify-between gap-6 mb-16 shadow-lg'>
          <div className='max-w-md'>
            <h2 className='text-3xl md:text-4xl font-serif font-bold text-white mb-2'>
              Dołącz do stada
            </h2>
            <p className='text-[#a5b4a0] text-sm md:text-base'>
              Zapisz się na newsletter i odbierz -10% na pierwsze zakupy.
            </p>
          </div>
          <form className='flex w-full md:w-auto items-center gap-4' onSubmit={handleNewsletterSubmit}>
            <Input
              type='email'
              placeholder='Twój adres e-mail'
              className='bg-[#2a4a1c] border-none text-white placeholder:text-[#a5b4a0] rounded-full px-6 h-12 w-full md:w-72 focus-visible:ring-1 focus-visible:ring-[#8C6733]'
            />
            <Button type='submit' className='bg-[#8C6733] hover:bg-[#72542a] text-white rounded-full px-8 h-12 font-bold transition-colors'>
              Zapisz mnie
            </Button>
          </form>
        </div>

        <div className='grid grid-cols-1 md:grid-cols-3 gap-12 mb-16'>
          <div className='space-y-6'>
            <h3 className='font-serif text-2xl font-bold'>The Premium Pet</h3>
            <p className='text-[#d4ccc8] text-sm leading-relaxed max-w-sm'>
              Twój partner w dbaniu o dobrostan zwierząt. Wierzymy, że każdy
              pies zasługuje na to, co najlepsze, dlatego selekcjonujemy
              produkty z najwyższą starannością.
            </p>
          </div>

          <div className='space-y-6 md:pl-12'>
            <h4 className='text-xs font-bold tracking-widest text-white uppercase'>
              Menu
            </h4>
            <nav className='flex flex-col space-y-4'>
              <Link
                href='/regulamin'
                className='text-[#d4ccc8] text-sm hover:text-white transition-colors uppercase tracking-wider'
              >
                Regulamin
              </Link>
              <Link
                href='/polityka-prywatnosci'
                className='text-[#d4ccc8] text-sm hover:text-white transition-colors uppercase tracking-wider'
              >
                Polityka prywatności
              </Link>
              <Link
                href='/dostawa'
                className='text-[#d4ccc8] text-sm hover:text-white transition-colors uppercase tracking-wider'
              >
                Dostawa
              </Link>
              <Link
                href='/zwroty'
                className='text-[#d4ccc8] text-sm hover:text-white transition-colors uppercase tracking-wider'
              >
                Zwroty
              </Link>
            </nav>
          </div>

          <div className='space-y-6'>
            <h4 className='text-xs font-bold tracking-widest text-white uppercase'>
              Kontakt
            </h4>
            <div className='flex flex-col space-y-4 text-[#d4ccc8] text-sm tracking-wider'>
              <Link
                href='mailto:kontakt@premiumpet.pl'
                className='hover:text-white transition-colors uppercase'
              >
                KONTAKT@PREMIUMPET.PL
              </Link>
              <Link
                href='tel:+48573219230'
                className='hover:text-white transition-colors'
              >
                +48 573 219 230
              </Link>
              <div className='flex items-center gap-4 pt-2'>
                <Link
                  href='#'
                  className='hover:text-white text-[#d4ccc8] transition-colors'
                  aria-label='Medal'
                >
                  <Medal size={24} />
                </Link>
                <Link
                  href='https://www.instagram.com/'
                  target='_blank'
                  className='hover:text-white text-[#d4ccc8] transition-colors'
                  aria-label='Instagram'
                >
                  <Camera size={24} />
                </Link>
              </div>
            </div>
          </div>
        </div>

        <div className='border-t border-[#624b42] pt-8 flex flex-col items-center justify-center text-center'>
          <p className='text-[#a89b96] text-xs tracking-widest uppercase'>
            © 2026 THE PREMIUM PET SHOP. WSZELKIE PRAWA ZASTRZEŻONE.
          </p>
        </div>
      </div>
    </footer>
  )
}
