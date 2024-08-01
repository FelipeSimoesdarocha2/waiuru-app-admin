// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Icons
import ClosedEye from './icons/CloseEye.svg';
import OpenEye from './icons/OpenEye.svg';

// Styles
import * as S from './Password.styles';

// Models
import { inputProps, inputValueProps } from './models';

const PasswordValue = ({
    id,
    type,
    title,
    value,
    checked,
    required,
    className,
    placeholder,
    classContainer,
    onBlur,
    onChange,
    onEnterPress,
}: inputValueProps) => {
    const [isFocused, setIsFocused] = useState(false);
    const [showPassword, setShowPassword] = useState(true);
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

    const togglePasswordVisibility = () => {
        setShowPassword(!showPassword);
    };

    return (
        <div
            className={`${'input'} ${classContainer} ${invalidRequired ? 'required' : ''} ${isFocused ? 'focused' : ''} ${type === 'password' ? 'password' : ''
                }`}
        >
            <label
                className={value || isFocused ? 'label-focused' : 'label'}
                htmlFor={id}
                data-testid={`${id}-label`}
                dangerouslySetInnerHTML={{ __html: title as string }}
            />
            <div className="password-container">
                <input
                    id={id}
                    key={id}
                    type={showPassword ? 'password' : ' text'}
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
                {value ? (
                    <span onClick={togglePasswordVisibility}>
                        {showPassword ? (
                            <Image src={ClosedEye} alt="Hide Password" width={24} height={24} priority />
                        ) : (
                            <Image src={OpenEye} alt="Show Password" width={24} height={24} priority />
                        )}
                    </span>
                ) : (
                    <span />
                )}
            </div>
        </div>
    );
};

const Password = (props: inputProps) => {
    const {
        id,
        type,
        title,
        value,
        values,
        checked,
        required,
        className,
        placeholder,
        autocomplete,
        onBlur,
        onChange,
        onEnterPress,
    } = props;

    return (
        <S.Component>
            {values?.length ? (
                values.map(input => (
                    <PasswordValue
                        id={input.id}
                        type={input.type}
                        title={input.title}
                        value={input.value}
                        className={input.className}
                        placeholder={input.placeholder}
                        key={input.id}
                        classContainer={input.classContainer}
                        checked={input.checked}
                        required={input.required}
                        onChange={input.onChange}
                        onEnterPress={input.onEnterPress}
                        autocomplete={input.autocomplete}
                    />
                ))
            ) : (
                <PasswordValue
                    id={id}
                    title={title}
                    type={type}
                    value={value}
                    className={className}
                    placeholder={placeholder}
                    checked={checked}
                    required={required}
                    onChange={onChange as (value: string) => void}
                    onEnterPress={onEnterPress}
                    autocomplete={autocomplete}
                    onBlur={onBlur}
                />
            )}
        </S.Component>
    );
};

export default Password;
