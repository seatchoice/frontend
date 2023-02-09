import { ComponentStory, ComponentMeta } from '@storybook/react';

import Theaters from './Theaters';

export default {
  title: 'Search',
  component: Theaters,
} as ComponentMeta<typeof Theaters>;

export const TheatersCards: ComponentStory<typeof Theaters> = () => <Theaters />;
