import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

const ChocolateScreen = () => {
  const [unwrapped, setUnwrapped] = useState(false);

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
      initial={{ opacity: 0, scale: 0.8 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ duration: 0.6 }}
    >
      <motion.div
        initial={{ y: -20 }}
        animate={{ y: [0, -8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
        className="text-6xl mb-4"
      >
        🎉
      </motion.div>

      <h2 className="font-display text-3xl sm:text-4xl md:text-5xl text-foreground mb-4">
        You passed the love test!
      </h2>
      <p className="font-body text-muted-foreground text-lg mb-8 max-w-md">
        As a reward, here's something sweet for you…
      </p>

      <AnimatePresence mode="wait">
        {!unwrapped ? (
          <motion.div
            key="wrapped"
            className="cursor-pointer"
            onClick={() => setUnwrapped(true)}
            whileHover={{ scale: 1.1, rotate: [0, -5, 5, 0] }}
            whileTap={{ scale: 0.9 }}
            exit={{ scale: 0, rotate: 180, opacity: 0 }}
            transition={{ duration: 0.5 }}
          >
            <div className="text-8xl sm:text-9xl mb-4">🎁</div>
            <p className="font-body text-muted-foreground text-sm animate-pulse">
              Tap to unwrap your gift!
            </p>
          </motion.div>
        ) : (
          <motion.div
            key="unwrapped"
            initial={{ scale: 0, rotate: -180 }}
            animate={{ scale: 1, rotate: 0 }}
            transition={{ type: "spring", stiffness: 200, damping: 15 }}
            className="flex flex-col items-center"
          >
            <div className="text-8xl sm:text-9xl mb-6">🍫</div>

            {/* Burst of hearts */}
            {Array.from({ length: 12 }).map((_, i) => (
              <motion.span
                key={i}
                className="absolute text-2xl"
                initial={{ scale: 0, x: 0, y: 0 }}
                animate={{
                  scale: [0, 1, 0],
                  x: Math.cos((i * 30 * Math.PI) / 180) * 120,
                  y: Math.sin((i * 30 * Math.PI) / 180) * 120,
                }}
                transition={{ duration: 1, delay: 0.1 }}
              >
                💖
              </motion.span>
            ))}

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.5 }}
              className="mt-4"
            >
              <h3 className="font-display text-2xl sm:text-3xl text-gradient-love mb-3">
                Real chocolate is on its way! 🍫💕
              </h3>
              <p className="font-body text-muted-foreground max-w-sm text-base">
                But more importantly… I just wanted to say:
              </p>

              <motion.div
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 1.2 }}
                className="mt-6 bg-card border-2 border-primary/30 rounded-3xl p-6 max-w-sm"
              >
                <p className="font-display text-2xl text-foreground leading-relaxed">
                  Baby, I just want you to know how much I love you ❤️
You make me happy in ways I never expected, and having you in my life means everything to me 🥰
With our anniversary coming up, it just reminds me how grateful I am for every moment we’ve shared and how excited I am for everything still ahead of us 🎉💖
Happy Valentine’s, my love 🌹💘
                </p>
              </motion.div>

              <motion.p
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 2 }}
                className="mt-6 font-body text-muted-foreground text-sm"
              >
                Happy Valentine's Day, my love 🥰
              </motion.p>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default ChocolateScreen;
