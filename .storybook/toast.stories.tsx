import { ThemeProvider } from 'styled-components';
import { Button, Toast, ToastContainer, useToastManager } from '../src';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/globalStyles';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useRef } from 'react';
import { createPortal } from 'react-dom';

const meta = {
  component: ToastContainer,
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
} satisfies Meta<typeof ToastContainer>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Simulator: Story = {
  render: () => {
    const { createToast, deleteToast, toasts } = useToastManager(
      'toast-test',
      5000,
    );
    const idRef = useRef<number>(0);

    return (
      <div>
        <Button
          onClick={() => {
            createToast({
              id: `id${idRef.current}`,
              children: (
                <p style={{ margin: 0 }}>
                  Lorem ipsum dolor sit amet, {idRef.current}
                </p>
              ),
              $variant: 'danger',
              toastExpirationTimeMs: 5000,
            });
            idRef.current += 1;
          }}
        >
          Create Toast
        </Button>

        {createPortal(
          <ToastContainer
            id="toast-test"
            toasts={toasts}
            deleteToast={deleteToast}
          />,
          document.body,
        )}
      </div>
    );
  },
};
