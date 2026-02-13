import { useState } from "react";
import { AnimatePresence } from "framer-motion";
import FloatingHearts from "@/components/FloatingHearts";
import WelcomeScreen from "@/components/WelcomeScreen";
import QuizScreen from "@/components/QuizScreen";
import ChocolateScreen from "@/components/ChocolateScreen";

type Step = "welcome" | "quiz" | "chocolate";

const Index = () => {
  const [step, setStep] = useState<Step>("welcome");

  return (
    <div className="min-h-screen bg-background overflow-hidden relative">
      <div className="bg-valentine-glow fixed inset-0 pointer-events-none" />
      <FloatingHearts />

      <AnimatePresence mode="wait">
        {step === "welcome" && (
          <WelcomeScreen key="welcome" onStart={() => setStep("quiz")} />
        )}
        {step === "quiz" && (
          <QuizScreen key="quiz" onComplete={() => setStep("chocolate")} />
        )}
        {step === "chocolate" && (
          <ChocolateScreen key="chocolate" />
        )}
      </AnimatePresence>
    </div>
  );
};

export default Index;
