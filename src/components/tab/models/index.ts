// Next
import { StaticImageData } from 'next/image';

// React
import { MouseEventHandler } from 'react';

export interface TabProps {
    name: string;
    src?: StaticImageData;
    tabItemKey: string;
    defaultSelectedKeys?: string;
    onClick?: MouseEventHandler<HTMLElement>;
}
