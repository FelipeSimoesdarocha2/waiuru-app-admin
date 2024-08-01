// Assets
import avatar1 from 'assets/constants/Avatar1.png';
import avatar2 from 'assets/constants/Avatar2.png';
import avatar3 from 'assets/constants/Avatar3.png';
import avatar4 from 'assets/constants/Avatar4.png';
import avatar5 from 'assets/constants/Avatar5.png';
import avatar6 from 'assets/constants/Avatar6.png';

const settingsData = [
    {
        id: 1,
        name: 'Abel Almeida',
        perfilImage: avatar1,
    },
    {
        id: 2,
        name: 'Bruna Costa',
        perfilImage: avatar2,
    },
    {
        id: 3,
        name: 'Costa Nunes',
        perfilImage: avatar3,
    },
    {
        id: 4,
        name: 'Danilo Paiva',
        perfilImage: avatar4,
    },
    {
        id: 5,
        name: 'Ednalva Lins',
        perfilImage: avatar5,
    },
    {
        id: 6,
        name: 'Fernanda Louro',
        perfilImage: avatar6,
    },
    {
        id: 7,
        name: 'Fernanda Louro',
        perfilImage: avatar6,
    },
    {
        id: 8,
        name: 'Fernanda Louro',
        perfilImage: avatar6,
    },
    {
        id: 9,
        name: 'Fernanda Louro',
        perfilImage: avatar6,
    },
];

const settingsPermissions = [
    { id: 1, title: 'dashboard', subtitle: 'dashboard-settings' },
    { id: 2, title: 'chat', subtitle: 'chat-settings' },
    { id: 3, title: 'access-control', subtitle: 'access-control-registration-settings' },
    { id: 4, title: 'visitor-registration', subtitle: 'visitor-registration-settings' },
    { id: 5, title: 'parcel-registration', subtitle: 'parcel-registration-settings' },
    { id: 6, title: 'residents-registration', subtitle: 'residents-registration-settings' },
    { id: 7, title: 'animal-registration', subtitle: 'animal-registration-settings' },
    { id: 8, title: 'online-voting-registration', subtitle: 'online-voting-registration-settings' },
    { id: 9, title: 'employee-registration', subtitle: 'employee-registration-settings' },
    {
        id: 10,
        title: 'employees',
        subtitle: 'Página com dados para gerenciamento de todos os funcionários cadastrados.',
    },
    { id: 11, title: 'orders', subtitle: 'orders-settings' },
    { id: 12, title: 'book-of-occurrences', subtitle: 'book-of-occurrences-settings' },
    { id: 13, title: 'lost-and-Found', subtitle: 'lost-and-Found-settings' },
    { id: 14, title: 'financial', subtitle: 'financial-settings' },
    { id: 15, title: 'orders', subtitle: 'orders-settings' },
    { id: 16, title: 'documents', subtitle: 'documents-settings' },
    { id: 17, title: 'list-of-residents', subtitle: 'list-of-residents-settings' },
    { id: 18, title: 'online-voting', subtitle: 'online-voting-settings' },
    { id: 19, title: 'feed', subtitle: 'feed-settings' },
    { id: 20, title: 'advertisements', subtitle: 'advertisements-settings' },
    { id: 21, title: 'service-provider', subtitle: 'service-provider-settings' },
];

const links = [
    {
        name: 'Setor Financeiro ',
        value: '0',
    },
    {
        name: 'Setor Administrativo ',
        value: '1',
    },
    {
        name: 'Manutenção Predial ',
        value: '2',
    },
    {
        name: 'Recepção',
        value: '3',
    },
    {
        name: 'Segurança',
        value: '4',
    },
    {
        name: 'Limpeza',
        value: '5',
    },
    {
        name: 'Portaria',
        value: '6',
    },
];

export { links, settingsData, settingsPermissions };
