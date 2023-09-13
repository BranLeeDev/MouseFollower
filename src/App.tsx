import { useEffect, useState } from "react";

function App(): JSX.Element {
  const [enabled, setEnabled] = useState<boolean>(false);
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMove = (event: PointerEvent) => {
      const { clientX, clientY } = event;
      setPosition({ x: clientX, y: clientY });
    };

    if (enabled) {
      window.addEventListener("pointermove", handleMove);
    }

    return () => {
      window.removeEventListener("pointermove", handleMove);
    };
  }, [enabled]);

  return (
    <>
      <main className="relative flex h-screen w-full items-center justify-center overflow-hidden">
        <div
          className="absolute -left-6 -top-5 -z-10 h-14 w-14 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-10"
          style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
        ></div>
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
