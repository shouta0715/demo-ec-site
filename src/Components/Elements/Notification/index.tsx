"use client";

import { Transition } from "@headlessui/react";
import {
  CheckCircleIcon,
  ExclamationCircleIcon,
  InformationCircleIcon,
  XMarkIcon,
} from "@heroicons/react/24/outline";
import clsx from "clsx";
import React, { Fragment } from "react";
import {
  NotificationType,
  useNotificationState,
} from "@/components/Elements/Notification/store";

const TypeIcons = {
  success: CheckCircleIcon,
  error: ExclamationCircleIcon,
  info: InformationCircleIcon,
};

const TypeColors = {
  success: "stroke-green-500",
  error: "stroke-red-500",
  info: "stroke-amber-500",
};

const TypeTextColors = {
  success: "text-green-500",
  error: "text-red-500",
  info: "text-amber-500",
};

const getTypeIcons = (type: NotificationType): React.FC => {
  const Icon = TypeIcons[type];

  return (props) => <Icon {...props} />;
};

export const Notification = () => {
  const { notifications, onHide } = useNotificationState((state) => ({
    notifications: state.state,
    onHide: state.onHide,
  }));

  return (
    <div
      aria-live="assertive"
      className="pointer-events-none fixed inset-0 z-[200] flex px-4 py-6 sm:p-6"
    >
      <div className="flex w-full flex-col items-center space-y-4  sm:items-end">
        {notifications.map((notification) => {
          return (
            <Transition
              key={notification.id}
              as={Fragment}
              enter="transform ease-out duration-300 transition"
              enterFrom="translate-y-2 opacity-0 sm:translate-y-0 sm:translate-x-2"
              enterTo="translate-y-0 opacity-100 sm:translate-x-0"
              leave="transition ease-in duration-100"
              leaveFrom="opacity-100"
              leaveTo="opacity-0"
              show={notification.isShown}
            >
              <div className="pointer-events-auto w-full max-w-sm overflow-hidden rounded-lg bg-white shadow-lg">
                <div className="p-4">
                  <div className="flex items-start">
                    <div className="shrink-0">
                      {getTypeIcons(notification.type)({
                        className: clsx(
                          "h-6 w-6",
                          TypeColors[notification.type]
                        ),
                      })}
                    </div>
                    <div className="ml-3 w-0 flex-1 pt-0.5">
                      <p
                        className={`text-sm font-bold text-gray-900 ${
                          TypeTextColors[notification.type]
                        }`}
                      >
                        {notification.title}
                      </p>
                      {notification.message && (
                        <p className="mt-1 text-sm text-gray-500">
                          {notification.message}
                        </p>
                      )}
                    </div>
                    <div className="ml-4 flex shrink-0">
                      <button
                        className="inline-flex rounded-md bg-white text-gray-400 hover:text-gray-500 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
                        onClick={() => onHide(notification.id)}
                        type="button"
                      >
                        <span className="sr-only">Close</span>
                        <XMarkIcon aria-hidden="true" className="h-5 w-5" />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            </Transition>
          );
        })}
      </div>
    </div>
  );
};
