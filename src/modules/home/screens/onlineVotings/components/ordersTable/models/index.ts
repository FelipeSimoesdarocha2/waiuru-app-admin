// React
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

// Models
import { DataItemTableOnlineVotings } from 'models';

export interface ListOrdersProps {
    data: DataItemTableOnlineVotings[];
    selectedItems: number[];
    setSelectedItems: Dispatch<SetStateAction<number[]>>;
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}
