// React
import { MouseEventHandler } from 'react';

export type MenuItemProps = {
    name: string;
    menuItemKey: string;
    defaultSelectedKeys?: string;
    onClick?: MouseEventHandler<HTMLElement>;
};
