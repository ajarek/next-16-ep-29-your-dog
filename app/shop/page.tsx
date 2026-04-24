"use client"

import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select"
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import {products} from "@/data/products"
import Image from "next/image"
import { Button } from "@/components/ui/button"
import { useState } from "react"

const ShopPage = () => {
  const [selectedProducts,setSelectedProducts] = useState(products)


  return (
    <div className='min-h-screen flex flex-col items-start justify-start px-4 md:px-8 py-20 gap-8'>
      <Breadcrumb>
        <BreadcrumbList className='text-sm uppercase tracking-wider'>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Strona główna</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbLink href='/shop'>Sklep</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Wszystkie produkty</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <h1 className='text-3xl tracking-wider'>Wszystkie produkty</h1>
      <div className='w-full grid grid-cols-1 md:grid-cols-[1fr_3fr] gap-4'>
        <div>
          <h2 className="font-semibold text-lg tracking-wider uppercase">Filtry</h2>
        </div>
        <div className='flex flex-col gap-4'>
          <div className="flex items-center gap-2 justify-end">
            <h2 className="font-semibold text-lg tracking-wider uppercase">Sortuj :</h2>
            <Select onValueChange={(value) => {
              if(value === "price-asc") {
                setSelectedProducts([...selectedProducts].sort((a, b) => a.price - b.price))
              }
              if(value === "price-desc") {
                setSelectedProducts([...selectedProducts].sort((a, b) => b.price - a.price))
              }
              if(value === "name-asc") {
                setSelectedProducts([...selectedProducts].sort((a, b) => a.name.localeCompare(b.name)))
              }
              if(value === "name-desc") {
                setSelectedProducts([...selectedProducts].sort((a, b) => b.name.localeCompare(a.name)))
              }
            }}>
              <SelectTrigger className="w-[180px]">
                <SelectValue placeholder="Najpopularniejsze" />
              </SelectTrigger>
              <SelectContent>
                <SelectGroup>
                  <SelectItem value="price-asc">Cena rosnąco</SelectItem>
                  <SelectItem value="price-desc">Cena malejąco</SelectItem>
                  <SelectItem value="name-asc">A-Z</SelectItem>
                  <SelectItem value="name-desc">Z-A</SelectItem>
                </SelectGroup>
              </SelectContent>
            </Select>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
             {selectedProducts
            
             .map((product) => (
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
        </div>
      </div>
    </div>
  )
}

export default ShopPage
