import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { LoginModal } from ".";

export default {
  component: LoginModal,
  title: "Login/LoginModal",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof LoginModal>;

const Template: ComponentStory<typeof LoginModal> = (args) => (
  <LoginModal {...args} />
);

export const Default = Template.bind({});

Default.args = {
  showModal: true,
};
