"use client";

import React, { useEffect, useRef, useState } from "react";
import { motion, useScroll } from "motion/react";
import dynamic from "next/dynamic";
import { useResponsive } from "../../utils/useResponsive";
import { CtaButton, SectionWrapper, ServiceCard } from "../../components";
import { CallToAction, Service } from "../../types/interfaces";
import { cln } from "../../utils/classnames";
import { gabarito } from "../../utils/fontsImporter";
const ParagraphAnimation = dynamic(
  () => import("../../components/ParagraphAnimation"),
  {
    ssr: false,
  },
);

interface Props {
  title: string;
  paragraph?: string;
  services: Service[];
  callToAction: CallToAction;
}

const ServicesSection: React.FC<Props> = ({
  title,
  paragraph,
  services,
  callToAction,
}) => {
  const { aboveXl, aboveSm } = useResponsive();
  const [textHeight, setTextHeight] = useState(0);
  const textRef = useRef(null);

  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
    setTextHeight(textRef.current.clientWidth);
  }, []);

  // TITLE ANIMATION
  const titleSplit = title.split("");
  const wrapperRef = useRef(null);

  const { scrollYProgress } = useScroll({
    target: wrapperRef,
    offset: ["start end", "end start"],
  });

  const [letterColors, setLetterColors] = useState([]);

  useEffect(() => {
    return scrollYProgress.on("change", (scrollAmount) => {
      const newColors = titleSplit.map((element, i) => {
        const staggerAmount = 0.7;
        const whiteningStart = (i / titleSplit.length) * staggerAmount;
        const fullWhite = ((i + 1) / titleSplit.length) * staggerAmount;

        const whiteningProgress =
          (scrollAmount - whiteningStart) / (fullWhite - whiteningStart);
        const clamped = Math.min(Math.max(whiteningProgress, 0), 1);

        return `rgba(255,255,255,${0.2 + clamped * 0.8})`;
      });

      setLetterColors(newColors);
    });
  }, [scrollYProgress, titleSplit.length]);

  const isLargeScreen = hydrated && aboveXl;
  return (
    <SectionWrapper
      id="services"
      classNames="flex flex-col px-5 sm:px-10"
      isHorizontalPadding={isLargeScreen}
    >
      <div className="flex flex-col lg:flex-row w-full gap-x-10 gap-y-20 sm:gap-y-10">
        <div className="flex flex-row lg:w-[35%] justify-between gap-x-5 sm:gap-x-10 pb-10">
          <motion.div
            ref={wrapperRef}
            className={cln(
              `flex flex-shrink-0 relative min-w-[100px] lg:w-fit`,
              "items-center lg:items-start justify-center lg:justify-start",
            )}
            style={{ height: !aboveSm ? textHeight : "fit-content" }}
          >
            <div className="flex flex-col gap-6">
              <motion.h2
                ref={textRef}
                className={cln(
                  gabarito.className,
                  "text-white font-black text-[48px] mdlg:text-[56px] lg:text-[80px]",
                  "absolute sm:relative lg:absolute overflow-hidden",
                  "rotate-90 sm:rotate-0 lg:rotate-90",
                  "flex top-0 lg:top-[-40px] left-[80px] sm:left-0 lg:left-[110px]",
                )}
                style={{ transformOrigin: "left top" }}
              >
                {titleSplit.map((letter, i) => (
                  <span
                    key={i}
                    style={{
                      color: letterColors[i] || "rgba(255,255,255,0.2)",
                    }}
                  >
                    {letter}
                  </span>
                ))}
              </motion.h2>
              <div className="hidden sm:flex lg:hidden">
                <CtaButton callToAction={callToAction} />
              </div>
            </div>
          </motion.div>
          <div className="flex flex-col gap-12">
            {paragraph && (
              <ParagraphAnimation
                paragraph={paragraph}
                callToAction={callToAction}
              />
            )}
            <motion.div
              viewport={{ once: true }}
              initial={{
                opacity: 0,
              }}
              whileInView={{
                opacity: 1,
              }}
              transition={{
                duration: 1,
                delay: 1,
                ease: "easeInOut",
              }}
              className="hidden lg:flex"
            >
              <CtaButton callToAction={callToAction} />
            </motion.div>
          </div>
        </div>
        <div
          className={cln(
            "flex flex-col sm:flex-row flex-wrap",
            "w-full lg:w-[75%]",
            "items-center justify-end",
            "gap-5 2xl:gap-20",
          )}
        >
          {services.map((service, i) => {
            return (
              <ServiceCard
                key={service.title}
                service={service}
                delay={(i + 1) * 0.4}
              />
            );
          })}
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ServicesSection;
