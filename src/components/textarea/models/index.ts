export interface TextAreaProps {
  id?: string;
  info?: string;
  type?: 'chat';
  value?: string | number;
  className?: string;
  placeholder?: string;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (value: string) => void;
  onEnterPress?: (value: string) => void;
  onSend?: () => void;
}
