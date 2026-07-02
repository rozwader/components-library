import { ThemeProvider } from 'styled-components';
import { Checkbox } from '../src';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/globalStyles';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React from 'react';

const meta = {
  component: Checkbox,
  decorators: [
    (Story) => (
      <div style={{ width: '100%' }}>
        <ThemeProvider theme={theme}>
          <GlobalStyles />
          <Story />
          <span style={{ color: 'red' }}>
            Outer state handler has to be passed for checkbox to work
          </span>
        </ThemeProvider>
      </div>
    ),
  ],
} satisfies Meta<typeof Checkbox>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    value: false,
    onClick: () => console.log('1'),
    children:
      'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent sollicitudin sem lectus, vitae convallis urna ultricies at. Sed hendrerit bibendum urna. Praesent arcu sapien, porta blandit neque cursus, scelerisque ullamcorper ligula. Suspendisse malesuada nulla sed turpis tincidunt porttitor non a sapien. Pellentesque vitae risus nec tortor faucibus tincidunt accumsan quis lorem. Phasellus vestibulum purus id lorem bibendum molestie. In tincidunt consequat quam. Donec auctor erat semper diam eleifend aliquam. Fusce egestas sapien tellus, sit amet blandit tellus suscipit vel. Maecenas eu dictum felis. Quisque bibendum nulla tellus, eu tincidunt urna eleifend ut.',
  },
};
