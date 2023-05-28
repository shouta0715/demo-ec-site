import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { ActionIcon } from "@/components/Elements/ActionIcon";
import { Avatar } from "@/components/Elements/Avatar";
import { MenuButton } from "@/components/Layouts/Header/clients/MenuButton";

export const Header = () => {
  return (
    <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 lg:px-0 lg:shadow-none">
      <MenuButton />

      <div aria-hidden="true" className="h-6 w-px bg-gray-200 lg:hidden" />

      <div className="flex flex-1 gap-x-4 self-stretch lg:gap-x-6">
        <form action="#" className="relative flex flex-1" method="GET">
          <label className="sr-only" htmlFor="search-field">
            商品を検索
          </label>
          <MagnifyingGlassIcon
            aria-hidden="true"
            className="pointer-events-none absolute inset-y-0 left-0 h-full w-5 text-gray-400"
          />
          <input
            className="block h-full w-full border-0 py-0 pl-8 pr-0 text-gray-900 placeholder:text-gray-400 focus:ring-0 sm:text-sm"
            id="search-field"
            name="search"
            placeholder="商品を検索"
            type="search"
          />
        </form>
        <div className="flex items-center gap-x-4 lg:gap-x-6">
          <div className="flex flex-col items-center justify-center space-y-1">
            <ActionIcon
              className="-m-2.5 p-2.5 text-gray-400 hover:text-gray-500"
              theme="transparent"
              type="button"
            >
              <span className="sr-only">カートを見る</span>
              <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
            </ActionIcon>
          </div>

          {/* Separator */}
          <div
            aria-hidden="true"
            className="hidden lg:block lg:h-6 lg:w-px lg:bg-gray-200"
          />
          <Avatar alt="avatar" isAction size="sm" />
        </div>
      </div>
    </div>
  );
};
