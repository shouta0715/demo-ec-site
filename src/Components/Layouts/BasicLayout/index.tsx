import React from "react";
import { NotificationProvider } from "@/components/Elements/Notification/Provider";
import { Header } from "@/components/Layouts/Header";
import { Nav } from "@/components/Layouts/Nav";

export const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotificationProvider>
      <Nav />
      <div className="lg:pl-72">
        <div className="sticky top-0 z-40 lg:mx-auto lg:max-w-7xl lg:px-8">
          <Header />
        </div>
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
            {children}
          </div>
        </main>
      </div>
    </NotificationProvider>
  );
};
