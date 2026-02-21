import useConnection from "@/hooks/useConnection";
import classNames from "classnames";
import {PropsWithChildren, useEffect} from "react";

interface ConnectionMiddlewareProps extends PropsWithChildren {}

export default function ConnectionMiddleware({
  children,
}: ConnectionMiddlewareProps) {
  const connection = useConnection();

  useEffect(() => {
    if (navigator.serviceWorker) {
      navigator.serviceWorker.addEventListener("message", (event) => {
        if (event.data?.type === "offline") {
          console.log("SW: offline detected");
        }
      });
    }
  }, []);

  return (
    <>
      {children}

      {!connection && (
        <div
          className={classNames(
            "fixed bottom-0 left-0 w-full h-10 bg-red-500 z-[999] flex items-center justify-center text-white",
          )}>
          You are currently offline. Please check your internet connection.
        </div>
      )}
    </>
  );
}
