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
            "fixed bottom-0 left-0 w-full z-[999] flex items-center justify-center text-white",
          )}>
          <div className="w-full text-center mx-auto p-2 flex items-center justify-center  bg-[hsl(var(--heroui-warning))]">
            You are currently offline. Please check your internet connection.
          </div>
        </div>
      )}
    </>
  );
}
