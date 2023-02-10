import { ComponentStory, ComponentMeta } from '@storybook/react';

import Search from '.';

export default {
  title: 'Pages',
  component: Search,
} as ComponentMeta<typeof Search>;

export const SearchPage: ComponentStory<typeof Search> = () => <Search />;
