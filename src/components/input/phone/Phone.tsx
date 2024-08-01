// React
import { useState } from 'react';

// Styles
import * as S from './Phone.styles';

// Models
import { inputProps } from './models';

const Phone = ({
    id,
    key,
    type,
    title,
    value,
    checked,
    required,
    className,
    placeholder,
    autocomplete,
    onBlur,
    onChange,
    onEnterPress,
}: inputProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [invalidRequired, setInvalidRequired] = useState(false);

    const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
        event.preventDefault();

        if (onEnterPress && event.key === 'Enter') {
            onEnterPress((event.target as HTMLInputElement).value);
        }
    };

    const onChangeValue = (event: { target: { value: string } }) => {
        const inputValue = event.target?.value ?? '';
        onChange(inputValue);
    };

    return (
        <S.Component>
            <div className={`${'input'} ${className} ${invalidRequired ? 'required' : ''} ${isFocused ? 'focused' : ''} `}>
                <label
                    className={value || isFocused ? 'label-focused' : 'label'}
                    htmlFor={id}
                    data-testid={`${id}-label`}
                    dangerouslySetInnerHTML={{ __html: title as string }}
                />
                <input
                    id={id}
                    key={key}
                    type={type}
                    title={title}
                    value={value}
                    data-testid={id}
                    checked={checked}
                    required={required}
                    className={className}
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
        </S.Component>
    );
};

export default Phone;
