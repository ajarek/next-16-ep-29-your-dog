import Bestseller from "@/components/Bestseller";
import Categories from "@/components/Categories";
import Hero from "@/components/Hero";
import Testimonials from "@/components/Testimonials";
import WhyUs from "@/components/WhyUs";


export default function Home() {
  return (
    <div className='min-h-screen flex flex-col items-center justify-start  '>
     <Hero />
     <Categories />
     <Bestseller />
     <WhyUs />
     <Testimonials />
    </div>
  )
}
