import { StaticImageData } from 'next/image';

export type AvatarProps = {
    src?: string | StaticImageData | null | undefined;
    alt: string;
    width?: number;
    height?: number;
};
