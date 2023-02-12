import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { CommentForm } from ".";

export default {
  component: CommentForm,
  title: "Comment/Components/CommentForm",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof CommentForm>;

const Template: ComponentStory<typeof CommentForm> = (args) => (
  <CommentForm {...args} />
);

export const Default = Template.bind({});

Default.args = {};
