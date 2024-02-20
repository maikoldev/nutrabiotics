"use client";

import { useEffect } from "react";
import Image from "next/image";
import Swiper from 'swiper/bundle';

import CustomButton from "@/components/custom-button";
import BlogCard from "@/components/shared/BlogCard";
import EventCard from "@/components/shared/event-card";
import ChevronLeftIcon from "@/components/icons/ChevronLeftIcon";
import ChevronRightIcon from "@/components/icons/ChevronRightIcon";

import { blogs, events } from "@/utils/temp-data";
import BannerHome from "@/assets/banner-home.png"

export default function Home() {
  useEffect(() => {
    new Swiper('#events-slider', {
      slidesPerView: 1,
      loop: true,
      pagination: {
        el: '.swiper-pagination',
      },
      navigation: {
        nextEl: '.swiper-button-next',
        prevEl: '.swiper-button-prev',
      },
    });
  }, []);

  return (
    <>
      <section className="bg-[#311650] text-white relative min-h-screen grid place-content-center">
        <Image src={BannerHome} fill alt="Banner Home" className="object-cover object-bottom" />
        <div className=" text-center z-10">
          <h1 className="text-title uppercase leading-tight mb-6">Bien-Estar para <br /> latinoamérica</h1>
          <p className="text-subtitle-sm mb-10">Con fórmulas, servicios y conocimientos en <br /> medicina funcional para despertar tu naturaleza</p>
          <CustomButton>Descubre más</CustomButton>
        </div>
      </section>
      <section className="bg-[#311650] text-white py-20">
        <div className="container mx-auto grid grid-cols-3 grid-rows-2 gap-6">
          {blogs.map((blog, index) => (
            <div key={`blog-${index}`} className={`col-span-${index == 0 ? '1 row-span-2' : '2'}`}>
              <BlogCard {...blog} />
            </div>
          ))}
        </div>
      </section>
      <section className="bg-[#311650] text-white py-20">
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
    </>
  );
}
