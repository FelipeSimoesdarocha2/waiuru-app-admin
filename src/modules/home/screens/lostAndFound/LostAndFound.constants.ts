// Assets
import calendar from 'assets/icons/calendar.svg';
import chart from 'assets/icons/chart.svg';

const screen = [
    {
        id: '1',
        name: 'Todos os itens',
        icon: calendar,
    },
    // {
    //     id: '2',
    //     name: 'Relatório de dados',
    //     icon: chart,
    // },
];

const columns = [
    { title: '', dataIndex: 'name', key: 'name' },
    { title: '', dataIndex: 'status', key: 'status' },
    { title: '', dataIndex: 'status', key: 'status' },
    { title: '', dataIndex: 'status', key: 'status' },
];

// Rever
const statusColorMap: { [key: string]: string } = {
    LOST: '#E46978',
    FOUND: '#3FB5B4',
    Resgatado: '#0288D1',
};

const cardsData = [
    { name: 'Total Cadastrados ', value: 320, income: 70, info: 'cadastrados até o momento.' },
    { name: 'Itens Achados ', value: 290, income: -20, info: 'cadastrados até o momento.' },
    { name: 'Itens Perdidos ', value: 23, income: 46, info: 'cadastrados até o momento.' },
    { name: 'Itens Resgatados', value: 212, income: 70, info: 'cadastrados até o momento.' },
];

const dataReturned = [73, 124, 175];
const labelsReturned = ['Bloco A', 'Bloco B', 'Bloco C'];

const dataReceived = [25, 25, 25, 25];
const labelsReceived = ['Abel Santana', 'João Gomes', 'Luan Costa', 'Isabel Ferreira'];

export {
    screen,
    columns,
    cardsData,
    dataReceived,
    dataReturned,
    statusColorMap,
    labelsReceived,
    labelsReturned,
};
