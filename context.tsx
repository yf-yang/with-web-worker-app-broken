import { ReactNode, createContext, useContext, useMemo } from "react";

function createWorker(): Worker {
  return new Worker(new URL("./worker.ts", import.meta.url));
}
const Context = createContext<Worker | undefined>(undefined);

export function WorkerContext({
  children,
}: {
  children: ReactNode;
}): JSX.Element {
  const worker = useMemo(createWorker, []);
  return <Context.Provider value={worker}>{children}</Context.Provider>;
}

export function useWorker(): Worker {
  const worker = useContext(Context);
  if (worker === undefined) {
    throw new Error();
  }
  return worker;
}
