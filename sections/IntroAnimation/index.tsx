'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { useResponsive } from '../../utils/useResponsive';

const IntroAnimation: React.FC = () => {
  const [hidden, setHidden] = useState(false);
  const { belowSm } = useResponsive();
  if (hidden) return null;
  return (
    <div className="flex fixed top-0 left-0 flex-col w-screen h-screen max-w-full justify-between z-100">
      <motion.div
        initial={{ height: '50%', opacity: 1 }}
        animate={{ height: belowSm ? 54 : 100, opacity: 0 }}
        transition={{
          height: { duration: 1, delay: 0.3 },
          opacity: { duration: 0.3, delay: 1.3 },
        }}
        onAnimationComplete={() => setHidden(true)}
        style={{ boxShadow: '0px 10px 20px 0px rgba(0,0,0,0.1)' }}
        className="flex relative items-end justify-center w-full bg-[#001011]"
      >
        <div className="max-w-[1400px] w-full flex items-start px-5 sm:px-10 xl:px-20 absolute bottom-0">
          <Image
            width={170}
            height={100}
            className="w-[150px] sm:w-[170px]"
            src={'./images/simple-cut-logo.svg'}
            alt={'SimpleCut logo'}
          />
        </div>
      </motion.div>
      <motion.div
        initial={{ height: '50%' }}
        animate={{ height: '0%' }}
        transition={{ duration: 1, delay: 0.3 }}
        className="w-full bg-[#001011] z-20"
      />
    </div>
  );
};

export default IntroAnimation;
