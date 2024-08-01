export interface FilterSelectDataProps {
  value: string;
  name: string;
}

export interface FilterSelectProps {
  data?: FilterSelectDataProps[];
  selected: string;
  onChange?: (item: FilterSelectDataProps) => void;
}
