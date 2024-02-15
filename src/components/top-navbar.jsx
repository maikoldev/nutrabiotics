import Image from "next/image";

import MxFlag from "@/assets/flags/mx.svg";
import ChevronRightIcon from "@/assets/icons/chevron-right.svg";

export default function TopNavbar() {
  return (
    <div className="flex items-center bg-purple text-white h-11 py-1">
      <div className="container mx-auto flex items-center justify-end">
        <a href="" className="uppercase underline mr-6">
          Iniciar Sesión
        </a>
        <div className="flex mr-5">
          <Image src={MxFlag} alt="México Flag" />
          <Image src={ChevronRightIcon} alt="Chevron Right Icon" />
        </div>
        <div>
          <a href="#" className="font-light">EN</a>/
          <a href="#" className="font-black underline">ES</a>
        </div>
      </div>
    </div>
  );
};
