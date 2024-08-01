// Next
import { StaticImageData } from 'next/image';

// React
import { ReactNode } from 'react';
export interface SiderProps {
    collapsed?: boolean;
    children: ReactNode;
    logo?: StaticImageData;
}
