// Next
import Image from 'next/image';
import router from 'next/router';

// React
import { Fragment } from 'react';

// Assets
import avatar from 'assets/constants/Avatar5.png';
import intro from 'assets/constants/home/Intro.png';
import documents_rafiki from 'assets/images/documents_rafiki.png';
import decorator from 'assets/images/home/decorator.png';

// Styles
import * as S from './Home.styles';

// Components
import { Avatar } from 'components/avatar';
import { Button } from 'components/button';
import { Input } from 'components/input';
import { Links } from 'components/links';
import { Loading } from 'components/loading';
import { WithoutData } from 'components/withoutData';

// Hook
import { useHome } from './useHome';

const HomeScreen = () => {
  const {
    t,
    data,
    menu,
    session,
    isLoading,
    searchValue,
    filteredData,
    profilePicure,
    onSelectCondo,
    handleSearchChange,
  } = useHome();

  return (
    <S.Container>
      <S.Header>
        <S.Typography>
          <h2>{session.user.name}, bem vindo novamente ao Waiuru!</h2>
          <p>Sua plataforma gerenciadora de condomínios.</p>
        </S.Typography>
        <S.Person>
          <Avatar width={40} height={40} alt={`User ${session.user.name}`} src={profilePicure ?? avatar} />
          <p>{session.user.name}</p>
          <Links data={menu} type="secondary" />
        </S.Person>
      </S.Header>
      <S.Content>
        <S.Inner>
          <p>Escolha um condomínio para continuar</p>
          <S.Action>
            {data && (
              <Input.Search
                className="search"
                placeholder="Pesquisar por condomínio"
                value={searchValue}
                onChange={handleSearchChange}
              />
            )}
            {/* <Button.Action
              label="Adicionar novo condomínio"
              type="primary"
              onClick={() => router.push('/first-access')}
            /> */}
          </S.Action>
        </S.Inner>
        <S.Wrapper>
          {isLoading ? (
            <Loading />
          ) : (
            <Fragment>
              {data ? (
                <Fragment>
                  {filteredData.length > 0 ? (
                    <S.Cards>
                      {filteredData.map(item => (
                        <S.Card key={item.id} onClick={() => onSelectCondo(item.id)}>
                          <S.Image>
                            <Image src={intro} alt={`Condominium ${item.name}`} draggable={false} />
                          </S.Image>
                          <S.Info>
                            <p>{item.name}</p>
                            <p>{item.name}</p>
                          </S.Info>
                        </S.Card>
                      ))}
                    </S.Cards>
                  ) : (
                    <h1>Este nome não existe</h1>
                  )}
                </Fragment>
              ) : (
                <Fragment>
                  <WithoutData
                    title="Ainda não há condomínios cadastrados."
                    image={{ src: documents_rafiki, alt: '' }}
                    action={{
                      label: 'Adicionar novo condomínio',
                      onChange: () => router.push('/first-access'),
                    }}
                  />
                </Fragment>
              )}
            </Fragment>
          )}
        </S.Wrapper>
      </S.Content>
      <S.Footer>
        <div className="footer_content">
          <div className="footer_typography">
            <p className="title">Precisa contratar mais condominios?</p>
            <p className="sub_title">
              Entre em contato com nossa equipe iremos te ajudar a fazer um upgrade nos seu planos. Contate
              sale@waiuru.com ou clique no botão ao lado.
            </p>
          </div>
          <Button.Action label="Falar com o Waiuru" type="primary" />
        </div>

        <p className="info">
          Para duvidas e problemas entre em contato com nossa equipe de Suporte:
          <strong>help@waiuru.com</strong>
        </p>
      </S.Footer>
      <S.Decorator>
        <Image src={decorator} alt="decorator" />
      </S.Decorator>
    </S.Container>
  );
};

export default HomeScreen;
