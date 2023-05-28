import { create } from "zustand";

type SideBarState = {
  sidebarOpen: boolean;
  setSidebarOpen: () => void;
};

export const useSideBarState = create<SideBarState>((set) => ({
  sidebarOpen: false,
  setSidebarOpen: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
}));
