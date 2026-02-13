import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onStart: () => void;
}

const photos = [
  "/photos/photo1.jpg",
  "/photos/photo2.jpg",
  "/photos/photo3.jpg",
  "/photos/photo4.jpg",
  "/photos/photo5.jpg",
  "/photos/photo6.jpg",
  "/photos/photo7.jpg",
  "/photos/photo8.jpg",
  "/photos/photo9.jpg",
];

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <motion.div
      className="relative min-h-screen z-10 overflow-hidden"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      {/* Photo Grid Background */}
      <div className="grid grid-cols-3 gap-0.5 sm:gap-1 md:gap-1.5 p-0 sm:p-1 md:p-2 h-screen">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            className="relative aspect-square overflow-hidden rounded-xl border border-border/40 bg-card"
            initial={{ opacity: 0, scale: 0.85 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.06 }}
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Dim images slightly on mobile */}
            <div className="absolute inset-0 bg-black/20 md:bg-primary/10" />
          </motion.div>
        ))}
      </div>

      {/* Center Overlay */}
      <div
        className="
          absolute inset-0
          flex flex-col items-center justify-center
          bg-black/70 md:bg-black/50
          backdrop-blur-md
          text-center
          px-5
        "
      >
        {/* Floating Heart */}
        <motion.div
          initial={{ y: 0 }}
          animate={{ y: [0, -12, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-6xl md:text-7xl mb-4"
        >
          💘
        </motion.div>

        {/* Content Card */}
        <div className="bg-black/40 rounded-2xl p-6 md:p-8 max-w-md md:max-w-xl">
          <h1
            className="font-display text-3xl sm:text-4xl md:text-6xl text-pink-400 mb-3"
            style={{ textShadow: "0 4px 14px rgba(0,0,0,0.9)" }}
          >
            Annette…
          </h1>

          <h2
            className="font-display text-lg sm:text-2xl md:text-4xl text-white mb-5"
            style={{ textShadow: "0 3px 12px rgba(0,0,0,0.85)" }}
          >
            Are You Ready for a Little Love Challenge?
          </h2>

          <p
            className="font-body text-sm sm:text-base md:text-lg text-gray-200 mb-7"
            style={{ textShadow: "0 2px 10px rgba(0,0,0,0.8)" }}
          >
            I made something special just for you. Click below to begin… 💕
          </p>

          <motion.button
            onClick={onStart}
            className="
              bg-pink-500 hover:bg-pink-600 active:bg-pink-700
              text-white font-semibold text-lg
              px-10 py-4
              rounded-full
              shadow-2xl
              w-full sm:w-auto
            "
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
          >
            Start 💕
          </motion.button>
        </div>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;

