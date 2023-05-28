"use client";

import { Bars3Icon } from "@heroicons/react/24/outline";
import React from "react";
import { useSideBarState } from "@/components/Layouts/store";

export const MenuButton = () => {
  const setSideBarOpen = useSideBarState((state) => state.setSidebarOpen);

  return (
    <button
      className="-m-2.5 p-2.5 text-gray-700 md:hidden"
      onClick={setSideBarOpen}
      type="button"
    >
      <span className="sr-only">Open sidebar</span>
      <Bars3Icon aria-hidden="true" className="h-6 w-6" />
    </button>
  );
};
