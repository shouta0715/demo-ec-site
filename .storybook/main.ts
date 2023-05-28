import type { StorybookConfig } from "@storybook/nextjs";
import { initialize, mswDecorator } from "msw-storybook-addon";
import path from "path";

initialize();

const config: StorybookConfig = {
  stories: ["../src/**/*.mdx", "../src/**/*.stories.@(js|jsx|ts|tsx)"],
  addons: [
    "@storybook/addon-links",
    "@storybook/addon-essentials",
    "@storybook/addon-interactions",
    "@storybook/addon-a11y",
  ],
  framework: {
    name: "@storybook/nextjs",
    options: { nextConfigPath: "../next.config.js" },
  },
  docs: {
    autodocs: "tag",
  },
  webpackFinal: async (config) => {
    if (!config.resolve) config.resolve = {};
    config.resolve.alias = {
      ...config.resolve.alias,
      "@": path.resolve(__dirname, "../src"),
    };
    return config;
  },
  staticDirs: ["../public"],
};

export const decorators = [mswDecorator];
export default config;
