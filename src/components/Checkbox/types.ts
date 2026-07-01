export interface CheckboxProps {
  children: React.ReactNode;
  $sizeVariant?: CheckboxSizeVariant;
  $contentSizeVariant?: CheckboxSizeVariant;
  color?: string;
  disabled?: boolean;
  name?: string;
  value: boolean;
  onChange: (value: boolean) => void;
}

export type CheckboxSizeVariant = 'small' | 'medium' | 'big';
