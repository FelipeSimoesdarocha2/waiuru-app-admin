import { TypeAnimal } from 'models';

const fieldItens = [
  {
    id: 1,
    name: 'Nome do animal',
    status: true,
  },
  {
    id: 2,
    name: 'Espécie',
    status: false,
  },
  {
    id: 3,
    name: 'Raça',
    status: false,
  },
  {
    id: 4,
    name: 'Morador vinculado ao pet',
    status: false,
  },
  {
    id: 5,
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

const animal_species = [
  {
    value: TypeAnimal.DOG,
    label: 'Cachorro',
  },
  {
    value: TypeAnimal.CAT,
    label: 'Gato',
  },
  {
    value: TypeAnimal.BIRD,
    label: 'Pássaro',
  },
  {
    value: TypeAnimal.FISH,
    label: 'Peixe',
  },
  {
    value: TypeAnimal.REPTILE,
    label: 'Réptil',
  },
  {
    value: TypeAnimal.OTHERS,
    label: 'Outro',
  },
];

export { links, fieldItens, animal_species };
