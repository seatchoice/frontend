import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Divider } from ".";

export default {
  component: Divider,
  title: "Components/Divider",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Divider>;

const Template: ComponentStory<typeof Divider> = (args) => (
  <Divider {...args} />
);

export const Default = Template.bind({});

Default.args = {};
