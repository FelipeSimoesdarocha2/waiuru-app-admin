// React
import * as React from 'react';

// Styles
import * as S from './ItemGroup.styles';

// Models
import { ItemGroupProps } from './models';

const ItemGroup = ({ name, children }: ItemGroupProps) => {
    return (
        <S.Component>
            <p>{name}</p>
            <S.Content>{children}</S.Content>
        </S.Component>
    );
};

export default ItemGroup;
