// Assets
import avatar from 'assets/constants/Avatar3.png';
import calendar from 'assets/icons/calendar.svg';
import chart from 'assets/icons/chart.svg';

// Models
import { DataItemTableAccessControl } from 'models';

const screen = [
    {
        id: '1',
        name: 'Acessos',
        icon: calendar,
    },
    {
        id: '2',
        name: 'Relatório de dados',
        icon: chart,
    },
];

const columns = [
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Veículo ', dataIndex: 'vehicle', key: 'vehicle' },
    { title: 'Local ', dataIndex: 'local', key: 'local' },
    { title: 'Hora de acesso', dataIndex: 'access_time', key: 'access_time' },
    { title: 'Categoria ', dataIndex: 'category', key: 'category' },
];

const accessControlData: DataItemTableAccessControl[] = [
    {
        id: 1,
        name: 'Bruna Cavalcante',
        vehicle: 'Moto',
        perfilImage: avatar,
        local: 'Condomínio',
        access_time: '23/04/2023 18:43',
        category: 'Prestador de Serviços',
    },
    {
        id: 2,
        name: 'Ana Cavalcante',
        vehicle: 'Carro',
        perfilImage: avatar,
        local: '301 B',
        access_time: '23/04/2023 18:43',
        category: 'Visitante',
    },
    {
        id: 3,
        name: 'Marcia Cavalcante',
        vehicle: 'Moto',
        perfilImage: null,
        local: '301 B',
        access_time: '23/04/2023 18:43',
        category: 'Visitante Temporário',
    },
    {
        id: 4,
        name: 'Laura Cavalcante',
        vehicle: 'Sem veículo',
        perfilImage: avatar,
        local: '301 B',
        access_time: '23/04/2023 18:43',
        category: 'Funcionário',
    },
    {
        id: 5,
        name: 'Laura Cavalcante',
        vehicle: 'Moto',
        perfilImage: null,
        local: '301 B',
        access_time: '23/04/2023 18:43',
        category: 'Funcionário',
    },
    {
        id: 6,
        name: 'Laura Cavalcante',
        vehicle: 'Moto',
        perfilImage: avatar,
        local: '301 B',
        access_time: '23/04/2023 18:43',
        category: 'Prestador de Serviços',
    },
    {
        id: 7,
        name: 'Laura Cavalcante',
        vehicle: 'Moto',
        perfilImage: avatar,
        local: '301 B',
        access_time: '23/04/2023 18:43',
        category: 'Prestador de Serviços',
    },
];

const links = [
    {
        name: 'Todos ',
        value: '0',
    },
    {
        name: 'Visitante ',
        value: '1',
    },
    {
        name: 'Encomenda',
        value: '2',
    },
    {
        name: 'Veículo',
        value: '3',
    },
    {
        name: 'Morador',
        value: '4',
    },
    {
        name: 'Animal',
        value: '5',
    },
    {
        name: 'Votação online',
        value: '6',
    },
    {
        name: 'Funcionário',
        value: '7',
    },
];

export { links, screen, columns, accessControlData };
