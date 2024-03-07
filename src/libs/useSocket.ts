import { useDispatch, useSelector } from "react-redux";
import { Socket, io } from "socket.io-client";
import { changeCode, changeSocket, getSocket } from "../redux/codeBlockSlice";
import { useEffect, useRef } from "react";

function useSocket() {
  const dispatch = useDispatch();
  const socketState = useSelector(getSocket);
  const socketRef = useRef<Socket | null>(null);

  useEffect(() => {
    const initSocket = () => {
      const socket = io(import.meta.env.VITE_HOST_URL);
      socketRef.current = socket;
      dispatch(changeSocket(socket));
      return () => {
        socket.disconnect();
      };
    };

    const cleanup = initSocket();
    return cleanup;
  }, [dispatch]);

  socketRef.current?.on("receiveCode", (newCode) => {
    dispatch(changeCode(newCode));
  });

  const joinRoom = (roomName: string) => {
    socketRef.current?.emit("joinRoom", roomName);
  };

  const sendCode = (roomName: string, code: string) => {
    socketRef.current?.emit("sendCode", { room: roomName, code });
  };

  return {
    joinRoom,
    sendCode,
  };
}

export default useSocket;
