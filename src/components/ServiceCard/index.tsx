"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { Service } from "../../types/interfaces";
import { cln } from "../../utils/classnames";
import { gabarito } from "../../utils/fontsImporter";
import { useResponsive } from "../../utils/useResponsive";

interface Props {
  service: Service;
  delay: number;
}

const ServiceCard: React.FC<Props> = ({ service, delay }) => {
  const { aboveLg, aboveSm } = useResponsive();

  return (
    <motion.div
      whileInView="inView"
      initial="initial"
      whileHover="hover"
      viewport={{ amount: aboveSm ? 1 : 0.4, once: aboveSm }}
      className="flex items-end flex-1 w-full aspect-square max-w-[500px] relative border-[1px] border-white/20 overflow-hidden"
    >
      <motion.div
        variants={{
          initial: { filter: "blur(5px)" },
          inView: { filter: "blur(0px)" },
        }}
        transition={{ duration: 0.6, ease: "easeOut" }}
        className="flex absolute top-0 left-0 z-0"
      >
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${service.image.url}`}
          width={501}
          height={501}
          alt={
            service.image.alternativeText
              ? service.image.alternativeText
              : service.image.name
          }
        />
        <motion.div
          variants={{
            initial: { opacity: 1 },
            inView: { opacity: 0 },
          }}
          className="absolute top-0 left-0 w-full h-full bg-black/50 pointer-events-none"
        />
      </motion.div>
      <motion.div
        variants={{
          initial: { y: 104 },
          inView: { y: 0 },
        }}
        transition={{
          duration: 0.6,
          ease: "easeOut",
          delay: aboveLg ? delay : 0,
        }}
        className="flex items-center justify-between w-full bg-[#000E0F] px-4 py-2 sm:px-4 sm:py-2 xl:px-6 xl:py-3 h-[80px] xl:h-[100px] z-10"
      >
        <motion.h4
          variants={{
            initial: { x: -50, opacity: 0.1 },
            inView: {
              x: aboveSm ? 0 : 10,
              opacity: aboveSm ? 0.1 : 1,
              transition: { duration: 0.6, ease: "easeOut", delay: 0.2 },
            },
            hover: {
              x: 10,
              opacity: 1,
              transition: { ease: "easeInOut", duration: 0.4 },
            },
          }}
          className={cln(
            gabarito.className,
            "text-[28px] xl:text-[38px] font-extrabold text-white",
          )}
        >
          {service.title}
        </motion.h4>
        <motion.div
          variants={{
            initial: { x: 0 },
            hover: { x: -10 },
          }}
          transition={{ duration: 0.4, ease: "easeInOut" }}
          className="flex flex-col"
        >
          <h5 className="text-[13px] xl:text-[14px] text-white/80">
            {service.priceText}
          </h5>
          <h6 className="text-[18px] xl:text-[20px] font-extrabold text-white">
            {service.price}
          </h6>
        </motion.div>
      </motion.div>
    </motion.div>
  );
};

export default ServiceCard;
