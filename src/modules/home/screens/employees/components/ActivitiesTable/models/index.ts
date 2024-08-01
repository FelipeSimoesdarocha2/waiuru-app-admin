// Models
import { Column } from 'models';
import { GetTaskDto } from 'models/task';

export interface ListActivitiesProps {
  data: GetTaskDto[];
  columns: Column[];
}
