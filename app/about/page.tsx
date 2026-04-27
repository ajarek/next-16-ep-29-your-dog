import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card"
import { CheckCircle2Icon, Eye, Heart } from "lucide-react"
import Image from "next/image"

const AboutPage = () => {
  return (
    <div className='min-h-screen flex flex-col items-start justify-start px-4 md:px-8 py-20 gap-8'>
      <Breadcrumb>
        <BreadcrumbList className='text-sm uppercase tracking-wider'>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Strona główna</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>O nas</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full place-items-center gap-4'>
        <div className='relative w-full flex flex-col items-center gap-4'>
          <h1 className='text-6xl font-bold'>
            Z miłości do natury, <br></br>
            <span className='text-[#D6A71E]'>z pasji do zwierząt.</span>
          </h1>
          <p className='w-full md:max-w-xl text-xl '>
            Pet Shop to coś więcej niż sklep. To manifestacja szacunku do
            naszych czworonożnych towarzyszy, którzy każdego dnia uczą nas
            bezwarunkowej miłości.
          </p>
        </div>
        <div className='relative w-full'>
          <Image
            src='/images/about-us-0.png'
            alt=''
            width={480}
            height={480}
            className='object-cover rounded-4xl'
          />
          <div className='absolute -bottom-8 left-0 md:-left-8 w-40 h-40 rounded-3xl bg-primary flex items-center justify-center text-white font-medium text-center p-4'>
            &quot;Od 2018 roku w służbie psiej radości&quot;
          </div>
        </div>
      </div>
      <div className='grid grid-cols-1 md:grid-cols-2 w-full place-items-center gap-4 mt-16'>
        <div className='relative w-full flex flex-col items-start gap-4'>
          <p className='uppercase text-sm tracking-wider'>Nasza Historia</p>
          <h2 className='text-3xl font-bold'>Jak wszystko się zaczęło?</h2>
          <p className='w-full md:max-w-xl text-xl '>
            Historia Premium Pet zaczęła się w małym krakowskim mieszkaniu,
            gdzie nasz założyciel, szukając zdrowej alternatywy dla swojego
            labradora, odkrył, jak trudno jest znaleźć produkty naprawdę
            transparentne i naturalne.
          </p>
          <p className='w-full md:max-w-xl text-xl '>
            Z tej frustracji narodziła się misja: stworzenie sanktuarium, w
            którym każdy produkt jest starannie wyselekcjonowany, a jego skład
            nie budzi żadnych wątpliwości. Chcieliśmy połączyć naukowe podejście
            do żywienia z estetyką, która pasuje do nowoczesnego domu.
          </p>
        </div>
        <div className=' w-full grid grid-cols-1 md:grid-cols-2 gap-4 place-items-center'>
          <Image
            src='/images/about-us-1.png'
            alt=''
            width={240}
            height={240}
            className='object-cover rounded-4xl'
          />
          <Image
            src='/images/about-us-2.png'
            alt=''
            width={240}
            height={240}
            className='object-cover rounded-4xl'
          />
          <Image
            src='/images/about-us-3.png'
            alt=''
            width={240}
            height={240}
            className='object-cover rounded-4xl'
          />
          <Image
            src='/images/about-us-4.png'
            alt=''
            width={240}
            height={240}
            className='object-cover rounded-4xl'
          />
        </div>
      </div>
      <section className='w-full   flex flex-col items-start justify-start p-4 md:p-8 gap-8'>
        <h2 className='w-full text-center text-3xl font-bold underline underline-offset-4 '>
          Wartości, które nas prowadzą
        </h2>
        <div className='w-full grid grid-cols-1 md:grid-cols-3  gap-8'>
          <Card>
            <CardHeader className='w-full flex  items-center justify-center'>
              <CheckCircle2Icon className='text-amber-400 w-16 h-16' />
            </CardHeader>
            <CardContent>
              <CardTitle className='flex  items-center justify-center text-2xl'>
                Najwyższa Jakość
              </CardTitle>
              <CardDescription className='text-center text-xl p-4'>
                Współpracujemy wyłącznie z dostawcami, którzy podzielają nasz
                rygoryzm. Każdy produkt przechodzi wieloetapową weryfikację.
              </CardDescription>
            </CardContent>
          </Card>
          <Card className=''>
            <CardHeader className='w-full flex  items-center justify-center'>
              <Eye className='text-amber-400 w-16 h-16' />
            </CardHeader>
            <CardContent>
              <CardTitle className='flex  items-center justify-center text-2xl'>
                Transparentność
              </CardTitle>
              <CardDescription className='text-center text-xl p-4'>
                Nie ukrywamy niczego. Składy, pochodzenie składników i
                certyfikaty są u nas zawsze na pierwszym planie i łatwo
                dostępne.
              </CardDescription>
            </CardContent>
          </Card>
          <Card>
            <CardHeader className='w-full flex  items-center justify-center'>
              <Heart className='text-amber-400 w-16 h-16' />
            </CardHeader>
            <CardContent>
              <CardTitle className='flex  items-center justify-center text-2xl'>
                Czysta Pasja
              </CardTitle>
              <CardDescription className='text-center text-xl p-4'>
                Jesteśmy zespołem opiekunów psów i kotów. Rozumiemy Twoje
                potrzeby, bo sami przeżywamy te same radości i wyzwania.
              </CardDescription>
            </CardContent>
          </Card>
        </div>
      </section>
      <section className='w-full   flex flex-col items-start justify-start p-4 md:p-8 gap-8'>
      <div className='relative w-full flex justify-between items-center gap-4'>
        <div className='flex flex-col items-start gap-4'>
          <p className='uppercase text-sm tracking-wider'>Nasz Zespół</p>
          <h2 className='text-3xl font-bold'>
            Ludzie stojący za Twoim <br />
            zamówieniem
          </h2>
        </div>
        <p className='w-full md:max-w-xl text-xl '>
          Poznaj twarze The Premium Pet oraz ich wiernych, merdających
          asystentów, którzy testują każdą nowość w naszym sklepie.
        </p>
      </div>
       <div className='w-full grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4  gap-8'>
        <Card>
          <CardHeader className="w-full flex  items-center justify-center overflow-hidden">
          <Image
            src='/images/about-us-people-1.png'
            alt=''
            width={240}
            height={240}
            className='object-cover rounded-4xl hover:scale-110 transition-all duration-500 ease-in-out'
          />
          </CardHeader>
          <CardContent>
            <CardTitle className="flex  items-center justify-center text-2xl">
              Marcin i Bruno
            </CardTitle>
            <CardDescription className="text-center text-xl p-4 uppercase font-semibold">
             Założyciel & Chief Quality Officer
            </CardDescription>
            
          </CardContent>
        </Card>
        <Card>
          <CardHeader className="w-full flex  items-center justify-center overflow-hidden">
          <Image
            src='/images/about-us-people-2.png'
            alt=''
            width={240}
            height={240}
            className='object-cover rounded-4xl hover:scale-110 transition-all duration-500 ease-in-out'
          />
          </CardHeader>
          <CardContent>
            <CardTitle className="flex  items-center justify-center text-2xl">
              Anna i Luna
            </CardTitle>
            <CardDescription className="text-center text-xl p-4 uppercase font-semibold">
             Lekarz Weterynarii & Ekspert Żywienia
            </CardDescription>
            
          </CardContent>
        </Card>
        <Card className="">
          <CardHeader className="w-full flex  items-center justify-center overflow-hidden">
          <Image
            src='/images/about-us-people-3.png'
            alt=''
            width={240}
            height={240}
            className='object-cover rounded-4xl hover:scale-110 transition-all duration-500 ease-in-out'
          />
          </CardHeader>
          <CardContent>
            <CardTitle className="flex  items-center justify-center text-2xl">
              Tomasz i Rex
            </CardTitle>
            <CardDescription className="text-center text-xl p-4 uppercase font-semibold">
              Szef Operacyjny & Tester Zabawek
            </CardDescription>
            
          </CardContent>
        </Card>
        <Card >
          <CardHeader className="w-full flex  items-center justify-center overflow-hidden">
          <Image
            src='/images/about-us-people-4.png'
            alt=''
            width={240}
            height={240}
            className='object-cover rounded-4xl hover:scale-110 transition-all duration-500 ease-in-out'
          />
          </CardHeader>
          <CardContent>
            <CardTitle className="flex  items-center justify-center text-2xl">
            Kasia i Daisy
            </CardTitle>
            <CardDescription className="text-center text-xl p-4 uppercase font-semibold">
             Specjalista ds. Obsługi Klienta 
            </CardDescription>
            
          </CardContent>
        </Card>
      </div>
      </section>
    </div>
  )
}

export default AboutPage
