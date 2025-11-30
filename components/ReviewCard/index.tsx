'use client';

import React, { useEffect, useRef, useState } from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { Review } from '../../types/interfaces';
import { cln } from '../../utils/classnames';
import { gabarito } from '../../utils/fontsImporter';
import { useResponsive } from '../../utils/useResponsive';

interface Props {
  review: Review;
}

const ReviewCard: React.FC<Props> = ({ review }) => {
  const { aboveMd } = useResponsive();
  const [isOpen, setIsOpen] = useState(false);
  const [isClamped, setIsClamped] = useState(false);
  const textRef = useRef(null);

  useEffect(() => {
    if (!textRef.current) return;
    // @ts-ignore
    const lineHeight = parseFloat(getComputedStyle(textRef.current).lineHeight);
    const maxHeight = lineHeight * 7;
    if (textRef.current.scrollHeight > maxHeight) {
      setIsClamped(true);
    }
  }, []);

  return (
    <motion.div
      whileHover={aboveMd ? 'hover' : undefined}
      whileInView={!aboveMd ? 'inView' : undefined}
      viewport={{ amount: 0.9 }}
      className="flex w-full min-w-[320px] md:min-w-min relative flex-col gap-y-4 px-6 sm:px-8 pt-8 pb-18 max-w-[400px] border-1 border-[#333333] overflow-hidden"
    >
      <div className="flex gap-x-4 items-center">
        <Image src={review.profile_photo_url} alt={review.author_name} width={34} height={34} />
        <h2 className="text-[16px] text-white/80 font-bold whitespace-nowrap">
          {review.author_name}
        </h2>
      </div>
      <p
        ref={textRef}
        className={cln(
          'text-[16px] text-white/80 font-light leading-[150%]',
          !isOpen ? 'line-clamp-7' : 'line-clamp-none',
        )}
        style={{ transition: 'all 0.3s ease-in-out' }}
      >
        {review.text}
      </p>
      {isClamped && (
        <button
          onClick={() => setIsOpen((prevValue) => !prevValue)}
          className="text-white cursor-pointer self-center"
        >
          <Image
            src={'./images/down-arrow.svg'}
            alt={'Arrow'}
            width={36}
            height={36}
            className={cln(isOpen ? 'rotate-180' : 'rotate-0')}
            style={{ transition: 'all 0.3s ease-in-out' }}
          />
        </button>
      )}
      <div className="absolute flex items-start bottom-0 right-0 translate-y-[72px]">
        <motion.h3
          className={cln(gabarito.className, 'text-[160px] font-bold leading-none text-[#000E0F]')}
          style={{
            textShadow: '-1px -1px 0 #fff, 1px -1px 0 #fff, -1px 1px 0 #fff, 1px 1px 0 #fff',
            opacity: 0.3,
            transformOrigin: 'top center',
          }}
          variants={{
            hover: {
              scale: 0.8,
              x: -10,
              color: 'white',
              opacity: 1,
            },
            inView: {
              scale: 0.8,
              x: -10,
              color: 'white',
              opacity: 1,
            },
          }}
          transition={{
            duration: 0.3,
            ease: 'easeInOut',
          }}
        >
          {review.rating}
        </motion.h3>
        <motion.div
          variants={{
            hover: {
              y: -10,
              x: -10,
            },
          }}
          transition={{ duration: 0.3, ease: 'easeInOut' }}
        >
          <Image
            src={'./images/star.svg'}
            alt={'star icon'}
            width={60}
            height={60}
            className="top-6 relative"
          />
        </motion.div>
      </div>
    </motion.div>
  );
};

export default ReviewCard;
