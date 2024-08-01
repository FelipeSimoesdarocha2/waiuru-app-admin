// Next
import { StaticImageData } from 'next/image';

// React
import { ReactNode } from 'react';

export type SubMenuProps = {
    name: string;
    isOpen: boolean;
    children?: ReactNode;
    src?: StaticImageData | null;
};
