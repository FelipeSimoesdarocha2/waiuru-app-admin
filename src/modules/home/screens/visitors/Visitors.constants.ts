import { VisitorsType } from 'models';

const fieldItens = [
  {
    id: 1,
    name: 'Nome do visitante',
    status: false,
  },
  {
    id: 2,
    name: 'Email',
    status: false,
  },
  {
    id: 3,
    name: 'Tipo do visitante',
    status: false,
  },
  {
    id: 4,
    name: 'Permissão de entrada e saída',
    status: false,
  },
  {
    id: 5,
    name: 'Veículo',
    status: false,
  },
  {
    id: 6,
    name: 'Morador vinculado ao visitante',
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

const type_visitors = [
  {
    label: 'Pessoa Física',
    value: VisitorsType.Person,
  },
  {
    label: 'Prestador de Serviços',
    value: VisitorsType.Contractor,
  },
  {
    label: 'Empresa',
    value: VisitorsType.BUSINESS,
  },
];

export { links, fieldItens, type_visitors };
