export interface ProgressLineProps {
    item: {
        id: number;
        status: boolean;
    }[];
    onItemClick: (itemId: number) => void;
}
