"use client";

import { useEffect, useState } from "react";

export default function MouseEffect() {
  const [mousePos, setMousePos] = useState({ x: "50%", y: "50%" });

  useEffect(() => {
    const handleMouseMove = (e: MouseEvent) => {
      const x = `${e.clientX}px`;
      const y = `${e.clientY}px`;

      setMousePos({ x, y });
    };

    window.addEventListener("mousemove", handleMouseMove);
    return () => window.removeEventListener("mousemove", handleMouseMove);
  }, []);

  return <div className="mouse-glow" style={{ top: mousePos.y, left: mousePos.x }}></div>;
}

