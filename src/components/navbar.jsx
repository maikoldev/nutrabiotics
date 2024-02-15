import Image from "next/image";

import logoImage from "@/assets/logo-header.png";

import MenuIcon from "@/assets/icons/menu.svg";
import SearchIcon from "@/assets/icons/search.svg";

export default function Navbar() {
  return (
    <div className="h-24 container mx-auto grid grid-cols-12 content-center py-3">
      <div className="col-span-4">
        <Image src={logoImage} alt="Logo Header" width={230} />
      </div>
      <nav className="text-purple col-span-6 flex items-center">
        <ul className="flex gap-3 font-semibold">
          <li className="nav-link">
            <a href="#">Inicio</a>
          </li>
          <li className="nav-link">
            <a href="#">Nosotros</a>
          </li>
          <li className="nav-link">
            <a href="#">Descubre</a>
          </li>
          <li className="nav-link nav-link-active">
            <a href="#">Productos</a>
          </li>
          <li className="nav-link">
            <a href="#">Educación</a>
          </li>
          <li className="nav-link">
            <a href="#">Calidad</a>
          </li>
        </ul>
      </nav>
      <div className="col-span-2 flex items-center justify-end gap-6">
        <button>
          <Image src={MenuIcon} alt="Menu Icon" />
        </button>
        <button>
          <Image src={SearchIcon} alt="Search Icon" />
        </button>
      </div>
    </div>
  );
}
