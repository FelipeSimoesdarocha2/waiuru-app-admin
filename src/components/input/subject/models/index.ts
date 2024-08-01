export interface inputProps {
  id?: string;
  type?: string;
  required?: boolean;
  placeholder?: string;
  autocomplete?: string;
  value?: string | number;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (value: string) => void;
  onEnterPress?: (value: string) => void;
}
