import Image from "next/image";
import Link from "next/link";

import { footerNav, attentionNav, interestNav } from '@/utils/navigation'

import LogoDark from "@/assets/logo-dark.png";

import CalendarIcon from "@/components/icons/CalendarIcon";
import FacebookIcon from "@/assets/icons/facebook.png";
import InstagramIcon from "@/assets/icons/instagram.png";
import LinkedinIcon from "@/assets/icons/linkedin.png"
import PhoneIcon from "@/components/icons/PhoneIcon";
import YoutubeIcon from "@/assets/icons/youtube.png"

import CustomButton from "@/components/custom-button";
import LayoutTitle from "@/components/layouts/LayoutTitle";

import AuroraBottomImg from "@/assets/aurora-bottom.png"
import AuroraBottomResImg from "@/assets/aurora-bottom-res.png"
import AuroraSplashBottomImg from "@/assets/aurora-splash-bottom.png"
import AuroraSplashBottomResImg from "@/assets/aurora-splash-bottom-res.png"

const CustomFooter = () => {
  return (
    <>
      <div className="relative translate-y-[22%] md:hidden -z-10">
        <Image src={AuroraSplashBottomResImg} className="w-full" alt="Aurora Splah Bottom" />
        <Image src={AuroraBottomResImg} className="absolute w-full translate-y-[-62%]" alt="Aurora Bottom" />
      </div>
      <div className="relative translate-y-[32%] max-md:hidden -z-10">
        <Image src={AuroraSplashBottomImg} className="w-full" alt="Aurora Splah Bottom" />
        <Image src={AuroraBottomImg} className="absolute w-full translate-y-[-71%]" alt="Aurora Bottom" />
      </div>
      <footer className="bg-dark-purple text-white py-8">
        <div className="container mx-auto">
          <div className="flex max-md:flex-col md:justify-between items-center gap-8 mb-8">
            <Image src={LogoDark} alt="Logo Footer" className="w-[230px]" quality={100} />
            <div className="flex gap-4">
              <a href="#">
                <Image src={FacebookIcon} alt="Facebook" />
              </a>
              <a href="#">
                <Image src={LinkedinIcon} alt="Linkedin" />
              </a>
              <a href="#">
                <Image src={YoutubeIcon} alt="Youtube" />
              </a>
              <a href="#">
                <Image src={InstagramIcon} alt="Instagram" />
              </a>
            </div>
          </div>

          <hr className="border-white/50" />

          <div className="grid justify-center md:grid-cols-2 lg:grid-cols-12 gap-8 py-6">
            <div className="max-lg:hidden lg:col-span-2">
              <LayoutTitle>Compañía</LayoutTitle>
              <ul className="text-base leading-loose">
                {footerNav.map((item, index) => (
                  <li key={`footer-${index}`}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-lg:hidden lg:col-span-2">
              <LayoutTitle>Atención</LayoutTitle>
              <ul className="text-base leading-loose">
                {attentionNav.map((item, index) => (
                  <li key={`attention-${index}`}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-lg:hidden lg:col-span-2">
              <LayoutTitle>De interés</LayoutTitle>
              <ul className="text-base leading-loose">
                {interestNav.map((item, index) => (
                  <li key={`interest-${index}`}>
                    <Link href={item.href}>{item.name}</Link>
                  </li>
                ))}
              </ul>
            </div>

            <div className="max-md:text-center lg:col-span-3 xl:col-span-4">
              <LayoutTitle>Contact center</LayoutTitle>
              <div className="flex max-md:flex-col md:gap-3">
                <PhoneIcon className="w-6 max-md:mx-auto mb-3 md:mt-1" />
                <p className="text-small md:text-base leading-loose mb-4">
                  Bogotá: 601 443 0900 <br />
                  Cali: 602 380 8906 <br />
                  Medellín: 604 283 6948
                </p>
              </div>
              <div className="flex max-md:flex-col md:gap-3">
                <CalendarIcon className="w-6 max-md:mx-auto mb-3 md:mt-1" />
                <p className="text-small md:hidden leading-loose">
                  Lunes a viernes <br />
                  8:00 AM a 6:00 PM <br />
                  Sábados <br />
                  8:00 AM a 1:00 PM <br />
                </p>
                <p className="text-base max-md:hidden">
                  Lunes a viernes de 8:00 AM a 6:00 PM <br />
                  Sábados de 8:00 AM a 1:00 PM
                </p>
              </div>
            </div>

            <div className="max-md:text-center lg:col-span-3 xl:col-span-2 md:flex flex-col items-end">
              <div>
                <LayoutTitle>Suscríbete</LayoutTitle>
                <form action="" className="flex flex-col gap-4 w-[220px]">
                  <input
                    type="text"
                    placeholder="Ingresa tu e-mail"
                    className="bg-transparent text-base border rounded-full border-white text-white placeholder:text-white py-[6px] px-6 text-center outline-none"
                  />
                  <CustomButton type="submit" color="white" className="md:text-base md:font-bold py-[6px]">
                    Suscribirme
                  </CustomButton>
                </form>
              </div>
            </div>
          </div>

          <hr className="border-white/50" />

          <div className="text-center pt-6">
            <p className="w-[80%] mx-auto uppercase">
              Los pioneros de la medicina funcional <span className="font-black">desde 2011</span>
            </p>
          </div>
        </div>
      </footer>
      <div className="bg-dark-blue text-white text-small font-semibold py-5">
        <div className="container mx-auto text-center flex max-md:flex-col md:flex-row-reverse justify-between items-center gap-2">
          <Link href="#">Términos y condiciones</Link>
          <p>Copyright © 2023. Todos los derechos reservados</p>
        </div>
      </div>
    </>
  );
};

export default CustomFooter;