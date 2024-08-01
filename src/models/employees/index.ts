export enum RolesEnum {
    ADMIN = 'condominium_administrator',
    RESIDENT = 'resident',
    EMPLOYEE = 'employee',
    CONDOMINIUM = 'condominium',
}

export enum DocumentTypeProps {
    PROFILE_PICTURE = 'PROFILE_PICTURE',
}

export interface DocumentsProps {
    id: string;
    type: DocumentTypeProps.PROFILE_PICTURE;
    url: string;
    status: number;
}

export interface CondominiumProps {
    id: string;
    uuid: string;
    name: string;
    email: string;
    address: string;
    phone_number: string;
    status: number;
    created_at: string;
    role: RolesEnum.CONDOMINIUM;
    admin_id: string;
}

export type EmployeeDto = {
    id: string;
    uuid: string;
    name: string;
    phone_number: string;
    email: string;
    documents: DocumentsProps[];
    status: number;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    email_verified_at: string;
    role: RolesEnum.EMPLOYEE;
    condominium: CondominiumProps;
    condominium_id: string;
    invitation_id: string;
    is_temporary_user: false;
    is_billable_user: false;
    document_number: string;
    condominium_unit_id: string;
    rg_number: string;
    ctps: string;
    voter_registration: string;
    born_date: string;
    admission_date: string;
    zip_code: string;
    street: string;
    city: string;
    occupation_area: string;
    emergency_phone_number: string;
    working_day: string;
};
