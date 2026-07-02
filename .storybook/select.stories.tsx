import { ThemeProvider } from 'styled-components';
import { Select, SelectChild } from '../src/index';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/globalStyles';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  component: Select,
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
          <span style={{ color: 'red' }}>
            Outer state handler has to be passed for select to work
          </span>
        </ThemeProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof Select>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: 'option1',
    $onChange: (value) => {},
  },
  render: (args) => (
    <Select {...args}>
      <SelectChild value="option1">Option 1</SelectChild>
      <SelectChild value="option2">Option 2</SelectChild>
      <SelectChild value="option3">Option 3</SelectChild>
    </Select>
  ),
};

export const WithLabel: Story = {
  args: {
    value: 'option1',
    $onChange: (value) => {},
    $labelContent: 'Pick option...',
  },
  render: (args) => (
    <Select {...args}>
      <SelectChild value="option1">Option 1</SelectChild>
      <SelectChild value="option2">Option 2</SelectChild>
      <SelectChild value="option3">Option 3</SelectChild>
    </Select>
  ),
};
