// Assets
import calendar from 'assets/icons/calendar.svg';
import chart from 'assets/icons/chart.svg';

const screen = [
  {
    id: '1',
    name: 'Todas as ocorrências',
    icon: calendar,
  },
  // {
  //   id: '2',
  //   name: 'Relatório de dados',
  //   icon: chart,
  // },
];

const columns = [{ title: '', dataIndex: 'status', key: 'status' }];

const bookOccurrencesData = [
  {
    id: 1,
    name: 'Som alto no apt 2304, torre a',
    status: 'Reclamação',
    delivery_date: '15/02/2023, 18:36',
  },
  {
    id: 2,
    name: 'Nova quadra na torre b',
    status: 'Sugestão',
    delivery_date: '15/02/2023, 18:36',
  },
  {
    id: 3,
    name: 'Portão quebrado',
    status: 'Observação',
    delivery_date: '15/02/2023, 18:36',
  },
];

const statusColorMap: { [key: string]: string } = {
  CLOSE: '#E46978',
  OPEN: '#3FB5B4',
  PENDING: '#0288D1',
};

const cardsData = [
  { name: 'Total Cadastradas', value: 43, income: 20, info: 'cadastrados até o momento.' },
  { name: 'Ocorrências abertas ', value: 2, income: -20, info: 'cadastrados até o momento.' },
  { name: 'Ocorrências fechadas', value: 39, income: 46, info: 'cadastrados até o momento.' },
  { name: 'Ocorrências pendentes', value: 1, income: 70, info: 'cadastrados até o momento.' },
];

const dataReturned = [10, 15, 18];
const labelsReturned = ['Sugestão', 'Reclamação', 'Observação'];

const links = [
  {
    name: 'Todas ',
    value: '1',
  },
  {
    name: 'Abertas ',
    value: '2',
  },
  {
    name: 'Fechadas ',
    value: '3',
  },
  {
    name: 'Pendentes ',
    value: '4',
  },
];

export { screen, columns, links, cardsData, dataReturned, statusColorMap, labelsReturned, bookOccurrencesData };
