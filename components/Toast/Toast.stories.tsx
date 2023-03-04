import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ToastItem } from "./ToastItem";

export default {
  component: ToastItem,
  title: "Components/Toast",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof ToastItem>;

const Template: ComponentStory<typeof ToastItem> = (args) => (
  <ToastItem {...args} />
);

export const Default = Template.bind({});
Default.args = {
  children: "토스트 내용을 보여줍니다.",
};

export const Success = Template.bind({});
Success.args = {
  type: "success",
  children: "성공한 토스트 내용을 보여줍니다.",
};

export const Error = Template.bind({});
Error.args = {
  type: "error",
  children: "실패한 토스트 내용을 보여줍니다.",
};
