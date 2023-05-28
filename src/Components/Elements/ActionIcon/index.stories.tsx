import { PlusIcon } from "@heroicons/react/24/solid";
import { Meta, StoryObj } from "@storybook/react";
import { ActionIcon } from "@/components/Elements/ActionIcon";

export default {
  title: "Components/Elements/ActionIcon",
  component: ActionIcon,
  tags: ["autodocs"],
  args: {
    children: <PlusIcon className="h-5 w-5 stroke-white" />,
  },
} as Meta<typeof ActionIcon>;

type Story = StoryObj<typeof ActionIcon>;

export const Default: Story = {
  args: {},
};

export const Sizes: Story = {
  args: {
    size: "xs",
    children: <PlusIcon className="h-3 w-3 stroke-white" />,
  },
};

export const Themes: Story = {
  args: {
    theme: "success",
  },
};

export const Loading: Story = {
  args: {
    loading: true,
  },
};

export const Disabled: Story = {
  args: {
    disabled: true,
  },
};
