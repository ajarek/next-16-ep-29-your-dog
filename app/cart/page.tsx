"use client"
import { useState, useEffect } from "react"
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  ArrowRight,
  Leaf,
  RefreshCcw,
  ShieldCheck,
  Truck,
  ShoppingBag,
} from "lucide-react"
import { Progress } from "@/components/ui/progress"
import { Input } from "@/components/ui/input"
import { Button } from "@/components/ui/button"
import { Card, CardContent, CardHeader } from "@/components/ui/card"
import Image from "next/image"
import { useCartStore } from "@/store/cartStore"
import Link from "next/link"
const rabat = 0

const Cart = () => {
  const [isMounted, setIsMounted] = useState(false)
  const { items, increment, decrement, removeItemFromCart, total } =
    useCartStore()

  useEffect(() => {
    const timer = setTimeout(() => setIsMounted(true), 0)
    return () => clearTimeout(timer)
  }, [])
  if (!isMounted) return null

  return (
    <div className='min-h-screen flex flex-col items-start justify-start px-4 md:px-8 py-20 gap-8'>
      <Breadcrumb>
        <BreadcrumbList className='text-sm uppercase tracking-wider'>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Strona główna</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Koszyk</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>

      {items.length === 0 ? (
        <div className='w-full flex flex-col items-center justify-center py-20 gap-6 border-2 border-dashed rounded-lg'>
          <ShoppingBag className='size-20 text-muted-foreground' />
          <div className='flex flex-col items-center gap-2'>
            <h2 className='text-2xl font-bold tracking-tight'>
              Twój koszyk jest pusty
            </h2>
            <p className='text-muted-foreground text-center max-w-[400px]'>
              Wygląda na to, że nie dodałeś jeszcze żadnych produktów do swojego
              koszyka.
            </p>
          </div>
          <Button asChild size='lg' className='mt-2 cursor-pointer'>
            <Link href='/shop'>Wróć do sklepu</Link>
          </Button>
        </div>
      ) : (
        <div className='w-full grid grid-cols-1 md:grid-cols-[3fr_1fr] place-items-start gap-4'>
          <div className=' w-full flex flex-col items-start gap-4 rounded-lg border-2 p-4'>
            <div className='flex items-center gap-4'>
              <Truck className='size-10' />
              <div className='flex flex-col items-start gap-2'>
                <h2 className='text-lg font-semibold'>
                  Darmowa dostawa od 200zł
                </h2>
                <p>Brakuje Ci tylko 42,00 zł do bezpłatnej przesyłki.</p>
                <Progress value={50} className='mt-2 h-2 bg-red-300' />
              </div>
            </div>
            <div className='w-full flex flex-col flex-wrap items-start gap-4'>
              {items.map((product) => (
                <div
                  key={product.id}
                  className=' w-full flex items-center justify-between gap-4'
                >
                  <div className='relative flex items-center gap-4'>
                    <Image
                      className=' object-cover'
                      src={product.image}
                      alt={product.name}
                      width={100}
                      height={100}
                    />
                    <div className='flex flex-col items-start gap-2'>
                      <h2 className='text-lg font-semibold'>{product.name}</h2>
                      <p>{product.description}</p>
                      <div className='flex items-center gap-4'>
                        <Button
                          disabled={product.quantity === 1}
                          onClick={() => decrement(product.id)}
                          className=' cursor-pointer'
                        >
                          -
                        </Button>
                        <p className='text-lg font-semibold'>
                          {product.quantity}
                        </p>
                        <Button
                          onClick={() => increment(product.id)}
                          className=' cursor-pointer'
                        >
                          +
                        </Button>
                      </div>
                    </div>
                  </div>
                  <div className='flex flex-col items-center gap-4'>
                    <p className='text-xl font-semibold'>
                      {(product.price * product.quantity).toFixed(2)} zł
                    </p>

                    <Button
                      className=' cursor-pointer border-2 border-red-500 text-red-500 hover:bg-red-500 hover:text-white'
                      onClick={() => removeItemFromCart(product.id)}
                    >
                      Usuń
                    </Button>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div className=' w-full flex flex-col items-start gap-4 rounded-lg border-2 p-4'>
            <h2 className='text-lg font-semibold'>Podsumowanie</h2>
            <div className='w-full flex flex-col gap-4'>
              <h3 className='text-md font-semibold uppercase tracking-wider'>
                Kod rabatowy
              </h3>
              <div className='w-full flex items-center '>
                <Input
                  type='text'
                  placeholder='Kod rabatowy'
                  className=' h-12 text-xl rounded-none border-r-0'
                />
                <Button className=' h-12 text-lg cursor-pointer rounded-none'>
                  Zastosuj
                </Button>
              </div>
            </div>
            <div className='w-full flex flex-col gap-4'>
              <div className='w-full flex items-center justify-between'>
                <p>Suma Częściowa</p>
                <p className='text-lg font-semibold'>{total().toFixed(2)} zł</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <p>Rabat</p>
                <p>{rabat.toFixed(2)} zł</p>
              </div>
              <div className='w-full flex items-center justify-between'>
                <p className='uppercase tracking-wider'>Suma całkowita</p>
                <p className='text-xl font-bold'>
                  {(total() + rabat).toFixed(2)} zł
                </p>
              </div>
              <Button asChild className=' w-full h-12 text-lg cursor-pointer'>
                <Link href='/checkout'>
                  Przejdź do kasy <ArrowRight />
                </Link>
              </Button>
            </div>
            <div className='grid grid-cols-3 w-full gap-2'>
              <Card className=''>
                <CardHeader className='flex items-center justify-center'>
                  <ShieldCheck className='size-6' />
                </CardHeader>
                <CardContent>
                  <p className='w-full text-xs text-center uppercase'>
                    Bezpieczne płatności
                  </p>
                </CardContent>
              </Card>
              <Card className=''>
                <CardHeader className='flex items-center justify-center'>
                  <RefreshCcw className='size-6' />
                </CardHeader>
                <CardContent>
                  <p className='w-full text-xs text-center uppercase'>
                    30 dni na zwrot
                  </p>
                </CardContent>
              </Card>
              <Card className=''>
                <CardHeader className='flex items-center justify-center'>
                  <Leaf className='size-6' />
                </CardHeader>
                <CardContent>
                  <p className='w-full text-xs text-center uppercase'>
                    Eko dostawa
                  </p>
                </CardContent>
              </Card>
            </div>
          </div>
        </div>
      )}
    </div>
  )
}

export default Cart
