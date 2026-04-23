import {
  Card,
  CardContent,
} from "@/components/ui/card"
import { testimonials } from "@/data/testimonials"
import { Star } from "lucide-react"

const Testimonials = () => {
  return (
    <section className='w-full flex flex-col items-center justify-start py-16 px-4 md:px-8 gap-12'>
      <div className="w-full flex flex-col items-center justify-center gap-3">
        <h2 className="w-full text-center text-3xl md:text-4xl font-bold">Opinie Naszych Klientów</h2>
        <p className="text-center text-base md:text-lg italic text-muted-foreground">To, co mówią o nas inni właściciele czworonogów</p>
      </div>
      <div className='w-full max-w-5xl grid grid-cols-1 md:grid-cols-2 gap-8'>
        {testimonials.map((testimonial) => (
          <Card key={testimonial.id} className='rounded-[2.5rem] p-6 md:p-10 relative overflow-hidden bg-card border-none shadow-md'>
            {/* The background watermark quote "99" */}
            <div className="absolute top-2 right-6 text-8xl font-serif text-[#e5e0d3] italic select-none pointer-events-none">
              99
            </div>
            
            <CardContent className="flex flex-col items-start gap-6 relative z-10 p-0">
               {/* 5 stars */}
               <div className="flex text-[#8c6733] gap-1">
                 {[...Array(testimonial.rating)].map((_, i) => (
                   <Star key={i} fill="currentColor" className="w-5 h-5 md:w-6 md:h-6 text-[#9a7036] border-none outline-none stroke-transparent" />
                 ))}
               </div>
               
               {/* Testimonial text */}
               <p className="text-base md:text-lg italic leading-relaxed text-foreground/90">
                 "{testimonial.text}"
               </p>
               
               {/* User Avatar and Info */}
               <div className="flex items-center gap-4 mt-2">
                 <div className={`w-12 h-12 rounded-full ${testimonial.avatarColor}`} />
                 <div className="flex flex-col">
                   <span className="font-bold text-primary">{testimonial.name}</span>
                   <span className="text-sm text-muted-foreground">{testimonial.role}</span>
                 </div>
               </div>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default Testimonials;
