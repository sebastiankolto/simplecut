"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Barber } from "../../types/interfaces";
import { cln } from "../../utils/classnames";
import { gabarito } from "../../utils/fontsImporter";
import { useResponsive } from "../../utils/useResponsive";

interface Props {
  barber: Barber;
}

const BarberCard: React.FC<Props> = ({ barber }) => {
  const { aboveMd } = useResponsive();
  return (
    <motion.div
      viewport={{ amount: 1, once: aboveMd }}
      initial="initial"
      whileHover="hover"
      whileInView="inView"
      className="flex items-end aspect-[5/6] -mt-px -ml-px relative border-[1px] bg-black/30 backdrop-blur-md border-white/20 overflow-hidden"
    >
      <motion.h3
        variants={{
          initial: {
            filter: aboveMd ? "blur(30px)" : "blur(4px)",
            opacity: aboveMd ? 0 : 0.5,
          },
          inView: {
            filter: aboveMd ? "blur(4px)" : "blur(0px)",
            scale: aboveMd ? 1 : 1.05,
            y: aboveMd ? 0 : -24,
            opacity: aboveMd ? 0.5 : 1,
            transition: {
              duration: aboveMd ? 1 : 0.5,
              ease: "easeInOut",
            },
          },
          hover: {
            filter: "blur(0px)",
            scale: 1.05,
            y: -24,
            opacity: 1,
            transition: {
              duration: 0.5,
              ease: "easeInOut",
            },
          },
        }}
        className={cln(
          gabarito.className,
          "text-white font-black text-[56px] md:text-[62px] text-center",
          "absolute top-10 left-[50%] translate-x-[-50%]",
        )}
      >
        {barber.name}
      </motion.h3>
      <Image
        src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${barber.image.url}`}
        width={501}
        height={501}
        alt={
          barber.image.alternativeText
            ? barber.image.alternativeText
            : barber.image.name
        }
        className="z-10"
      />
      {barber.instaUrl && (
        <motion.a
          viewport={{ once: true }}
          initial={{ opacity: 0.5, x: "100%" }}
          whileInView={{
            x: "0%",
            transition: {
              duration: 1,
              ease: "easeInOut",
              delay: aboveMd ? 1 : 0.3,
            },
          }}
          whileHover={{ opacity: 1 }}
          className="p-4 absolute right-0 bottom-0 z-30"
          href={barber.instaUrl}
        >
          <Image
            src={"./images/instagram-icon.svg"}
            alt={"Instagram icon"}
            width={40}
            height={40}
          />
        </motion.a>
      )}
    </motion.div>
  );
};

export default BarberCard;
