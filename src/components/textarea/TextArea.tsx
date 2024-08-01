// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Icons
import emoji from './icons/emoji.svg';
import menu from './icons/menu.svg';

// Styles
import * as S from './TextArea.styles';

// Models
import { TextAreaProps } from './models';

const TextArea = ({ id, value, type, className, placeholder, onBlur, onChange, onSend }: TextAreaProps) => {
  const [isFocused, setIsFocused] = useState(false);

  const onChangeValue = (event: { target: { value: string } }) => {
    const value = event.target?.value ?? '';
    onChange(value);
  };

  return (
    <S.Component className={`${isFocused ? 'focused' : null} `}>
      <textarea
        id={id}
        key={id}
        value={value}
        data-testid={id}
        className={className}
        onChange={onChangeValue}
        placeholder={placeholder}
        onFocus={() => setIsFocused(true)}
        onBlur={event => {
          onBlur && onBlur(event);
          setIsFocused(false);
        }}
      />
      {type === 'chat' && (
        <div>
          <figure>
            <Image src={emoji} alt="icon" />
          </figure>
          <figure>
            <Image src={menu} alt="icon" />
          </figure>
          <div>
            <button onClick={onSend}>
              <p>Enviar</p>
            </button>
          </div>
        </div>
      )}
    </S.Component>
  );
};

export default TextArea;
