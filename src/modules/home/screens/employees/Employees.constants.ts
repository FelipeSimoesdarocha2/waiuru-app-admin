// Assets
import calendar from 'assets/icons/calendar.svg';
import chart from 'assets/icons/chart.svg';

const screen = [
    {
        id: '1',
        name: 'Todos os funcionários',
        icon: calendar,
    },
    {
        id: '2',
        name: 'Atividades',
        icon: calendar,
    },
    // {
    //     id: '3',
    //     name: 'Direitos trabalhistas',
    //     icon: calendar,
    // },
    // {
    //     id: '4',
    //     name: 'Relatório de dados',
    //     icon: chart,
    // },
];

const links = [
    {
        value: '/employees',
        name: 'Todos ',
    },
    {
        value: '/employees',
        name: 'Setor Financeiro',
    },
    {
        value: '/employees',
        name: 'Setor Administrativo',
    },
    {
        value: '/employees',
        name: 'Manutenção Predial',
    },
    {
        value: '/employees',
        name: 'Recepção',
    },
    {
        value: '/employees',
        name: 'Segurança',
    },
    {
        value: '/employees',
        name: 'Limpeza',
    },
    {
        value: '/employees',
        name: 'Portaria',
    },
];

export { screen, links };
