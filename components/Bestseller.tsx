"use client"

import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { products } from "@/data/products"
import Image from "next/image"
import { Button } from "./ui/button"
import { toast } from "sonner"
import { useCartStore } from "@/store/cartStore"
import { CartItem, Product } from "@/types/typeProduct"
import { useRouter } from "next/navigation"

const Bestseller = () => {
  const router = useRouter()
  const { addItemToCart, items } = useCartStore()
  const handleAddToCart = (product: Product & CartItem) => {
    if (items.some((i) => i.id === product.id)) {
      toast("Produkt jest już w koszyku", {
        className: "bg-red-600 text-white text-xl",
        duration: 2000,
        position: "top-center",
        style: {
          backgroundColor: "#ef4444",
          color: "white",
        },
      })
      router.push("/")
      return
    }
    addItemToCart({
      ...product,
      quantity: 1,
    })
    toast.success("Produkt został dodany do koszyka")
    setTimeout(() => {
      router.push("/shop")
    }, 1000)
  }
  return (
    <section className='w-full   flex flex-col items-start justify-start p-4 md:p-8 gap-8'>
      <h2 className='w-full text-center text-3xl font-bold underline underline-offset-4 '>
        Nasze Bestsellery
      </h2>
      <div className='w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8'>
        {products.slice(0, 4).map((product) => (
          <Card key={product.id} className='rounded-xl'>
            <CardHeader className='flex items-center justify-center'>
              <Image
                src={product.image}
                alt={product.name}
                width={300}
                height={300}
                className='w-full h-full object-cover rounded-xl'
              />
            </CardHeader>
            <CardContent>
              <CardTitle className='text-xl font-bold'>
                {product.name}
              </CardTitle>
              <CardDescription>{product.description}</CardDescription>
              <p className='text-xl font-bold'>{product.price.toFixed(2)} zł</p>
            </CardContent>
            <CardFooter className='flex items-center justify-center bg-transparent'>
              <Button
                className='w-full text-xl rounded-full  h-12 cursor-pointer dark:bg-white/90 dark:text-primary hover:dark:bg-[#8C6733] hover:dark:text-white transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary '
                onClick={() => handleAddToCart(product)}
              >
                Dodaj do koszyka
              </Button>
            </CardFooter>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Bestseller
