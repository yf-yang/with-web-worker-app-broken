import { useEffect, useRef, useCallback, useContext } from "react";
import { WorkerContext, useWorker } from "../context";

export default function Index() {
  return (
    <WorkerContext>
      <App />
    </WorkerContext>
  );
}
function App() {
  const worker = useWorker();

  const handleWork = () => {
    worker.postMessage(100000);
  };

  return (
    <>
      <p>Do work in a WebWorker!</p>
      <button onClick={handleWork}>Calculate PI</button>
    </>
  );
}
