"use client"
import { useSyncExternalStore } from "react"
import { ModeToggle } from "./ModeToggle"
import Link from "next/link"
import { SheetNav } from "./SheetNav"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { LogIn, ShoppingCart, UserPlus } from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

import { navLinks } from "@/data/nav-links"
import { useCartStore } from "@/store/cartStore"
import { Button } from "./ui/button"
const emptySubscribe = () => () => {}

const Navbar = () => {
  const isMounted = useSyncExternalStore(
    emptySubscribe,
    () => true,
    () => false,
  )
  const pathname = usePathname()
  const cartItems = useCartStore((state) => state.items)
  const lengthItems = cartItems.reduce(
    (acc, item) => acc + (item.quantity ?? 1),
    0,
  )

  return (
    <div className='fixed top-0 z-50 h-16 bg-background/50 backdrop-blur-md w-full border-b flex justify-between items-center px-4 md:px-8'>
      <Link
        href='/'
        className='flex items-center gap-2 group'
        aria-label='Strona główna'
      >
        <span className='text-2xl group-hover:scale-110 transition-transform duration-300'>
          🐩
        </span>
        <h1 className='text-lg md:text-2xl font-bold tracking-tight'>
          Pet Shop
        </h1>
      </Link>

      <div className='hidden lg:flex items-center gap-2'>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-2 hover:bg-primary/10 transition-colors rounded-md px-3 py-2 text-sm font-medium uppercase tracking-wide",
              pathname === link.href &&
                "text-secondary border-b-2 border-secondary rounded-none",
            )}
          >
            {link.icon}
            <span>{link.label}</span>
          </Link>
        ))}
      </div>

      <div className='flex items-center gap-3 md:gap-6'>
        <Link
          href='/cart'
          className='relative p-2 hover:bg-primary/10 rounded-full transition-colors'
          aria-label={`Koszyk (${lengthItems} produktów)`}
        >
          <ShoppingCart className='size-6 md:size-7' />
          {isMounted && lengthItems > 0 && (
            <span className='absolute top-0 right-0 bg-primary text-primary-foreground rounded-full min-w-[20px] h-5 flex items-center justify-center text-[10px] font-bold px-1'>
              {lengthItems}
            </span>
          )}
        </Link>

        <div className='flex items-center gap-2'>
          <Show when='signed-out'>
            <SignInButton mode='modal'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full'
                aria-label='Zaloguj się'
              >
                <LogIn className='size-5 md:size-6' />
              </Button>
            </SignInButton>
            <SignUpButton mode='modal'>
              <Button
                variant='ghost'
                size='icon'
                className='rounded-full'
                aria-label='Zarejestruj się'
              >
                <UserPlus className='size-5 md:size-6' />
              </Button>
            </SignUpButton>
          </Show>
          <Show when='signed-in'>
            <UserButton />
          </Show>
        </div>

        <div className='flex items-center gap-2 border-l pl-2 md:pl-4 ml-2'>
          <SheetNav />
          <ModeToggle />
        </div>
      </div>
    </div>
  )
}

export default Navbar
