'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { cln } from '../../utils/classnames';
import { CallToAction } from '../../types/interfaces';

interface Props {
  callToAction: CallToAction;
  isCollapsed?: boolean;
}

const CtaButton: React.FC<Props> = ({ callToAction, isCollapsed = false }) => {
  const [is, setIs] = useState(true);

  const [firstWordWidth, setFirstWordWidth] = useState<number | null>(null);
  const firstWordRef = useRef<HTMLSpanElement>(null);

  useEffect(() => {
    if (firstWordRef.current) {
      setFirstWordWidth(firstWordRef.current.offsetWidth);
    }
  }, []);

  const words = callToAction.callToActionText.split(' ');

  const ctaText = words.map((word, i) => (
    <span key={word} ref={i === 0 ? firstWordRef : null}>
      {word}
    </span>
  ));

  return (
    <motion.a
      onMouseUp={() => setIs(false)}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      animate={{
        width: isCollapsed ? 'fit-content' : '100%',
      }}
      transition={{ duration: 0.5, ease: 'easeInOut' }}
      href={callToAction.callToActionUrl}
      style={{
        background:
          'linear-gradient(90deg, rgba(22, 80, 37, 0.80) 0%, rgba(30, 118, 53, 0.80) 100%)',
      }}
      className={cln(
        'flex w-full min-w-[80px] max-w-[260px] items-center justify-center gap-x-1 sm:gap-x-2 px-6',
        'text-[16px] sm:text-[18px] text-white cursor-pointer overflow-hidden backdrop-blur-md border-[#165025] border-1',
        isCollapsed ? 'h-11' : 'h-11 sm:h-13',
      )}
    >
      <motion.div
        layout="position"
        animate={{
          width: isCollapsed ? `${firstWordWidth}px` : 'fit-content',
        }}
        transition={{ duration: 0.2, ease: 'easeInOut' }}
        variants={{
          initial: { x: 0 },
          hover: { x: 4 },
        }}
        className="whitespace-nowrap flex items-end overflow-hidden gap-x-1.5"
      >
        {ctaText}
      </motion.div>

      <motion.div
        variants={{
          hover: {
            x: 4,
            y: -4,
            transition: { duration: 0.2, ease: 'easeInOut' },
          },
          tap: {
            x: 104,
            y: -104,
            transition: { duration: 0.3, ease: 'easeIn' },
          },
        }}
        className={cln('min-w-10 min-h-10', isCollapsed ? 'hidden' : 'flex')}
      >
        {is && <Image src={'./images/razor-icon.svg'} alt={'Razor icon'} width={36} height={36} />}
      </motion.div>
    </motion.a>
  );
};

export default CtaButton;
