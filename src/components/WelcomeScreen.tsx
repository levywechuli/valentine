import { motion } from "framer-motion";

interface WelcomeScreenProps {
  onStart: () => void;
}

// Replace these placeholder paths with actual images of Annette
const photos = [
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
  "/placeholder.svg",
];

const WelcomeScreen = ({ onStart }: WelcomeScreenProps) => {
  return (
    <motion.div
      className="relative min-h-screen z-10"
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, y: -50 }}
      transition={{ duration: 0.6 }}
    >
      {/* Photo Grid Background */}
      <div className="grid grid-cols-3 sm:grid-cols-3 gap-1.5 p-1.5 min-h-screen">
        {photos.map((src, i) => (
          <motion.div
            key={i}
            className="relative aspect-square overflow-hidden rounded-xl border-2 border-border/50 bg-card"
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.4, delay: i * 0.08 }}
          >
            <img
              src={src}
              alt={`Memory ${i + 1}`}
              className="w-full h-full object-cover"
            />
            {/* Soft pink overlay */}
            <div className="absolute inset-0 bg-primary/10" />
          </motion.div>
        ))}
      </div>

      {/* Centered Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-center bg-background/60 backdrop-blur-sm">
        <motion.div
          initial={{ y: -20 }}
          animate={{ y: [0, -10, 0] }}
          transition={{ duration: 2, repeat: Infinity, ease: "easeInOut" }}
          className="text-7xl mb-4"
        >
          💘
        </motion.div>

        <h1 className="font-display text-4xl sm:text-5xl md:text-6xl text-foreground mb-3 leading-tight text-center px-4">
          Annette…
        </h1>
        <h2 className="font-display text-2xl sm:text-3xl md:text-4xl text-gradient-love mb-6 text-center px-4">
          Are You Ready for a Little Love Challenge?
        </h2>

        <p className="font-body text-muted-foreground text-lg mb-8 max-w-md text-center px-6">
          I made something special just for you. Click below to begin… 💕
        </p>

        <motion.button
          onClick={onStart}
          className="bg-primary text-primary-foreground font-body font-semibold text-lg px-10 py-4 rounded-full shadow-lg hover:shadow-xl transition-shadow"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          Start 💕
        </motion.button>
      </div>
    </motion.div>
  );
};

export default WelcomeScreen;
