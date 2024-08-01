// Next
import { StaticImageData } from 'next/image';

export interface CardRecreationAreaProps {
    id: string;
    name: string;
    type: string;
    price: number;
    description: string;
    specifications: string;
    roles: string;
    condominium_id: string;
    need_to_schedule: string;
    opening_hours: string;
    status: string;
    images: StaticImageData;
    sunday: string;
    monday: string;
    tuesday: string;
    wednesday: string;
    thursday: string;
    friday: string;
    saturday: string;
}
