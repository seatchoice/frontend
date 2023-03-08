import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReviewImageSkeleton } from ".";

export default {
  component: ReviewImageSkeleton,
  title: "Review/ReviewImageSkeleton",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof ReviewImageSkeleton>;

const Template: ComponentStory<typeof ReviewImageSkeleton> = (args) => (
  <ReviewImageSkeleton {...args} />
);

export const Default = Template.bind({});

Default.args = {};
