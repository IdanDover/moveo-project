import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type themeOptions = 'light' | 'dark';
type roleOptions = 'instructor' | 'student' | undefined;

type InitialStateType = {
  name: string;
  role?: roleOptions;
  theme: themeOptions;
};

const initialState: InitialStateType = {
  theme: (localStorage.getItem('theme') as themeOptions | undefined) ?? 'light',
  name: 'user',
};

const userSlice = createSlice({
  name: 'user',
  initialState,
  reducers: {
    changeTheme(state, action) {
      state.theme = action.payload;
      document.documentElement.classList.toggle('dark');
      localStorage.setItem('theme', action.payload);
    },
    changeName(state, action) {
      state.name = action.payload;
    },
    changeRole(state, action) {
      state.role = action.payload;
    },
  },
});

export default userSlice.reducer;
export const { changeName, changeTheme, changeRole } = userSlice.actions;
export const getUsername = (state: RootState) => state.user.name;
export const getTheme = (state: RootState) => state.user.theme;
export const getRole = (state: RootState) => state.user.role;
