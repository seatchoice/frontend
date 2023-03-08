import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ImagePreview } from ".";

export default {
  component: ImagePreview,
  title: "Review/ImagePreview",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof ImagePreview>;

const Template: ComponentStory<typeof ImagePreview> = (args) => (
  <ImagePreview {...args} />
);

export const Default = Template.bind({});

Default.args = {
  imagePreviewUrl:
    "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
};
