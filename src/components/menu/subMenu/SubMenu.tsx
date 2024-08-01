// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Assets
import vector from '../icons/vector.svg';

// Styles
import * as S from './SubMenu.styles';

// Models
import { SubMenuProps } from './models';

const SubMenu = ({ src, name, isOpen, children }: SubMenuProps) => {
    const [openMenu, setOpenMenu] = useState(false);
    const [isOpenMenu, setIsOpen] = useState(isOpen);

    const toggleSubMenu = () => {
        setIsOpen(!isOpenMenu);
        setOpenMenu(!openMenu);
    };

    return (
        <S.Component>
            <S.Option onClick={toggleSubMenu} className={`${isOpen && 'active'} ${openMenu && 'open'}`}>
                {src && <Image src={src} alt="icon" width={24} height={24} priority />}
                <p>{name}</p>
                <Image src={vector} alt="icon" priority />
            </S.Option>
            <S.Content>{isOpenMenu && children}</S.Content>
        </S.Component>
    );
};

export default SubMenu;
