import type { StoryObj, Meta } from "@storybook/react";
import { Button } from "@/components/Elements/Button";
import { Notification } from "@/components/Elements/Notification";
import {
  NotificationState,
  useNotificationState,
} from "@/components/Elements/Notification/store";

const defaultState: NotificationState = {
  duration: 5000,
  type: "success",
  isShown: true,
  isPersistent: false,
  title: "",
  message: "",
  id: "",
};

const ShowNotification = (props: Partial<NotificationState>) => {
  const { onShow } = useNotificationState();

  const { ...rest } = props;

  return (
    <Button
      className="rounded-md bg-blue-500 px-4 py-2 text-white"
      onClick={() =>
        onShow({
          ...defaultState,
          ...rest,
        })
      }
    >
      Show Notification
    </Button>
  );
};

const createDecorators = (props: Partial<NotificationState>) => () =>
  (
    <>
      <Notification />
      <ShowNotification {...props} />
    </>
  );

type Story = StoryObj<typeof Notification>;

export default {
  title: "Components/Elements/Notification",
  component: Notification,
} as Meta<typeof Notification>;

export const Default: Story = {
  decorators: [createDecorators({ title: "Default" })],
};

export const Success: Story = {
  decorators: [createDecorators({ title: "Success", type: "success" })],
};

export const Error: Story = {
  decorators: [createDecorators({ title: "Error", type: "error" })],
};

export const Info: Story = {
  decorators: [createDecorators({ title: "Info", type: "info" })],
};

export const Persistent: Story = {
  decorators: [createDecorators({ title: "Persistent", isPersistent: true })],
};

export const WithMessage: Story = {
  decorators: [
    createDecorators({
      title: "With Message",
      message: "This is a message",
    }),
  ],
};

export const LongMessage: Story = {
  decorators: [
    createDecorators({
      title: "Long Message",
      message:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl. ",
      isPersistent: true,
    }),
  ],
};

export const LongTitle: Story = {
  decorators: [
    createDecorators({
      title:
        "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Donec euismod, nisl eget ultricies ultrices, nunc nisl ultricies nunc, quis aliquam nisl nunc eu nisl.",
      message: "This is a message",
    }),
  ],
};

export const CommentError: Story = {
  decorators: [
    createDecorators({
      title: "コメントの投稿に失敗しました",
      type: "error",
      message: "再度お試しください",
    }),
  ],
};
