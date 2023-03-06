import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Theaters from ".";

export default {
  component: Theaters,
  title: "Search/Components/Theaters",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Theaters>;

const Template: ComponentStory<typeof Theaters> = (args) => (
  <Theaters {...args} />
);

export const Default = Template.bind({});

Default.args = {
  theater: {
    name: "theater",
    address: "theater",
    id: 1,
  },
};
