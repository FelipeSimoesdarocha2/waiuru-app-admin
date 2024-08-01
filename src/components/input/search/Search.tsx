// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Icons
import icon from './icons/icon.svg';

// Styles
import * as S from './Search.styles';

// Models
import { inputProps, inputValueProps } from './models';

const InputValue = ({ id, type, value, placeholder, onBlur, onChange, onEnterPress }: inputValueProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const onKeyUp = (event: React.KeyboardEvent<HTMLInputElement>) => {
    event.preventDefault();

    if (onEnterPress && event.key === 'Enter') {
      onEnterPress((event.target as HTMLInputElement).value);
    }
  };

  const onChangeValue = (event: { target: { value: string } }) => {
    const value = event.target?.value ?? '';

    onChange(value);
  };

  return (
    <div className={`${'input'}  ${isFocused ? 'focused' : null}  `}>
      {isFocused ? null : <Image src={icon} alt="icon" width={24} height={24} priority />}
      <input
        id={id}
        key={id}
        type={type}
        value={value}
        data-testid={id}
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

const Search = ({ id, type, value, values, className, placeholder, onBlur, onChange, onEnterPress }: inputProps) => {
  return (
    <S.Component className={className}>
      {values?.length ? (
        values.map(input => (
          <InputValue
            id={input.id}
            type={input.type}
            value={input.value}
            placeholder={input.placeholder}
            key={input.id}
            onChange={input.onChange}
            onEnterPress={input.onEnterPress}
          />
        ))
      ) : (
        <InputValue
          id={id}
          type={type}
          value={value}
          placeholder={placeholder}
          onChange={onChange as (value: string) => void}
          onEnterPress={onEnterPress}
          onBlur={onBlur}
        />
      )}
    </S.Component>
  );
};

export default Search;
