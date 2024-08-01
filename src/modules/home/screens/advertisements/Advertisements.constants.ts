// Assets
import calendar from 'assets/icons/calendar.svg';
import chart from 'assets/icons/chart.svg';

// Models
import { AdvertisementsProps } from 'models';

const screen = [
    {
        id: '1',
        name: 'Mudanças agendadas',
        icon: calendar,
    },
    {
        id: '2',
        name: 'Histórico',
        icon: chart,
    },
    {
        id: '3',
        name: 'Relatório de dados',
        icon: chart,
    },
];

const links = [
    {
        value: '1',
        name: 'Neste mês ',
    },
    {
        value: '2',
        name: 'Neste ano',
    },
];

const dataAdvertisements: AdvertisementsProps[] = [
    {
        name: 'Pablo Dantas',
        description: 'Elevador para mudanças',
        price: 10,
        is_free: 'FREE',
        specifications: 'Elevador da marca..',
        roles: 'Permite o carregamento de 1 tonelada',
        privacy_policy: '',
        condominium_id: '12sad35680',
        type: 'FREE',
    },
    {
        name: 'Pablo Dantas',
        description: 'Elevador para mudanças',
        price: 10,
        is_free: 'FREE',
        specifications: 'Elevador da marca..',
        roles: 'Permite o carregamento de 1 tonelada',
        privacy_policy: '',
        condominium_id: '1235680',
        type: 'FREE',
    },
    {
        name: 'Elevador de serviço',
        description: 'Elevador para mudanças',
        price: 10,
        is_free: 'FREE',
        specifications: 'Elevador da marca..',
        roles: 'Permite o carregamento de 1 tonelada',
        privacy_policy: '',
        condominium_id: '1235680',
        type: 'FREE',
    },
    {
        name: 'Elevador de serviço',
        description: 'Elevador para mudanças',
        price: 10,
        is_free: 'FREE',
        specifications: 'Elevador da marca..',
        roles: 'Permite o carregamento de 1 tonelada',
        privacy_policy: '',
        condominium_id: '1235680',
        type: 'FREE',
    },
    {
        name: 'Elevador de serviço',
        description: 'Elevador para mudanças',
        price: 10,
        is_free: 'FREE',
        specifications: 'Elevador da marca..',
        roles: 'Permite o carregamento de 1 tonelada',
        privacy_policy: '',
        condominium_id: '1235680',
        type: 'FREE',
    },
    {
        name: 'Elevador de serviço',
        description: 'Elevador para mudanças',
        price: 10,
        is_free: 'FREE',
        specifications: 'Elevador da marca..',
        roles: 'Permite o carregamento de 1 tonelada',
        privacy_policy: '',
        condominium_id: '1235680',
        type: 'FREE',
    },
    {
        name: 'Elevador de serviço',
        description: 'Elevador para mudanças',
        price: 10,
        is_free: 'FREE',
        specifications: 'Elevador da marca..',
        roles: 'Permite o carregamento de 1 tonelada',
        privacy_policy: '',
        condominium_id: '1235680',
        type: 'FREE',
    },
];

const columns = [
    { title: 'Nome', dataIndex: 'name', key: 'name' },
    { title: 'Apartamento ', dataIndex: 'apartment', key: 'apartment' },
    { title: 'Arrival', dataIndex: 'arrival', key: 'pet' },
    { title: 'Check out ', dataIndex: 'checkout', key: 'car' },
    { title: 'Elevador', dataIndex: 'elevator', key: 'elevator' },
];

export { screen, links, columns, dataAdvertisements };
