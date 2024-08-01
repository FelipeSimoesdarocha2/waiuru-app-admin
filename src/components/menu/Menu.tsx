// React
import * as React from 'react';

// Styles
import * as S from './Menu.styles';

// Models
import { MenuProps } from './models';

// Components
import { Item } from './item';
import { ItemGroup } from './itemGroup';
import { SubItem } from './subItem';
import { SubMenu } from './subMenu';

const Menu = ({ children }: MenuProps) => {
  return <S.Component>{children}</S.Component>;
};

type CompoundedComponent = typeof Menu & {
  Item: typeof Item;
  SubMenu: typeof SubMenu;
  ItemGroup: typeof ItemGroup;
  SubItem: typeof SubItem;
};

const CompoundedMenu: CompoundedComponent = Object.assign(Menu, { Item, SubMenu, SubItem, ItemGroup });
export default CompoundedMenu;
