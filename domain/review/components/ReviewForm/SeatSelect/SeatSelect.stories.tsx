import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { SeatSelect } from ".";

export default {
  component: SeatSelect,
  title: "Review/Components/SeatSelect",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof SeatSelect>;

const Template: ComponentStory<typeof SeatSelect> = (args) => (
  <SeatSelect {...args} />
);

export const Default = Template.bind({});

Default.args = {};
