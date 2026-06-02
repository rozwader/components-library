import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import React from 'react';

import testingIcon from './testingIcon.svg';

const meta = {
  component: Button,
  decorators: [
    (Story) => (
      <ThemeProvider theme={theme}>
        <Story />
      </ThemeProvider>
    ),
  ],
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    content: 'Default',
    variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    content: 'Primary',
    variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    content: 'Secondary',
    variant: 'secondary',
  },
};

export const WithIcon: Story = {
  args: {
    content: 'With Icon',
    variant: 'primary',
    icon: (
      <div
        style={{
          width: '20px',
          height: '20px',
          borderRadius: '5px',
          backgroundColor: 'red',
        }}
      />
    ),
  },
};
