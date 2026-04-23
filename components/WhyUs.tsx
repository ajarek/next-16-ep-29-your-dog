import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { whyUs } from "@/data/why-us"

const WhyUs = () => {
  return (
    <section className='w-full   flex flex-col items-start justify-start p-4 md:p-8 gap-8'>
        <div className="w-full flex flex-col items-center justify-center gap-4">
            <h2 className="w-full text-center text-3xl font-bold underline underline-offset-4 ">Dlaczego My?</h2>
        </div>
      <div className='w-full grid grid-cols-1 sm:grid-cols-3 gap-8'>
        {whyUs.map((product) => (
          <Card key={product.id} className='h-64 rounded-xl p-4'>
            <CardHeader className='flex items-center justify-center'>
                <div className="bg-primary text-primary-foreground p-4 rounded-full">
                    {product.icon}
                </div>
            </CardHeader>
            <CardContent className="flex flex-col items-center justify-center">
              <CardTitle className='text-xl font-bold'>
                {product.name}
              </CardTitle>
              <CardDescription className="text-center text-lg">{product.description}</CardDescription>
            </CardContent>
          </Card>
        ))}
      </div>
    </section>
  )
}

export default WhyUs
