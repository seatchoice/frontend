import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { BackButton } from ".";

export default {
  component: BackButton,
  title: "Components/BackButton",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof BackButton>;

const Template: ComponentStory<typeof BackButton> = (args) => (
  <BackButton {...args} />
);

export const Default = Template.bind({});

Default.args = {};
