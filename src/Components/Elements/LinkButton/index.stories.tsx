import { ArrowPathIcon } from "@heroicons/react/24/outline";
import { Meta, StoryObj } from "@storybook/react";
import { LinkButton } from "@/Components/Elements/LinkButton";

export default {
  title: "Components/Elements/LinkButton",
  component: LinkButton,
  tags: ["autodocs"],
  args: {
    href: "/",
    children: "LinkButton",
  },
} as Meta<typeof LinkButton>;

type Story = StoryObj<typeof LinkButton>;

export const Default: Story = {};

export const Sizes: Story = {
  args: {
    size: "xs",
  },
};

export const Themes: Story = {
  args: {
    theme: "success",
  },
};

export const Radius: Story = {
  args: {
    radius: "full",
  },
};

export const WithLeftIcon: Story = {
  args: {
    leftIcon: <ArrowPathIcon className="h-5 w-5" />,
  },
};

export const WithRightIcon: Story = {
  args: {
    rightIcon: <ArrowPathIcon className="h-5 w-5" />,
  },
};

export const WithBothIcons: Story = {
  args: {
    leftIcon: <ArrowPathIcon className="h-5 w-5" />,
    rightIcon: <ArrowPathIcon className="h-5 w-5" />,
  },
};
