import { useDispatch } from 'react-redux';
import { Socket, io } from 'socket.io-client';
import { changeCode } from '../redux/codeExerciseSlice';
import { useEffect, useRef } from 'react';
import { changeRole } from '../redux/userSlice';

const socket = io(import.meta.env.VITE_HOST_URL);

function useSocket() {
  const socketRef = useRef<Socket | null>(socket);
  const dispatch = useDispatch();

  useEffect(() => {
    socketRef.current?.on('receiveCode', (newCode) => {
      dispatch(changeCode(newCode));
    });

    socketRef.current?.on('receiveRole', (role) => {
      dispatch(changeRole(role));
    });
  }, []);

  const joinRoom = (roomName: string) => {
    socketRef.current?.emit('joinRoom', roomName);
  };

  const sendCode = (roomName: string, code: string) => {
    socketRef.current?.emit('sendCode', { room: roomName, code });
  };

  return {
    socketRef,
    joinRoom,
    sendCode,
  };
}

export default useSocket;
