/* eslint-disable @next/next/no-img-element */

"use client";

import { Dialog, Transition } from "@headlessui/react";
import { ShoppingCartIcon, XMarkIcon } from "@heroicons/react/24/outline";
import clsx from "clsx";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { Fragment } from "react";
import { Image } from "@/components/Elements/Image";
import { useSideBarState } from "@/components/Layouts/store";

const navigation = [
  { name: "すべての商品", href: "/" },
  { name: "野菜セット", href: "/products?category=vegetables" },
  { name: "野菜", href: "/products?category=vegetable" },
  { name: "肉", href: "/products?category=meat" },
  { name: "果物", href: "/products?category=fruit" },
  { name: "飲み物", href: "/products?category=drink" },
  { name: "魚介類", href: "/products?category=seafood" },
  { name: "卵・乳製品", href: "/products?category=egg" },
  { name: "米・パン", href: "/products?category=rice" },
  { name: "お菓子", href: "/products?category=sweets" },
  { name: "調味料", href: "/products?category=seasoning" },
  { name: "その他", href: "/products?category=other" },
];

const regulars = [
  {
    name: "野菜セット",
    href: "/products/regulars?category=vegetables",
    initial: "V",
  },
  {
    name: "米",
    href: "/products/regulars?category=rice",
    initial: "R",
  },
  {
    name: "果物",
    href: "/products/regulars?category=fruit",
    initial: "F",
  },
  {
    name: "肉",
    href: "/products/regulars?category=meat",
    initial: "M",
  },
];

export const Nav = () => {
  const [sidebarOpen, setSidebarOpen] = useSideBarState((state) => [
    state.sidebarOpen,
    state.setSidebarOpen,
  ]);

  const pathname = usePathname();

  return (
    <>
      <Transition.Root as={Fragment} show={sidebarOpen}>
        <Dialog
          as="div"
          className="relative z-50 md:hidden"
          onClose={setSidebarOpen}
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
            <div className="fixed inset-0 bg-gray-900/80" />
          </Transition.Child>

          <div className="fixed inset-0 flex">
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className="relative mr-16 flex w-full max-w-xs flex-1">
                <Transition.Child
                  as={Fragment}
                  enter="ease-in-out duration-300"
                  enterFrom="opacity-0"
                  enterTo="opacity-100"
                  leave="ease-in-out duration-300"
                  leaveFrom="opacity-100"
                  leaveTo="opacity-0"
                >
                  <div className="absolute left-full top-0 flex w-16 justify-center pt-5">
                    <button
                      className="-m-2.5 p-2.5"
                      onClick={setSidebarOpen}
                      type="button"
                    >
                      <span className="sr-only">Close sidebar</span>
                      <XMarkIcon
                        aria-hidden="true"
                        className="h-6 w-6 text-white"
                      />
                    </button>
                  </div>
                </Transition.Child>
                {/* Sidebar component, swap this element with another sidebar if you like */}
                <div className="flex grow flex-col gap-y-5 overflow-y-auto bg-white px-6 pb-4">
                  <div className="flex h-16 shrink-0 items-center">
                    <Image
                      alt="Your Company"
                      className="h-8 w-auto"
                      src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600"
                    />
                  </div>
                  <nav className="flex flex-1 flex-col">
                    <ul className="flex flex-1 flex-col gap-y-7">
                      <li>
                        <ul className="-mx-2 space-y-1">
                          {navigation.map((item) => (
                            <li key={item.name}>
                              <a
                                className={clsx(
                                  pathname === item.href
                                    ? "bg-gray-50 text-teal-600"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-teal-600",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                )}
                                href={item.href}
                              >
                                {item.name}
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li>
                        <div className="text-xs font-semibold leading-6 text-gray-400">
                          定期便の商品を探す
                        </div>
                        <ul className="-mx-2 mt-2 space-y-1">
                          {regulars.map((regular) => (
                            <li key={regular.name}>
                              <a
                                className={clsx(
                                  pathname === regular.href
                                    ? "bg-gray-50 text-amber-600"
                                    : "text-gray-700 hover:bg-gray-50 hover:text-amber-600",
                                  "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                                )}
                                href={regular.href}
                              >
                                <span
                                  className={clsx(
                                    pathname === regular.href
                                      ? "border-amber-600 text-amber-600"
                                      : "border-gray-200 text-gray-400 group-hover:border-amber-600 group-hover:text-amber-600",
                                    "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                                  )}
                                >
                                  {regular.initial}
                                </span>
                                <span className="truncate">{regular.name}</span>
                              </a>
                            </li>
                          ))}
                        </ul>
                      </li>
                      <li className="mt-auto">
                        <Link
                          className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-gray-600"
                          href="/"
                        >
                          <ShoppingCartIcon
                            aria-hidden="true"
                            className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-600"
                          />
                          カートを見る
                        </Link>
                      </li>
                    </ul>
                  </nav>
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
      <div className="hidden md:fixed md:inset-y-0 md:z-50 md:flex md:w-72 md:flex-col">
        {/* Sidebar component, swap this element with another sidebar if you like */}
        <div className="flex grow flex-col gap-y-5 overflow-y-auto border-r border-gray-200 bg-white px-6 pb-4">
          <div className="flex h-16 shrink-0 items-center">
            <img
              alt="Your Company"
              className="h-8 w-auto"
              src="https://tailwindui.com/img/logos/mark.svg?color=teal&shade=600"
            />
          </div>
          <nav className="flex flex-1 flex-col">
            <ul className="flex flex-1 flex-col gap-y-7">
              <li>
                <ul className="-mx-2 space-y-1">
                  {navigation.map((item) => (
                    <li key={item.name}>
                      <a
                        className={clsx(
                          pathname === item.href
                            ? "bg-gray-50 text-teal-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-teal-600",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                        href={item.href}
                      >
                        {item.name}
                      </a>
                    </li>
                  ))}
                </ul>
              </li>
              <li>
                <div className="text-xs font-semibold leading-6 text-gray-400">
                  定期便の商品を探す
                </div>
                <ul className="-mx-2 mt-2 space-y-1">
                  {regulars.map((regular) => (
                    <li key={regular.name}>
                      <a
                        className={clsx(
                          pathname === regular.href
                            ? "bg-gray-50 text-amber-600"
                            : "text-gray-700 hover:bg-gray-50 hover:text-amber-600",
                          "group flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6"
                        )}
                        href={regular.href}
                      >
                        <span
                          className={clsx(
                            pathname === regular.href
                              ? "border-amber-600 text-amber-600"
                              : "border-gray-200 text-gray-400 group-hover:border-amber-600 group-hover:text-amber-600",
                            "flex h-6 w-6 shrink-0 items-center justify-center rounded-lg border bg-white text-[0.625rem] font-medium"
                          )}
                        >
                          {regular.initial}
                        </span>
                        <span className="truncate">{regular.name}</span>
                      </a>
                    </li>
                  ))}
                </ul>
              </li>{" "}
              <li className="mt-auto">
                <Link
                  className="group -mx-2 flex gap-x-3 rounded-md p-2 text-sm font-semibold leading-6 text-gray-700 hover:bg-gray-50 hover:text-gray-600"
                  href="/"
                >
                  <ShoppingCartIcon
                    aria-hidden="true"
                    className="h-6 w-6 shrink-0 text-gray-400 group-hover:text-gray-600"
                  />
                  カートを見る
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </div>
    </>
  );
};
