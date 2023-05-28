import { Meta, StoryObj } from "@storybook/react";
import { Products } from "@/features/products/components";

//  @ts-expect-error Server Component
export default {
  title: "features/Products",
  component: Products,
} as Meta<typeof Products>;

type Story = StoryObj<typeof Products>;

export const Default: Story = {};
