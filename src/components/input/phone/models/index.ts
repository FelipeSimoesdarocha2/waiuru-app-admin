export interface inputProps {
  id?: string;
  key?: string;
  type?: string;
  title: string;
  checked?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
  autocomplete?: string;
  value?: string | number;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (value: string) => void;
  onEnterPress?: (value: string) => void;
}
