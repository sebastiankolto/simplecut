'use client';

import React, { useEffect, useState } from 'react';
import { motion } from 'motion/react';
import Image from 'next/image';
import { useResponsive } from '../../utils/useResponsive';
import { SectionWrapper } from '../../components';
import { ImageInterface } from '../../types/interfaces';
import { cln } from '../../utils/classnames';
import { gabarito } from '../../utils/fontsImporter';

interface Props {
  ourStoryTitle: string;
  ourStoryParagraph: string;
  ourStoryImages: Images;
}

interface Images {
  image1: ImageInterface;
  image2: ImageInterface;
  image3: ImageInterface;
  image4: ImageInterface;
}

const OurStorySection: React.FC<Props> = ({ ourStoryTitle, ourStoryParagraph, ourStoryImages }) => {
  const { aboveXl, aboveLg } = useResponsive();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const isLargeScreen = hydrated && aboveXl;

  return (
    <SectionWrapper
      classNames="flex flex-col xl:flex-row px-5 sm:px-10 overflow-hidden relative min-h-screen gap-y-10 md:gap-y-20"
      isHorizontalPadding={isLargeScreen}
    >
      <div className="flex flex-col md:flex-row relative w-full xl:w-1/2 items-center justify-center md:gap-x-20 md:justify-between xl:items-center xl:justify-center h-full xl:h-screen">
        {/*IMAGE 1*/}
        <div
          style={{
            width: 300,
            height: 400,
            backgroundImage: `linear-gradient(180deg, #000E0F 0%, rgba(0, 0, 0, 0.00) 40%), url('${process.env.NEXT_PUBLIC_STRAPI_URL}${ourStoryImages.image1.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="mt-[10%] hidden md:block md:mt-0 top-0 xl:top-[50%] xl:left-0 relative xl:absolute"
        />
        {/*IMAGE 2*/}
        <div
          style={{
            width: 300,
            height: 400,
            backgroundImage: `linear-gradient(0deg, #000E0F 0%, rgba(0, 0, 0, 0.00) 40%), url('${process.env.NEXT_PUBLIC_STRAPI_URL}${ourStoryImages.image2.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="bottom-0 relative xl:absolute xl:right-0 xl:bottom-[50%]"
        />
        <h2
          className={cln(
            gabarito.className,
            'text-[48px] sm:text-[64px] md:text-[100px] text-center font-black text-white leading-none z-50',
            'relative mt-[-24px] md:absolute md:translate-x-[-50%] md:left-[50%] md:bottom-[-24px] xl:relative xl:bottom-0 xl:translate-x-0 xl:left-0',
          )}
        >
          {ourStoryTitle}
        </h2>
      </div>
      <div className="flex items-center flex-col-reverse md:flex-row relative w-full justify-center md:justify-between xl:w-1/2 xl:items-center xl:justify-center h-full xl:h-screen">
        {/*IMAGE 3*/}
        <div
          style={{
            width: 400,
            height: 400,
            backgroundImage: `linear-gradient(180deg, #000E0F 0%, rgba(0, 0, 0, 0.00) 40%), url('${process.env.NEXT_PUBLIC_STRAPI_URL}${ourStoryImages.image3.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="mt-[-32px] bottom-0 xl:bottom-[-80px] xl:left-[10%] xl:absolute"
        />
        {/*  IMAGE 4 */}
        <div
          style={{
            width: 300,
            height: 300,
            backgroundImage: `url('${process.env.NEXT_PUBLIC_STRAPI_URL}${ourStoryImages.image4.url}')`,
            backgroundSize: 'cover',
            backgroundPosition: 'center',
            backgroundRepeat: 'no-repeat',
          }}
          className="hidden md:block md:mt-0 xl:top-0 xl:right-0 xl:absolute"
        />
        <div className="relative md:absolute top-[0px] xl:top-0 left-[50%] xl:left-0 translate-x-[-50%] xl:translate-x-0 xl:relative flex w-full max-w-[620px] h-fit py-5 px-6 md:py-10 md:px-12 items-center justify-center bg-[#000E0F]/20 backdrop-blur-lg">
          <p className="text-[16px] md:text-[20px] 2xl:text-[24px] leading-[1.5] text-white">
            {ourStoryParagraph}
          </p>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default OurStorySection;
