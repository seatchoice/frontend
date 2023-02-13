import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { LikeButton } from ".";

export default {
  component: LikeButton,
  title: "Components/LikeButton",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof LikeButton>;

const Template: ComponentStory<typeof LikeButton> = (args) => (
  <LikeButton {...args} />
);

export const Default = Template.bind({});

Default.args = {};
