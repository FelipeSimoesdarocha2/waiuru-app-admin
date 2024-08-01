// Next
import Image, { ImageProps, StaticImageData } from 'next/image';
import router from 'next/router';

// React
import { useState } from 'react';

// Assets
import avatar from 'assets/constants/Avatar5.png';
import alert from 'assets/icons/alert.svg';

// Styles
import * as S from './EmployeeVizualize.styles';

// i18n
import useTranslation from 'i18n';

// Provider
import { useEmployee } from 'provider/EmployeeProvider';

// Components
import { Button } from 'components/button';

// Components-Module
import { ContractTerminatedModal, SinglePaymentModal, ElectronicPoint, LastAssignedTasks } from './components';

// Constants
import { electronicPointData } from './Employee.constants';

const EmployeeVizualizeScreen = () => {
  const t = useTranslation();
  const { data } = useEmployee();

  const [contract, setContract] = useState(false);

  const [openSinglePaymentModal, setOpenSinglePaymentModal] = useState(false);
  const [openContractTerminatedModal, setOpenContractTerminatedModal] = useState(false);

  const deleteEmployeeId = () => {
    setContract(true);
    setOpenContractTerminatedModal(false);
  };

  return (
    <S.Container>
      <S.Content>
        <S.Spacing>
          <Button.Link onClick={() => router.push('/employees')} label={`${t('back')}`} type="primary" />
        </S.Spacing>
        <S.UserManagement>
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
            <S.Info>
              <h2>{data?.occupation_area}</h2>
              <p>{data?.name}</p>
            </S.Info>
          </S.Person>
          {/* Revisar com o time de dev */}
          {/* {data?.status === 0 ? ( */}
          {!contract ? (
            <S.Actions>
              <S.Col>
                <Button.Action
                  label="Adicionar pagamento único"
                  type="ghost"
                  className="btn"
                  onClick={() => setOpenSinglePaymentModal(true)}
                />
                <S.Button>
                  <p>ver pagamentos</p>
                </S.Button>
              </S.Col>
              <S.Col>
                <Button.Action label="Editar cadastro" type="primary" onClick={() => { }} className="btn" />
                <S.Button onClick={() => setOpenContractTerminatedModal(true)}>
                  <p>encerrar contrato</p>
                </S.Button>
              </S.Col>
            </S.Actions>
          ) : (
            <S.Contract_Terminated>
              <Image src={alert} alt="alert" />
              <p>Contrato encerrado</p>
            </S.Contract_Terminated>
          )}
        </S.UserManagement>
        <ElectronicPoint data={electronicPointData} />
        <LastAssignedTasks data={electronicPointData} />
      </S.Content>
      {openContractTerminatedModal && (
        <ContractTerminatedModal onClose={() => setOpenContractTerminatedModal(false)} action={deleteEmployeeId} />
      )}
      {openSinglePaymentModal && <SinglePaymentModal onClose={() => setOpenSinglePaymentModal(false)} />}
    </S.Container>
  );
};

export default EmployeeVizualizeScreen;

interface ImageWithFallbackProps extends Omit<ImageProps, 'src'> {
  fallbackSrc: string | StaticImageData;
  src: string | StaticImageData;
}

const ImageWithFallback = ({ src, fallbackSrc, ...rest }: ImageWithFallbackProps) => {
  const [imgSrc, setImgSrc] = useState<string | StaticImageData>(src);

  return <Image {...rest} src={imgSrc} onError={() => setImgSrc(fallbackSrc)} draggable="false" />;
};
