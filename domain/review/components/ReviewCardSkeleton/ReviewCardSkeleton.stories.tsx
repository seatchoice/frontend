import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReviewCardSkeleton } from ".";

export default {
  component: ReviewCardSkeleton,
  title: "Review/ReviewCardSkeleton",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof ReviewCardSkeleton>;

const Template: ComponentStory<typeof ReviewCardSkeleton> = (args) => (
  <ReviewCardSkeleton {...args} />
);

export const Default = Template.bind({});

Default.args = {};
