// React
import { useState } from 'react';

// Styles
import * as S from './Text.styles';

// Models
import { inputProps, inputValueProps } from './models';

const InputValue = ({
  id,
  type,
  title,
  value,
  disable,
  checked,
  required,
  className,
  placeholder,
  autocomplete,
  classContainer,
  onBlur,
  onChange,
  onEnterPress,
}: inputValueProps) => {
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
    <div
      className={`${'input'} ${classContainer} ${invalidRequired ? 'required' : null} ${isFocused ? 'focused' : null} `}
    >
      <label
        className={value || isFocused ? 'label-focused' : 'label'}
        htmlFor={id}
        data-testid={`${id}-label`}
        dangerouslySetInnerHTML={{ __html: title as string }}
      />

      <input
        id={id}
        key={id}
        type={type}
        title={title}
        value={value}
        data-testid={id}
        checked={checked}
        disabled={disable}
        required={required}
        className={className}
        onChange={onChangeValue}
        placeholder={placeholder}
        autoComplete={autocomplete}
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

const Text = ({
  id,
  type,
  mask,
  title,
  value,
  values,
  checked,
  disable,
  required,
  textarea,
  className,
  placeholder,
  autocomplete,
  onBlur,
  onChange,
  onEnterPress,
}: inputProps) => {
  return (
    <S.Component>
      {values?.length ? (
        values.map(input => (
          <InputValue
            id={input.id}
            key={input.id}
            type={input.type}
            mask={input.mask}
            title={input.title}
            value={input.value}
            disable={input.disable}
            checked={input.checked}
            required={input.required}
            textarea={input.textarea}
            onChange={input.onChange}
            className={input.className}
            placeholder={input.placeholder}
            onEnterPress={input.onEnterPress}
            autocomplete={input.autocomplete}
            classContainer={input.classContainer}
          />
        ))
      ) : (
        <InputValue
          id={id}
          type={type}
          mask={mask}
          title={title}
          value={value}
          onBlur={onBlur}
          disable={disable}
          checked={checked}
          required={required}
          textarea={textarea}
          className={className}
          placeholder={placeholder}
          onEnterPress={onEnterPress}
          autocomplete={autocomplete}
          onChange={onChange as (value: string) => void}
        />
      )}
    </S.Component>
  );
};

export default Text;
