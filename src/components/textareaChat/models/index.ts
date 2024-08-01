import { Message } from 'models';

export interface TextAreaProps {
  id?: string;
  info?: string;
  type?: 'chat';
  value?: string | number;
  className?: string;
  placeholder?: string;
  file?: any;
  respondMessage?: Message | null;
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (value: string) => void;
  onEnterPress?: (value: string) => void;
  onSend?: () => void;
  onOpenDocuments?: () => void;
  onOpenEmoji?: () => void;
  onCleandTextAndFile?: () => void;
  setRespondMessage?: (message: Message | null) => void;
}
