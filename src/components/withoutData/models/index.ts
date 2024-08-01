// Next
import { StaticImageData } from 'next/image';

export interface WithoutDataProps {
    title: string;
    image: {
        src: StaticImageData;
        alt: string;
    };
    action?: {
        label: string;
        onChange?: () => void;
    };
}
