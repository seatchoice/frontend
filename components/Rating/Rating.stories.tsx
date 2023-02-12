import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Rating } from ".";

export default {
  component: Rating,
  title: "Components/Rating",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Rating>;

const Template: ComponentStory<typeof Rating> = (args) => <Rating {...args} />;

export const Default = Template.bind({});

Default.args = {};
