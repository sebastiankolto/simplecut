"use client";

import { motion } from "motion/react";
import React, { useRef } from "react";
import { cln } from "../../utils/classnames";
import { CallToAction } from "../../types/interfaces";
import { CtaButton } from "../index";

interface Props {
  paragraph: string;
  callToAction: CallToAction;
}

const ParagraphAnimation: React.FC<Props> = ({ paragraph, callToAction }) => {
  const conRef = useRef(null);

  const paragraphAnimUp = {
    hidden: { y: "100%" },
    show: { y: "0%" },
  };

  const paragraphAnimRight = {
    hidden: { x: "-100%" },
    show: { x: "0%" },
  };

  const borderAnimRight = {
    hidden: { width: "0%" },
    show: { width: "100%" },
  };

  const borderAnimUp = {
    hidden: { scaleY: 0, originY: 0 },
    show: { scaleY: 1 },
  };

  return (
    <>
      {/*ABOVE LG SCREENS*/}
      <motion.div
        viewport={{ amount: 1, once: true }}
        initial="hidden"
        whileInView="show"
        className="w-full hidden lg:flex flex-row-reverse lg:flex-col overflow-hidden h-fit"
      >
        <motion.p
          variants={paragraphAnimUp}
          transition={{ duration: 0.8, ease: "easeInOut", delay: 0.5 }}
          className={cln(
            "flex h-fit w-full",
            "pl-0 pb-10",
            "text-[20px] leading-[1.5] text-white",
            "self-center lg:self-start",
          )}
        >
          {paragraph}
        </motion.p>
        <motion.span
          variants={borderAnimRight}
          transition={{ delay: 0.2, duration: 0.4, ease: "easeInOut" }}
          className="w-full flex h-[2px] bg-[#333333]"
        />
      </motion.div>
      {/*BELOW LG SCREENS*/}
      <motion.div
        ref={conRef}
        viewport={{ amount: 1, once: true }}
        initial="hidden"
        whileInView="show"
        className="w-full lg:w-1/2 h-full flex lg:hidden flex-row-reverse overflow-hidden"
      >
        <div className="flex flex-col gap-y-6">
          <motion.p
            variants={paragraphAnimRight}
            transition={{ duration: 1, ease: "easeInOut", delay: 0.5 }}
            className={cln(
              "flex h-full w-full",
              "pl-5",
              "text-[18px] leading-[1.5] text-white",
              "self-center",
            )}
          >
            {paragraph}
          </motion.p>
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
              delay: 1.5,
              ease: "easeInOut",
            }}
            className="flex sm:hidden self-end"
          >
            <CtaButton callToAction={callToAction} />
          </motion.div>
        </div>

        <motion.span
          variants={borderAnimUp}
          transition={{ delay: 0.2, duration: 0.5, ease: "easeInOut" }}
          className="w-[2px] bg-[#333333] self-stretch"
        />
      </motion.div>
    </>
  );
};

export default ParagraphAnimation;
