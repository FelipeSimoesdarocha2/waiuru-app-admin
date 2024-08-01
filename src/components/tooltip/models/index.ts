// Next
import { StaticImageData } from 'next/image';

export interface TooltipProps {
    img: {
        src: StaticImageData;
        alt: string;
    };
    label: string;
}
