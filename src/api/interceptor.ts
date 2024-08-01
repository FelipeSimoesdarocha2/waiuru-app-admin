// interceptor.ts
import { Store } from '@reduxjs/toolkit';

export const interceptor = (store: Store) => {
    store.getState();
};
