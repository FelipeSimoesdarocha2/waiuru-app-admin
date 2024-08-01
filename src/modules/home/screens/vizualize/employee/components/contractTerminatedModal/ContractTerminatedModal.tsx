// Styles
import * as S from './ContractTerminatedModal.styles';

// Models
import { ContractTerminatedProps } from './models';

const ContractTerminatedModal = ({ action, onClose }: ContractTerminatedProps) => {
  return (
    <S.Component>
      <S.Container>
        <S.Content>
          <p>Tem certeza que deseja encerrar o contrato com este funcionário?</p>
        </S.Content>
        <S.Actions>
          <S.Button onClick={onClose}>
            <p>Cancelar</p>
          </S.Button>
          <S.Button onClick={action}>
            <p>prosseguir</p>
          </S.Button>
        </S.Actions>
      </S.Container>
    </S.Component>
  );
};

export default ContractTerminatedModal;
