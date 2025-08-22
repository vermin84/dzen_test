import { useEffect, useState } from "react";
import { io } from "socket.io-client";

const socket = io("http://localhost:3000", {
  withCredentials: true,
});

export default function ActiveSessionsCounter() {
  const [count, setCount] = useState(0);

  useEffect(() => {
    socket.on("activeSessions", (value) => {
      console.log("Active sessions:", value);
      setCount(value);
    });

    // Очистка подписки
    return () => {
      socket.off("activeSessions");
    };
  }, []);

  return (
    <div>
      <h2>Active sessions: {count}</h2>
    </div>
  );
}
