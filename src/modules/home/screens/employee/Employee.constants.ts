const fieldItens = [
    {
        id: 1,
        name: 'Informações de Contato',
        status: false,
    },
    {
        id: 2,
        name: 'Numeração de Documentos',
        status: false,
    },
    {
        id: 3,
        name: 'Datas de Nascimento e Admissão',
        status: false,
    },
    {
        id: 4,
        name: 'Endereço',
        status: false,
    },
    {
        id: 5,
        name: 'Jornada de Trabalho e Contato de Emergência',
        status: false,
    },
    {
        id: 6,
        name: 'Importação de Documentos',
        status: false,
    },
    {
        id: 7,
        name: 'Foto do Funcionário',
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


const employee_activity = [
    {
        value: '1',
        label: 'Setor Financeiro',
    },
    {
        value: '2',
        label: 'Setor Administrativo',
    },
    {
        value: '3',
        label: 'Manutenção Predial',
    },
    {
        value: '4',
        label: 'Recepção',
    },
    {
        value: '5',
        label: 'Segurança',
    },
    {
        value: '6',
        label: 'Limpeza',
    },
    {
        value: '7',
        label: 'Portaria',
    },
];

const working_day = [
    {
        value: '1',
        label: '8 horas diárias (44 horas semanais)',
    },
    {
        value: '2',
        label: '6 horas diárias (30 horas semanais)',
    },
    {
        value: '3',
        label: '4 horas diárias (20 horas semanais)',
    },
];

export { links, fieldItens, working_day, employee_activity };
