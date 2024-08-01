// Assets
import avatar from 'assets/constants/Avatar5.png';

// Styles
import * as S from './Dashboard.styles';

// @waiuru-Components
import { Charts } from '@waiuru/waiuru-ui';

// Components-Temporary
import { Avatar } from 'components/avatar';
import { Cards } from 'components/cards';
import { Input } from 'components/input';
import { Links } from 'components/links';
import { Notification } from 'components/notification';

// Hook
import { useDashboard } from './useDashboard';

const DashboardScreen = () => {
  const {
    t,
    links,
    status,
    cardsData,
    linksMenu,
    sessionUser,
    searchValue,
    dataRevenue,
    dataExpenses,
    labelsRevenue,
    profilePicure,
    labelsExpenses,
    handleSearchChange,
  } = useDashboard();

  return (
    <S.Container>
      <S.Header>
        <S.Wrapper>
          <h2>{sessionUser?.user?.name} </h2>
          <Input.Search
            id="name"
            type="text"
            data-testid="name"
            value={searchValue}
            onChange={handleSearchChange}
            placeholder={t('search')}
          />
          <S.Status>
            <Notification status={status} />
            <Avatar width={40} height={40} alt={`User ${sessionUser.user.name}`} src={profilePicure ?? avatar} />
            <Links data={linksMenu} type="secondary" />
          </S.Status>
        </S.Wrapper>
        <Links data={links} label={t('quick_register')} type="primary" />
      </S.Header>
      <S.Cards>
        {cardsData.map((card, index) => (
          <Cards
            key={index}
            info={card.info}
            name={card.name}
            value={card.value}
            status={card.status}
            income={card.income || 0}
            action={card.action}
            loading={card.loading}
            handleSelect={card.handleSelect}
          />
        ))}
      </S.Cards>
      {<S.ContentCharts>
        <Charts.ChartLine
          data={dataRevenue}
          labels={labelsRevenue}
          income={30}
          value={'$1,450'}
          title={t('total_revenue')}
          subtitle={t('values_ref_total')}
        />
        <div>
          <Charts.ChartRadio
            data={dataExpenses}
            labels={labelsExpenses}
            income={16}
            value={'$1,450'}
            title={t('expenses')}
          />
          <Cards
            name={t('advertisements')}
            value={0}
            income={0}
            info={t('visualizations_so_far')}
            status={{ error: '' }}
          />
        </div>
      </S.ContentCharts>}
    </S.Container>
  );
};

export default DashboardScreen;
