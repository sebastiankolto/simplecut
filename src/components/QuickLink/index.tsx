"use client";

import React from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ImageInterface } from "../../types/interfaces";

interface Props {
  imageUrl?: ImageInterface;
  imagePath?: string;
  url: string;
  size?: Size;
  alt: string;
  style?: any;
}

interface Size {
  width: number;
  height: number;
}

const QuickLink: React.FC<Props> = ({
  imageUrl,
  imagePath,
  url,
  size,
  style,
}) => {
  return (
    <motion.a
      initial="initial"
      whileHover="hover"
      variants={{
        initial: {},
        hover: {},
      }}
      href={url}
      className="flex w-14 h-14 relative items-center justify-center aspect-[1/1] rounded-md"
      style={style}
    >
      <motion.span
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        variants={{
          initial: {
            borderColor: "rgba(255,255,255,0.2)",
            width: "30%",
            height: "30%",
          },
          hover: {
            borderColor: "rgba(255,255,255,0.35)",
            width: "50%",
            height: "50%",
          },
        }}
        className="absolute top-0 right-0 border-t border-r"
      />
      <motion.span
        transition={{
          duration: 0.3,
          ease: "easeInOut",
        }}
        variants={{
          initial: {
            borderColor: "rgba(255,255,255,0.2)",
            width: "30%",
            height: "30%",
          },
          hover: {
            borderColor: "rgba(255,255,255,0.35)",
            width: "50%",
            height: "50%",
          },
        }}
        className="absolute bottom-0 left-0 border-b border-l"
      />
      <Image
        width={size ? size.width : 32}
        height={size ? size.height : 32}
        src={imagePath ? imagePath : imageUrl!.url}
        alt={"Website logo"}
      />
    </motion.a>
  );
};

export default QuickLink;
