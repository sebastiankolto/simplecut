'use client';

import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { cln } from '../../utils/classnames';
import { CallToAction } from '../../types/interfaces';

interface Props {
  callToAction: CallToAction;
}

const CtaButton: React.FC<Props> = ({ callToAction }) => {
  const [is, setIs] = useState(true);
  return (
    <motion.a
      onMouseUp={() => setIs(false)}
      whileHover="hover"
      whileTap="tap"
      initial="initial"
      href={callToAction[0].callToActionUrl}
      style={{
        background:
          'linear-gradient(90deg, rgba(22, 80, 37, 0.80) 0%, rgba(30, 118, 53, 0.80) 100%)',
      }}
      className={cln(
        'flex w-full sm:max-w-[280px] px-8 h-13 sm:h-15 items-center justify-center gap-x-4',
        'text-[16px] sm:text-[18px] text-white cursor-pointer overflow-hidden',
      )}
    >
      <motion.span
        layout
        transition={{ duration: 0.3, ease: 'easeInOut' }}
        variants={{
          initial: { x: 0 },
          hover: { x: 4 },
        }}
      >
        {callToAction[0].callToActionText}
      </motion.span>
      <motion.div
        variants={{
          initial: { x: 0, y: 0 },
          hover: { x: 4, y: -4, transition: { duration: 0.2, ease: 'easeInOut', delay: 0.1 } },
          tap: { x: 104, y: -104, transition: { duration: 0.1, ease: 'easeIn' } },
        }}
      >
        {is && <Image src={'./images/razor-icon.svg'} alt={'Razor icon'} width={40} height={40} />}
      </motion.div>
    </motion.a>
  );
};

export default CtaButton;
