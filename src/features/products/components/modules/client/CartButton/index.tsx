"use client";

import { Button } from "@/components/Elements/Button";
import { useNotificationState } from "@/components/Elements/Notification/store";

export const CartButton = ({ name }: { name: string }) => {
  const onShow = useNotificationState((state) => state.onShow);

  return (
    <Button
      className="flex w-full  justify-center px-8 py-2"
      onClick={() => {
        onShow({
          title: "カートに追加しました",
          type: "success",
          isPersistent: false,
        });
      }}
      radius="md"
      size="sm"
      theme="primary"
    >
      カートに追加<span className="sr-only">{name}をカートに追加する</span>
    </Button>
  );
};
