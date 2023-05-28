import { Meta, StoryObj } from "@storybook/react";
import { Nav } from "@/components/Layouts/Nav";
import { createViewPortParameters } from "@/tests/storybook";

export default {
  title: "Components/Layouts/Nav",
  component: Nav,
  tags: ["autodocs"],
} as Meta<typeof Nav>;

type Story = StoryObj<typeof Nav>;

export const Default: Story = {};

export const Lg: Story = {
  parameters: {
    ...createViewPortParameters("lg"),
  },
};
