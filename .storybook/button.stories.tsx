import type { Meta, StoryObj } from '@storybook/react-vite';
import { Button } from '../src/index';
import { ThemeProvider } from 'styled-components';
import { theme } from '../src/theme';
import React from 'react';
import { GlobalStyles } from '../src/globalStyles.ts';

const meta = {
  component: Button,
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
} satisfies Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: 'Default',
    $variant: 'default',
  },
};

export const Primary: Story = {
  args: {
    children: 'Primary',
    $variant: 'primary',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Secondary',
    $variant: 'secondary',
  },
};

export const WithIcon: Story = {
  args: {
    children: 'With Icon',
    $variant: 'primary',
    $icon: (
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
