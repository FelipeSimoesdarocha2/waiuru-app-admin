// Next
import Image, { ImageProps, StaticImageData } from 'next/image';
import { useRouter } from 'next/router';

// React
import { useState, useEffect, useRef, useCallback } from 'react';

// Assets
import avatar from 'assets/constants/Avatar5.png';
import menu from 'assets/icons/menu.svg';

// Styles
import * as S from './ListResidentsTable.styles';

// Models
import { ResidentTableProps } from './models';

// Constants
import { statusColorMap, statusMap } from '../../ListResidents.constants';

const ListResidentsTable = ({ columns, data }: ResidentTableProps) => {
  const [openModalId, setOpenModalId] = useState<string | null>(null);
  const router = useRouter();
  const componentRefs = useRef<{ [key: string]: HTMLDivElement | null }>({});

  const handleOpenModal = (id: string) => {
    setOpenModalId(openModalId === id ? null : id);
  };

  const handleClickOutside = useCallback(
    (event: MouseEvent) => {
      if (
        openModalId &&
        componentRefs.current[openModalId] &&
        !componentRefs.current[openModalId]!.contains(event.target as HTMLElement)
      ) {
        setOpenModalId(null);
      }
    },
    [openModalId]
  );

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, [handleClickOutside]);

  return (
    <S.Component>
      <table>
        <thead>
          <tr>
            {columns.map(item => (
              <th key={item.title}>
                <p>{item.title}</p>
              </th>
            ))}
          </tr>
        </thead>
        <tbody>
          {data.map(item => (
            <tr key={item.id}>
              <S.Person>
                <ImageWithFallback
                  fallbackSrc={avatar}
                  width={40}
                  height={40}
                  alt={`User ${item.name}`}
                  src={item.documents?.find(e => e.type === 'PROFILE_PICTURE')?.url ?? avatar}
                />
                <p>{item.name}</p>
              </S.Person>
              <S.Adress>
                <p>{item.condominium.address}</p>
              </S.Adress>
              <S.Status>
                <div>
                  <span style={{ backgroundColor: statusColorMap[item.status] }}>
                    <p>{statusMap[item.status]}</p>
                  </span>
                </div>
              </S.Status>
              <S.Action>
                <S.Wrapper>
                  <S.Button onClick={() => handleOpenModal(item.id)}>
                    <Image src={menu} alt="menu" priority draggable={false} />
                  </S.Button>
                  {openModalId === item.id && (
                    <S.Modal
                      ref={el => {
                        componentRefs.current[item.id] = el;
                      }}
                    >
                      <button onClick={() => router.push(`/vizualize/resident/${item.id}`)}>
                        <p>Ver perfil</p>
                      </button>
                      <button>
                        <p>Enviar notificação de cadastro</p>
                      </button>
                    </S.Modal>
                  )}
                </S.Wrapper>
              </S.Action>
            </tr>
          ))}
        </tbody>
      </table>
    </S.Component>
  );
};

export default ListResidentsTable;

// ImageWithFallback Component
interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  fallbackSrc: string | StaticImageData;
  src: string | StaticImageData;
}

const ImageWithFallback = ({ src, fallbackSrc, ...rest }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);

  return <Image {...rest} src={imgSrc} onError={() => setImgSrc(fallbackSrc)} />;
};
