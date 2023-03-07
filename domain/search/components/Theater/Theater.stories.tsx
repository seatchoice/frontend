import type { ComponentMeta, ComponentStory } from "@storybook/react";

import Theater from "./";

export default {
  component: Theater,
  title: "Search/Components/Theater",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Theater>;

const Template: ComponentStory<typeof Theater> = (args) => (
  <Theater {...args} />
);

export const Default = Template.bind({});

Default.args = {
  theater: {
    name: "theater",
    address: "theater",
    id: 1,
    score: 1,
  },
};
