import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { KakaoLoginButton } from ".";

export default {
  component: KakaoLoginButton,
  title: "Login/KakaoLoginButton",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof KakaoLoginButton>;

const Template: ComponentStory<typeof KakaoLoginButton> = (args) => (
  <KakaoLoginButton />
);

export const Default = Template.bind({});

Default.args = {};
