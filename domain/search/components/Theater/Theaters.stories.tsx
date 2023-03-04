import { ComponentStory, ComponentMeta } from '@storybook/react';

import Theaters from './Theaters';

export default {
  title: 'Search',
  component: Theaters,
} as ComponentMeta<typeof Theaters>;

const Template: ComponentStory<typeof Theaters> = args => <Theaters {...args} />;

export const Default = Template.bind({});

Default.args = {};
