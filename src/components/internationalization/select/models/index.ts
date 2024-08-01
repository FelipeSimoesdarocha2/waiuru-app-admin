export interface SelectProps {
    id: string;
    value?: string;
    options: { value: string; label: string }[];
    onChange: (value: string) => void;
}
