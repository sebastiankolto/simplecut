"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useAnimation, useScroll, useTransform } from "motion/react";
import { cln } from "../../utils/classnames";
import { gabarito } from "../../utils/fontsImporter";
import { CtaButton, InfoTag } from "../../components";
import {
  CallToAction,
  ImageInterface,
  OpeningHours,
} from "../../types/interfaces";
import { useResponsive } from "../../utils/useResponsive";

interface Props {
  heroImage: ImageInterface;
  openingHours: OpeningHours;
  heroTitle: string;
  heroSubTitle: string;
  callToAction: CallToAction;
}

const HeroSection: React.FC<Props> = ({
  openingHours,
  heroTitle,
  heroSubTitle,
  callToAction,
  heroImage,
}) => {
  const heroTexts = heroTitle.split("/");
  const textFirst = heroTexts[0]?.split(" ");
  const textSecond = heroTexts[1]?.split(" ");
  const [showBg, setShowBg] = useState(true);

  const { above842 } = useResponsive();
  const [mounted, setMounted] = useState(false);
  useEffect(() => {
    setMounted(true);
  }, []);

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

  const heroRef = useRef<HTMLDivElement | null>(null);
  const { scrollYProgress } = useScroll();

  useEffect(() => {
    const handleScroll = () => {
      if (!heroRef.current) return;
      const heroBottom =
        heroRef.current!.offsetTop + heroRef.current!.offsetHeight;
      const scrollTop =
        window.scrollY ||
        window.pageYOffset ||
        document.documentElement.scrollTop;

      // hide bg once hero bottom is above viewport top
      setShowBg(scrollTop < heroBottom);
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    handleScroll(); // initial check
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const y = useTransform(scrollYProgress, [0, 1], [0, -1200]);
  const ctaY = useTransform(scrollYProgress, [0, 1], [0, -400]);
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.8]);

  return (
    <div className="min-w-full bg-[#001011] sticky top-0 overflow-hidden z-0">
      <div
        ref={heroRef}
        style={{ height: "100svh" }}
        className="max-w-full flex flex-col [@media(min-width:842px)]:flex-row justify-center"
      >
        <div
          className={cln(
            "flex flex-col [@media(min-width:842px)]:flex-row w-full min-h-full max-w-screen [@media(min-width:842px)]:max-w-[700px]",
            "items-center justify-start [@media(min-width:842px)]:justify-center z-20",
            "pt-20 [@media(min-width:842px)]:pt-0 pb-10 [@media(min-width:842px)]:pb-0 sm:pt-30",
            "px-5 sm:px-10 xl:px-20",
            "bg-[linear-gradient(180deg,#001011_40%,rgba(0,16,17,0.5)_50%,rgba(0,16,17,0)_60%)]",
          )}
        >
          <motion.div
            style={{ y, scale }}
            className="flex w-full h-full [@media(min-width:842px)]:my-auto flex-col items-center justify-start [@media(min-width:842px)]:justify-center gap-y-6 relative max-w-[384px]"
          >
            <div className="flex flex-col h-full [@media(min-width:842px)]:h-auto">
              <motion.div
                variants={textContainerAnim}
                initial="hidden"
                animate="show"
                className={cln(
                  "flex justify-center gap-x-3 overflow-hidden sm:h-[58px]",
                )}
              >
                {textFirst?.map((text) => {
                  return (
                    <motion.h1
                      className={cln(
                        gabarito.className,
                        "text-white text-center text-[40px] sm:text-[48px] leading-none",
                      )}
                      key={text}
                      variants={textAnim}
                    >
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
                  "flex justify-center gap-x-3 overflow-hidden sm:h-[58px]",
                )}
              >
                {textSecond?.map((text) => {
                  return (
                    <motion.h1
                      className={cln(
                        gabarito.className,
                        "text-white text-center font-extrabold text-[40px] sm:text-[48px] leading-none",
                      )}
                      key={text}
                      variants={textAnim}
                    >
                      {text}
                    </motion.h1>
                  );
                })}
              </motion.div>
              <motion.div
                initial="hidden"
                animate="show"
                variants={subContainerAnim}
                className="flex h-full flex-col gap-y-6 items-center overflow-hidden"
              >
                <motion.h3
                  variants={subtitleAnim}
                  className="text-white font-light leading-normal text-center text-[18px] sm:text-[20px] mt-4"
                >
                  {heroSubTitle}
                </motion.h3>
                <motion.div
                  variants={subtitleAnim}
                  style={mounted && !above842 ? { y: ctaY } : undefined}
                  className="self-center flex mt-auto order-2 [@media(min-width:842px)]:order-1"
                >
                  <CtaButton callToAction={callToAction} />
                </motion.div>
                <motion.div
                  variants={subtitleAnim}
                  className="flex order-1 [@media(min-width:842px)]:order-2"
                >
                  <InfoTag openingHours={openingHours} />
                </motion.div>
              </motion.div>
            </div>
          </motion.div>
        </div>
        <div className="w-full h-full flex max-w-full [@media(min-width:842px)]:max-w-[700px] z-10">
          <div
            className={cln(
              "w-full [@media(min-width:842px)]:w-[55%] lg:w-[65%] flex h-[70%] [@media(min-width:842px)]:h-full",
              "bg-size-[140%] bg-position-[60%_50%] [@media(min-width:842px)]:bg-cover [@media(min-width:842px)]:bg-position-[30%] mt-auto bg-no-repeat",
              "absolute bottom-[-48px] sm:bottom-0 z-10",
            )}
            style={{
              backgroundImage: showBg ? `url('${heroImage.url}')` : "none",
            }}
          >
            <div
              className="[@media(min-width:842px)]:bg-[linear-gradient(90deg,#001011_0%,rgba(0,0,0,0)_50%)]
             w-[50%] h-full
             z-50 absolute left-0 top-0"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
