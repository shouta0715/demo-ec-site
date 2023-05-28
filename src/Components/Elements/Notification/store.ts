import { create } from "zustand";

export type NotificationType = "success" | "error" | "info";

const genRandomId = () => {
  return Math.random().toString(36).substr(2, 9);
};

type TextProps = {
  title: string;
  message?: string;
};

export type NotificationState = {
  id: string;
  duration: number;
  type: NotificationType;
  isShown: boolean;
  isPersistent: boolean;
  timerId?: NodeJS.Timeout; // Add this line
} & TextProps;

type NotificationActions = {
  onShow: (state: Omit<NotificationState, "id">) => void;
  onHide: (id: string) => void;
};

export type Notification = {
  state: NotificationState[];
} & NotificationActions;

const defaultState: NotificationState[] = [];

export const useNotificationState = create<Notification>((set, get) => ({
  state: defaultState,
  onShow: (state) => {
    const id = genRandomId();
    const { state: currentState } = get();

    if (state.isPersistent) {
      const newState = [...currentState, { ...state, id }];
      set({ state: newState });

      return;
    }
    const timerId = setTimeout(() => {
      get().onHide(id);
    }, state.duration);

    const newState = [...currentState, { ...state, id, timerId }];
    set({ state: newState });
  },

  onHide: (id) => {
    const { state: currentState } = get();
    const notification = currentState.find((item) => item.id === id);
    if (notification && notification.timerId) {
      clearTimeout(notification.timerId);
    }
    const newState = currentState.filter((item) => item.id !== id);
    set({ state: newState });
  },
}));
