export interface ModalProps {
  title: string;
  children?: React.ReactNode;
  onSubmit: () => void;
  onCancel: () => void;
  close: () => void;
  requirementsMet?: () => boolean;
  errorMessage?: string;
  mandatory?: boolean;
  $maxWidth?: string;

  submitMessage?: string;
  cancelMessage?: string;
}
