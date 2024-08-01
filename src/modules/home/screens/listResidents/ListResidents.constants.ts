const columns = [
    { title: 'Nome completo', dataIndex: 'name', key: 'name' },
    { title: 'Apartamento ', dataIndex: 'apartment', key: 'apartment' },
    // { title: 'Pet', dataIndex: 'pet', key: 'pet' },
    // { title: 'Carro ', dataIndex: 'car', key: 'car' },
    { title: 'Status de Cadastro', dataIndex: 'registration_status', key: 'status' },
    { title: '', dataIndex: '', key: 'action' },
];

const statusMap: { [key: number]: string } = {
    0: 'Pendente',
    1: 'Concluído',
};

const statusColorMap: { [key: number]: string } = {
    0: '#E46978',
    1: '#3FB5B4',
};

export { columns, statusMap, statusColorMap };
