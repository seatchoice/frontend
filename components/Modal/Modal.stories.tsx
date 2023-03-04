import type { ComponentMeta, ComponentStory } from "@storybook/react";

import { Button, Text } from "@/components";

import { Modal } from "./";

export default {
  component: Modal,
  title: "Components/Modal",
  parameters: {
    design: {
      type: "figma",
      url: "figmaURL",
    },
  },
} as ComponentMeta<typeof Modal>;

const Template: ComponentStory<typeof Modal> = (args) => (
  <Modal {...args}>
    <Text as="h4">로그인하기</Text>
    <Text className="text-gray-400">리뷰를 남기고 의견을 나눠보세요!</Text>
    <Button>카카오로 시작하기</Button>
  </Modal>
);

export const Default = Template.bind({});
Default.args = {
  open: true,
};
