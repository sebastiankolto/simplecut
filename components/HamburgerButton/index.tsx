import React from 'react';
import { motion } from 'motion/react';

interface Props {
  isOpen: boolean;
  onClick: () => void;
}

const HamburgerButton: React.FC<Props> = ({ onClick, isOpen }) => {
  return (
    <button
      onClick={onClick}
      className="flex flex-col w-8 h-7 items-center justify-center gap-y-3 cursor-pointer"
    >
      <motion.span
        animate={{
          y: isOpen ? 6 : 0,
          rotate: isOpen ? 45 : 0,
        }}
        transition={{
          y: { duration: 0.2, ease: 'easeInOut', delay: !isOpen ? 0.2 : 0 },
          rotate: { duration: 0.2, ease: 'easeInOut', delay: !isOpen ? 0 : 0.2 },
        }}
        className="flex w-6 h-[1px] bg-white"
      />
      <motion.span
        animate={{
          y: isOpen ? -7 : 0,
          rotate: isOpen ? -45 : 0,
        }}
        transition={{
          y: { duration: 0.2, ease: 'easeInOut', delay: !isOpen ? 0.2 : 0 },
          rotate: { duration: 0.2, ease: 'easeInOut', delay: !isOpen ? 0 : 0.2 },
        }}
        className="flex w-6 h-[1px] bg-white"
      />
    </button>
  );
};

export default HamburgerButton;
