import { useEffect, useState } from "react";
import React from "react";

interface Prop {
  enabled: boolean;
}

const FollowingMouse: React.FC<Prop> = ({ enabled }): JSX.Element => {
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
      <div
        className="absolute -left-6 -top-5 -z-10 h-14 w-14 rounded-full bg-gradient-to-r from-violet-500 to-fuchsia-500 opacity-10"
        style={{ transform: `translate(${position.x}px, ${position.y}px)` }}
      ></div>
    </>
  );
};

export default FollowingMouse;
