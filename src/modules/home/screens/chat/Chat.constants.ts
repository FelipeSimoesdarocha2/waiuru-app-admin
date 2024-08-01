// Assets
import avatar1 from 'assets/constants/Avatar1.png';
import avatar2 from 'assets/constants/Avatar2.png';
import avatar3 from 'assets/constants/Avatar3.png';
import avatar4 from 'assets/constants/Avatar4.png';

const chatData = [
    {
        id: 1,
        user: 'Rafael Garcia',
        time: 'há 1m',
        message:
            'It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using "Content here, content here", making it look like readable English.',
        status: true,
        perfilImage: avatar1,
    },
    {
        id: 2,
        user: 'Pedro Simões',
        time: 'há 1m',
        message: 'It is a long established fact that a reader will be distracted by...',
        status: true,
        perfilImage: avatar2,
    },
    {
        id: 3,
        user: 'Natália Vaz',
        time: 'há 20m',
        message: 'It is a long established fact that a reader will be distracted by...',
        status: false,
        perfilImage: avatar3,
    },
    {
        id: 4,
        user: 'Jorge Souza',
        time: 'há 25m',
        message: 'It is a long established fact that a reader will be distracted by...',
        status: false,
        perfilImage: null,
    },
    {
        id: 5,
        user: 'Marta Rodrigues',
        time: 'há 32m',
        message: 'It is a long established fact that a reader will be distracted by...',
        status: false,
        perfilImage: avatar4,
    },
    {
        id: 6,
        user: 'Nilda Simões',
        time: 'há 42m',
        message: 'It is a long established fact that a reader will be distracted by...',
        status: false,
        perfilImage: null,
    },
    {
        id: 7,
        user: 'Nilda Simões',
        time: 'há 42m',
        message: 'It is a long established fact that a reader will be distracted by...',
        status: false,
        perfilImage: null,
    },
    {
        id: 8,
        user: 'Nilda Simões',
        time: 'há 42m',
        message: 'It is a long established fact that a reader will be distracted by...',
        status: false,
        perfilImage: null,
    },
    {
        id: 9,
        user: 'Nilda Simões',
        time: 'há 42m',
        message: 'It is a long established fact that a reader will be distracted by...',
        status: false,
        perfilImage: null,
    },
    {
        id: 10,
        user: 'Nilda Simões',
        time: 'há 42m',
        message: 'It is a long established fact that a reader will be distracted by...',
        status: false,
        perfilImage: null,
    },
];

const links = [
    {
        name: 'Todos ',
        value: '0',
    },
    {
        name: 'Favoritos ',
        value: '1',
    },
    {
        name: 'Moradores ',
        value: '2',
    },
    {
        name: 'Funcionários',
        value: '3',
    },
    {
        name: 'Parceiros',
        value: '4',
    },
];

export { links, chatData };
