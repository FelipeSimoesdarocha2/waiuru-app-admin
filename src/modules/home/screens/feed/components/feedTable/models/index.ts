import { ChangeEvent, Dispatch, SetStateAction } from "react";

// Models
import { DataItemTableFeed } from "models";

export interface ListFeedProps {
    selectedItems: number[];
    data: DataItemTableFeed[];
    setSelectedItems: Dispatch<SetStateAction<number[]>>;
    handleCheckboxChange: (event: ChangeEvent<HTMLInputElement>, index: number) => void;
}
