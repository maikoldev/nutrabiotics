'use client'

import Image from "next/image";
import Link from "next/link";
import { Disclosure, Transition } from '@headlessui/react'
import ArrowDownIcon from '@/components/icons/ArrowDownIcon'

import Breadcrumb from "@/components/layouts/Breadcrumb";
import CustomButton from "@/components/custom-button";

import BannerRes from "@/assets/about-us/banner-res.png"
import Banner from "@/assets/about-us/banner.png"
import FoundersImg from "@/assets/about-us/founders.jpg"
import AuroraAImg from "@/assets/about-us/aurora-a.png"

import TabAImg from "@/assets/about-us/tab-a.jpg"

const breadcrumbItems = [
  { text: 'Inicio', href: '/' },
  { text: 'Nosotros', active: true },
];

const tabItems = [
  { title: 'Comprensión', content: '' },
  { title: 'Conciencia', content: '' },
  { title: 'Búsqueda', content: '' },
  { title: 'Familiaridad', content: '' },
  { title: 'Identificación', content: '' },
  { title: 'Promoción', content: '' },
];

export default function Page() {
  return (
    <>
      <section className="relative min-h-[75vh] sm:min-h-[65vh] flex items-end">
        <Image className="w-full h-full object-cover sm:hidden" fill src={BannerRes} alt="AboutUs Banner" />
        <Image className="w-full h-full object-cover max-sm:hidden" fill src={Banner} alt="AboutUs Banner" />
        <div className="container mx-auto relative z-10 mb-10">
          <p className="text-white font-bold text-center lg:w-[65%] mx-auto">
            Somos una tribu liderada por médicos, que le ofrece a los profesionales de la salud y al mundo las herramientas funcionales para posibilitar y vivir el bienestar.
          </p>
        </div>
      </section>

      <section className="bg-dark-purple pt-8">
        <div className="container mx-auto">
          <Breadcrumb variant="dark" items={breadcrumbItems} />
        </div>
      </section>

      <section className="bg-dark-purple text-white py-8">
        <div className="container mx-auto">
          <h2 className="text-title text-center mb-10">
            <span className="text-subtitle">Nuestros</span> <br /> Fundadores
          </h2>
          <div className="relative rounded-2xl max-sm:aspect-square overflow-hidden mb-6 sm:h-[45vw] xl:h-[36vw]">
            <div className="bg-purple-gradient w-full h-full relative z-10"></div>
            <Image className="w-full h-full object-cover sm:object-top" fill src={FoundersImg} alt="Founders" />
            <div className="absolute bottom-0 w-full grid grid-cols-3 justify-items-center gap-1 max-xs:px-3 p-4 lg:pb-6 max-md:text-small font-bold lg:text-subtitle-sm text-light-yellow z-10">
              <Link href="/about-us/our-founders" className="lg:underline hover:no-underline">Benoit Raby</Link>
              <Link href="/about-us/our-founders" className="lg:underline hover:no-underline">Luc Lemaire</Link>
              <Link href="/about-us/our-founders" className="lg:underline hover:no-underline">Javier Galvis</Link>
            </div>
          </div>
          <CustomButton block className="md:hidden" href="/about-us/our-founders">Conoce sus biografías</CustomButton>
        </div>
      </section>

      <section className="bg-dark-purple text-white py-8">
        <div className="container mx-auto">
          <h2 className="text-title text-center mb-10">
            <span className="text-subtitle">La ciencia detrás</span> <br /> De Nutrabiotics
          </h2>
          <p className="font-bold text-center lg:w-[52%] mx-auto">
            Somos especialistas en Medicina funcional y Kinesiología aplicada (en otras palabras, es un “desenmarañador” de la fisiopatología).
          </p>
        </div>
      </section>

      <section className="relative pt-20 py-8">
        <Image className="w-full absolute translate-y-[-20%] -z-10" src={AuroraAImg} alt="Aurora" />
        <div className="container mx-auto">
          <h2 className="text-title text-center mb-10 lg:mb-16">
            <span className="text-subtitle">Los 6 principios de</span> <br /> Nuestras <br className="sm:hidden" /> creaciones
          </h2>

          {tabItems.map((item, index) => (
            <Disclosure key={`tab-item-${item.title}`} defaultOpen={index == 0 ? true : false}>
              {({ open }) => (
                <div className="grid md:grid-cols-3 xl:grid-cols-4 md:gap-4 xl:gap-12">
                  <div className="md:col-span-1">
                    <Disclosure.Button className={`${open ? 'bg-violet text-white px-6 md:px-3' : ''} w-full flex items-center rounded-full gap-4 md:max-lg:gap-2 py-3 md:py-2 transition-colors`}>
                      <div className={`h-[60px] w-[60px] grid place-content-center rounded-full border ${open ? 'border-transparent' : 'border-purple'}`}>
                        <ArrowDownIcon className={`${!open && '-rotate-90'} transition`} width={45} height={45} />
                      </div>
                      <span className={`text-normal ${open ? 'font-bold' : 'font-extrabold'}`}>{item.title}</span>
                    </Disclosure.Button>
                  </div>

                  <div className="md:col-span-2 xl:col-span-3">
                    <Transition
                      enter="transition duration-100 ease-out"
                      enterFrom="transform scale-95 opacity-0"
                      enterTo="transform scale-100 opacity-100"
                      leave="transition duration-75 ease-out"
                      leaveFrom="transform scale-100 opacity-100"
                      leaveTo="transform scale-95 opacity-0"
                    >
                      <Disclosure.Panel className="max-md:pt-6 mb-8 xl:pl-28" static>
                        <p className="font-extrabold max-sm:leading-snug mb-5">
                          Nutrabiotics se basa en seis (6) principios fundamentales de la Medicina funcional que guían la creación de herramientas y de material didáctico:
                        </p>
                        <p className="font-normal max-sm:leading-snug mb-8">
                          Comprensión de la individualidad bioquímica de cada ser humano, basada en las interacciones entre los conceptos de genética y carácter único del medio ambiente.
                        </p>
                        <Image className="w-full md:h-[30vw] xl:h-[25vw] rounded-2xl max-md:aspect-square object-cover" src={TabAImg} alt="Tab A" />
                      </Disclosure.Panel>
                    </Transition>
                  </div>
                </div>
              )}
            </Disclosure>
          ))}
        </div>
      </section>

      <section className="py-8">
        <div className="container mx-auto">
          <h2 className="text-title text-center mb-10">
            <span className="text-subtitle">Un sueño</span> <br /> Hecho realidad
          </h2>
          <p className="text-center lg:text-[32px] lg:leading-10 font-medium">
            Hoy, ese sueño sigue intacto, haciendo visible nuestro objetivo en centenares de miembros de una tribu que se mueve hacia el mismo fin: <b className="font-extrabold">Reavivar los propósitos médicos, aportando bienestar al mundo.</b>
          </p>
        </div>
      </section>
    </>
  );
}