import { configureStore } from '@reduxjs/toolkit';
import userReducer from './userSlice';
import codeExerciseSlice from './codeExerciseSlice';

const store = configureStore({
  reducer: {
    user: userReducer,
    codeExercise: codeExerciseSlice,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export default store;
