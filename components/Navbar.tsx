"use client"
import { ModeToggle } from "./ModeToggle"
import Link from "next/link"
import { SheetNav } from "./SheetNav"
import { Dog, ShoppingCart} from "lucide-react"
import { cn } from "@/lib/utils"
import { usePathname } from "next/navigation"

import { navLinks } from "@/data/nav-links"
import { useCartStore } from "@/store/cartStore"
const Navbar = () => {
  const pathname = usePathname()
  const cartItems = useCartStore((state) => state.items)
  const lengthItems = cartItems.reduce((acc, item) => acc + item.quantity, 0)
  return (
    <div className='fixed top-0 z-50 h-16 bg-background/50 backdrop-blur-md w-full max-w-8xl mx-auto   flex justify-between items-center px-4'>
      <Link href='/' className='w-full max-w-50 flex items-center gap-2 '>
        
        <h1 className='text-xl md:text-2xl font-bold '>🐩 Pet Shop</h1>
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
      <div className=' flex items-center gap-8 '>
        <Link href='/cart' className='relative flex items-center gap-2'>
          <ShoppingCart className=' size-8' />
          <span className='absolute -top-2 -right-2 bg-secondary text-secondary-foreground rounded-full px-2 py-1 text-xs'>
            {lengthItems}
          </span>
        </Link>

        <SheetNav />
        <ModeToggle />
      </div>
    </div>
  )
}

export default Navbar
