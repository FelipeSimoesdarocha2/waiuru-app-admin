export interface DataProps {
    id: number;
    name: string;
    type: string;
    title: string;
    mensage: string;
    isFixed: boolean;
}

export interface OnlineVotingsPreviewProps {
    data: DataProps | null;
    onClose?: () => void;
}
