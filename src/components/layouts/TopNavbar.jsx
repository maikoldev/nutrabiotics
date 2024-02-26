import Link from "next/link";

import ChevronDownIcon from "@/components/icons/ChevronDownIcon";
import MexicoFlag from "@/components/flags/MexicoFlag";

export default function TopNavbar() {
  return (
    <div className="max-md:hidden flex items-center bg-purple text-white h-11 py-1">
      <div className="container mx-auto flex items-center justify-end">
        <Link href="#" className="text-small uppercase underline mr-6">
          Iniciar Sesión
        </Link>
        <div className="flex items-center mr-5">
          <MexicoFlag />
          <ChevronDownIcon />
        </div>
        <div className="text-small">
          <Link href="#" className="font-light">EN</Link>/
          <Link href="#" className="font-extrabold underline">ES</Link>
        </div>
      </div>
    </div>
  );
};
