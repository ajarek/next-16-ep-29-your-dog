import Image from "next/image"
import Link from "next/link"

const Categories = () => {
  return (
    <section className='w-full   flex flex-col items-start justify-start p-4 md:p-8 gap-8'>
      <div className='w-full flex  items-start justify-between'>
        <div>
          <p className='text-lg uppercase tracking-wider text-muted-foreground'>
            Eksploruj
          </p>
          <h1 className='text-3xl font-bold tracking-wider'>Nasze Kategorie</h1>
        </div>

        <p className='w-full md:w-1/3  text-justify text-muted-foreground'>
          Odkryj świat luksusu stworzony specjalnie dla Twojego psa, podzielony
          na intuicyjne sekcje ułatwiające wybór.
        </p>
      </div>
      <div className='w-full grid grid-cols-1 md:grid-cols-2 place-items-center gap-4'>
        <div className='relative h-130 w-full rounded-2xl overflow-hidden'>
          <Link href='/categories/karma' className='absolute inset-0 hover:scale-105 transition-all duration-300 ease-in-out'>
            <Image
              src='/images/category-karma.png'
              alt='Category 1'
              fill
              className='object-cover'
              sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
              priority
            />
            <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
          </Link>

          <div className='absolute bottom-4 left-4'>
            <h2 className='text-2xl font-bold text-white'>Karma</h2>
            <p className='text-white'>Bezzbożowe, naturalne receptury</p>
          </div>
        </div>
        <div className='w-full grid grid-cols-2 gap-4 place-items-center '>
          <div className='relative h-63 w-full rounded-xl overflow-hidden'>
            <Link href='/categories/toys' className='absolute inset-0 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Image
                src='/images/category-toys.png'
                alt='Category 1'
                fill
                className='object-cover hover:scale-105 transition-all duration-300 ease-in-out '
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
            </Link>

            <div className='absolute bottom-4 left-4'>
              <h2 className='text-2xl font-bold text-white'>Zabawki</h2>
            </div>
          </div>

          <div className='relative h-63 w-full rounded-xl overflow-hidden'>
            <Link href='/categories/accessories' className='absolute inset-0 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Image
                src='/images/category-accessories.png'
                alt='Category 1'
                fill
                className='object-cover hover:scale-105 transition-all duration-300 ease-in-out'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
            </Link>

            <div className='absolute bottom-4 left-4'>
              <h2 className='text-2xl font-bold text-white'>Akcesoria</h2>
            </div>
          </div>
          <div className='relative h-63 w-full col-span-2 rounded-xl overflow-hidden'>
            <Link href='/categories/care' className='absolute inset-0 hover:scale-105 transition-all duration-300 ease-in-out'>
              <Image
                src='/images/category-care.png'
                alt='Category 1'
                fill
                className='object-cover hover:scale-105 transition-all duration-300 ease-in-out'
                sizes='(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw'
                priority
              />
              <div className='absolute inset-0 bg-linear-to-t from-black/70 via-black/20 to-transparent' />
            </Link>

            <div className='absolute bottom-4 left-4'>
              <h2 className='text-2xl font-bold text-white'>Pielęgnacja</h2>
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Categories
