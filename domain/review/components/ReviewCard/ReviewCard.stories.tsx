import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReviewCard } from "./";

export default {
  component: ReviewCard,
  title: "Review/Components/ReviewCard",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof ReviewCard>;

const Template: ComponentStory<typeof ReviewCard> = (args) => (
  <ReviewCard {...args} />
);

export const Default = Template.bind({});

Default.args = {
  review: {
    id: 4,
    floor: 1,
    section: "A",
    row: 2,
    seatNumber: 3,
    rating: 5,
    content: "리뷰 내용",
    likeAmount: 7,
    thumbnail:
      "https://images.unsplash.com/photo-1552832230-c0197dd311b5?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8",
  },
};
