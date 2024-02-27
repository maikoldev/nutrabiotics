import Link from "next/link";
import { Fragment, useEffect, useState } from "react";
import { Listbox, Transition } from '@headlessui/react';

import { attentionNav, interestNav, mainNav } from '@/utils/navigation'

import ChevronDownIcon from '@/components/icons/ChevronDownIcon';
import MexicoFlag from "@/components/flags/MexicoFlag";
import XMarkIcon from "../icons/XMarkIcon";

import LayoutTitle from "@/components/layouts/LayoutTitle";

const langs = [
  { name: 'Español', code: 'es' },
  { name: 'Inglés', code: 'en' }
];

const countries = [
  { name: 'México', code: 'MX', flag: 'MexicoFlag' },
  { name: 'Colombia', code: 'CO', flag: 'MexicoFlag' },
];

const DropMenu = ({ setIsOpen, ...props }) => {
  useEffect(() => {
    const body = document.querySelector("body");
    body.style.overflow = "hidden";

    return () => {
      body.style.overflow = "auto";
    };
  }, []);

  const [selectedCountry, setSelectedCountry] = useState(countries[0]);
  const [selectedLang, setSelectedLang] = useState(langs[0]);

  return (
    <div className="bg-purple text-white fixed h-screen w-screen left-0 top-0 p-6 overflow-scroll z-20">
      <div className="flex justify-between">
        <div className="w-[84px]">
          <Listbox value={selectedCountry} onChange={setSelectedCountry}>
            <div className="relative">
              <Listbox.Button className="w-full flex items-center justify-between gap-2 rounded-full border border-white/50 py-[6px] px-2">
                {selectedCountry.code == 'MX' && <MexicoFlag className="rounded-full" />}
                {selectedCountry.code == 'CO' && <MexicoFlag className="rounded-full" />}
                <ChevronDownIcon aria-hidden="true" />
              </Listbox.Button>
              <Transition
                as={Fragment}
                leave="transition ease-in duration-100"
                leaveFrom="opacity-100"
                leaveTo="opacity-0"
              >
                <Listbox.Options className="absolute w-full bg-purple flex flex-col gap-2 border border-white/50 p-2 rounded-md mt-2">
                  {countries.map((country, index) => (
                    <Listbox.Option
                      key={`${country}-${index}`}
                      value={country}
                      className={({ active }) => `flex items-center gap-2 ${active ? 'underline' : ''}`}
                    >
                      {country.code == 'MX' && <MexicoFlag className="rounded-full" />}
                      {country.code == 'CO' && <MexicoFlag className="rounded-full" />}
                      {country.code}
                    </Listbox.Option>
                  ))}
                </Listbox.Options>
              </Transition>
            </div>
          </Listbox>
        </div>
        <button onClick={() => setIsOpen(false)}>
          <XMarkIcon />
        </button>
      </div>

      <ul className="text-center mb-3">
        {mainNav.map((item, index) => (
          <li className="py-3" key={`item-${index}`}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <LayoutTitle>Atención</LayoutTitle>
      <ul className="text-center mb-3">
        {attentionNav.map((item, index) => (
          <li className="py-3" key={`attention-${index}`}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <LayoutTitle>De interés</LayoutTitle>
      <ul className="text-center mb-3">
        {interestNav.map((item, index) => (
          <li className="py-3" key={`interest-${index}`}>
            <Link href={item.href}>{item.name}</Link>
          </li>
        ))}
      </ul>

      <div className="w-[140px] mx-auto">
        <Listbox value={selectedLang} onChange={setSelectedLang}>
          <Listbox.Button className="w-full flex items-center justify-between gap-2 rounded-full border border-white/50 py-[6px] px-3">
            <span className="block pl-1 truncate text-small uppercase underline">{selectedLang.name}</span>
            <ChevronDownIcon aria-hidden="true" />
          </Listbox.Button>
          <Transition
            as={Fragment}
            leave="transition ease-in duration-100"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Listbox.Options className="border border-white/50 py-2 px-4 rounded-md mt-2">
              {langs.map((lang, index) => (
                <Listbox.Option
                  key={`${lang}-${index}`}
                  value={lang}
                  className={({ active }) => `truncate text-small uppercase py-1 ${active ? 'underline' : ''}`}
                >
                  {lang.name}
                </Listbox.Option>
              ))}
            </Listbox.Options>
          </Transition>
        </Listbox>
      </div>
    </div>
  );
};

export default DropMenu;