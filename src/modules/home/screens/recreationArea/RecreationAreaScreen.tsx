// React
import { useState } from 'react';
import Calendar from 'react-calendar';

// Styles
import * as S from './RecreationArea.styles';

// @Waiuru-Components
import { Title } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Button } from 'components/button';
import { CardRecreationArea } from 'components/CardRecreationArea';
import { Input } from 'components/input';
import { Tab } from 'components/tab';

// Hook
import { useRecreationArea } from './useRecreationAreaScreen';

type ValuePiece = Date | null;
type Value = ValuePiece | [ValuePiece, ValuePiece];

const RecreationAreaScreen = () => {
  const { t, data, screen, selectedScreen, searchValue, setSelectedScreen, handleSearchChange } = useRecreationArea();

  const [value, onChange] = useState<Value>(new Date());

  return (
    <S.Container>
      <S.Header>
        <Title name={`${t('Área de Lazer')}`} size="18px" />
        <S.Actions>
          <S.Tabs>
            {screen.map(item => (
              <Tab
                key={item.id}
                name={item.name}
                src={item.icon}
                tabItemKey={item.id}
                defaultSelectedKeys={selectedScreen}
                onClick={() => setSelectedScreen(item.id)}
              />
            ))}
          </S.Tabs>
          <Button.Link onClick={() => { }} label={`${t('back')}`} type="primary" />
        </S.Actions>
      </S.Header>
      <S.Content>
        {selectedScreen === '1' && (
          <S.Wrapper>
            <S.Inner>
              <S.Filter>
                <Input.Search
                  key="name"
                  id="name"
                  type="text"
                  data-testid="name"
                  placeholder="Pesquisar..."
                  value={searchValue}
                  onChange={handleSearchChange}
                />
                <Button.Action onClick={() => { }} label={`${t('Ver áreas cadastradas')}`} type="ghost" />
              </S.Filter>
              <S.Cards>{data && data.map((item, index) => <CardRecreationArea key={index} props={item} />)}</S.Cards>
            </S.Inner>
            <S.Outer>
              <S.Calendar>
                <Calendar onChange={onChange} value={value} />
              </S.Calendar>
              <S.Requests>
                <S.Typography>
                  <h2>Solicitações de reserva</h2>
                  <span />
                </S.Typography>
              </S.Requests>
            </S.Outer>
          </S.Wrapper>
        )}
      </S.Content>
    </S.Container>
  );
};

export default RecreationAreaScreen;
