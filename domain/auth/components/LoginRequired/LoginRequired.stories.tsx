import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoginRequired } from ".";

export default {
  component: LoginRequired,
  title: "Login/LoginRequired",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof LoginRequired>;

const Template: ComponentStory<typeof LoginRequired> = (args) => (
  <LoginRequired />
);

export const Default = Template.bind({});

Default.args = {};
