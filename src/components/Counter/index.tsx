"use client";

import React from "react";
import { motion } from "motion/react";

interface Props {
  finalNumber?: number;
  duration: number;
  delay: number;
  words?: string[];
  isAnimated?: boolean;
}

const Counter: React.FC<Props> = ({
  finalNumber,
  duration,
  delay,
  words,
  isAnimated,
}) => {
  return (
    <div className="flex h-full items-start pt-[11px] overflow-hidden">
      <motion.div
        className="flex flex-col gap-y-3"
        initial={
          isAnimated
            ? {
                y: 0,
              }
            : {
                y: words
                  ? -((words.length - 1) * 37)
                  : finalNumber !== undefined
                    ? -(finalNumber * 36)
                    : 0,
              }
        }
        animate={{
          y: words
            ? -((words.length - 1) * 37)
            : finalNumber !== undefined
              ? -(finalNumber * 36)
              : 0,
        }}
        transition={{
          duration: duration,
          delay: delay,
          ease: "easeOut",
        }}
      >
        {words
          ? words.map((word) => {
              return <span key={word}>{word}</span>;
            })
          : Array.from({ length: (finalNumber ?? 0) + 1 }).map((_, i) => (
              <span key={i}>{i}</span>
            ))}
      </motion.div>
    </div>
  );
};

export default Counter;
