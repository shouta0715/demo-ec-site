import {
  MagnifyingGlassIcon,
  ShoppingCartIcon,
} from "@heroicons/react/24/outline";
import React from "react";
import { ActionIcon } from "@/components/Elements/ActionIcon";
import { Avatar } from "@/components/Elements/Avatar";
import { MenuButton } from "@/components/Layouts/Header/clients/MenuButton";

export const Header = async () => {
  // const user = getUser();

  return (
    <div className="flex h-16 items-center gap-x-4 border-b border-gray-200 bg-white px-4 shadow-sm sm:gap-x-6 sm:px-6 md:px-0 md:shadow-none">
      <MenuButton />

      <div aria-hidden="true" className="h-6 w-px bg-gray-200 md:hidden" />

      <div className="flex flex-1 gap-x-4 self-stretch md:gap-x-6">
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
        <div className="flex items-center gap-x-4 md:gap-x-6">
          <div className="flex  items-center justify-center md:gap-x-3">
            <div className="mt-1 flex items-center gap-x-1.5">
              <button className="text-xs text-blue-600 hover:text-blue-500">
                ログイン
              </button>
              <div
                aria-hidden="true"
                className="hidden md:block md:h-6 md:w-px md:bg-gray-200"
              />
              <button className="text-xs text-blue-600 hover:text-blue-500">
                新規登録
              </button>
            </div>
            <Avatar
              alt="avatar"
              className="hidden lg:block"
              isAction
              size="sm"
            />
          </div>

          {/* Separator */}
          <div
            aria-hidden="true"
            className="hidden md:block md:h-6 md:w-px md:bg-gray-200"
          />
          <ActionIcon
            className="-m-2.5 p-2.5 text-gray-400 shadow-none hover:text-gray-500"
            theme="transparent"
            type="button"
          >
            <span className="sr-only">カートを見る</span>
            <ShoppingCartIcon aria-hidden="true" className="h-6 w-6" />
          </ActionIcon>
        </div>
      </div>
    </div>
  );
};
