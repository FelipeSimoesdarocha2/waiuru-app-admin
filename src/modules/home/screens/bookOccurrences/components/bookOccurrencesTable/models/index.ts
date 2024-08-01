// React
import { Dispatch, ChangeEvent, SetStateAction } from 'react';

// Models
import { Column, DataItemTableBookOccurrences } from 'models';

export interface ListBookOccurrencesProps {
    columns: Column[];
    selectedItems: number[];
    data: DataItemTableBookOccurrences[];
    setSelectedItems: Dispatch<SetStateAction<number[]>>;
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
    openModal: (args: { isOpen: boolean; index: number; itemId: DataItemTableBookOccurrences }) => void;
}
