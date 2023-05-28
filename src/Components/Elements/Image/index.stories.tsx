import { Meta, StoryObj } from "@storybook/react";
import { Image } from "@/components/Elements/Image";

export default {
  title: "Components/Elements/Image",
  component: Image,
  args: {
    src: "https://avatars.githubusercontent.com/u/4995816?v=4",
    className: "w-10 h-10",
  },
  tags: ["autodocs"],
} as Meta<typeof Image>;

type Story = StoryObj<typeof Image>;

export const Default: Story = {
  args: {
    alt: "avatar",
  },
};
