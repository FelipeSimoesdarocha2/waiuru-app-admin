// Next
import Image from 'next/image';

// Styles
import * as S from './Tab.styles';

// Models
import { TabProps } from './models';

const Tab = ({ name, src, tabItemKey, defaultSelectedKeys, onClick }: TabProps) => {
    const isActive = defaultSelectedKeys === tabItemKey;

    return (
        <S.Component onClick={onClick} className={isActive ? `${'active'}` : ''}>
            {src && <Image src={src} alt="icon" />}
            <p>{name}</p>
        </S.Component>
    );
};

export default Tab;
