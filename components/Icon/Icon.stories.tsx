import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from ".";

export default {
  component: Icon,
  title: "Components/Icon",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Icon>;

const Template: ComponentStory<typeof Icon> = (args) => <Icon {...args} />;

export const Default = Template.bind({});
Default.args = {
  as: "star",
  width: "30",
  height: "30",
  className: "fill-yellow-300",
};

export const Star = Template.bind({});
Star.args = {
  as: "star",
  width: "30",
  height: "30",
};

export const Camera = Template.bind({});
Camera.args = {
  as: "camera",
  width: "30",
  height: "30",
};

export const Like = Template.bind({});
Like.args = {
  as: "like",
  width: "30",
  height: "30",
};

export const Logo = Template.bind({});
Logo.args = {
  as: "logo",
  width: "30",
  height: "30",
};

export const Notification = Template.bind({});
Notification.args = {
  as: "notification",
  width: "30",
  height: "30",
};
