// Models
import { DataItemTableFeed } from 'models';

export interface FeedSideProps {
    sideScreen: {
        id: string;
        name: string;
    }[];
    data: DataItemTableFeed[]
    selectedSideScreen: string;
    setSelectedSideScreen?: (id: string) => void;
    OpenModal: (args: { isOpen: boolean, index: number; itemId: DataItemTableFeed }) => void;
}
