import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Textarea } from ".";

export default {
  component: Textarea,
  title: "Components/Textarea",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Textarea>;

const Template: ComponentStory<typeof Textarea> = (args) => (
  <Textarea {...args} />
);

export const Default = Template.bind({});
Default.args = {
  placeholder: "리뷰 내용을 작성해주세요",
  children: "리뷰 내용입니다.",
};
