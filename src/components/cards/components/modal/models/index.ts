interface filter {
    id: string | number;
    label: string;
}

export interface modalProps {
    filterData: filter[];
    selected: filter | null;
    onClose: (selectedFilter: filter | null) => void;
}
