import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Comment } from ".";

export default {
  component: Comment,
  title: "Comment/Components/Comment",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Comment>;

const Template: ComponentStory<typeof Comment> = (args) => (
  <Comment {...args} />
);

export const Default = Template.bind({});

Default.args = {
  comment: {
    id: 1,
    userId: 2,
    nickname: "nickname",
    content: "content",
    updatedAt: "2022-02-01",
    likeAmount: 10,
  },
};
