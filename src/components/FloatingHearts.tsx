import { useEffect, useState } from "react";
import { motion } from "framer-motion";

interface Heart {
  id: number;
  x: number;
  size: number;
  duration: number;
  delay: number;
  opacity: number;
}

const FloatingHearts = () => {
  const [hearts, setHearts] = useState<Heart[]>([]);

  useEffect(() => {
    const generated: Heart[] = Array.from({ length: 20 }, (_, i) => ({
      id: i,
      x: Math.random() * 100,
      size: Math.random() * 20 + 12,
      duration: Math.random() * 8 + 6,
      delay: Math.random() * 5,
      opacity: Math.random() * 0.4 + 0.1,
    }));
    setHearts(generated);
  }, []);

  return (
    <div className="fixed inset-0 pointer-events-none overflow-hidden z-0">
      {hearts.map((heart) => (
        <motion.div
          key={heart.id}
          className="absolute text-valentine-pink"
          style={{
            left: `${heart.x}%`,
            fontSize: heart.size,
            opacity: heart.opacity,
          }}
          initial={{ y: "110vh", rotate: 0 }}
          animate={{
            y: "-10vh",
            rotate: [0, 15, -15, 0],
            x: [0, 30, -30, 0],
          }}
          transition={{
            duration: heart.duration,
            delay: heart.delay,
            repeat: Infinity,
            ease: "linear",
          }}
        >
          💖
        </motion.div>
      ))}
    </div>
  );
};

export default FloatingHearts;
