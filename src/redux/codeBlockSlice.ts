import { createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { Socket } from "socket.io-client";

type InitialStateType = {
  socket: Socket | null;
  name: string;
  code: string;
};

const initialState: InitialStateType = {
  socket: null,
  name: "code",
  code: "",
};

const codeBlockSlice = createSlice({
  name: "codeBlock",
  initialState,
  reducers: {
    changeSocket(state, action) {
      state.socket = action.payload;
    },
    changeCode(state, action) {
      state.code = action.payload;
    },
    changeRoomName(state, action) {
      state.name = action.payload;
    },
  },
});

export default codeBlockSlice.reducer;
export const { changeRoomName, changeSocket, changeCode } =
  codeBlockSlice.actions;
export const getRoomName = (state: RootState) => state.codeBlock.name;
export const getSocket = (state: RootState) => state.codeBlock.socket;
export const getCode = (state: RootState) => state.codeBlock.code;
