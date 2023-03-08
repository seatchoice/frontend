import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Icon } from ".";
import { Text } from "../Text";

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

export const Examples = () => {
  const iconList = [
    "camera",
    "star",
    "like",
    "notification",
    "dark",
    "light",
    "back",
    "plus",
    "close",
  ] as const;
  return (
    <div className="flex gap-10">
      {iconList.map((icon) => (
        <section
          key={icon}
          className="flex flex-col items-center justify-center"
        >
          <Icon as={icon} className="w-7 h-7" />
          <Text className="text-sm">{icon}</Text>
        </section>
      ))}
    </div>
  );
};

export const Dark = Template.bind({});
Dark.args = {
  as: "dark",
  width: "30",
  height: "30",
};

export const Light = Template.bind({});
Light.args = {
  as: "light",
  width: "30",
  height: "30",
};

export const Avatar = Template.bind({});
Avatar.args = {
  as: "avatar",
  width: "30",
  height: "30",
};
