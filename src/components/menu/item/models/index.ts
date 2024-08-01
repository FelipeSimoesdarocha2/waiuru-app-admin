// Next
import { StaticImageData } from 'next/image';

// React
import { MouseEventHandler } from 'react';

export type MenuItemProps = {
    name: string;
    menuItemKey?: string;
    src?: StaticImageData | null;
    defaultSelectedKeys?: string;
    onClick?: MouseEventHandler<HTMLElement>;
};
