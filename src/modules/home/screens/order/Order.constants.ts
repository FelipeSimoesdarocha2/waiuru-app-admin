const fieldItens = [
  {
    id: 1,
    name: 'Nome do recebedor',
    status: false,
  },
  {
    id: 2,
    name: 'Nome do destinatário',
    status: false,
  },
  {
    id: 3,
    name: 'Data de recebimento',
    status: false,
  },
  {
    id: 4,
    name: 'Hora do recebimento (opcional)',
    status: false,
  },
  {
    id: 5,
    name: 'Responsável pela assinatura',
    status: false,
  },
  {
    id: 6,
    name: 'Observações (opcional)',
    status: false,
  },
  {
    id: 7,
    name: 'Empresa responsável pela entrega',
    status: false,
  },
  {
    id: 8,
    name: 'Foto',
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


const responsible_company = [
  {
    value: '1',
    label: 'Mercado Livre',
  },
  {
    value: '2',
    label: 'Sedex',
  },
  {
    value: '3',
    label: 'Fedex',
  },
  {
    value: '4',
    label: 'Correios',
  },
  {
    value: '5',
    label: 'Outro',
  }
];

export { fieldItens, links, responsible_company };
