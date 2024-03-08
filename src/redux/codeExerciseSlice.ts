import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';
import { CodeExerciseType } from '../models/codeExerciseModel';

const initialState: CodeExerciseType = {
  title: '',
  slug: '',
  explanation: '',
  code: '',
  level: 'intermediate',
};

const codeExerciseSlice = createSlice({
  name: 'codeExercise',
  initialState,
  reducers: {
    loadCodeExercise(state, action) {
      const { title, slug, code, explanation, level, solution } =
        action.payload;
      state.title = title;
      state.slug = slug;
      state.code = code;
      state.explanation = explanation;
      state.solution = solution ?? undefined;
      state.level = level ?? 'intermediate';
    },
    changeCode(state, action) {
      state.code = action.payload;
    },
    changeTitle(state, action) {
      state.title = action.payload;
    },
  },
});

export default codeExerciseSlice.reducer;
export const { loadCodeExercise, changeTitle, changeCode } =
  codeExerciseSlice.actions;
export const getExercise = (state: RootState) => state.codeExercise;
export const getTitle = (state: RootState) => state.codeExercise.title;
export const getSlug = (state: RootState) => state.codeExercise.slug;
export const getExplanation = (state: RootState) =>
  state.codeExercise.explanation;
export const getCode = (state: RootState) => state.codeExercise.code;
export const getSolution = (state: RootState) => state.codeExercise.solution;
