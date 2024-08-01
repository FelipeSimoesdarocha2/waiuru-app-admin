export interface DataProps {
    value: string;
    name?: string;
}

export interface LinkProps {
    label?: string;
    data: DataProps[];
    type?: 'primary' | 'secondary' | 'link';
}
