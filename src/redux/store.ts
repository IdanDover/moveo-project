import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import codeBlockSlice from './codeBlockSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    codeBlock: codeBlockSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
