import { fetchBaseQuery } from '@reduxjs/toolkit/dist/query';
import { RootStateType } from 'app/store';
import { baseUrl } from 'config';

export const baseQuery = fetchBaseQuery({
  baseUrl,
  prepareHeaders: (headers, { getState }) => {
    const token = (getState() as RootStateType).auth.token;
    if (token) {
      headers.set('authorization', `Bearer ${token}`);
    }
    return headers;
  },
});
