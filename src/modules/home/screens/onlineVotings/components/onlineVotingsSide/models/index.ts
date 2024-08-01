// Models
import { DataItemTableOnlineVotings } from "models";

export interface OnlineVotingsSideProps {
    data: DataItemTableOnlineVotings[];
    OpenModal: (args: { isOpen: boolean; index: string; data: DataItemTableOnlineVotings | null }) => void;
    onClose?: () => void;
}
