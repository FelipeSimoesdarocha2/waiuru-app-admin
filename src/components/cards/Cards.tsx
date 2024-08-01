// Next
import Image from 'next/image';

// React
import { useState, Fragment } from 'react';

// Assets
import down from './icons/down.svg';
import error from './icons/error.svg';
import more from './icons/more.svg';
import up from './icons/up.svg';

// Styles
import * as S from './Cards.styles';

// Models
import { cardsProps, filter } from './models';

// Components
import useTranslation from 'i18n';

import { Tooltip } from 'components/tooltip';

// Components-Module
import { Modal } from './components/modal';

const Cards = ({ name, info, value, income, status, action, classname, loading, handleSelect }: cardsProps) => {
  const t = useTranslation();

  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedFilter, setSelectedFilter] = useState<filter | null>(null);

  const handleOpenModal = () => {
    setIsModalOpen(!isModalOpen);
  };

  const handleCloseModal = (filter: filter | null) => {
    if (filter === selectedFilter) {
      setSelectedFilter(null);
    } else {
      setSelectedFilter(filter);
    }

    setIsModalOpen(!isModalOpen);
    handleSelect && handleSelect(filter as filter);
  };

  return (
    <S.Component className={classname}>
      <S.Head>
        <S.Typography className={`${loading ? 'loading' : null}`}>{!loading && <S.Title>{name}</S.Title>}</S.Typography>
        {action && (
          <S.Action className={`${loading ? 'loading' : null}`}>
            {!loading && (
              <S.Button onClick={handleOpenModal}>
                <S.Typography>{selectedFilter?.label || t('day')}</S.Typography>
                <Image src={more} alt="more" width={24} height={24} priority draggable={false} />
                {isModalOpen && <Modal filterData={action} onClose={handleCloseModal} selected={selectedFilter} />}
              </S.Button>
            )}
          </S.Action>
        )}
      </S.Head>
      <S.Content className={`${loading ? 'loading' : null}`}>
        {!loading && (
          <Fragment>
            <h2>{value ?? 0}</h2>
            <div className="inner">
              <Image src={income <= 0 ? down : up} alt="income" width={20} height={20} priority draggable={false} />
              <p className={income <= 0 ? 'down' : 'up'}>{Math.abs(income)}%</p>
            </div>
          </Fragment>
        )}
      </S.Content>
      <S.Footer className={`${loading ? 'loading' : null}`}>
        {!loading && (
          <Fragment>
            <p className="paragraph">{info}</p>
            {status?.error && (
              <Tooltip
                img={{ src: error, alt: 'error' }}
                label={'Lorem Ipsum is simply dummy text of the printing and typesetting industry '}
              />
            )}
          </Fragment>
        )}
      </S.Footer>
    </S.Component>
  );
};

export default Cards;
