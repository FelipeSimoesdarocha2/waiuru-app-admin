// Next
import Image from 'next/image';

// Styles
import * as S from './Item.styles';

// Models
import { MenuItemProps } from './models';

const Item = ({ name, src, menuItemKey, defaultSelectedKeys, onClick }: MenuItemProps) => {
    return (
        <S.Component onClick={onClick} className={`${defaultSelectedKeys === menuItemKey ? 'active' : null}`}>
            {src && <Image src={src} alt="icon" priority />}
            <p>{name}</p>
        </S.Component>
    );
};

export default Item;
