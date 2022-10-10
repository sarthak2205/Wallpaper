/* This example requires Tailwind CSS v2.0+ */
import { Fragment, useState, useEffect } from "react";
import { Dialog, Menu, Transition } from "@headlessui/react";
import { HiOutlineMenuAlt3 } from "react-icons/hi";
import { HiX } from "react-icons/hi";

import { Link } from "react-router-dom";

const navigations = [
  { name: "Home", path: "/" },
  { name: "Features", path: "/" },
  { name: "Phone Wallpapers", path: "/" },
  { name: "4k Wallpapers", path: "/" },
  { name: "Contact Us", path: "/" },
];

export default function Example() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  return (
    <>
      {console.log(mobileMenuOpen)}
      <div className="w-full px-5 py-3.5 flex items-center justify-end md:hidden">
        {/* Mobile menu button */}
        <div onClick={() => setMobileMenuOpen(true)} className="text-white">
          <HiOutlineMenuAlt3 className="block h-6 w-6 text-white-100" aria-hidden="true" />
        </div>
      </div>

      {/* Mobile menu, show/hide this `div` based on menu open/closed state */}
      <Transition.Root show={mobileMenuOpen} as={Fragment}>
        <Dialog
          as="div"
          className="fixed inset-0 z-40 md:hidden"
          onClose={setMobileMenuOpen}
        >
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <Dialog.Overlay className="hidden sm:block sm:fixed sm:inset-0 sm:bg-gray-600 sm:bg-opacity-75" />
          </Transition.Child>

          <Transition.Child
            as={Fragment}
            enter="transition ease-out duration-150 sm:ease-in-out sm:duration-300"
            enterFrom="transform opacity-0 scale-110 sm:translate-x-full sm:scale-100 sm:opacity-100"
            enterTo="transform opacity-100 scale-100  sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leave="transition ease-in duration-150 sm:ease-in-out sm:duration-300"
            leaveFrom="transform opacity-100 scale-100 sm:translate-x-0 sm:scale-100 sm:opacity-100"
            leaveTo="transform opacity-0 scale-110  sm:translate-x-full sm:scale-100 sm:opacity-100"
          >
            <nav
              className="fixed z-40  bg-[#173640] inset-0 h-full w-full bg-rl-dark-grey sm:inset-y-0 sm:left-auto sm:right-0 sm:max-w-sm sm:w-full sm:shadow-lg"
              aria-label="Global"
            >
              <div className="py-5 flex items-center justify-between px-7">
                <div className="w-3/4">
                  <Link href="">
                    <div
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex flex-shrink-0 items-center "
                    >
                      <div className="bg-white rounded-full p-2 drop-shadow-xl">
                        {/*<img
                          className="block lg:hidden h-8 w-8"
                          src={Logo}
                          alt="Your Company"
  />*/}
                      </div>
                    </div>
                  </Link>
                </div>
                <button
                  type="button"
                  className="-mr-2 text-white inline-flex items-center justify-center p-2 rounded-md focus:outline-none focus:ring-2 focus:ring-inset focus:ring-transparent"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  <span className="sr-only">Close main menu</span>
                  <HiX className="block h-6 w-6 text-white-100" aria-hidden="true" />
                </button>
              </div>
              <div className="max-w-8xl mx-auto min-h-screen mt-12 py-3 px-2 sm:px-4 space-y-8 text-white">
                {navigations.map((item) => (
                  <Fragment key={item?.name}>
                    <Link href={`${item?.path}`}>
                      <a
                        target={item.newTab ? "_blank" : ""}
                        onClick={() => setMobileMenuOpen(false)}
                        className="block rounded-md py-5 px-3 text-white-100 font-bold text-4xl"
                      >
                        {item?.name}
                      </a>
                    </Link>
                  </Fragment>
                ))}
              </div>
            </nav>
          </Transition.Child>
        </Dialog>
      </Transition.Root>
    </>
  );
}
