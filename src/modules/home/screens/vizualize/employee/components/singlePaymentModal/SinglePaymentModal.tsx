// Next
import Image from 'next/image';

// React
import { useState } from 'react';

// Assets
import dolar from 'assets/icons/dolar.svg';
import edit from 'assets/icons/edit_black.svg';

// Styles
import * as S from './SinglePaymentModal.styles';

// Models
import { SinglePaymentModalProps } from './models';

// @Waiuru-Temporary
import { Checkbox } from '@waiuru/waiuru-ui';

// Components
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Select } from 'components/select';

const SinglePaymentModal = ({ onClose }: SinglePaymentModalProps) => {
  const [name, setName] = useState('');
  const [value, setValue] = useState('');
  const [startDate, setStartDate] = useState('');
  const [reason, setReason] = useState('');
  const [checked, setChecked] = useState(false);

  const [amount, setAmount] = useState('00,00');
  const [paymentPeriod, setPaymentPeriod] = useState('');
  const [paymentData, setPaymentData] = useState('');
  const [paymentRepeat, setPaymentRepeat] = useState(false);

  const [editAmount, setEditAmount] = useState(false);
  const [selectedScreen, setSelectedScreen] = useState('1');

  const reason_payment = [
    {
      label: 'Salário',
      value: '1',
    },
    {
      label: 'Hora extra',
      value: '2',
    },
    {
      label: 'Bônus',
      value: '3',
    },
    {
      label: 'Férias',
      value: '4',
    },
  ];

  const period = [
    {
      label: 'Semanal',
      value: '1',
    },
    {
      label: 'Mensal',
      value: '2',
    },
    {
      label: 'Anual',
      value: '3',
    },
  ];

  const onChangeChecked = (checked: boolean) => {
    setChecked(checked);
  };

  const handleChange = (event: { target: { value: string } }) => {
    setAmount(event.target.value);
  };

  const onSend = () => {
    onClose();
  };

  return (
    <S.Component>
      {selectedScreen === '1' && (
        <S.Container>
          <S.Header>
            <p>Adicionar pagamento único</p>
          </S.Header>
          <S.Content>
            <S.Form>
              <Input.Text
                title="Nome completo do recebedor"
                key="name"
                id="name"
                type="text"
                placeholder=""
                data-testid="name"
                onChange={setName}
                value={name}
                autocomplete="name"
              />
              <Input.Text
                title="Valor do pagamento"
                key="value"
                id="value"
                type="text"
                placeholder=""
                data-testid="value"
                onChange={setValue}
                value={value}
                autocomplete="local"
              />
              <Input.Text title="De:" id="startDate" type="date" onChange={setStartDate} value={startDate} />
              <Select.Action
                id="reason"
                label={'Razão do pagamento'}
                onChange={setReason}
                value={reason}
                placeholder="Hora extra"
                options={reason_payment}
              />
              <S.Check>
                <Checkbox
                  id="checkbox-id"
                  title={'Gerar comprovante de pagamento e enviar por email'}
                  checked={checked}
                  onChange={onChangeChecked}
                />
              </S.Check>
            </S.Form>
          </S.Content>
          <S.Actions>
            <S.Button onClick={onClose}>
              <p>Cancelar</p>
            </S.Button>
            <Button.Action
              onClick={() => setSelectedScreen('2')}
              label={'Concluir pagamento'}
              type="primary"
              className="btn"
            />
          </S.Actions>
        </S.Container>
      )}
      {selectedScreen === '2' && (
        <S.Status>
          <p>Pagamento efetuado com sucesso!</p>
          <Image src={dolar} alt="dolar" />
          <p>
            O pagamento foi efetuado de acordo com a data escolhida, e o comprovante foi enviado para o email da empresa
            e para o funcionário. Obrigado!
          </p>
          <S.Actions>
            <Button.Action
              onClick={() => setSelectedScreen('3')}
              label={'Ok, entendi'}
              type="primary"
              className="btn"
            />
          </S.Actions>
        </S.Status>
      )}
      {selectedScreen === '3' && (
        <S.Salary_Form>
          <h3>Alterar salário base</h3>
          <S.Wrapper>
            <S.Amounts>
              <S.Value>
                {!editAmount && <h2>R$ {amount}</h2>}
                {editAmount && (
                  <input
                    id=""
                    key=""
                    type="text"
                    title="d"
                    value={amount}
                    data-testid=""
                    onChange={handleChange}
                    placeholder=""
                    autoComplete=""
                  />
                )}
                <S.Button onClick={() => setEditAmount(!editAmount)}>
                  <Image src={edit} alt="edit" />
                </S.Button>
              </S.Value>
              <p>Salário atual</p>
            </S.Amounts>
            <S.Form>
              <Select.Action
                id="paymentPeriod"
                label={'Período de pagamento'}
                value={paymentPeriod}
                options={period}
                onChange={setPaymentPeriod}
              />
              <Input.Text
                id="payment_data"
                type="date"
                title="Data de pagamento"
                value={paymentData}
                onChange={setPaymentData}
              />
              <S.Check>
                <Checkbox
                  id="checkbox-id"
                  title={'Repetir pagamento na mesma data (ex: todo dia 05).'}
                  checked={paymentRepeat}
                  onChange={setPaymentRepeat}
                />
              </S.Check>
            </S.Form>
          </S.Wrapper>
          <S.Actions>
            <S.Button onClick={onClose}>
              <p>Cancelar</p>
            </S.Button>
            <Button.Action onClick={onSend} label={'Salvar informações'} type="primary" className="btn" />
          </S.Actions>
        </S.Salary_Form>
      )}
    </S.Component>
  );
};

export default SinglePaymentModal;
