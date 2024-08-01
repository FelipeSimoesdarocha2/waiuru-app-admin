import useTranslation from "i18n";

export const useDashboardConstants = () => {
  const t = useTranslation();

  const filterDataCard = [
    {
      id: 1,
      label: t('day'),
    },
    {
      id: 2,
      label: t('month'),
    },
    {
      id: 3,
      label: t('year'),
    },
  ];

  const links = [
    {
      value: '/create/visitors',
      name: t('visitors'),
    },
    {
      value: '/create/order',
      name: t('order'),
    },
    {
      value: '/create/vehicles',
      name: t('vehicles'),
    },
    {
      value: '/create/residents',
      name: t('resident'),
    },
    {
      value: '/create/animals',
      name: t('animal'),
    },
    {
      value: '/create/online-voting',
      name: t('online-voting'),
    },
    {
      value: '/create/employee',
      name: t('employee'),
    },
  ];


  const linksMenu = [
    // {
    //     value: '/dashboard',
    //     name: 'Gerenciar Plano',
    // },
    {
      value: '/settings',
      name: t('settings'),
    },
    {
      value: '/',
      name: 'exit',
    },
  ];


  const dataRevenue = [800, 650, 700, 600, 780, 400, 600, 1000, 1200];
  const labelsRevenue = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sáb', 'Dom'];

  const labelsExpenses = [
    t('employees'),
    t('maintenance'),
    t('others'),
  ];

  return {links, linksMenu, filterDataCard, dataRevenue, labelsRevenue, labelsExpenses};
}

