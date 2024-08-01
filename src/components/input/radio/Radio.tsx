// React
import * as React from 'react';

// Styles
import * as S from './Radio.styles';

// Models
import { RadioProps } from './models';

const Radio = ({ id, title, disabled, checked, onChange }: RadioProps) => {
    const handleOnChange = () => {
        onChange(!checked);
    };

    return (
        <S.Component>
            <input id={id} type="radio" onChange={handleOnChange} disabled={disabled} checked={checked} />
            <label htmlFor="checkbox-id">{title}</label>
        </S.Component>
    );
};

export default Radio;
