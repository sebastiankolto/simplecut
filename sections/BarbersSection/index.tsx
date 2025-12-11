'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import { useResponsive } from '../../utils/useResponsive';
import { SectionWrapper } from '../../components';
import { Barber } from '../../types/interfaces';
import { cln } from '../../utils/classnames';
import { gabarito } from '../../utils/fontsImporter';
import BarberCard from '../../components/BarberCard';

interface Props {
  title: string;
  barbers: Barber[];
}

const BarbersSection: React.FC<Props> = ({ title, barbers }) => {
  const { aboveXl, aboveLg } = useResponsive();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const isLargeScreen = hydrated && aboveXl;
  return (
    <SectionWrapper
      id="barbers"
      classNames="flex flex-col px-5 sm:px-10 overflow-hidden relative"
      isHorizontalPadding={isLargeScreen}
    >
      <motion.h2
        viewport={{ amount: 0.7, once: false }}
        initial={{ letterSpacing: aboveLg ? '40px' : '10px' }}
        whileInView={{ letterSpacing: '1px' }}
        transition={{ duration: aboveLg ? 15 : 8, ease: 'linear' }}
        className={cln(
          gabarito.className,
          'text-white font-black text-[80px] sm:text-[120px] lg:text-[160px] text-center absolute top-20 lg:top-12',
        )}
        style={{ left: '50%', translateX: '-50%' }}
      >
        {title}
      </motion.h2>
      <div className="grid mx-auto mt-10 sm:mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4">
        {barbers.map((barber, i) => {
          return <BarberCard key={i} barber={barber} />;
        })}
      </div>
    </SectionWrapper>
  );
};

export default BarbersSection;
