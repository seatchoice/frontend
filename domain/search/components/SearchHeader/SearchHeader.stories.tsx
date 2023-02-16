import { ComponentStory, ComponentMeta } from '@storybook/react';

import SearchHeader from '.';

export default {
  title: 'Search',
  component: SearchHeader,
} as ComponentMeta<typeof SearchHeader>;

export const SearchInput: ComponentStory<typeof SearchHeader> = () => <SearchHeader />;
