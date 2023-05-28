import { Meta, StoryObj } from "@storybook/react";
import { Avatar } from "@/components/Elements/Avatar";

export default {
  title: "Components/Elements/Avatar",
  component: Avatar,
  tags: ["autodocs"],
} as Meta<typeof Avatar>;

type Story = StoryObj<typeof Avatar>;

export const Default: Story = {};

export const Size: Story = {
  args: {
    size: "sm",
  },
};

export const Radius: Story = {
  args: {
    radius: "md",
  },
};

export const Action: Story = {
  args: {
    isAction: true,
  },
};

export const Login: Story = {
  args: {
    isLogin: true,
    src: "https://avatars.githubusercontent.com/u/4995816?v=4",
  },
};
