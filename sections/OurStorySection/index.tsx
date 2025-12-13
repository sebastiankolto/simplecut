"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion } from "motion/react";
import Image from "next/image";
import { useResponsive } from "../../utils/useResponsive";
import { SectionWrapper } from "../../components";
import { ImageInterface } from "../../types/interfaces";
import { cln } from "../../utils/classnames";
import { gabarito } from "../../utils/fontsImporter";

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

const OurStorySection: React.FC<Props> = ({
  ourStoryTitle,
  ourStoryParagraph,
  ourStoryImages,
}) => {
  const { aboveXl, aboveLg } = useResponsive();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const isLargeScreen = hydrated && aboveXl;
  const borderRef = useRef(null);

  return (
    <SectionWrapper
      classNames="flex flex-col xl:flex-row px-5 sm:px-10 overflow-hidden relative min-h-screen gap-y-10 md:gap-y-20"
      isHorizontalPadding={isLargeScreen}
    >
      <motion.div
        viewport={{ amount: 0.05, once: true }}
        initial="initialContainer"
        whileInView="inView"
        variants={{
          initialContainer: {},
          inView: {},
        }}
        id="our-story"
        className="flex flex-col md:flex-row relative w-full xl:w-1/2 items-center justify-center md:gap-x-20 md:justify-between xl:items-center xl:justify-center h-full xl:h-screen"
      >
        {/*IMAGE 1*/}
        <motion.div
          viewport={{ amount: 0.5, once: true }}
          initial={{ height: 0 }}
          whileInView={{ height: 400 }}
          transition={{
            duration: 1.25,
            delay: 0.5,
            ease: "easeInOut",
          }}
          style={{
            width: 300,
            backgroundImage: `linear-gradient(180deg, #000E0F 0%, rgba(0, 0, 0, 0.00) 40%), url('${process.env.NEXT_PUBLIC_STRAPI_URL}${ourStoryImages.image1.url}')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
          className="mt-[10%] hidden md:block md:mt-0 top-0 xl:top-[50%] xl:left-0 relative xl:absolute"
        />
        {/*IMAGE 2*/}
        <div className="w-[300px] h-[400px] bottom-0 relative xl:absolute xl:right-0 xl:bottom-[50%]">
          <motion.div
            variants={{
              initialContainer: {
                height: 0,
              },
              inView: {
                height: 400,
              },
            }}
            transition={{
              duration: 1.25,
              delay: 0.5,
              ease: "easeInOut",
            }}
            style={{
              width: 300,
              backgroundImage: `linear-gradient(0deg, #000E0F 0%, rgba(0, 0, 0, 0.00) 40%), url('${process.env.NEXT_PUBLIC_STRAPI_URL}${ourStoryImages.image2.url}')`,
              backgroundSize: "cover",
              backgroundPosition: "bottom",
              backgroundRepeat: "no-repeat",
            }}
            className="absolute bottom-0 left-0"
          />
        </div>

        <motion.div className="relative mt-[-24px] md:absolute md:translate-x-[-50%] md:left-[50%] md:bottom-[-24px] xl:relative xl:bottom-0 xl:translate-x-0 xl:left-0">
          <motion.div
            ref={borderRef}
            viewport={{ amount: 0.5, once: true }}
            initial={{ width: "0%", borderRightWidth: 0 }}
            whileInView={{ width: "102%", borderRightWidth: 1 }}
            transition={{ duration: 1, delay: 1, ease: "easeInOut" }}
            onAnimationComplete={() => {
              if (borderRef.current)
                borderRef.current.style.borderRightWidth = "0px";
            }}
            className="overflow-hidden border-r border-r-white"
          >
            <h2
              className={cln(
                gabarito.className,
                "text-[48px] sm:text-[64px] md:text-[100px] text-center font-black text-white leading-none z-50",
              )}
            >
              {ourStoryTitle}
            </h2>
          </motion.div>
        </motion.div>
      </motion.div>
      <div className="flex items-center flex-col-reverse md:flex-row relative w-full justify-center md:justify-between xl:w-1/2 xl:items-center xl:justify-center h-full xl:h-screen">
        {/*IMAGE 3*/}
        <div className="w-[400px] h-[400px] mt-[-32px] bottom-0 xl:top-[60%] xl:left-[10%] xl:absolute">
          <motion.div
            viewport={{ amount: 0.5, once: true }}
            initial={{ height: 0 }}
            whileInView={{ height: 400 }}
            transition={{
              duration: 1.25,
              delay: 0.5,
              ease: "easeInOut",
            }}
            style={{
              width: 400,
              backgroundImage: `linear-gradient(180deg, #000E0F 0%, rgba(0, 0, 0, 0.00) 40%), url('${process.env.NEXT_PUBLIC_STRAPI_URL}${ourStoryImages.image3.url}')`,
              backgroundSize: "cover",
              backgroundPosition: "top",
              backgroundRepeat: "no-repeat",
            }}
          />
        </div>

        {/*  IMAGE 4 */}
        <motion.div
          viewport={{ amount: 0.5, once: true }}
          initial={{ height: 0 }}
          whileInView={{ height: 300 }}
          transition={{
            duration: 1.25,
            delay: 0.5,
            ease: "easeInOut",
          }}
          style={{
            width: 300,
            height: 300,
            backgroundImage: `url('${process.env.NEXT_PUBLIC_STRAPI_URL}${ourStoryImages.image4.url}')`,
            backgroundSize: "cover",
            backgroundPosition: "top",
            backgroundRepeat: "no-repeat",
          }}
          className="hidden md:block md:mt-0 xl:bottom-[60%] xl:right-5 xl:absolute"
        />
        <motion.div
          viewport={{ amount: 0.5, once: true }}
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.2, delay: 1.25, ease: "easeInOut" }}
          className="relative md:absolute top-[0px] xl:top-0 left-[50%] xl:left-0 translate-x-[-50%] xl:translate-x-0 xl:relative flex w-full max-w-[620px] h-fit py-5 px-6 md:py-10 md:px-12 items-center justify-center bg-[#000E0F]/20 backdrop-blur-lg"
        >
          <p className="text-[16px] md:text-[20px] 2xl:text-[24px] leading-[1.5] text-white">
            {ourStoryParagraph}
          </p>
        </motion.div>
      </div>
    </SectionWrapper>
  );
};

export default OurStorySection;
