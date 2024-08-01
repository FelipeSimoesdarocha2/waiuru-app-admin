// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Icons
import arrow from './icons/arrow.svg';

// Styles
import * as S from './Action.styles';

// Models
import { SelectProps, OptionType } from './models';

const Action = ({ id, label, value, options, required, disabled, placeholder, onChange }: SelectProps) => {
    const [openList, setOpenList] = useState(false);
    const [isFocused, setIsFocused] = useState(false);

    const [selectedOption, setSelectedOption] = useState<OptionType | undefined>(
        options.find(option => option.value === value)
    );

    const handleOptionClick = (option: OptionType) => {
        setSelectedOption(option);
        onChange(option.value);
        toggleSelectVisibility();
    };

    const toggleSelectVisibility = () => {
        setIsFocused(!isFocused);
        setOpenList(!openList);
    };

    return (
        <S.Component>
            <div
                onClick={toggleSelectVisibility}
                className={`container ${required ? 'required' : ''} ${disabled ? 'disabled' : ''} ${isFocused ? 'focused' : ''}`}
            >
                <label
                    className={selectedOption || isFocused ? 'label-focused' : 'label'}
                    htmlFor={id}
                    data-testid={`${id}-label`}
                    dangerouslySetInnerHTML={{ __html: label }}
                />
                <div className={'select-container'}>
                    {selectedOption ? <p>{selectedOption.label}</p> : placeholder && <p>{placeholder}</p>}
                    <div className="custom-select" id={id} key={id}>
                        {openList && (
                            <ul>
                                {options.map(option => (
                                    <li
                                        key={option.value}
                                        className={`${selectedOption?.value === option.value ? 'selected' : ''}`}
                                        onClick={() => handleOptionClick(option)}
                                    >
                                        {option.label}
                                    </li>
                                ))}
                            </ul>
                        )}
                    </div>
                    <span className={isFocused ? 'focused-arrow' : ''}>
                        <Image src={arrow} alt="arrow" />
                    </span>
                </div>
            </div>
        </S.Component>
    );
};

export default Action;
