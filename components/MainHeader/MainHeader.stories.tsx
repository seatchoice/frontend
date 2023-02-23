import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { MainHeader } from ".";

export default {
  component: MainHeader,
  title: "Components/MainHeader",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof MainHeader>;

const Template: ComponentStory<typeof MainHeader> = () => <MainHeader />;

export const Default = Template.bind({});

Default.args = {};
