"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "motion/react";
import { ImageSize, Review, ReviewImageType } from "../../types/interfaces";
import { ReviewCard, ReviewImage, SectionWrapper } from "../../components";
import { gabarito } from "../../utils/fontsImporter";
import { cln } from "../../utils/classnames";
import { useResponsive } from "../../utils/useResponsive";

interface Props {
  reviews: Review[];
  reviewTitle: string;
  reviewSubtitle: string;
  reviewImages: ReviewImageType[];
}

const ReviewSection: React.FC<Props> = ({
  reviews,
  reviewTitle,
  reviewSubtitle,
  reviewImages,
}) => {
  const gapX = "gap-x-4 sm:gap-x-8 xl:gap-x-10";
  const gapY = "gap-y-4 sm:gap-y-8 xl:gap-y-10";
  const { aboveXl } = useResponsive();

  const isLargeScreen = aboveXl;

  const textContainerAnim = {
    hidden: {},
    show: {
      transition: {
        delayChildren: 0.2,
        staggerChildren: 0.3,
      },
    },
  };

  const textAnim = {
    hidden: { y: "100%" },
    show: { y: 0, transition: { duration: 0.8 } },
  };

  return (
    <SectionWrapper
      classNames="flex flex-col gap-y-14"
      isHorizontalPadding={isLargeScreen}
      style={{ boxShadow: "0px -22px 40px 10px rgba(0,0,0,0.2)" }}
      id="reviews"
    >
      <div className="flex flex-col items-center gap-y-2 px-10">
        <motion.div
          variants={textContainerAnim}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true, amount: 1 }}
          className="flex gap-x-6 overflow-hidden flex-wrap justify-center mb-4"
        >
          {reviewTitle.split(" ").map((word) => {
            return (
              <div key={word} className="overflow-hidden">
                <motion.h2
                  className={cln(
                    gabarito.className,
                    "text-[56px] md:text-[100px] text-center font-black text-white leading-none",
                  )}
                  variants={textAnim}
                >
                  {word}
                </motion.h2>
              </div>
            );
          })}
        </motion.div>
        <motion.div
          initial="initial"
          whileInView="inView"
          viewport={{ amount: 1, once: true }}
          className="relative flex justify-center items-center w-full"
        >
          {[...Array(5)].map((_, i) => {
            const center = 2;
            const offset = (i - center) * 25;
            const midOffset = offset;
            const isInner = Math.abs(i - center) === 1;
            const isOuter = Math.abs(i - center) === 2;

            return (
              <motion.div
                key={i}
                style={{ position: "absolute", left: "50%", x: "-50%" }}
                variants={{
                  initial: { x: "-50%" },
                  inView: isInner
                    ? { x: `calc(-50% + ${midOffset}px)` }
                    : isOuter
                      ? { x: `calc(-50% + ${offset}px)` }
                      : { x: "-50%" },
                }}
                transition={{
                  duration: 0.4,
                  ease: "easeInOut",
                  delay: isInner ? 1 : isOuter ? 1.8 : 1,
                }}
              >
                <Image
                  src="./images/star.svg"
                  alt="star"
                  width={20}
                  height={20}
                />
              </motion.div>
            );
          })}
        </motion.div>
      </div>

      {/*REVIEWS AND IMAGES CONTAINER*/}
      <div className="flex flex-col md:flex-row items-center gap-x-8 gap-y-12">
        {/*REVIEWS CONTAINER*/}
        <div
          className={cln(
            "w-full md:w-1/2",
            "flex flex-row md:flex-col xl:flex-row",
            "gap-y-8 lg:gap-y-12",
            "md:items-center overflow-x-scroll relative md:overflow-visible [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
            gapX,
            "pl-5 sm:pl-0",
          )}
        >
          <div
            className={cln(
              "flex flex-row md:flex-col md:items-center md:w-full xl:w-1/2",
              gapY,
              gapX,
            )}
          >
            {reviews.map((review, index) => {
              return (
                index < 2 && <ReviewCard key={review.id} review={review} />
              );
            })}
          </div>
          <div
            className={cln(
              "flex flex-row md:flex-col md:items-center w-full xl:w-1/2",
              gapY,
              gapX,
            )}
          >
            {reviews.map((review, index) => {
              return (
                index > 1 && <ReviewCard key={review.id} review={review} />
              );
            })}
            <div className="w-[1px] flex-shrink-0 ml-[-13px]" />
          </div>
        </div>
        {/*REVIEW IMAGES CONTAINER*/}
        <div className="w-full flex flex-col md:w-1/2 relative overflow-hidden pr-0 sm:pr-5">
          <h3
            className={cln(
              gabarito.className,
              "text-white lg:whitespace-nowrap text-center font-black text-[24px] md:text-[32px] mb-8 z-50",
              "xl:rotate-270 relative xl:absolute left-[50%] translate-x-[-50%] md:left-0 md:translate-x-0 xl:left-[51%] xl:translate-x-[-49%] xl:top-[50%] xl:translate-y-[-50%]",
            )}
          >
            {reviewSubtitle}
          </h3>
          <div
            className={cln(
              "flex flex-row md:flex-col xl:flex-row relative overflow-x-scroll [scrollbar-width:none] [-ms-overflow-style:none] [&::-webkit-scrollbar]:hidden",
              "pl-5 pr-5",
              gapY,
              gapX,
            )}
          >
            {/*REVIEW IMAGES CONTAINER 1/2*/}
            <div
              className={cln(
                "flex flex-row md:flex-col md:w-full xl:w-1/2 items-center justify-center",
                gapY,
                gapX,
              )}
            >
              {reviewImages.map((reviewImage, index) => {
                return (
                  index < 3 && (
                    <motion.div key={index}>
                      <ReviewImage
                        images={reviewImage}
                        imageSize={
                          isLargeScreen && index === 1
                            ? ImageSize.large
                            : !aboveXl
                              ? ImageSize.large
                              : ImageSize.small
                        }
                      />
                    </motion.div>
                  )
                );
              })}
            </div>
            {/*REVIEW IMAGES CONTAINER 1/2*/}
            <div
              className={cln(
                "flex flex-row md:flex-col md:w-full xl:w-1/2 items-center justify-center",
                gapY,
                gapX,
              )}
            >
              {reviewImages.map((reviewImage, index) => {
                return (
                  index > 2 &&
                  index < 5 && (
                    <ReviewImage
                      key={index}
                      images={reviewImage}
                      imageSize={
                        isLargeScreen && index === 4
                          ? ImageSize.large
                          : !aboveXl
                            ? ImageSize.large
                            : ImageSize.small
                      }
                    />
                  )
                );
              })}
            </div>
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ReviewSection;
