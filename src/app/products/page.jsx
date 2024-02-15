"use client";

import Image from "next/image";

import ProductsBanner from '@/assets/products-banner.png';
import ProductDummy from '@/assets/product-dummy.png';
import NBtn from "@/components/custom-button";

import DecorationA from '@/assets/decoration-a.png';

import ProductsGrid from "@/components/products/products-grid";
import { useEffect, useState } from "react";

export default function Page() {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch('https://fakestoreapi.com/products?limit=6')
      .then(res => res.json())
      .then(json => setProducts(json))
  }, []);

  return (
    <>
      <section className="relative flex items-center z-10">
        <h2 className="absolute text-[55px] font-extrabold leading-none ml-36">
          <span className="text-5xl">Nuestra</span> <br /> Herramientas Funcionales
        </h2>
        <Image src={ProductsBanner} alt="Products Banner" className="w-full" />
      </section>

      <div className="relative py-10">
        <div className="container mx-auto text-xl font-bold text-[#BBBBBB]">
          Inicio / <a href="" className="text-purple">Productos</a>
        </div>
        <Image src={DecorationA} alt="Products Banner" className="absolute right-0 -top-12" />
      </div>

      <section className="container mx-auto grid grid-cols-2 py-6">
        <div>
          <Image src={ProductDummy} alt="Product Dummy" />
        </div>
        <div className="w-[90%] mx-auto self-center z-10">
          <h3 className="text-2xl font-extrabold mb-6">¿Qué son nuestras “herramientas funcionales”?</h3>
          <p className="text-xl mb-5">
            Llamamos “herramienta funcional” a cada una de las formas en las que condensamos los avances, investigaciones, descubrimientos y demás frutos de nuestro saber, creados para multiplicar el bienestar en Latinoamérica.
          </p>
          <ul className="text-xl list-disc ml-6 mb-8">
            <li>
              Son nuestros clásicos “frasquitos”: suplementos que acompañan las estrategias funcionales que los profesionales de la salud diseñan para cuidar a cada uno de sus pacientes.
            </li>
            <br />
            <li>
              Son todas las herramientas avanzadas de calidad, que le brindamos a los profesionales de la salud para respaldarlos en el ejercicio de su profesión.
            </li>
          </ul>
          <NBtn block>
            Conoce las formulaciones que <br /> acompañan tu estrategia funcional
          </NBtn>
        </div>
      </section>

      <section className="container mx-auto text-center py-6">
        <h3 className="text-[40px] font-black mb-6">Nutrabiotics, una herramienta funcional para el bien·estar</h3>

        <iframe
          className="aspect-video w-full rounded-3xl mb-10"
          src="https://www.youtube.com/embed/ksvJ5niT404?si=Cg_Mz4fvX7iXKBuP">
        </iframe>

        <NBtn >
          Conoce Alivia
        </NBtn>
      </section>

      <section className="container mx-auto text-center py-6">
        <h2 className="text-5xl font-extrabold mb-6">
          Catálogo de <br /><span className="text-7xl">Productos</span>
        </h2>

        <p className="text-2xl font-extrabold mb-10">Conoce las formulaciones que acompañan <br /> tu estrategia funcional.</p>

        <div className="grid grid-cols-4">
          <div className="col-span-1"></div>
          <div className="col-span-3">
            <ProductsGrid products={products} />
          </div>
        </div>
      </section>
    </>
  );
}
