import { Disclosure } from "@headlessui/react";
import { Bars3Icon, XMarkIcon } from "@heroicons/react/24/outline";
import HeaderLogo from "../atoms/HeaderLogo";
import SignGroup from "../molecules/SignGroup";
import Dropdown from "../atoms/Dropdown";

const navigation = [
  { name: "About", href: "#", current: false },
  { name: "Pricing", href: "#", current: true },
  { name: "Blog", href: "#", current: false },
];

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

export default function Navbar() {
  return (
    <Disclosure as="nav" className="bg-transparent">
      {({ open }) => (
        <>
          <div className="mx-auto w-[95%] max-w-[1640px]">
            <div className="relative flex h-16 items-center justify-between">
              <div className="flex items-center lg:hidden mr-3">
                {/* Mobile menu button*/}
                <Disclosure.Button className="relative inline-flex items-center justify-center rounded-md p-2 text-white hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white">
                  <span className="absolute -inset-0.5" />
                  <span className="sr-only">Open main menu</span>
                  {open ? (
                    <XMarkIcon className="block h-6 w-6" aria-hidden="true" />
                  ) : (
                    <Bars3Icon className="block h-6 w-6" aria-hidden="true" />
                  )}
                </Disclosure.Button>
              </div>
              <div className="flex flex-1 items-center justify-start">
                <div className="flex flex-shrink-0 items-center">
                  <HeaderLogo />
                </div>
                <div className="hidden sm:ml-6 lg:block lg:mx-auto">
                  <div className="flex space-x-8">
                    <Dropdown />
                    {navigation.map((item) => (
                      <a
                        key={item.name}
                        href={item.href}
                        className={classNames(
                          item.current
                            ? "text-blue hover:underline"
                            : "text-gray-light hover:text-blue",
                          "text-xl leading-[30px] font-medium cursor-pointer transition-colors"
                        )}
                        aria-current={item.current ? "page" : undefined}
                      >
                        {item.name}
                      </a>
                    ))}
                  </div>
                </div>
              </div>
              <div className="absolute inset-y-0 right-0 flex items-center pr-2 sm:static sm:inset-auto sm:ml-6 sm:pr-0">
                <SignGroup />
              </div>
            </div>
          </div>

          <Disclosure.Panel className="lg:hidden">
            <div className="space-y-1 px-2 pb-3 pt-2">
              <div className="ml-3 mt-2">
                <Dropdown />
              </div>

              {navigation.map((item) => (
                <Disclosure.Button
                  key={item.name}
                  as="a"
                  href={item.href}
                  className={classNames(
                    item.current
                      ? "text-blue hover:underline"
                      : "text-gray-light hover:bg-gray-700 hover:text-blue",
                    "block px-3 py-2 text-xl leading-[30px] font-medium cursor-pointer transition-colors"
                  )}
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
