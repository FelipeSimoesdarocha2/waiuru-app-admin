import { DataItemTableBookOccurrences } from "models";

export interface BookOccurrencesPreviewProps {
    data: DataItemTableBookOccurrences | null;
    onClose?: () => void;
}
