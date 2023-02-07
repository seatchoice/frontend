import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Text } from "./";

export default {
  component: Text,
  title: "Components/Text",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Text>;

const Template: ComponentStory<typeof Text> = (args) => <Text {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: "p",
  children: "Text",
};

export const Heading = Template.bind({});
Heading.args = {
  as: "h1",
  children: "Text",
};

export const Examples = () => (
  <div>
    <Text>Default Text</Text>
    <Text as="h1">Heading</Text>
    <Text as="h2">Heading</Text>
    <Text as="h3">Heading</Text>
    <Text as="h4">Heading</Text>
    <Text as="h5">Heading</Text>
    <Text as="h6">Heading</Text>
  </div>
);
