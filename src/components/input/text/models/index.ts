// React
import { HTMLInputTypeAttribute } from 'react';

export interface inputValueProps {
  id?: string;
  info?: string;
  type?: HTMLInputTypeAttribute | undefined;
  title?: string;
  checked?: boolean;
  textarea?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
  autocomplete?: string;
  disable?: boolean;
  value?: string | number;
  classContainer?: string;
  mask?: string | (string | RegExp)[];
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange: (value: string) => void;
  onEnterPress?: (value: string) => void;
}

export interface inputProps {
  id?: string;
  info?: string;
  type?: string;
  title: string;
  checked?: boolean;
  disable?: boolean;
  textarea?: boolean;
  required?: boolean;
  className?: string;
  placeholder?: string;
  autocomplete?: string;
  value?: string | number;
  values?: inputValueProps[];
  mask?: string | (string | RegExp)[];
  onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
  onChange?: (value: string) => void;
  onEnterPress?: (value: string) => void;
}
