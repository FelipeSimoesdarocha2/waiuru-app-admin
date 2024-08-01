// Models
import { Column } from 'models';
import { ResidentDto } from 'models/residents';

export interface ResidentTableProps {
    columns: Column[];
    data: ResidentDto[];
}
