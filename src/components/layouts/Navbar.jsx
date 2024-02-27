"use client"

import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import { usePathname } from "next/navigation";

import { mainNav } from '@/utils/navigation'

import LogoImage from "@/assets/logo-header.png";

import BarsIcon from "@/components/icons/BarsIcon";
import MagnifyingGlassIcon from "@/components/icons/MagnifyingGlassIcon";

import DropMenu from "@/components/layouts/DropMenu";

export default function Navbar() {
  const pathname = usePathname();
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="shadow-md">
      <div className="container mx-auto h-20 md:h-24 py-3 grid grid-cols-12 content-center">
        <div className="col-span-6 md:col-span-3 lg:col-span-4">
          <Link href="/">
            <Image src={LogoImage} alt="Logo Header" className="w-[115px] md:w-[160px] lg:w-[230px]" quality={100} />
          </Link>
        </div>

        {isOpen && <DropMenu setIsOpen={setIsOpen} />}

        <nav className="text-purple col-span-8 lg:col-span-6 hidden md:flex items-center justify-center lg:justify-end">
          <ul className="flex gap-3 lg:gap-6 xl:gap-10 font-semibold">
            {mainNav.map((item, index) => (
              <li className="text-base font-semibold hover:font-black hover:underline transition" key={`item-${index}`}>
                <Link className={pathname == item.href ? 'font-black underline' : ''} href={item.href}>{item.name}</Link>
              </li>
            ))}
          </ul>
        </nav>

        <div className="col-span-6 md:col-span-1 lg:col-span-2 flex items-center justify-end gap-4 lg:gap-6">
          <button className="md:hidden" onClick={() => setIsOpen(true)}>
            <BarsIcon className="text-purple" />
          </button>
          <button className="max-md:hidden">
            <MagnifyingGlassIcon />
          </button>
        </div>
      </div>
    </div>
  );
}


