// Models
import { ExpenseDto } from 'models/expenses';

// Api
import { fetcher } from '../fetch';

export const getExpensesByCondoRequest = async (id: string) => {
  return fetcher(`/v1/expense/${id}`).then(response => response.json() as ExpenseDto[]);
};
