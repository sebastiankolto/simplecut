"use client";

import React, { useEffect, useState } from "react";
import { motion } from "motion/react";
import { useResponsive } from "../../utils/useResponsive";
import { SectionWrapper } from "../../components";
import { Barber } from "../../types/interfaces";
import { cln } from "../../utils/classnames";
import { gabarito } from "../../utils/fontsImporter";
import BarberCard from "../../components/BarberCard";

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
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        viewport={{ once: true, amount: 0.7 }} // opacity only once
        transition={{
          duration: 1.5,
          ease: "easeInOut",
          delay: aboveLg ? 1.25 : 0.25,
        }}
        className={cln(
          gabarito.className,
          "text-white font-black text-[80px] sm:text-[120px] lg:text-[160px] text-center absolute top-12 sm:top-22 lg:top-12",
        )}
        style={{ left: "50%", translateX: "-50%" }}
      >
        <motion.span
          initial={{ letterSpacing: aboveLg ? "40px" : "10px" }}
          whileInView={{ letterSpacing: "1px" }}
          viewport={{ once: false, amount: 0.7 }}
          transition={{
            letterSpacing: {
              duration: aboveLg ? 15 : 8,
              ease: "linear",
              delay: 1.25,
              repeat: Infinity,
              repeatType: "reverse",
            },
          }}
          style={{ display: "inline-block" }}
        >
          {title}
        </motion.span>
      </motion.h2>
      <div
        className={cln(
          "grid mx-auto mt-10 sm:mt-20 grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4",
          barbers.length > 5 ? "2xl:grid-cols-6" : " 2xl:grid-cols-5",
        )}
      >
        {barbers.map((barber, i) => {
          if (aboveLg) {
            // Desktop: staggered children, triggered by a useEffect
            return (
              <motion.div
                key={i}
                initial={{ x: "-20%", opacity: 0 }}
                whileInView={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.4, delay: i * 0.2 }}
                viewport={{ once: true, amount: 0.5 }}
              >
                <BarberCard barber={barber} />
              </motion.div>
            );
          }

          // Mobile: scroll-triggered
          return (
            <motion.div
              key={i}
              initial={{ x: "-20%", opacity: 0 }}
              whileInView={{ x: 0, opacity: 1 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
            >
              <BarberCard barber={barber} />
            </motion.div>
          );
        })}
      </div>
    </SectionWrapper>
  );
};

export default BarbersSection;
