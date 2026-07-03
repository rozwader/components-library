import { ThemeProvider } from 'styled-components';
import { Button, Checkbox, Modal } from '../src';
import { theme } from '../src/theme';
import { GlobalStyles } from '../src/globalStyles';
import type { Meta, StoryObj } from '@storybook/react-vite';
import React, { useState } from 'react';

const meta = {
  component: Modal,
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
} satisfies Meta<typeof Modal>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    title: 'Title',
    onSubmit: () => console.log('Submit'),
    onCancel: () => console.log('Cancel'),
    close: () => console.log('Closing'),
  },
  render: (args) => (
    <Modal {...args}>
      <p>Message</p>
    </Modal>
  ),
};

export const Example: Story = {
  args: {
    title: 'Title',
    onSubmit: () => console.log('Submit'),
    onCancel: () => console.log('Cancel'),
    close: () => console.log('Closing'),
    requirementsMet: () => false,
    errorMessage: 'There was an error!',
    $maxWidth: '20%',
  },
  render: (args) => {
    const [firstBox, setFirstBox] = useState<boolean>(false);
    const [secondBox, setSecondBox] = useState<boolean>(false);
    const [visible, setVisible] = useState<boolean>(false);

    const checkRequirements = (): boolean => {
      return firstBox && secondBox ? true : false;
    };

    return (
      <>
        <Button onClick={() => setVisible(true)}>Open</Button>
        {visible && (
          <Modal
            {...args}
            close={() => setVisible(false)}
            requirementsMet={checkRequirements}
          >
            <p style={{ margin: 0 }}>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Praesent
              sollicitudin sem lectus, vitae convallis urna ultricies at. Sed
              hendrerit bibendum urna. Praesent arcu sapien, porta blandit neque
              cursus, scelerisque ullamcorper ligula.
            </p>
            <Checkbox
              padding="16px 8px 4px 0"
              value={firstBox}
              onClick={() => setFirstBox(!firstBox)}
            >
              Accept the terms
            </Checkbox>
            <Checkbox
              padding="4px 8px 16px 0"
              value={secondBox}
              onClick={() => setSecondBox(!secondBox)}
            >
              Accept the terms for marketing info
            </Checkbox>
          </Modal>
        )}
      </>
    );
  },
};
