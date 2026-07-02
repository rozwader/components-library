import { Button } from '../../index.js';
import {
  ModalBackground,
  ModalButtonContainer,
  ModalComponent,
  ModalErrorMessage,
  ModalTitle,
} from './styles.js';
import type { ModalProps } from './types.js';
import React, { useState } from 'react';

export const Modal = ({
  title,
  children,
  onSubmit,
  onCancel,
  close,
  submitMessage = 'Submit',
  cancelMessage = 'Cancel',
  requirementsMet,
  errorMessage,
  mandatory = false,
  $maxWidth
}: ModalProps) => {
  const [error, setError] = useState<boolean>(false);

  const handleClick = (event: 'submit' | 'cancel') => {
    if (requirementsMet && event === 'submit') {
      if (requirementsMet() === true) {
        close();
        event === 'submit' ? onSubmit() : onCancel();
      } else {
        setError(true);
      }

      return;
    }

    close();
    event === 'submit' ? onSubmit() : onCancel();
  };

  return (
    <ModalBackground onClick={() => mandatory === false && close()}>
      <ModalComponent
        onClick={(e) => {
          e.stopPropagation();
          if (error) setError(false);
        }}
        $maxWidth={$maxWidth}
      >
        <ModalTitle>{title}</ModalTitle>
        {children}
        <ModalButtonContainer>
          <Button
            $variant="secondary"
            $fullWidth
            $size="small"
            onClick={() => handleClick('cancel')}
          >
            {cancelMessage}
          </Button>
          <Button
            $variant="primary"
            $fullWidth
            $size="small"
            onClick={() => handleClick('submit')}
          >
            {submitMessage}
          </Button>
        </ModalButtonContainer>
        {error && <ModalErrorMessage>{errorMessage}</ModalErrorMessage>}
      </ModalComponent>
    </ModalBackground>
  );
};
