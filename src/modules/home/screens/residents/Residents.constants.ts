const fieldItens = [
    {
        id: 1,
        name: 'Nome do morador',
        status: true,
    },
    {
        id: 2,
        name: 'Nº do documento',
        status: false,
    },
    {
        id: 3,
        name: 'Email',
        status: false,
    },
    {
        id: 4,
        name: 'Moradores vinculados',
        status: false,
    },
];

const links = [
    {
        value: '/create/visitors',
        name: 'Visitante ',
    },
    {
        value: '/create/order',
        name: 'Encomenda',
    },
    {
        value: '/create/vehicles',
        name: 'Veículo',
    },
    {
        value: '/create/residents',
        name: 'Morador',
    },
    {
        value: '/create/animals',
        name: 'Animal',
    },
    {
        value: '/create/online-voting',
        name: 'Votação online',
    },
    {
        value: '/create/employee',
        name: 'Funcionário',
    },
];

export { links, fieldItens };
