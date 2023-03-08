import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ImageUploadButton } from ".";

export default {
  component: ImageUploadButton,
  title: "Review/ImageUploadButton",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof ImageUploadButton>;

const Template: ComponentStory<typeof ImageUploadButton> = (args) => (
  <ImageUploadButton {...args} />
);

export const Default = Template.bind({});

Default.args = {};
