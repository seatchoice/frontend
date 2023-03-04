import { ComponentStory, ComponentMeta } from '@storybook/react';

import Theater from '.';

export default {
  title: 'Search',
  component: Theater,
} as ComponentMeta<typeof Theater>;

const Template: ComponentStory<typeof Theater> = args => <Theater {...args} />;

export const Default = Template.bind({});

Default.args = {};
