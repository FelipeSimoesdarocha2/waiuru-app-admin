// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Icons
import vector from './icons/vector.svg';

// Styles
import * as S from './Sider.styles';

// Models
import { SiderProps } from './models';

const Sider = ({ children, logo }: SiderProps) => {
    const [collapsed, setCollapsed] = useState(false);

    const handleCollapse = () => {
        setCollapsed(!collapsed);
    };

    return (
        <S.Component>
            <S.Logo className={`${collapsed ? 'collapsed' : null}`}>
                <figure>
                    {logo && <Image src={logo} alt="logo-waiuru" width={30} />}
                    <p>Waiuru</p>
                </figure>
                <figure onClick={handleCollapse}>
                    <Image src={vector} alt="icon" />
                </figure>
            </S.Logo>
            <S.Content>{children}</S.Content>
        </S.Component>
    );
};

export default Sider;
