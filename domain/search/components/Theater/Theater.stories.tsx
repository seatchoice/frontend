import { ComponentStory, ComponentMeta } from '@storybook/react';

import Theater from '.';

export default {
  title: 'Search',
  component: Theater,
} as ComponentMeta<typeof Theater>;

export const TheaterCard: ComponentStory<typeof Theater> = () => <Theater />;
