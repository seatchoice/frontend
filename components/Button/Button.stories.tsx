import type { ComponentStory, ComponentMeta } from "@storybook/react";

import { Text } from "@/components";

import { Button } from ".";

export default {
  component: Button,
  title: "Components/Button",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Button>;

const Template: ComponentStory<typeof Button> = (args) => <Button {...args} />;

export const Default = Template.bind({});
Default.args = {
  children: "text",
  disabled: false,
};

export const Primary = Template.bind({});
Primary.args = {
  as: "primary",
  children: "text",
  disabled: false,
};

export const Examples = () => (
  <div>
    <Text as="h3">Primary</Text>
    <Button>Primary</Button>
    <Button disabled>Disabled</Button>

    <Text as="h3">Size</Text>
    <Button size="sm">Small</Button>
    <Button size="md">Medium</Button>
    <Button size="lg">Large</Button>
  </div>
);
