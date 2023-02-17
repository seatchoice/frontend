import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ConfirmModal } from ".";

export default {
  component: ConfirmModal,
  title: "Review/Components/ConfirmModal",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof ConfirmModal>;

const Template: ComponentStory<typeof ConfirmModal> = (args) => (
  <ConfirmModal {...args} />
);

export const Default = Template.bind({});

Default.args = {};
