import React from "react";
import { NotificationProvider } from "@/components/Elements/Notification/Provider";
import { Header } from "@/components/Layouts/Header";
import { Nav } from "@/components/Layouts/Nav";

export const BasicLayout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NotificationProvider>
      <Nav />
      <div className="md:pl-72">
        <div className="sticky top-0 z-40 md:mx-auto md:max-w-7xl md:px-8">
          {/* @ts-expect-error Server Component */}
          <Header />
        </div>
        <main className="py-10">
          <div className="mx-auto max-w-7xl px-4 sm:px-6 md:px-8">
            {children}
          </div>
        </main>
      </div>
    </NotificationProvider>
  );
};
