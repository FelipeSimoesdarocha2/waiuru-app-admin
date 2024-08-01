// Next
import { StaticImageData } from 'next/image';

export type PublicationsDto = {
    name: string;
    hours: string;
    description: string;
    perfilImage?: StaticImageData | null;
};
