export interface filter {
    id: string | number;
    label: string;
}

export interface cardsProps {
    name: string;
    info: string;
    value?: number;
    income: number;
    status?: {
        error: string;
    };
    action?: filter[];
    handleSelect?: (selectedFilter: filter) => void;
    classname?: string;
    loading?: boolean;
}
