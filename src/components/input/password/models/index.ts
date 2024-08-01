export interface inputValueProps {
    id?: string;
    info?: string;
    type?: string;
    title?: string;
    value?: string | number;
    checked?: boolean;
    required?: boolean;
    className?: string;
    placeholder?: string;
    autocomplete?: string;
    classContainer?: string;
    onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChange: (value: string) => void;
    onEnterPress?: (value: string) => void;
}

export interface inputProps {
    id?: string;
    info?: string;
    type?: string;
    title: string;
    value?: string | number;
    checked?: boolean;
    required?: boolean;
    className?: string;
    placeholder?: string;
    autocomplete?: string;
    values?: inputValueProps[];
    onBlur?: (event: React.FocusEvent<HTMLInputElement | HTMLTextAreaElement>) => void;
    onChange?: (value: string) => void;
    onEnterPress?: (value: string) => void;
}
