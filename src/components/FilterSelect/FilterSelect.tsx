// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Store
import vector from 'assets/icons/vetor.svg';

// Styles
import * as S from './FilterSelect.styles';

// Models
import { FilterSelectDataProps, FilterSelectProps } from './models';

const FilterSelect = (props: FilterSelectProps) => {
  const { data, onChange } = props;

  const [isOpen, setIsOpen] = useState(false);
  const [selectedIndex, setSelectedIndex] = useState(0);

  const onClose = () => {
    setIsOpen(!isOpen);
  };

  const handleLinkClick = (item: FilterSelectDataProps, index: number) => {
    setSelectedIndex(index);
    onChange && onChange(item);
    onClose();
  };

  return (
    <S.Component>
      <button onClick={onClose} className="link_btn">
        <p>{data && data.length > 0 && data[selectedIndex].name}</p>
        <Image src={vector} alt="icon" priority />
      </button>
      {isOpen && (
        <div className={`${['content']} ${['link']}`}>
          {data &&
            data.map((item, index) => (
              <div key={index} className="item">
                <button
                  onClick={() => {
                    handleLinkClick(item, index);
                  }}
                >
                  <p>{item.name}</p>
                </button>
              </div>
            ))}
        </div>
      )}
    </S.Component>
  );
};

export default FilterSelect;
