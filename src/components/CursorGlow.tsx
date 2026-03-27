import { useEffect, useState } from "react";
import { motion } from "framer-motion";

const CursorGlow = () => {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    const move = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      if (!visible) setVisible(true);
    };
    const leave = () => setVisible(false);
    const enter = () => setVisible(true);

    window.addEventListener("mousemove", move);
    document.addEventListener("mouseleave", leave);
    document.addEventListener("mouseenter", enter);
    return () => {
      window.removeEventListener("mousemove", move);
      document.removeEventListener("mouseleave", leave);
      document.removeEventListener("mouseenter", enter);
    };
  }, [visible]);

  return (
    <motion.div
      className="pointer-events-none fixed top-0 left-0 z-[9999] mix-blend-screen"
      animate={{
        x: pos.x - 120,
        y: pos.y - 120,
        opacity: visible ? 1 : 0,
      }}
      transition={{ type: "spring", damping: 25, stiffness: 200, mass: 0.5 }}
    >
      <div
        className="w-[240px] h-[240px] rounded-full"
        style={{
          background: "radial-gradient(circle, hsla(226,100%,58%,0.08) 0%, hsla(262,72%,59%,0.04) 40%, transparent 70%)",
        }}
      />
    </motion.div>
  );
};

export default CursorGlow;
