'use client';

import React from 'react';
import Image from 'next/image';
import { motion } from 'motion/react';
import { cln } from '../../utils/classnames';
import { ImageSize } from '../../types/interfaces';

interface Props {
  images: any;
  imageSize?: ImageSize;
}

const ReviewImage: React.FC<Props> = ({ images, imageSize }) => {
  const variants = {
    initial: { opacity: 1 },
    hover: { opacity: images.image2 && 0 },
  };

  const size = imageSize === 'large' ? 260 : imageSize === 'medium' ? 220 : 200;

  return (
    <motion.div
      initial="initial"
      whileHover="hover"
      className={cln(
        'relative overflow-hidden border border-[#333333]',
        imageSize === 'large'
          ? 'w-[260px] h-[260px]'
          : imageSize === 'medium'
            ? 'w-[220px] h-[220px]'
            : 'w-[200px] h-[200px]',
      )}
    >
      {/* Image 1 (visible by default, fades out on hover) */}
      <motion.div variants={variants} transition={{ duration: 0.3 }} className="absolute inset-0">
        <Image
          src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${images.image1.url}`}
          alt="Haircut 1"
          width={size}
          height={size}
          style={{ objectFit: 'cover' }}
        />
      </motion.div>

      {/* Image 2 (fades in on hover) */}
      {images.image2 && (
        <motion.div
          variants={{
            initial: { opacity: 0 },
            hover: { opacity: 1 },
          }}
          transition={{ duration: 0.5 }}
          className="absolute inset-0"
        >
          <Image
            src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${images.image2.url}`}
            alt="Haircut 2"
            width={size}
            height={size}
            style={{ objectFit: 'cover' }}
          />
        </motion.div>
      )}
    </motion.div>
  );
};

export default ReviewImage;
