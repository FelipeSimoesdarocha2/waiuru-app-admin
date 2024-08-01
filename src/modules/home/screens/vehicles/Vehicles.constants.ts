import { typeVehicle } from 'models';

const fieldItens = [
  {
    id: 1,
    name: 'Nome do proprietário',
    status: false,
  },
  {
    id: 2,
    name: 'Tipo',
    status: false,
  },
  {
    id: 3,
    name: 'Modelo',
    status: false,
  },
  {
    id: 4,
    name: 'Placa',
    status: false,
  },
  {
    id: 5,
    name: 'Cor',
    status: false,
  },
  {
    id: 6,
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

const type_vehicles = [
  {
    label: 'Carro',
    value: typeVehicle.CAR,
  },
  {
    label: 'Moto',
    value: typeVehicle.MOTORCYCLE,
  },
  {
    label: 'Caminhão',
    value: typeVehicle.TRUCK,
  },
  {
    label: 'Ônibus',
    value: typeVehicle.BUSS,
  },
  {
    label: 'Bicicleta',
    value: typeVehicle.BIKE,
  },
];

export { links, fieldItens, type_vehicles };
