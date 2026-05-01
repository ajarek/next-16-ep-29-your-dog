"use client"
import { useState, useEffect } from "react"
import { ModeToggle } from "./ModeToggle"
import Link from "next/link"
import { SheetNav } from "./SheetNav"
import { Show, SignInButton, SignUpButton, UserButton } from "@clerk/nextjs"
import { Dog, LogIn, ShoppingCart, UserPlus} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

import { navLinks } from "@/data/nav-links"
import { useCartStore } from "@/store/cartStore"
import { Button } from "./ui/button"
const Navbar = () => {
  const [isMounted, setIsMounted] = useState(false)
  const pathname = usePathname()
  const cartItems = useCartStore((state) => state.items)
  const lengthItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])

  return (
    <div className='fixed top-0 z-50 h-16 bg-background/50 backdrop-blur-md w-full max-w-8xl mx-auto   flex justify-between items-center px-4'>
      <Link href='/' className='w-full max-w-50 flex items-center gap-2 '>
        
        <h1 className='text-lg md:text-2xl font-bold '>🐩 Pet Shop</h1>
      </Link>

      <div className='w-1/2 flex items-center gap-4 max-lg:hidden '>
        {navLinks.map((link) => (
          <Link
            key={link.href}
            href={link.href}
            className={cn(
              "flex items-center gap-2 hover: transition-colors delay-300 rounded-md p-2",
              pathname === link.href && "underline underline-offset-8",
            )}
          >
            {link.icon}
            <span className='text-sm font-medium uppercase'>{link.label}</span>
          </Link>
        ))}
      </div>
      <div className=' flex items-center gap-4 md:gap-8 '>
        <Link href='/cart' className='relative flex items-center gap-2'>
          <ShoppingCart className=' size-8' />
          {isMounted && (
            <span className='absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs'>
              {lengthItems}
            </span>
          )}
        </Link>
       <Show when="signed-out">
              <SignInButton>
                <Button className="rounded-full bg-secondary text-secondary-foreground hover:bg-secondary/80  h-10 w-10 cursor-pointer">
                 <LogIn className=" size-6"/> 
                </Button>
              </SignInButton>
              <SignUpButton>
                <Button className="rounded-full  text-secondary-foreground hover:bg-primary/50  h-10 w-10 cursor-pointer">
                  <UserPlus className=" size-6"/> 
                </Button>
              </SignUpButton>
            </Show>
            <Show when="signed-in">
              <UserButton />
            </Show>

        <SheetNav />
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
