import {
  Card,
  CardAction,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {products} from "@/data/products"
import Image from "next/image"
import { Button } from "./ui/button"

const Bestseller = () => {
  return (
    <section className='w-full   flex flex-col items-start justify-start p-4 md:p-8 gap-8'>
      <h2 className="w-full text-center text-3xl font-bold underline underline-offset-4 ">Nasze Bestsellery</h2>
      <div className="w-full grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {products.slice(0, 4).map((product) => (
          <Card key={product.id} className="rounded-xl">
  <CardHeader className="flex items-center justify-center">
    <Image src={product.image} alt={product.name} width={300} height={300} className="w-full h-full object-cover rounded-xl" />
  </CardHeader>
  <CardContent>
    <CardTitle className="text-xl font-bold">{product.name}</CardTitle>
    <CardDescription>{product.description}</CardDescription>
    <p className="text-xl font-bold">{product.price.toFixed(2)} zł</p>
  </CardContent>
  <CardFooter className="flex items-center justify-center bg-transparent">
   
     <Button  className="w-full text-xl rounded-full  h-12 cursor-pointer dark:bg-white/90 dark:text-primary hover:dark:bg-[#8C6733] hover:dark:text-white transition-all duration-300 hover:bg-transparent hover:border-2 hover:border-primary hover:text-primary ">Dodaj do koszyka</Button>
    
    
  </CardFooter>
</Card>
        ))}
      </div>
    </section>
  )
}

export default Bestseller