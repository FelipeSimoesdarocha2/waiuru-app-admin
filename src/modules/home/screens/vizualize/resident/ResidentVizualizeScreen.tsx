// Next
import Image, { ImageProps, StaticImageData } from 'next/image';
import router from 'next/router';

// React
import { useState } from 'react';

// Assets
import avatar from 'assets/constants/Avatar8.png';

// Styles
import * as S from './ResidentVizualize.styles';

// i18n
import useTranslation from 'i18n';

// Provider
import { useResident } from 'provider/ResidentProvider';

// Components
import { Button } from 'components/button';

// Components-Module
import { Publications } from './components';

// Moment
import moment from 'moment';

const ResidentVizualizeScreen = () => {
  const t = useTranslation();
  const { data } = useResident();

  return (
    <S.Container>
      <S.Header>
        <S.Action>
          <Button.Link
            onClick={() => router.push('/list-of-residents')}
            label={`${t('back')}`}
            type="primary"
            color="#fff"
          />
        </S.Action>
        <S.Row>
          <S.Person>
            <S.Componente_Image>
              <ImageWithFallback
                fallbackSrc={avatar}
                width={40}
                height={40}
                alt={`User ${data?.name}`}
                src={data?.documents?.find(e => e.type === 'PROFILE_PICTURE')?.url ?? avatar}
              />
            </S.Componente_Image>
            <S.Col>
              <h2>{data?.name}</h2>
              <S.Address>
                <p>{data?.condominium.address}</p>
              </S.Address>
              <S.Date>Incluído em {moment(data?.created_at).format('DD/MM/YYYY')}</S.Date>
              <S.Update>
                <p>Atualizações</p>
                <span>
                  <p>{0}</p>
                </span>
              </S.Update>
            </S.Col>
          </S.Person>
          <S.Actions>
            <Button.Action
              onClick={() => router.push(`/edit/resident/${data?.id}`)}
              label={'Editar dados cadastrais'}
              type="ghost"
            />
            <Button.Link
              onClick={() => { }}
              label={'excluir conta do morador'}
              type="secondary"
              color="#fff"
              className="link"
            />
          </S.Actions>
        </S.Row>
      </S.Header>
      <Publications data={[]} />
    </S.Container>
  );
};

export default ResidentVizualizeScreen;

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  fallbackSrc: string | StaticImageData;
  src: string | StaticImageData;
}

const ImageWithFallback = ({ src, fallbackSrc, ...rest }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);

  return <Image {...rest} src={imgSrc} onError={() => setImgSrc(fallbackSrc)} draggable="false" />;
};
