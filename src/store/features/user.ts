// Next
import Router from 'next/router';

// Redux
import { createSlice, PayloadAction } from '@reduxjs/toolkit';

// Store
import type { RootState } from 'store';
import { StoreSlices } from 'store/types';

// Models
import { User } from 'models';

// Constants
import { UserInit } from './user.constants';

const initialState: User = {
  ...UserInit,
} as User;

export const userSlice = createSlice({
  name: StoreSlices.USER,
  initialState,
  reducers: {
    saveUser: (state, action: PayloadAction<Partial<User>>) => {
      return { ...state, ...action.payload };
    },
    logout: () => {
      Router.push('/');
    },
  },
});

export const { saveUser, logout } = userSlice.actions;

export const selectUser = (state: RootState): User => state.user;

export default userSlice.reducer;
