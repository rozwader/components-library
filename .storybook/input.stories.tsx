import { ThemeProvider } from 'styled-components';
import { Input } from '../src/index';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/globalStyles';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';
import ArrowForwardIos from '@mui/icons-material/ArrowForwardIos';

const meta = {
  component: Input,
  decorators: [
    (Story) => (
      <div style={{ width: '100%', display: 'flex', flexDirection: 'column' }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
        </ThemeProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof Input>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    type: 'text',
    placeholder: 'Value...',
  },
};

export const WithLabel: Story = {
  args: {
    type: 'text',
    placeholder: 'Value...',
    $labelContent: 'Text',
  },
};

export const Example: Story = {
  args: {
    type: 'text',
    placeholder: 'eg. Joe Dough',
    $labelContent: 'Username',
  },
};

export const Multiple: Story = {
  render: () => (
    <>
      <Input type="text" placeholder="eg. Joe Dough" $labelContent="Username" />
      <Input type="text" placeholder="eg. *******" $labelContent="Password" />
      <Input
        type="text"
        placeholder="eg. *******"
        $labelContent="Confirm Password"
      />
    </>
  ),
};
