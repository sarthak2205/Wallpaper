import { Fragment } from "react";
import { Disclosure, Menu, Transition } from "@headlessui/react";

import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import Logo from "../Assets/Images/Logo.svg";
import { Link } from "react-router-dom";

const navigations = [
  { name: "Home", path: "/" },
  { name: "PC Wallpapers", path: "/" },
  { name: "Phone Wallpapers", path: "/" },
  { name: "4k Wallpapers", path: "/" },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Example() {
  return (
    <Disclosure as="header" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto max-w-7xl px-2 py-1.5 sm:px-4 lg:divide-y lg:divide-gray-700 lg:px-8">
            <div className="relative flex h-16 justify-between">
              <div className="flex flex-shrink-0 items-center p-2">
                <div className="bg-white rounded-full p-2 drop-shadow-xl">
                  <img
                    className="block lg:hidden h-8 w-8"
                    src={Logo}
                    alt="Your Company"
                  />
                </div>
              </div>

              <div className="relative z-10 flex items-center lg:hidden">
                {/* Mobile menu button */}
                <Disclosure.Button className="inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="sr-only">Open menu</span>
                  {open ? (
                    <HiX className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <div className="text-white">
                      <HiOutlineMenuAlt3
                        className="block h-6 w-6"
                        aria-hidden="true"
                      />
                    </div>
                  )}
                </Disclosure.Button>
              </div>
            </div>
          </div>

          <Disclosure.Panel as="nav" className="lg:hidden" aria-label="Global">
            <div className="space-y-1 px-2 pt-2 pb-3">
              {navigations.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className="block rounded-md py-2 px-3 font-bold text-white text-4xl"
                  aria-current={item.current ? "page" : undefined}
                >
                  {item.name}
                </Disclosure.Button>
              ))}
            </div>
          </Disclosure.Panel>
        </>
      )}
    </Disclosure>
  );
}
