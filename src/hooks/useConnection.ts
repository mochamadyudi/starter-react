import {useEffect, useState} from "react";

const useConnection = () => {
  const [state, setState] = useState(() => {
    const initial = {
      online: true,
    };

    if ("onLine" in navigator) {
      Reflect.set(initial, "online", navigator.onLine);
    }
    return initial;
  });

  useEffect(() => {
    const handleOnline = () =>
      setState((prevState) => ({...prevState, online: true}));
    const handleOffline = () =>
      setState((prevState) => ({...prevState, online: false}));

    window.addEventListener("online", handleOnline);
    window.addEventListener("offline", handleOffline);

    return () => {
      window.removeEventListener("online", handleOnline);
      window.removeEventListener("offline", handleOffline);
    };
  }, []);

  return state.online;
};

export default useConnection;
