import { useDispatch } from 'react-redux';
import { Socket, io } from 'socket.io-client';
import { changeCode } from '../redux/codeExerciseSlice';
import { useEffect, useRef } from 'react';
import { RoleOptions, changeRole } from '../redux/userSlice';

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

  const leaveRoom = (roomName: string) => {
    socketRef.current?.emit('leaveRoom', roomName);
  };

  const sendCode = (roomName: string, role: RoleOptions, code: string) => {
    socketRef.current?.emit('sendCode', { room: roomName, role, code });
  };

  return {
    socketRef,
    joinRoom,
    leaveRoom,
    sendCode,
  };
}

export default useSocket;
