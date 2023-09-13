import { useState } from "react";
import FollowingMouse from "./components/FollowingMouse";

function App(): JSX.Element {
  const [enabled, setEnabled] = useState<boolean>(false);

  return (
    <>
      <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <FollowingMouse enabled={enabled} />
        <button
          className="rounded-lg bg-zinc-800 px-8 py-4 text-zinc-50 transition-colors hover:bg-blue-900"
          onClick={() => {
            setEnabled(!enabled);
          }}
        >
          {enabled
            ? "I'm following the pointer 😄"
            : "I'm not following the pointer 😕"}
        </button>
      </main>
    </>
  );
}

export default App;
