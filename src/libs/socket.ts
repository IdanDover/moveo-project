import { useDispatch, useSelector } from 'react-redux';
import { io } from 'socket.io-client';
import { changeSocket, getSocket } from '../redux/codeBlockSlice';

const socket = io(import.meta.env.VITE_HOST_URL);

function useSocket() {
  const dispatch = useDispatch();
  const socketState = useSelector(getSocket);

  if (!socketState) {
    dispatch(changeSocket(socket));
  }

  const joinRoom = (roomName: string) => {
    socket.emit('joinRoom', roomName);
  };

  const changeCode = (roomName: string, code: string) => {
    socket.emit('changedCode', { room: roomName, code });
  };

  return {
    joinRoom,
    changeCode,
  };
}

export default useSocket;
