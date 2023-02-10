import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchBar from '.';

export default {
  title: 'Search',
  component: SearchBar,
} as ComponentMeta<typeof SearchBar>;

export const SearchInput: ComponentStory<typeof SearchBar> = () => <SearchBar />;
