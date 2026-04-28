import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Button } from "@/components/ui/button";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { MapPin, Phone, Mail, CheckCircle2, ArrowRight } from "lucide-react";
import {
  Breadcrumb,
  BreadcrumbItem,
  BreadcrumbLink,
  BreadcrumbList,
  BreadcrumbPage,
  BreadcrumbSeparator,
} from "@/components/ui/breadcrumb"

export default function ContactPage() {
  return (
    <main className="container mx-auto px-4 py-16 md:py-24 max-w-6xl">
      <Breadcrumb className='mb-10'>
        <BreadcrumbList className='text-sm uppercase tracking-wider'>
          <BreadcrumbItem>
            <BreadcrumbLink href='/'>Strona główna</BreadcrumbLink>
          </BreadcrumbItem>
          <BreadcrumbSeparator />
          <BreadcrumbItem>
            <BreadcrumbPage>Kontakt</BreadcrumbPage>
          </BreadcrumbItem>
        </BreadcrumbList>
      </Breadcrumb>
      {/* Header Section */}
      <div className="mb-16 max-w-2xl">
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif  leading-[1.1] mb-6">
          <span className="font-bold">Pozostańmy w</span><br />
          <span className="font-bold">kontakcie.</span><br />
          <span className="italic font-light ">Z miłości do natury.</span>
        </h1>
        <p className="text-foreground/70 md:text-lg max-w-xl">
          Nasz zespół ekspertów jest tutaj, aby odpowiedzieć na Twoje pytania dotyczące pielęgnacji, żywienia i dobrostanu Twojego pupila. Skontaktuj się z nami w dowolnej chwili.
        </p>
      </div>

      {/* Main Content Grid: Form + Info Cards */}
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-8 lg:gap-12 mb-24">
        {/* Form Section */}
        <div className="lg:col-span-3 bg-muted/40 dark:bg-muted/10 p-8 md:p-10 rounded-4xl">
          <form className="space-y-6">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-primary/70 uppercase">Imię</label>
                <Input placeholder="Jan Kowalski" className="bg-background/80 border-0 h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary shadow-sm" />
              </div>
              <div className="space-y-2">
                <label className="text-[10px] font-bold tracking-widest text-primary/70 uppercase">E-mail</label>
                <Input type="email" placeholder="kontakt@premium.pet" className="bg-background/80 border-0 h-12 rounded-xl focus-visible:ring-1 focus-visible:ring-primary shadow-sm" />
              </div>
            </div>
            
            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-primary/70 uppercase">Temat</label>
              <Select>
                <SelectTrigger className="bg-background/80 border-0 h-12 rounded-xl focus:ring-1 focus:ring-primary shadow-sm w-full">
                  <SelectValue placeholder="Zapytanie o produkt" />
                </SelectTrigger>
                <SelectContent className="rounded-xl">
                  <SelectItem value="produkt">Zapytanie o produkt</SelectItem>
                  <SelectItem value="zamowienie">Status zamówienia</SelectItem>
                  <SelectItem value="wspolpraca">Współpraca</SelectItem>
                  <SelectItem value="inne">Inne</SelectItem>
                </SelectContent>
              </Select>
            </div>

            <div className="space-y-2">
              <label className="text-[10px] font-bold tracking-widest text-primary/70 uppercase">Wiadomość</label>
              <Textarea 
                placeholder="Jak możemy Ci pomóc?" 
                className="bg-background/80 border-0 rounded-xl min-h-[160px] resize-none focus-visible:ring-1 focus-visible:ring-primary shadow-sm p-4"
              />
            </div>

            <div>
              <Button className="rounded-full bg-primary text-primary-foreground hover:bg-primary/90 px-8 py-6 shadow-md transition-transform hover:scale-105 active:scale-95">
                Wyślij wiadomość <ArrowRight className="ml-2 w-4 h-4" />
              </Button>
            </div>
          </form>
        </div>

        {/* Info Cards Section */}
        <div className="lg:col-span-2 flex flex-col gap-6">
          {/* Office Card */}
          <div className="bg-primary text-primary-foreground p-8 md:p-10 rounded-[2rem] flex-1 flex flex-col shadow-lg">
            <h3 className="text-2xl font-serif font-bold mb-8">Nasze biuro</h3>
            
            <div className="space-y-6 flex-1">
              <div className="flex items-start gap-4">
                <MapPin className="w-5 h-5 mt-0.5 shrink-0 text-[#c8d4b3]" />
                <div className="font-medium text-primary-foreground/90 leading-relaxed">
                  <p>ul. Leśna Polana 24/7,</p>
                  <p>00-001 Warszawa, Polska</p>
                </div>
              </div>
              
              <div className="flex items-center gap-4">
                <Phone className="w-5 h-5 shrink-0 text-[#c8d4b3]" />
                <p className="font-medium text-primary-foreground/90">+48 123 456 789</p>
              </div>
              
              <div className="flex items-center gap-4">
                <Mail className="w-5 h-5 shrink-0 text-[#c8d4b3]" />
                <p className="font-medium text-primary-foreground/90">biuro@thepremium.pet.pl</p>
              </div>
            </div>

            <div className="mt-10 pt-8 border-t border-primary-foreground/10">
              <p className="text-[10px] font-bold tracking-widest uppercase mb-4 text-[#c8d4b3]">Social Media</p>
              <div className="flex gap-6 font-semibold text-sm">
                <a href="#" className="hover:text-[#c8d4b3] transition-colors">Instagram</a>
                <a href="#" className="hover:text-[#c8d4b3] transition-colors">Pinterest</a>
                <a href="#" className="hover:text-[#c8d4b3] transition-colors">Facebook</a>
              </div>
            </div>
          </div>

          {/* Vet Support Card */}
          <div className="bg-[#fcf8ef] dark:bg-muted/20 p-8 md:p-10 rounded-4xl shadow-sm">
            <h3 className="text-xl font-serif font-semibold  mb-3">Wsparcie weterynaryjne</h3>
            <p className="text-foreground/70 text-sm leading-relaxed mb-6">
              Nasi eksperci są dostępni dla Twojego pupila od poniedziałku do piątku w godzinach 9:00 - 18:00.
            </p>
            <div className="flex items-center gap-2  font-semibold text-sm">
              <CheckCircle2 className="w-5 h-5 " />
              Certyfikowani doradcy
            </div>
          </div>
        </div>
      </div>

      {/* Map Section */}
      <div className="relative w-full h-[400px] md:h-[500px] rounded-[2.5rem] overflow-hidden mb-24 bg-zinc-200 dark:bg-zinc-800 shadow-inner group">
        {/* Abstract Map Background */}
        <div className="absolute inset-0 opacity-60">
          <svg width="100%" height="100%" viewBox="0 0 1000 500" preserveAspectRatio="xMidYMid slice" xmlns="http://www.w3.org/2000/svg">
            <path d="M-100,100 C150,150 250,50 450,200 S700,150 1100,250" fill="none" stroke="currentColor" strokeWidth="12" className="text-background dark:text-zinc-900" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M200,-100 C250,100 200,250 350,400 S400,550 450,600" fill="none" stroke="currentColor" strokeWidth="16" className="text-background dark:text-zinc-900" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M600,-100 C550,150 700,300 650,450 S800,550 850,600" fill="none" stroke="currentColor" strokeWidth="14" className="text-background dark:text-zinc-900" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M-100,400 C150,350 300,450 500,400 S750,500 1100,350" fill="none" stroke="currentColor" strokeWidth="10" className="text-background dark:text-zinc-900" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M450,200 C500,250 550,200 650,450" fill="none" stroke="currentColor" strokeWidth="8" className="text-background dark:text-zinc-900" strokeLinecap="round" strokeLinejoin="round"/>
            <path d="M350,400 C450,350 550,300 650,450" fill="none" stroke="currentColor" strokeWidth="6" className="text-background dark:text-zinc-900" strokeLinecap="round" strokeLinejoin="round"/>
          </svg>
        </div>
        
        {/* Center Map Pin */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 flex flex-col items-center">
          <div className="w-14 h-14 bg-primary -foreground rounded-full flex items-center justify-center shadow-2xl border-4 border-background transition-transform duration-500 group-hover:scale-110">
            <MapPin className="w-6 h-6" />
          </div>
          <div className="w-4 h-1 bg-black/20 blur-sm rounded-full mt-2" />
        </div>

        {/* Info popup on map */}
        <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 bg-background/95 backdrop-blur-sm p-6 rounded-2xl shadow-xl max-w-[280px] border border-border/50 transition-transform duration-500 hover:-translate-y-1">
          <h4 className="font-serif font-bold text-lg  mb-2">Zapraszamy osobiście</h4>
          <p className="text-sm text-foreground/70 leading-relaxed">Darmowy parking dla naszych klientów i poidełko dla każdego pupila.</p>
        </div>
      </div>

      {/* FAQ Section */}
      <div className="max-w-3xl mx-auto text-center mb-16">
        <p className="text-[10px] font-bold tracking-[0.2em] /60 uppercase mb-4">Wiedza i pomoc</p>
        <h2 className="text-3xl md:text-4xl font-serif  mb-12 font-medium">Najczęściej zadawane pytania</h2>
        
        <Accordion type="single" collapsible className="w-full text-left space-y-4">
          <AccordionItem value="item-1" className="border-none bg-muted/30 dark:bg-muted/10 rounded-2xl px-6 data-[state=open]:bg-muted/50 transition-colors">
            <AccordionTrigger className="hover:no-underline font-semibold  py-5 text-base">
              Jak długo trwa realizacja zamówienia?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/70 pb-6 text-sm leading-relaxed px-1">
              Zamówienia realizujemy zazwyczaj w ciągu 1-2 dni roboczych. Czas dostawy uzależniony jest od wybranego przewoźnika. Otrzymasz powiadomienie e-mail z linkiem do śledzenia przesyłki, gdy tylko Twoje zamówienie wyruszy w drogę.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-2" className="border-none bg-muted/30 dark:bg-muted/10 rounded-2xl px-6 data-[state=open]:bg-muted/50 transition-colors">
            <AccordionTrigger className="hover:no-underline font-semibold  py-5 text-base">
              Czy oferujecie darmową dostawę?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/70 pb-6 text-sm leading-relaxed px-1">
              Tak, darmowa dostawa obowiązuje dla zamówień powyżej 150 zł na terenie całego kraju. Dla zamówień o niższej wartości, koszty dostawy są stałe i wynoszą 15 zł niezależnie od gabarytów paczki.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-3" className="border-none bg-muted/30 dark:bg-muted/10 rounded-2xl px-6 data-[state=open]:bg-muted/50 transition-colors">
            <AccordionTrigger className="hover:no-underline font-semibold  py-5 text-base">
              Czy produkty są zatwierdzone przez weterynarzy?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/70 pb-6 text-sm leading-relaxed px-1">
              Wszystkie nasze produkty są starannie selekcjonowane i konsultowane z doświadczonymi lekarzami weterynarii, aby zapewnić najwyższą jakość i bezpieczeństwo dla Twojego pupila. Stawiamy wyłącznie na naturalne składniki.
            </AccordionContent>
          </AccordionItem>
          
          <AccordionItem value="item-4" className="border-none bg-muted/30 dark:bg-muted/10 rounded-2xl px-6 data-[state=open]:bg-muted/50 transition-colors">
            <AccordionTrigger className="hover:no-underline font-semibold  py-5 text-base">
              Jak mogę dokonać zwrotu?
            </AccordionTrigger>
            <AccordionContent className="text-foreground/70 pb-6 text-sm leading-relaxed px-1">
              Masz 30 dni na zwrot nieotwartego produktu. Skontaktuj się z naszym biurem obsługi klienta pod adresem e-mail, aby otrzymać etykietę zwrotną. Po otrzymaniu paczki w naszym magazynie, środki zwrócimy w ciągu 3-5 dni roboczych.
            </AccordionContent>
          </AccordionItem>
        </Accordion>
      </div>
    </main>
  );
}