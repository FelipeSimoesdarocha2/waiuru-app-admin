// Assets
import calendar from 'assets/icons/calendar.svg';
import chart from 'assets/icons/chart.svg';

// All orders //
const screen = [
  {
    id: '1',
    name: 'Todas as encomendas',
    icon: calendar,
  },
  // {
  //   id: '2',
  //   name: 'Relatório de dados',
  //   icon: chart,
  // },
];

const columns = [
  { title: '', dataIndex: 'name', key: 'name' },
  { title: '', dataIndex: 'status', key: 'status' },
];

const statusColorMap: { [key: string]: string } = {
  concierge: '#E46978',
  delivered: '#3FB5B4',
};

// Data Report //
const cardsData = [
  { name: 'Recebidas', value: 290, income: -20, info: 'cadastrados até o momento.' },
  { name: 'A retirar ', value: 78, income: 46, info: 'cadastrados até o momento.' },
  { name: 'Retiradas', value: 212, income: 70, info: 'cadastrados até o momento.' },
  { name: 'Devolvidas', value: 3, income: 20, info: 'cadastrados até o momento.' },
];

const dataReturned = [73, 124, 175];
const labelsReturned = ['Morador não encontrado', 'Encomenda incorreta', 'Encomenda incorreta'];

const dataReceived = [25, 25, 25, 25];
const labelsReceived = ['Abel Santana', 'João Gomes', 'Luan Costa', 'Isabel Ferreira'];

export { screen, columns, cardsData, dataReceived, dataReturned, statusColorMap, labelsReturned, labelsReceived };
