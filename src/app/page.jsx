"use client";

import { useEffect } from "react";
import Image from "next/image";
import Swiper from 'swiper/bundle';

import { blogs, events, products, contents, testimonials } from "@/utils/temp-data";

import BlogCard from "@/components/shared/BlogCard";
import ContentCard from "@/components/shared/ContentCard";
import CustomButton from "@/components/custom-button";
import EventCard from "@/components/shared/EventCard";
import ProductSliderItem from "@/components/shared/ProductSliderItem";
import TestimonialCard from "@/components/shared/TestimonialCard";

import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";

import App1 from "@/assets/home-app-1.png"
import AuroraBottomImg from "@/assets/aurora-bottom.png"
import AuroraImg from "@/assets/aurora.png"
import AuroraRotateImg from "@/assets/aurora-rotate.png"
import AuroraSplashBottomImg from "@/assets/aurora-splash-bottom.png"
import AuroraSplashImg from "@/assets/aurora-splash.png"
import BannerHome from "@/assets/banner-home.png"
import Flower2Img from "@/assets/flower-2.png"
import FlowerImg from "@/assets/flower.png"

const partners = [
  require('@/assets/partners/ilumina.png'),
  require('@/assets/partners/AMF.png'),
  require('@/assets/partners/CLAM.png'),
  require('@/assets/partners/biomolec.png'),
  require('@/assets/partners/alivia.png'),
  require('@/assets/partners/fundanatura.png'),
  require('@/assets/partners/farmacia-funcional.png'),
];

export default function Home() {
  useEffect(() => {
    new Swiper('#events-slider', {
      slidesPerView: 1,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    new Swiper('#products-slider', {
      effect: 'coverflow',
      centeredSlides: true,
      slidesPerView: 'auto',
      coverflowEffect: {
        rotate: 0,
        stretch: 575,
        depth: 800,
        modifier: 1,
        slideShadows: false,
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    new Swiper('#contents-slider', {
      slidesPerView: 2.6,
      spaceBetween: 20,
      loop: true,
    });

    new Swiper('#apps-slider', {
      slidesPerView: 1,
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });

    new Swiper('#testimonials-slider', {
      effect: 'coverflow',
      slidesPerView: 5,
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: -60,
        scale: 0.95,
        slideShadows: false
      },
    });
  }, []);

  return (
    <>
      <section className="bg-dark-purple text-white relative min-h-screen grid place-content-center">
        <Image src={BannerHome} fill alt="Banner Home" className="object-cover object-bottom" />
        <div className="text-center z-10">
          <h1 className="text-title text-[64px] uppercase leading-tight mb-6">Bien-Estar para <br /> latinoamérica</h1>
          <p className="text-subtitle-sm mb-10">Con fórmulas, servicios y conocimientos en <br /> medicina funcional para despertar tu naturaleza</p>
          <CustomButton>Descubre más</CustomButton>
        </div>
      </section>

      <section className="bg-dark-purple text-white py-20">
        <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-6">
          {blogs.map((blog, index) => (
            <div key={`blog-${index}`} className={`col-span-${index == 0 ? '1 row-span-2' : '2'}`}>
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dark-purple text-white py-20 pb-80">
        <div className="container mx-auto">
          <h2 className="text-title text-center mb-8">
            <span className="text-subtitle">Nuestros</span> <br /> Eventos
          </h2>
          <div id="events-slider" className="swiper mb-20">
            <div className="swiper-wrapper py-12">
              {events.map((event, index) => (
                <div className="swiper-slide px-20" key={`event-${index}`}>
                  <EventCard {...event} />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <ChevronLeftIcon className="swiper-button-prev text-white/50 hover:text-white" />
            <ChevronRightIcon className="swiper-button-next text-white/50 hover:text-white" />
          </div>
        </div>
      </section>

      <section className="relative pt-[500px] pb-20">
        <Image src={AuroraSplashImg} className="absolute -top-60 w-full" alt="Aurora Splah" />
        <Image src={AuroraImg} className="absolute -top-[640px] w-full" alt="Aurora" />
        <Image src={AuroraImg} className="absolute -top-[640px] w-full" alt="Aurora" />
        <div className="w-11/12 mx-auto relative">
          <Image src={FlowerImg} className="absolute -top-[100px] -right-16" alt="Flower" />
          <h2 className="text-subtitle text-purple ml-28 mb-12">
            <span className="ml-12">Nuestros</span> <br /> <span className="text-[96px]">Productos</span>
          </h2>
          <div id="products-slider" className="swiper">
            <div className="swiper-wrapper">
              {products.map((product, index) => (
                <div className="swiper-slide" key={`product-${index}`}>
                  <ProductSliderItem {...product} />
                </div>
              ))}
            </div>
            <ChevronLeftIcon className="swiper-button-prev text-violet/50 hover:text-violet left-[15%] top-[85%]" />
            <ChevronRightIcon className="swiper-button-next text-violet/50 hover:text-violet right-[15%] top-[85%]" />
          </div>
        </div>
      </section>

      <section className="relative py-20">
        <Image src={AuroraRotateImg} className="absolute -top-[225px] w-full" alt="Aurora" />
        <div className="container mx-auto relative z-10 py-20">
          <h2 className="text-title text-center mb-16">
            <span className="text-subtitle">Nuestros</span> <br /> Aliados
          </h2>
          <p className="text-subtitle-sm text-center mb-16">
            Unidos para multiplicar el bienestar en <br />Latinoamérica.
          </p>
          <div className="grid grid-cols-4 justify-items-center mb-12">
            {partners.slice(0, 4).map((partner, index) => (
              <div key={`partner-${index}`} className="col-span-1">
                <Image src={partner} alt="Aliado" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-3 justify-items-center">
            {partners.slice(4, 7).map((partner, index) => (
              <div key={`partner-${index}`} className="col-span-1">
                <Image src={partner} alt="Aliado" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <h2 className="text-title text-center leading-none mb-20">
          <span className="text-subtitle">Contenido</span> <br /> Pensado para ti
        </h2>
        <div className="grid grid-cols-12 relative z-10">
          <div className="col-span-5 grid content-center">
            <div className="w-[50%] ml-[35%]">
              <h3 className="text-subtitle mb-4">Descubre</h3>
              <p className="mb-4">El evento educativo con mayor trayectoria en Latinoamérica para médicos y profesionales de la salud.</p>
              <CustomButton>Conoce más</CustomButton>
            </div>
          </div>
          <div className="col-span-7">
            <div id="contents-slider" className="swiper">
              <div className="swiper-wrapper ">
                {contents.map((content, index) => (
                  <div className="swiper-slide" key={`content-${index}`}>
                    <ContentCard content={content} />
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
        <Image src={Flower2Img} className="absolute -bottom-[10%]" alt="Flower2" />
      </section>

      <section className="py-20">
        <div className="container mx-auto">
          <h2 className="text-title text-center leading-none mb-20">
            <span className="text-subtitle">Conoce nuestras</span> <br /> Aplicaciones funcionales
          </h2>
          <div id="apps-slider" className="swiper mb-20">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative min-h-[85vh] grid items-center">
                  <Image src={App1} className="absolute object-cover w-full h-full rounded-[20px]" alt="App" />
                  <div className="text-white relative z-10 p-20 ml-8 w-[45%]">
                    <h3 className="text-[32px] font-black leading-tight mb-6">
                      Una prueba de <span className="bg-clip-text text-transparent bg-gradient-to-r from-light-yellow to-gold">CALIDAD</span> que habla por sí misma.
                    </h3>
                    <p className="mb-6">Dejamos de lado los rodeos y te permitimos valorar directamente la calidad de nuestras formulaciones.</p>
                    <CustomButton>!Pruébanos!</CustomButton>
                  </div>
                </div>
              </div>
            </div>
            <ChevronLeftIcon className="swiper-button-prev left-10 text-white/50 hover:text-white" />
            <ChevronRightIcon className="swiper-button-next right-10 text-white/50 hover:text-white" />
          </div>
        </div>
      </section>

      <section className="relative pb-[550px] bg-green-400x overflow-hidden">
        <h2 className="text-title text-center leading-none mb-20">
          <span className="text-subtitle">En pocas palabras...</span> <br /> Nutrabiotics
        </h2>
        <div id="testimonials-slider" className="swiper mb-40">
          <div className="swiper-wrapper">
            {testimonials.map((testimonial, index) => (
              <div className="swiper-slide" key={`testimonial-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
        </div>
        <p className="subtitle-sm text-[32px] text-center leading-tight">
          Aquí termina esta página, pero inicia un viaje <br />
          hacia el bienestar y el conocimiento profundo de tu naturaleza.
        </p>
        <Image src={AuroraSplashBottomImg} className="absolute w-full bottom-[-10%]" alt="Aurora Splah Bottom" />
        <Image src={AuroraBottomImg} className="absolute w-full bottom-[-35%]" alt="Aurora Bottom" />
        <Image src={AuroraBottomImg} className="absolute w-full bottom-[-35%]" alt="Aurora Bottom" />
      </section>
    </>
  );
}
