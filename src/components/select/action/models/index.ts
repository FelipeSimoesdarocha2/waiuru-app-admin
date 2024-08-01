export type OptionType = {
    label: string;
    value: string;
};

export interface SelectProps {
    id: string;
    label: string;
    required?: boolean;
    disabled?: boolean;
    placeholder?: string;
    value?: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
}
