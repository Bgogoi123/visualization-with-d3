import { createContext, useEffect, useState } from "react";
import { io } from "socket.io-client";

export const SocketContext = createContext<{ socket: any }>({
  socket: undefined,
});

const SocketContainer = ({ children }: { children: JSX.Element }) => {
  const [socket, setSocket] = useState<any>();
  // const ngrokURL =
  //   "https://8501-2405-201-a804-7cac-ad21-eb08-d984-4364.in.ngrok.io";
  const renderURL = "https://sketchbook-backend.onrender.com";

  useEffect(() => {
    // setSocket(io("http://127.0.0.1:3000"));

    // Backend URL running at render.com
    setSocket(
      io(renderURL, {
        transports: ["websocket"],
      })
    );

    return () => socket?.disconnect;
  }, [socket?.disconnect]);

  return (
    <SocketContext.Provider value={{ socket }}>
      {children}
    </SocketContext.Provider>
  );
};

export default SocketContainer;
