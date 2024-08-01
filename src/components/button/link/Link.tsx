// React
import React from 'react';

// Styles
import * as S from './Link.styles';

// Models
import { LinkProps } from './models';

const Link = ({ type, color, label, loading, disabled, className, onClick }: LinkProps) => {
    return (
        <S.Component onClick={onClick} disabled={disabled || loading} className={`${[type]} ${className} `}>
            {type === 'primary' && (
                <>
                    <svg width="18" height="18" viewBox="0 0 18 18" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M15 8.25H5.8725L10.065 4.0575L9 3L3 9L9 15L10.0575 13.9425L5.8725 9.75H15V8.25Z"
                            fill={color ? color : '#52379d'}
                        />
                    </svg>
                    <p style={{ color: color ? color : '#52379d' }}>{label}</p>
                </>
            )}

            {type === 'secondary' && <p style={{ color: color ? color : '#52379d' }}>{label}</p>}
        </S.Component>
    );
};

export default Link;
