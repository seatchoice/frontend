import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Select } from ".";

export default {
  component: Select,
  title: "Components/Select",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Select>;

const Template: ComponentStory<typeof Select> = (args) => <Select {...args} />;

export const Default = Template.bind({});
Default.args = {
  options: [
    { value: "1구역" },
    { value: "2구역" },
    { value: "3구역" },
    { value: "4구역" },
    { value: "5구역" },
    { value: "6구역" },
    { value: "7구역" },
    { value: "8구역" },
    { value: "9구역" },
    { value: "10구역" },
  ],
};
