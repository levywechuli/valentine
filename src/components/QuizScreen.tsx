import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";

interface Question {
  question: string;
  options: string[];
  correctIndex: number;
}

const questions: Question[] = [
  {
    question: "Who makes your life more interesting? 🤔",
    options: ["Netflix", "Sleep", "You 😉"],
    correctIndex: 2,
  },
  {
    question: "What do you deserve on Valentine's Day? 💝",
    options: ["Nothing", "A chocolate bar 🍫", "Unlimited hugs + chocolate 🤗🍫"],
    correctIndex: 2,
  },
  {
    question: "Who is thinking about you right now? 💭",
    options: ["Nobody", "Me 😌", "Definitely me 💯"],
    correctIndex: 2,
  },
];

interface QuizScreenProps {
  onComplete: () => void;
}

const wrongMessages = [
  "Hmm… try again, I think you clicked the wrong one 😏",
  "Really? Come on, you know the right answer 😘",
  "Nope! Think with your heart 💖",
  "Wrong! But you're still cute 🥰",
];

const QuizScreen = ({ onComplete }: QuizScreenProps) => {
  const [currentQ, setCurrentQ] = useState(0);
  const [wrongMsg, setWrongMsg] = useState<string | null>(null);
  const [shakeWrong, setShakeWrong] = useState(false);

  const handleAnswer = (index: number) => {
    if (index === questions[currentQ].correctIndex) {
      setWrongMsg(null);
      if (currentQ < questions.length - 1) {
        setCurrentQ((prev) => prev + 1);
      } else {
        onComplete();
      }
    } else {
      setWrongMsg(wrongMessages[Math.floor(Math.random() * wrongMessages.length)]);
      setShakeWrong(true);
      setTimeout(() => setShakeWrong(false), 500);
    }
  };

  const q = questions[currentQ];

  return (
    <motion.div
      className="flex flex-col items-center justify-center min-h-screen px-6 text-center relative z-10"
      initial={{ opacity: 0, x: 100 }}
      animate={{ opacity: 1, x: 0 }}
      exit={{ opacity: 0, x: -100 }}
      transition={{ duration: 0.5 }}
    >
      {/* Progress */}
      <div className="flex gap-2 mb-8">
        {questions.map((_, i) => (
          <div
            key={i}
            className={`w-3 h-3 rounded-full transition-colors duration-300 ${
              i <= currentQ ? "bg-primary" : "bg-secondary"
            }`}
          />
        ))}
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={currentQ}
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -30 }}
          transition={{ duration: 0.4 }}
          className="w-full max-w-lg"
        >
          <h2 className="font-display text-3xl sm:text-4xl text-foreground mb-8">
            {q.question}
          </h2>

          <div className="flex flex-col gap-3">
            {q.options.map((option, i) => (
              <motion.button
                key={i}
                onClick={() => handleAnswer(i)}
                className={`font-body text-lg px-6 py-4 rounded-2xl border-2 transition-colors ${
                  i === q.correctIndex
                    ? "border-secondary hover:border-primary hover:bg-secondary"
                    : "border-secondary hover:border-muted-foreground hover:bg-secondary"
                } bg-card text-card-foreground`}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                {option}
              </motion.button>
            ))}
          </div>
        </motion.div>
      </AnimatePresence>

      <AnimatePresence>
        {wrongMsg && (
          <motion.div
            initial={{ opacity: 0, y: 10 }}
            animate={{
              opacity: 1,
              y: 0,
              x: shakeWrong ? [0, -10, 10, -10, 10, 0] : 0,
            }}
            exit={{ opacity: 0 }}
            className="mt-6 bg-card border-2 border-accent text-accent px-6 py-3 rounded-2xl font-body text-base max-w-md"
          >
            {wrongMsg}
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default QuizScreen;
