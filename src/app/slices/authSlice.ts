import { createSlice } from '@reduxjs/toolkit';
import { AuthRo } from 'types/auth';

const initialState: AuthRo = <AuthRo>{};

const slice = createSlice({
  name: 'auth',
  initialState,
  reducers: {
    logout: () => initialState,
  },
});

export const { logout } = slice.actions;

export default slice.reducer;
