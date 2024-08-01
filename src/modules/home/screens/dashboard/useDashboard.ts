// React
import {useCallback, useState} from 'react';

// Store
import {selectUser} from 'store/features/user';
import {useAppSelector} from 'store/hooks';

// Api
import {filter} from 'components/cards/models';
import {DataItemTableResidents, LostAndFoundDto, OrderDto} from "models";

import {useGetExpensesByCondominium} from "api/expenses";
import {useGetLostAndFound} from 'api/lostAndFound';
import {useGetOrdersByCondoId} from 'api/order';
import {useGetResidentCondominiumRequest} from 'api/resident';
import {useGetVisitorsCondominium} from 'api/visitor/hooks';

// i18n
import useTranslation from 'i18n';

// Constants
import {
  useDashboardConstants,
} from './Dashboard.constants';

export const useDashboard = () => {
  const {
    links,
    linksMenu,
    filterDataCard,
    dataRevenue,
    labelsRevenue,
    labelsExpenses,
  } = useDashboardConstants();

  const [status] = useState(true);
  const [searchValue, setSearchValue] = useState('');
  const [filterVisitors, setFilterVisitors] = useState<filter>({
    id: filterDataCard[0].id,
    label: filterDataCard[0].label,
  });

  const [filterOrders, setFilterOrders] = useState<filter>({
    id: filterDataCard[0].id,
    label: filterDataCard[0].label,
  });

  const [filterResidents, setFilterResidents] = useState<filter>({
    id: filterDataCard[0].id,
    label: filterDataCard[0].label,
  });

  const [filterLostAndFound, setFilterLostAndFound] = useState<filter>({
    id: filterDataCard[0].id,
    label: filterDataCard[0].label,
  });

  const t = useTranslation();
  const sessionUser = useAppSelector(selectUser);

  const {data: setDataResident, isLoading: residentLoading} = useGetResidentCondominiumRequest(
    sessionUser?.user?.id,
    !!sessionUser?.user?.id
  );

  const {data: setLostAndFound, isLoading: lostAndFoundLoading} = useGetLostAndFound(
    sessionUser?.user?.id,
    !!sessionUser?.user?.id
  );

  const {data: setOrders, isLoading: ordersLoading} = useGetOrdersByCondoId(
    sessionUser?.user.id,
    !!sessionUser?.user.id
  );

  const {data: setVisitors, isLoading: visitorLoading} = useGetVisitorsCondominium(
    sessionUser?.user.id,
    !!sessionUser?.user.id
  );

  const {data: setExpenses, isLoading: expensesLoading} = useGetExpensesByCondominium(
    sessionUser?.user.id,
    !!sessionUser?.user.id
  );

  const getDateFilters = () => {
    const today = new Date();
    const todayString = today.toISOString().split('T')[0];

    const previousDay = new Date(today);
    previousDay.setDate(previousDay.getDate() - 1);
    const previousDayString = previousDay.toISOString().split('T')[0];

    const previousMonth = new Date(today);
    previousMonth.setMonth(previousMonth.getMonth() - 1);
    const previousMonthString = previousMonth.toISOString().split('T')[0];

    const previousYear = new Date(today);
    previousYear.setFullYear(previousYear.getFullYear() - 1);
    const previousYearString = previousYear.toISOString().split('T')[0];

    return {todayString, previousDayString, previousMonthString, previousYearString};
  };

  const filterData = (data: DataItemTableResidents[] | OrderDto[] | LostAndFoundDto[] | undefined, filterId: number) => {
    if (!data) return 0;

    const {todayString, previousDayString, previousMonthString, previousYearString} = getDateFilters();

    let filteredData = [];

    if (filterId === 1) {
      filteredData = data?.filter((item: any) => {
        const createdAt = item?.created_at ? item.created_at : new Date().toISOString()

        const createDate = new Date(createdAt).toISOString().split('T')[0];
        return createDate === previousDayString;
      });
    } else if (filterId === 2) {
      filteredData = data?.filter((item: any) => {
        const createdAt = item?.created_at ? item.created_at : new Date().toISOString()

        const createDate = new Date(createdAt).toISOString().split('T')[0];
        return createDate >= previousMonthString && createDate <= todayString;
      });
    } else if (filterId === 3) {
      filteredData = data?.filter((item: any) => {
        const createdAt = item?.created_at ? item.created_at : new Date().toISOString()

        const createDate = new Date(createdAt).toISOString().split('T')[0];
        return createDate >= previousYearString && createDate <= todayString;
      });
    }

    return filteredData.length / data.length * 100;
  };

  const visitorsIncome = useCallback(() => {
    return filterData(setVisitors, filterVisitors.id as number);
  }, [filterData, setVisitors, filterVisitors.id]);

  const ordersIncome = useCallback(() => {
    return filterData(setOrders, filterOrders.id as number);
  }, [filterData, setOrders, filterOrders.id]);

  const residentsIncome = useCallback(() => {
    return filterData(setDataResident, filterResidents.id as number);
  }, [filterData, setDataResident, filterResidents.id]);

  const lostAndFoundIncome = useCallback(() => {
    return filterData(setLostAndFound, filterLostAndFound.id as number);
  }, [filterData, setLostAndFound, filterLostAndFound.id]);

  const dataExpenses = useCallback((): number[] => {
    if (!setExpenses) return [0, 0, 0];

    const {todayString, previousDayString, previousMonthString, previousYearString} = getDateFilters();

    let filteredData: any[] = [];

    if (filterVisitors.id === 1) {
      filteredData = setExpenses?.filter((item: any) => {
        const createDate = new Date(item.date).toISOString().split('T')[0];
        return createDate === previousDayString;
      });
    } else if (filterVisitors.id === 2) {
      filteredData = setExpenses?.filter((item: any) => {
        const createDate = new Date(item.date).toISOString().split('T')[0];
        return createDate >= previousMonthString && createDate <= todayString;
      });
    } else if (filterVisitors.id === 3) {
      filteredData = setExpenses?.filter((item: any) => {
        const createDate = new Date(item.date).toISOString().split('T')[0];
        return createDate >= previousYearString && createDate <= todayString;
      });
    }

    // getting the percentage of expenses based on the expense_type = EMPLOYEE, MAINTENANCE and OTHERS
    const employeeExpenses = filteredData.filter((item: any) => item.expense_type === 'EMPLOYEE');
    const maintenanceExpenses = filteredData.filter((item: any) => item.expense_type === 'MAINTENANCE');
    const othersExpenses = filteredData.filter((item: any) => item.expense_type === 'OTHERS');

    // converting the total to the correspondent percentage
    const employeeExpensesPercentage = employeeExpenses.length / setExpenses.length * 100;
    const maintenanceExpensesPercentage = maintenanceExpenses.length / setExpenses.length * 100;
    const othersExpensesPercentage = othersExpenses.length / setExpenses.length * 100;

    return [employeeExpensesPercentage, maintenanceExpensesPercentage, othersExpensesPercentage];
  }, [setExpenses, filterVisitors.id]);

  const handleFilterVisitors = (value: filter) => {
    setFilterVisitors(value);
  }

  const handleFilterOrders = (value: filter) => {
    setFilterOrders(value);
  }

  const handleFilterResidents = (value: filter) => {
    setFilterResidents(value);
  }

  const handleFilterLostAndFound = (value: filter) => {
    setFilterLostAndFound(value);
  }

  const handleSearchChange = (value: string) => {
    setSearchValue(value);
  };

  const cardsData = [
    {
      name: t('visitors'),
      info: t('register-so-far'),
      value: setVisitors?.length,
      income: visitorsIncome(),
      status: {
        error: 'lorem ipsum',
      },
      action: filterDataCard,
      loading: visitorLoading,
      handleSelect: handleFilterVisitors,
    },
    {
      name: t('orders'),
      info: t('register-so-far'),
      value: setOrders?.length,
      income: ordersIncome(),
      status: {
        error: 'lorem ipsum',
      },
      action: filterDataCard,
      loading: ordersLoading,
      handleSelect: handleFilterOrders,
    },
    {
      name: t('residents'),
      info: t('register-so-far'),
      value: setDataResident?.length,
      income: residentsIncome(),
      status: {
        error: 'lorem ipsum',
      },
      action: filterDataCard,
      loading: residentLoading,
      handleSelect: handleFilterResidents,
    },
    {
      name: t('lost-and-Found'),
      info: t('register-so-far'),
      value: setLostAndFound?.length,
      income: lostAndFoundIncome(),
      status: {
        error: 'lorem ipsum',
      },
      action: filterDataCard,
      loading: lostAndFoundLoading,
      handleSelect: handleFilterLostAndFound,
    },
  ];

  const profilePicure = sessionUser?.user?.documents?.find(e => e.type === 'PROFILE_PICTURE')?.url;

  return {
    t,
    links,
    status,
    cardsData,
    linksMenu,
    sessionUser,
    searchValue,
    dataRevenue,
    dataExpenses: dataExpenses(),
    labelsRevenue,
    profilePicure,
    labelsExpenses,
    handleSearchChange,
    handleFilterVisitors,
    handleFilterOrders,
    handleFilterResidents,
    handleFilterLostAndFound,
  };
};
