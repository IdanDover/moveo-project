import { createSlice } from '@reduxjs/toolkit';
import { RootState } from './store';

type InitialStateType = {
  name: string;
  code: string;
};

const initialState: InitialStateType = {
  name: 'code',
  code: '',
};

const codeBlockSlice = createSlice({
  name: 'codeBlock',
  initialState,
  reducers: {
    changeCode(state, action) {
      state.code = action.payload;
    },
    changeRoomName(state, action) {
      state.name = action.payload;
    },
  },
});

export default codeBlockSlice.reducer;
export const { changeRoomName, changeCode } = codeBlockSlice.actions;
export const getRoomName = (state: RootState) => state.codeBlock.name;
export const getCode = (state: RootState) => state.codeBlock.code;
