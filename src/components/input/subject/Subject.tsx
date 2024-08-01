// React
import { useState } from 'react';

// Styles
import * as S from './Subject.styles';

// Models
import { inputProps } from './models';

const InputValue = ({ id, type, value, required, placeholder, onBlur, onChange, onEnterPress }: inputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [invalidRequired, setInvalidRequired] = useState(false);

    const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (onEnterPress && event.key === 'Enter') {
            onEnterPress((event.target as HTMLInputElement).value);
        }
    };

    const onChangeValue = (event: { target: { value: string } }) => {
        const value = event.target?.value ?? '';

        if (!value && required) {
            setInvalidRequired(true);
        } else {
            setInvalidRequired(false);
        }

        onChange(value);
    };

    return (
        <div className={`${'input'}  ${invalidRequired ? 'required' : null} ${isFocused ? 'focused' : null} `}>
            <input
                id={id}
                key={id}
                type={type}
                value={value}
                data-testid={id}
                required={required}
                onChange={onChangeValue}
                placeholder={placeholder}
                onKeyUp={event => onKeyUp(event)}
                onFocus={() => setIsFocused(true)}
                onBlur={event => {
                    onBlur && onBlur(event);
                    setIsFocused(false);
                }}
            />
        </div>
    );
};

const Text = ({ id, type, value, required, placeholder, autocomplete, onBlur, onChange, onEnterPress }: inputProps) => {
    return (
        <S.Component>
            <InputValue
                id={id}
                type={type}
                value={value}
                onBlur={onBlur}
                required={required}
                placeholder={placeholder}
                onEnterPress={onEnterPress}
                autocomplete={autocomplete}
                onChange={onChange as (value: string) => void}
            />
        </S.Component>
    );
};

export default Text;
