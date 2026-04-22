import Bestseller from "@/components/Bestseller";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";


export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start  '>
     <Hero />
     <Categories />
     <Bestseller />
    </div>
  )
}
