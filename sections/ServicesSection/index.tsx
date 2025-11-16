'use client';

import React, { useEffect, useRef, useState } from 'react';
import { motion } from 'motion/react';
import { useResponsive } from '../../utils/useResponsive';
import { SectionWrapper, ServiceCard } from '../../components';
import { Service } from '../../types/interfaces';
import { cln } from '../../utils/classnames';
import { gabarito } from '../../utils/fontsImporter';

interface Props {
  title: string;
  paragraph?: string;
  services: Service[];
}

const ServicesSection: React.FC<Props> = ({ title, paragraph, services }) => {
  const { aboveXl, aboveSm } = useResponsive();
  const [textHeight, setTextHeight] = useState(0);
  const textRef = useRef(null);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
    setTextHeight(textRef.current.clientWidth);
  }, []);

  console.log('text height: ', textHeight);

  const isLargeScreen = hydrated && aboveXl;
  return (
    <SectionWrapper classNames="flex flex-col px-5 sm:px-10" isHorizontalPadding={isLargeScreen}>
      <div className="flex flex-col lg:flex-row w-full gap-x-10 gap-y-20 sm:gap-y-0">
        <div className="flex flex-row lg:w-[35%] gap-x-5 sm:gap-x-10 pb-10">
          <motion.div
            className={cln(
              `flex flex-shrink-0 relative min-w-[100px] lg:w-fit`,
              'items-center lg:items-start justify-center lg:justify-start',
            )}
            style={{ height: !aboveSm ? textHeight : 'fit-content' }}
          >
            <h2
              ref={textRef}
              className={cln(
                gabarito.className,
                'text-white font-black text-[48px] mdlg:text-[56px] lg:text-[80px]',
                'absolute sm:relative lg:absolute',
                'rotate-90 sm:rotate-0 lg:rotate-90',
                'flex top-0 lg:top-[-40px] left-[80px] sm:left-0 lg:left-[110px]',
              )}
              style={{ transformOrigin: 'left top' }}
            >
              {title}
            </h2>
          </motion.div>
          <p
            className={cln(
              'flex h-fit w-full',
              'pl-10 lg:pl-0 lg:pb-10',
              'text-[18px]  leading-[1.5] text-white',
              'border-l-2 lg:border-b-2 lg:border-l-0 border-[#333333]',
              'self-center lg:self-start',
            )}
          >
            {paragraph}
          </p>
        </div>
        <div
          className={cln(
            'flex flex-col sm:flex-row flex-wrap',
            'w-full lg:w-[75%]',
            'items-center justify-end',
            'gap-5 2xl:gap-20',
          )}
        >
          {services.map((service) => {
            return <ServiceCard key={service.title} service={service} />;
          })}
          {/*{services.map((service) => {*/}
          {/*  return <ServiceCard key={service.title} service={service} />;*/}
          {/*})}*/}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
