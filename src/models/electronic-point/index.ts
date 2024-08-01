export enum StatusEnum {
    ACTIVE = 'ACTIVE',
}

export enum RecordTypeEnum {
    ENTRY = 'ENTRY',
}

export enum ImagesProps {
    PROFILE_PICTURE = 'PROFILE_PICTURE',
}

export interface ListProps {
    id: string;
    date: string;
    images: string[];
    employee_id: string;
    record_type: RecordTypeEnum;
    condominium_id: string;
    status: StatusEnum;
}

export type ElectronicPointDto = {
    date: string;
    list: ListProps[];
};
