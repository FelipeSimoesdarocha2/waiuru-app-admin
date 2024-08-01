// Next
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { useRouter } from 'next/router';

// React
import { useState } from 'react';

// Assets
import arrow from 'assets/icons/arrow.svg';

// Styles
import * as S from './Select.styles';

// Models
import { SelectProps } from './models';

const SelectValue = ({ id, value, options, onChange }: SelectProps) => {
    const [openList, setOpenList] = useState(false);
    const [isFocused, setIsFocused] = useState(false);
    const [selectedOption, setSelectedOption] = useState(value ?? '');
    const router = useRouter();
    const pathname = usePathname();

    const handleOptionClick = (optionValue: string) => {
        setSelectedOption(optionValue);
        onChangeValue({ target: { value: optionValue } });
        router.push(pathname, undefined, { locale: optionValue });
    };

    const toggleSelectVisibility = () => {
        setIsFocused(!isFocused);
        setOpenList(!openList);
    };

    const onChangeValue = (event: { target: { value: string } }) => {
        const value = event.target.value;
        onChange(value);
    };

    return (
        <div onClick={toggleSelectVisibility} className={`${'container'} ${isFocused ? 'focused' : null}`}>
            <p>{options.find(e => e.value === value)?.label}</p>
            {openList && (
                <ul>
                    {options.map(option => (
                        <a
                            id={id}
                            key={option.value}
                            onClick={() => handleOptionClick(option.value)}
                            className={`${selectedOption === option.label ? `${'selected'}` : null}`}
                        >
                            <p>{option.label}</p>
                        </a>
                    ))}
                </ul>
            )}

            <span className={`${isFocused ? 'focused-arrow' : null}`}>
                <Image src={arrow} alt="arrow" draggable="false" />
            </span>
        </div>
    );
};

const Select = ({ id, value, options, onChange }: SelectProps) => {
    return (
        <S.Component>
            <SelectValue id={id} key={id} value={value} options={options} onChange={onChange} />
        </S.Component>
    );
};

export default Select;
