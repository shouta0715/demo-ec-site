import React, { ReactNode } from "react";
import { Notification } from "@/components/Elements/Notification";

export const NotificationProvider = ({ children }: { children: ReactNode }) => {
  return (
    <>
      {children}
      <Notification />
    </>
  );
};
