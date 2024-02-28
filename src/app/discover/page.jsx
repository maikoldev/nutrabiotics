import Image from "next/image";

import Breadcrumb from "@/components/layouts/Breadcrumb";
import CustomButton from "@/components/custom-button";

import BannerRes from "@/assets/about-us/banner-res.png"
import Banner from "@/assets/about-us/banner.png"

const breadcrumbItems = [
  { text: 'Inicio', href: '/' }, ,
  { text: 'Descubre', active: true },
];

const Discover = () => {
  return (
    <>
      <section className="relative min-h-[75vh] sm:min-h-[65vh]">
        <Image className="w-full h-full object-cover sm:hidden" fill src={BannerRes} alt="AboutUs Banner" />
        <Image className="w-full h-full object-cover max-sm:hidden" fill src={Banner} alt="AboutUs Banner" />
      </section>

      <section className="container mx-auto py-8">
        <Breadcrumb items={breadcrumbItems} />
      </section>

      <section className="container mx-auto py-8">
        <div className="bg-dark-blue grid lg:grid-cols-6 items-center text-white rounded-2xl py-16 px-8 lg:px-10">
          <div className="lg:col-span-4 max-lg:text-center">
            <h3 className="text-[24px] lg:text-[32px] font-bold mb-8">Profesional de la salud</h3>
            <p className="font-light mb-10">Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.</p>
          </div>
          <div className="lg:col-span-2 justify-self-center">
            <CustomButton>Descubre más</CustomButton>
          </div>
        </div>
      </section>

      <section className="container mx-auto py-8">
        <p className="text-center lg:text-[32px] lg:leading-10 font-medium">
          Aquí termina esta página, pero inicia un viaje hacia el bienestar y el conocimiento profundo de tu naturaleza.
        </p>
      </section>
    </>
  )
}

export default Discover;