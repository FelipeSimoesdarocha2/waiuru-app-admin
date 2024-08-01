// React
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

// Models
import { Column, LostAndFoundDto } from 'models';

export interface LostAndFoundTableProps {
  data: LostAndFoundDto[];
  columns: Column[];
  selectedItems: number[];
  setSelectedItems: Dispatch<SetStateAction<number[]>>;
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
  openModal: (args: { isOpen: boolean; index: number; itemId: LostAndFoundDto }) => void;
}
