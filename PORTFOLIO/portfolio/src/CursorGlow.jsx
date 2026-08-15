import { motion } from "framer-motion";
import { useEffect, useState } from "react";

export default function CursorGlow() {
  const [pos, setPos] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const move = (e) => setPos({ x: e.clientX, y: e.clientY });
    window.addEventListener("mousemove", move);
    return () => window.removeEventListener("mousemove", move);
  }, []);

  return (
    <motion.div
      className="fixed w-72 h-72 pointer-events-none z-50"
      animate={{ x: pos.x - 150, y: pos.y - 150 }}
      style={{
        background: "radial-gradient(circle, rgba(56,189,248,0.25), transparent)",
        filter: "blur(60px)",
      }}
    />
  );
}