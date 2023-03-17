import { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const SocketContext = createContext<{ socket: any }>({
  socket: undefined,
});

const SocketContainer = ({ children }: { children: JSX.Element }) => {
  const [socket, setSocket] = useState<any>();

  useEffect(() => {
    setSocket(io("http://127.0.0.1:3000"));
    return () => socket?.disconnect;
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContainer;
