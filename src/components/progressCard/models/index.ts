// Next
import { StaticImageData } from 'next/image';

export interface ProgressCardProps {
    label: string;
    item: {
        id: number;
        name: string;
        status: boolean;
    }[];
    src: StaticImageData;
    className?: string;
}
