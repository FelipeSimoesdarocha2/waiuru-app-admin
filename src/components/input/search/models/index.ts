export interface inputValueProps {
  id?: string;
  info?: string;
  type?: string;
  placeholder?: string;
  value?: string | number;
  onChange: (value: string) => void;
  onEnterPress?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}

export interface inputProps {
  id?: string;
  info?: string;
  type?: string;
  className?: string;
  placeholder?: string;
  value?: string | number;
  values?: inputValueProps[];
  onChange?: (value: string) => void;
  onEnterPress?: (value: string) => void;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
}
