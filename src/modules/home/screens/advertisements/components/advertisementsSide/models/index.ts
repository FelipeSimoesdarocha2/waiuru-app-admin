import { AdvertisementsProps } from "models";

export interface AdvertisementsSideProps {
    onClose?: () => void;
    data: AdvertisementsProps[];
}
