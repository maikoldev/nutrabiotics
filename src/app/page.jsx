"use client";

import { useEffect } from "react";
import Image from "next/image";
import Swiper from 'swiper/bundle';

import { blogs, events, products, partners, contents, testimonials } from "@/utils/temp-data";

import BlogCard from "@/components/shared/BlogCard";
import ContentCard from "@/components/shared/ContentCard";
import CustomButton from "@/components/custom-button";
import EventCard from "@/components/shared/EventCard";
import ProductsSlider from "@/components/home/ProductsSlider";
import TestimonialCard from "@/components/shared/TestimonialCard";

import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";

import App1 from "@/assets/home-app-1.png"
import AuroraImg from "@/assets/aurora.png"
import AuroraRotateImg from "@/assets/aurora-rotate.png"
import AuroraRotateResImg from "@/assets/aurora-rotate-res.png"
import AuroraSplashImg from "@/assets/aurora-splash.png"
import BannerHome from "@/assets/banner-home.png"
import Flower2Img from "@/assets/flower-2.png"
import FlowerImg from "@/assets/flower.png"

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

    new Swiper('#contents-slider', {
      slidesPerView: 1,
      spaceBetween: 20,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        640: {
          slidesPerView: 1.6,
        },
        768: {
          slidesPerView: 2,
        },
        1024: {
          slidesPerView: 2.6,
          spaceBetween: 20,
        },
      }
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
      slidesPerView: 1,
      loop: true,
      coverflowEffect: {
        rotate: 0,
        stretch: -60,
        scale: 0.95,
        slideShadows: false
      },
      pagination: {
        el: '.swiper-pagination',
      },
      breakpoints: {
        640: {
          slidesPerView: 2,
        },
        768: {
          slidesPerView: 5,
        },
      }
    });
  }, []);

  return (
    <>
      <section className="bg-dark-purple text-white relative min-h-screen grid place-content-center">
        <Image src={BannerHome} fill alt="Banner Home" className="object-cover object-bottom" />
        <div className="text-center z-10">
          <h1 className="text-title text-[64px] uppercase leading-tight mb-6">Bien-Estar para <br /> latinoamérica</h1>
          <p className="text-normal-md font-bold mb-10">
            Con fórmulas, servicios y conocimientos en <br className="max-md:hidden" /> medicina funcional para despertar tu naturaleza
          </p>
          <CustomButton>Descubre más</CustomButton>
        </div>
      </section>

      <section className="bg-dark-purple text-white py-4 md:py-20">
        <div className="container mx-auto grid grid-cols-1 md:grid-cols-3 md:grid-rows-2 gap-3 md:gap-6">
          {blogs.map((blog, index) => (
            <div key={`blog-${index}`} className={`md:col-span-${index == 0 ? '1 row-span-2' : '2'}`}>
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </section>

      <section className="bg-dark-purple text-white py-4 md:py-20 md:pb-80">
        <div className="container mx-auto">
          <h2 className="text-title text-center md:mb-8">
            <span className="text-subtitle">Nuestros</span> <br /> Eventos
          </h2>
          <div id="events-slider" className="swiper mb-20">
            <div className="swiper-wrapper py-12">
              {events.map((event, index) => (
                <div className="swiper-slide px-2 md:px-20" key={`event-${index}`}>
                  <EventCard {...event} />
                </div>
              ))}
            </div>
            <div className="swiper-pagination"></div>
            <ChevronLeftIcon className="swiper-button-prev max-lg:top-[25%] max-lg:left-[10%] text-white/50 hover:text-white" />
            <ChevronRightIcon className="swiper-button-next max-lg:top-[25%] max-lg:right-[10%] text-white/50 hover:text-white" />
          </div>
        </div>
      </section>

      <section className="relative pb-20">
        <div className="relative bottom-[80px] translate-y-[-16%] pb-10">
          <Image src={AuroraSplashImg} className="w-full" alt="Aurora Splah" />
          <Image src={AuroraImg} className="absolute translate-y-[-70%] w-full" alt="Aurora" />
          <Image src={AuroraImg} className="absolute translate-y-[-70%] w-full" alt="Aurora" />
        </div>
        <div className="w-full md:w-11/12 mx-auto relative max-md:overflow-hidden">
          <Image src={FlowerImg} className="max-md:w-[300px] max-lg:w-[350px] absolute top-[5px] md:top-[-30px] lg:top-[-100px] -right-12 md:-right-6 lg:-right-16" alt="Flower" />
          <h2 className="text-subtitle text-purple lg:ml-28 mb-12">
            <span className="ml-12">Nuestros</span> <br /> <span className="text-title text-[96px]">Productos</span>
          </h2>
          <ProductsSlider products={products} />
        </div>
      </section>

      <section className="relative py-20">
        <Image src={AuroraRotateImg} className="max-md:hidden absolute -top-[225px] w-full" alt="Aurora" />
        <Image src={AuroraRotateResImg} className="md:hidden absolute -top-[225px] w-full" alt="Aurora" />
        <div className="container mx-auto relative z-10 md:py-20">
          <h2 className="text-title text-center mb-10 md:mb-16">
            <span className="text-subtitle">Nuestros</span> <br /> Aliados
          </h2>
          <p className="text-normal-md font-bold text-center mb-16">
            Unidos para multiplicar el bienestar en <br className="max-md:hidden" />Latinoamérica.
          </p>
          <div className="grid grid-cols-2 lg:grid-cols-4 max-lg:gap-12 justify-items-center mb-12">
            {partners.slice(0, 4).map((partner, index) => (
              <div key={`partner-${index}`} className="col-span-1">
                <Image src={partner} alt="Aliado" />
              </div>
            ))}
          </div>
          <div className="grid grid-cols-2 lg:grid-cols-3 max-lg:gap-12 justify-items-center">
            {partners.slice(4, 7).map((partner, index) => (
              <div key={`partner-${index}`} className={`${index == 2 ? 'max-lg:col-span-2' : 'col-span-1'}`}>
                <Image src={partner} alt="Aliado" />
              </div>
            ))}
          </div>
        </div>
      </section>

      <section className="relative z-10 py-20">
        <h2 className="text-title text-center leading-none mb-20">
          <span className="max-md:hidden"><span className="text-subtitle">Contenido</span> <br /> Pensado para ti</span>
          <span className="md:hidden"><span className="text-subtitle">Contenido pensado</span> <br /> para ti</span>
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-12 max-md:px-4 relative z-10">
          <div className="col-span-1 md:col-span-5 grid content-center">
            <div className="md:w-[75%] lg:w-[50%] md:ml-[10%] lg:ml-[35%] max-md:text-center max-md:mb-10">
              <h3 className="text-[32px] md:text-subtitle max-md:font-extrabold mb-4">Descubre</h3>
              <p className="mb-4">El evento educativo con mayor trayectoria en Latinoamérica para médicos y profesionales de la salud.</p>
              <CustomButton className="max-md:hidden">Conoce más</CustomButton>
            </div>
          </div>
          <div className="col-span-1 md:col-span-7">
            <div id="contents-slider" className="swiper max-md:mb-10">
              <div className="swiper-wrapper max-md:mb-14">
                {contents.map((content, index) => (
                  <div className="swiper-slide" key={`content-${index}`}>
                    <ContentCard content={content} />
                  </div>
                ))}
              </div>
              <div className="swiper-pagination"></div>
            </div>
            <div className="md:hidden text-center">
              <CustomButton>Conoce más</CustomButton>
            </div>
          </div>
        </div>
        <Image src={Flower2Img} className="max-md:hidden absolute -bottom-[10%]" alt="Flower2" />
      </section>

      <section className="relative py-20">
        <Image src={Flower2Img} className="md:hidden absolute top-[20%] w-[240px]" quality={100} alt="Flower2" />
        <div className="container mx-auto">
          <h2 className="text-title text-center leading-none mb-36 md:mb-20">
            <span className="text-subtitle">Conoce nuestras</span> <br /> Aplicaciones funcionales
          </h2>
          <div id="apps-slider" className="swiper mb-20">
            <div className="swiper-wrapper">
              <div className="swiper-slide">
                <div className="relative min-h-[85vh] grid items-center">
                  <Image src={App1} className="absolute object-cover w-full h-full rounded-[20px]" alt="App" />
                  <div className="text-white relative z-10 p-8 md:p-20 lg:ml-8 md:w-[80%] lg:w-[45%] max-md:text-center">
                    <h3 className="text-[24px] md:text-[32px] font-black leading-tight mb-6">
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

      <section className="relative overflow-hidden">
        <h2 className="text-title text-center leading-none mb-20">
          <span className="text-subtitle">En pocas palabras...</span> <br /> Nutrabiotics
        </h2>
        <div id="testimonials-slider" className="swiper max-md:px-4 mb-20 md:mb-40">
          <div className="swiper-wrapper max-md:mb-12">
            {testimonials.map((testimonial, index) => (
              <div className="swiper-slide" key={`testimonial-${index}`}>
                <TestimonialCard testimonial={testimonial} />
              </div>
            ))}
          </div>
          <div className="swiper-pagination"></div>
        </div>
        <p className="subtitle-sm md:text-[32px] text-center leading-tight">
          Aquí termina esta página, pero inicia un viaje <br />
          hacia el bienestar y el conocimiento profundo de tu naturaleza.
        </p>
      </section>
    </>
  );
}
