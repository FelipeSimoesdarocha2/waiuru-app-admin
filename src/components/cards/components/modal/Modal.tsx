// React
import React from 'react';

// Styles
import * as S from './Modal.styles';

// Models
import { modalProps } from './models';

const Modal = ({ filterData, selected, onClose }: modalProps) => {
    return (
        <S.Component>
            {filterData.map(item => (
                <div className="first_child" key={item.id}>
                    <button onClick={() => onClose(item)} className={`${selected === item ? 'active' : null}`}>
                        <p>{item.label}</p>
                    </button>
                </div>
            ))}
        </S.Component>
    );
};

export default Modal;
