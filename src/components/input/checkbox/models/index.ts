export interface CheckboxProps {
  id?: number;
  label?: string;
  checked: boolean;
  className?: string;
  onChange: (checked: boolean) => void;
}
