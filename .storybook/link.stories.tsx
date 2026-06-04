import { ThemeProvider } from 'styled-components';
import { Link } from '../src/index';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/globalStyles';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

const meta = {
  component: Link,
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof Link>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Link',
    href: 'https://youtube.com/',
  },
};

export const Coloured: Story = {
  args: {
    children: 'Coloured Link',
    href: 'https://youtube.com/',
    $color: '#e30505',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    href: 'https://youtube.com/',
    $icon: <ArrowForwardIos style={{ height: '15px', width: '15px' }} />,
  },
};
