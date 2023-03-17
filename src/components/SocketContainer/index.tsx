import { createContext, useEffect, useState } from "react";
import { io, Socket } from "socket.io-client";

export const SocketContext = createContext<{ socket: any }>({
  socket: undefined,
});

const SocketContainer = ({ children }: { children: JSX.Element }) => {
  const [socket, setSocket] = useState<any>();

  useEffect(() => {
    // setSocket(io("http://127.0.0.1:3000"));
    setSocket(
      io("https://8501-2405-201-a804-7cac-ad21-eb08-d984-4364.in.ngrok.io", {
        transports: ["websocket"],
      })
    );

    return () => socket?.disconnect;
  }, []);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContainer;
