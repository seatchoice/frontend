import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ImagePreview } from ".";

export default {
  component: ImagePreview,
  title: "Reviews/Components/ImagePreview",
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

Default.args = {};
