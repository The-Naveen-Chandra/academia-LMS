"use client";

import ReactConfetti from "react-confetti";

import { useConfettiStore } from "@/hooks/use-confetti-store";

export const ConfettiProvider = () => {
  const confetti = useConfettiStore();

  if (!confetti.isOpen) {
    return null;
  }

  return (
    <ReactConfetti
      className="pointer-events-none z-[100] w-full"
      numberOfPieces={500}
      recycle={false}
      gravity={0.03}
      onConfettiComplete={() => {
        confetti.onClose();
      }}
    />
  );
};
