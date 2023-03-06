import type { ComponentMeta, ComponentStory } from "@storybook/react";

import SearchHeader from ".";

export default {
  component: SearchHeader,
  title: "Search/Components/SearchHeader",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof SearchHeader>;

const Template: ComponentStory<typeof SearchHeader> = (args) => (
  <SearchHeader />
);

export const Default = Template.bind({});

Default.args = {};
