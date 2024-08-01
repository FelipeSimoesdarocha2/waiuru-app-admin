import { DataItemTableFeed } from "models";

export interface FeedPreviewProps {
    data: DataItemTableFeed | null;
    onClose?: () => void;
}
