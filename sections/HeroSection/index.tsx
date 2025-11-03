'use client';

import React, { useEffect, useRef } from 'react';
import { motion, useAnimation } from 'motion/react';
import { cln } from '../../utils/classnames';
import { gabarito } from '../../utils/fontsImporter';
import { CtaButton, InfoTag } from '../../components';
import { CallToAction, OpeningHours } from '../../types/interfaces';

interface Props {
  openingHours: OpeningHours;
  heroTitle: string;
  heroSubTitle: string;
  callToAction: CallToAction;
}

const HeroSection: React.FC<Props> = ({ openingHours, heroTitle, heroSubTitle, callToAction }) => {
  //   TODO: Change [@media(min-width:842px)] to mdlg
  const heroTexts = heroTitle.split('/');
  const textFirst = heroTexts[0]?.split(' ');
  const textSecond = heroTexts[1]?.split(' ');

  const ref = useRef(null);
  const controls = useAnimation();

  useEffect(() => {
    const handleScroll = () => {
      if (!ref.current) return;

      const rect = ref.current.getBoundingClientRect();
      const triggerPoint = 20; // top of viewport

      if (rect.top <= triggerPoint) {
        // element reached top of viewport → animate out
        controls.start({ x: 100, opacity: 0, transition: { duration: 0.5, ease: 'easeOut' } });
      } else {
        // element still below top → keep it visible
        controls.start({ x: 0, opacity: 1, transition: { duration: 0.5, ease: 'easeOut' } });
      }
    };

    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll(); // call once in case already in position

    return () => window.removeEventListener('scroll', handleScroll);
  }, [controls]);

  const textContainerAnim = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 2.5,
        staggerChildren: 0.3,
      },
    },
  };

  const subContainerAnim = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 3,
        staggerChildren: 0.3,
      },
    },
  };

  const textAnim = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  const subtitleAnim = {
    hidden: { y: 60, opacity: 0 },
    show: { y: 0, opacity: 1, transition: { duration: 0.8 } },
  };

  return (
    <div>
      <div className="flex flex-col [@media(min-width:842px)]:flex-row relative w-screen max-w-[1400px] h-screen">
        <div
          className={cln(
            'flex flex-col px-5 sm:px-10 xl:px-20 items-center py-10',
            'relative',
            'justify-between items-center',
            'w-full [@media(min-width:842px)]:w-[45%] lg:w-[35%]',
            'h-full z-20 ',
          )}
          style={{
            background:
              'linear-gradient(180deg, #001011 40%, rgba(0, 16, 17, 0.50) 50%, rgba(0, 16, 17, 0.00) 60%)',
          }}
        >
          <div className="flex [@media(min-width:842px)]:my-auto flex-col items-center gap-y-6 relative top-14 sm:top-20 [@media(min-width:842px)]:top-0 max-w-[384px]">
            <div className="flex flex-col">
              <motion.div
                variants={textContainerAnim}
                initial="hidden"
                animate="show"
                className={cln(
                  gabarito.className,
                  'text-white text-center text-[40px] sm:text-[48px] leading-none flex justify-center gap-x-3 overflow-hidden',
                )}
              >
                {textFirst?.map((text) => {
                  return (
                    <motion.h1 key={text} variants={textAnim}>
                      {text}
                    </motion.h1>
                  );
                })}
              </motion.div>
              <motion.div
                variants={textContainerAnim}
                initial="hidden"
                animate="show"
                className={cln(
                  gabarito.className,
                  'text-white text-center font-extrabold text-[40px] sm:text-[48px] leading-none flex justify-center gap-x-3 overflow-hidden',
                )}
              >
                {textSecond?.map((text) => {
                  return (
                    <motion.h1 key={text} variants={textAnim}>
                      {text}
                    </motion.h1>
                  );
                })}
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={subContainerAnim}
                className="flex flex-col gap-y-6 items-center overflow-hidden"
              >
                <motion.h3
                  variants={subtitleAnim}
                  className="text-white font-light leading-normal text-center text-[18px] sm:text-[20px] mt-4"
                >
                  {heroSubTitle}
                </motion.h3>
                <motion.div variants={subtitleAnim}>
                  <InfoTag openingHours={openingHours} />
                </motion.div>
              </motion.div>
            </div>
          </div>
          <motion.div
            style={{
              willChange: 'transform, opacity',
              backfaceVisibility: 'hidden',
              backdropFilter: 'blur(10px)',
            }}
            ref={ref}
            animate={controls}
            className="self-center [@media(min-width:842px)]:self-start"
          >
            <CtaButton callToAction={callToAction} />
          </motion.div>
        </div>
      </div>
      <div
        className={cln(
          'w-full [@media(min-width:842px)]:w-[55%] lg:w-[65%] flex h-[70%] [@media(min-width:842px)]:h-full',
          'bg-size-[140%] bg-position-[100%_20%] [@media(min-width:842px)]:bg-cover [@media(min-width:842px)]:bg-position-[30%] mt-auto bg-no-repeat',
          'absolute right-0 bottom-0 z-10',
        )}
        style={{
          backgroundImage: `radial-gradient(66.7% 100% at 100% 0%, rgba(0, 0, 0, 0.30) 10%, rgba(0, 0, 0, 0.00) 50.48%), url('/images/hero-image.webp')`,
        }}
      />
    </div>
  );
};

export default HeroSection;
