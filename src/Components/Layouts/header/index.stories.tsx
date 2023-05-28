import { Meta, StoryObj } from "@storybook/react";
import { Header } from "@/components/Layouts/Header";

export default {
  title: "Components/Layouts/Header",
  component: Header,
  tags: ["autodocs"],
} as Meta<typeof Header>;

type Story = StoryObj<typeof Header>;

export const Default: Story = {};
