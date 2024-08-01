export type DocumentsDto = {
    id: string;
    type: string;
    url: string;
    status: number;
};

export type CondominiumDto = {
    id: string;
    uuid: string;
    name: string;
    email: string;
    address: string;
    phone_number: string;
    status: number;
    created_at: string;
    role: string;
};

export interface ResidentDto {
    id: string;
    uuid: string;
    name: string;
    phone_number: string;
    email: string;
    documents: DocumentsDto[];
    deficiencies: null;
    parent: string;
    status: number;
    created_at: string;
    updated_at: string;
    deleted_at: string;
    email_verified_at: string;
    role: string;
    condominium: CondominiumDto;
    condominium_id: string;
    invitation_id: string;
    is_temporary_user: boolean;
    is_billable_user: boolean;
    document_number: string;
    condominium_unit_id: string;
}
