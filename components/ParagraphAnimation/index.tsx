'use client';

import { motion } from 'motion/react';
import React, { useRef } from 'react';
import { cln } from '../../utils/classnames';

interface Props {
  paragraph: string;
}

const ParagraphAnimation: React.FC<Props> = ({ paragraph }) => {
  const conRef = useRef(null);

  const paragraphAnimUp = {
    hidden: { y: '100%' },
    show: { y: '0%' },
  };

  const paragraphAnimRight = {
    hidden: { x: '-100%' },
    show: { x: '0%' },
  };

  const borderAnimRight = {
    hidden: { width: '0%' },
    show: { width: '100%' },
  };

  const borderAnimUp = {
    hidden: { scaleY: 0, originY: 0 },
    show: { scaleY: 1 },
  };

  // TODO: Animation should be triggereed once
  return (
    <>
      {/*ABOVE LG SCREENS*/}
      <motion.div
        viewport={{ amount: 1, once: true }}
        initial="hidden"
        whileInView="show"
        className="w-full hidden lg:flex flex-row-reverse lg:flex-col overflow-hidden h-fit"
      >
        <motion.p
          variants={paragraphAnimUp}
          transition={{ duration: 0.8, ease: 'easeInOut', delay: 0.5 }}
          className={cln(
            'flex h-fit w-full',
            'pl-0 pb-10',
            'text-[20px] 2xl:text-[24px]  leading-[1.5] text-white',
            'self-center lg:self-start',
          )}
        >
          {paragraph}
        </motion.p>
        <motion.span
          variants={borderAnimRight}
          transition={{ delay: 0.2, duration: 0.4, ease: 'easeInOut' }}
          className="w-full flex h-[2px] bg-[#333333]"
        />
      </motion.div>
      {/*BELOW LG SCREENS*/}
      <motion.div
        ref={conRef}
        viewport={{ amount: 1, once: true }}
        initial="hidden"
        whileInView="show"
        className="w-full sm:w-1/2 h-full flex lg:hidden flex-row-reverse overflow-hidden"
      >
        <motion.p
          variants={paragraphAnimRight}
          transition={{ duration: 1, ease: 'easeInOut', delay: 0.5 }}
          className={cln(
            'flex h-full w-full',
            'pl-5',
            'text-[18px] leading-[1.5] text-white',
            'self-center',
          )}
        >
          {paragraph}
        </motion.p>
        <motion.span
          variants={borderAnimUp}
          transition={{ delay: 0.2, duration: 0.5, ease: 'easeInOut' }}
          className="w-[2px] bg-[#333333] self-stretch"
        />
      </motion.div>
    </>
  );
};

export default ParagraphAnimation;
