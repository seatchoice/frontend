import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReviewHeader } from ".";

export default {
  component: ReviewHeader,
  title: "Review/Components/ReviewHeader",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof ReviewHeader>;

const Template: ComponentStory<typeof ReviewHeader> = (args) => (
  <ReviewHeader {...args} />
);

export const Default = Template.bind({});

Default.args = {
  seat: {
    theater: "체조경기장",
    floor: 1,
    section: "A",
    seatRow: 2,
    seatNumber: 23,
  },
};
