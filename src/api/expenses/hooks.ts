// React-query
import { useQuery } from '@tanstack/react-query';

// Models
import { ExpenseDto } from 'models/expenses';

// Requests
import { getExpensesByCondoRequest } from './requests';

export const useGetExpensesByCondominium = (condominiumId: string, enabled?: boolean) =>
  useQuery<ExpenseDto[], Error>(
    ['getExpensesByCondoRequest', condominiumId],
    () => getExpensesByCondoRequest(condominiumId),
    { enabled }
  );
