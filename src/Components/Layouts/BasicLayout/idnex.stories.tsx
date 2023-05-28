import { Meta, StoryObj } from "@storybook/react";
import { BasicLayout } from "@/components/Layouts/BasicLayout";

export default {
  title: "Components/Layouts/BasicLayout",
  component: BasicLayout,
  tags: ["autodocs"],
} as Meta<typeof BasicLayout>;

type Story = StoryObj<typeof BasicLayout>;

export const Default: Story = {};
