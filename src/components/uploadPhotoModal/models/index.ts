// Next
import { StaticImageData } from 'next/image';

export interface UploadPhotoModalProps {
    title: string;
    subtitle: string;
    image: {
        src: StaticImageData;
        width: number;
    };
    onClick?: () => void;
}
