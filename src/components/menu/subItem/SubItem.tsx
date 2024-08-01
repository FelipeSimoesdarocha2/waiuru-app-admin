// Styles
import * as S from './SubItem.styles';

// Models
import { MenuItemProps } from './models';

const SubItem = ({ name, menuItemKey, defaultSelectedKeys, onClick }: MenuItemProps) => {
    return (
        <S.Component onClick={onClick} className={`${defaultSelectedKeys === menuItemKey ? 'active' : null}`}>
            <span />
            <p>{name}</p>
        </S.Component>
    );
};

export default SubItem;
