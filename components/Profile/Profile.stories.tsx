import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Profile } from ".";

export default {
  component: Profile,
  title: "Components/Profile",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Profile>;

const Template: ComponentStory<typeof Profile> = (args) => (
  <Profile {...args} />
);

export const Default = Template.bind({});

Default.args = {
  nickname: "닉네임",
};
