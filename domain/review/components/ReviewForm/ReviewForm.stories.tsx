import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { ReviewForm } from ".";

export default {
  component: ReviewForm,
  title: "Review/Components/ReviewForm",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof ReviewForm>;

export const Default: ComponentStory<typeof ReviewForm> = () => <ReviewForm />;
