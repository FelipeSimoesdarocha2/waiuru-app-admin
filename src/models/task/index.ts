export enum TypeEnum {
    PAID = 'PAID',
    FREE = 'FREE',
}

export type CreateTaskDto = {
    type: string;
    task: string;
    description: string;
    condominium_id: string;
    employee_id: string;
    startDate: string;
    endedDate: string;
    check_list: [
        {
            item: string;
            is_completed: number;
        },
    ];
};

export type GetTaskDto = {
    id: string;
    uuid: string;
    employee_id: string;
    task: string;
    description: string;
    check_list: [
        {
            item: string;
            is_completed: number;
        },
    ];
    type: string;
    status: string;
    created_at: string;
    completed_at: null;
    condominium_id: false;
};
