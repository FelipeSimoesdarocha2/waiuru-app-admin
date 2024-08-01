// React
import { ChangeEvent, Dispatch, SetStateAction } from 'react';

// Models
import { Column, OrderDto } from 'models';

export interface ListOrdersProps {
  data: OrderDto[];
  columns: Column[];
  selectedItems: number[];
  setSelectedItems: Dispatch<SetStateAction<number[]>>;
  handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
  openModal: (args: { isOpen: boolean; index: number; itemId: OrderDto }) => void;
}
