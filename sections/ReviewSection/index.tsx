'use client';

import React from 'react';
import Image from 'next/image';
import { ImageSize, Review, ReviewImageType } from '../../types/interfaces';
import { ReviewCard, ReviewImage, SectionWrapper } from '../../components';
import { gabarito } from '../../utils/fontsImporter';
import { cln } from '../../utils/classnames';

interface Props {
  reviews: Review[];
  reviewTitle: string;
  reviewSubtitle: string;
  reviewImages: ReviewImageType[];
}

const ReviewSection: React.FC<Props> = ({ reviews, reviewTitle, reviewSubtitle, reviewImages }) => {
  return (
    <SectionWrapper classNames="flex flex-col gap-y-14">
      <div className="flex flex-col items-center gap-y-2">
        <h1 className={cln(gabarito.className, 'text-[100px] font-black text-white leading-none')}>
          {reviewTitle}
        </h1>
        <div className="flex gap-x-2">
          {[...Array(5)].map((_, i) => (
            <Image key={i} src={'./images/star.svg'} alt={'star icon'} width={20} height={20} />
          ))}
        </div>
      </div>

      <div className="flex">
        <div className="w-1/2 flex items-center lg:gap-x-8 gap-x-16">
          <div className="flex flex-col w-1/2 lg:gap-y-8 gap-y-16">
            {reviews.map((review, index) => {
              return index < 2 && <ReviewCard key={review.id} review={review} />;
            })}
          </div>
          <div className="flex flex-col w-1/2 lg:gap-y-8 gap-y-16">
            {reviews.map((review, index) => {
              return index > 1 && <ReviewCard key={review.id} review={review} />;
            })}
          </div>
        </div>
        <div className="w-1/2 flex relative">
          <div className="flex flex-col items-center justify-center lg:gap-y-16 gap-y-32 w-1/2">
            {reviewImages.map((reviewImage, index) => {
              return (
                index < 3 && (
                  <ReviewImage
                    key={index}
                    images={reviewImage}
                    imageSize={index !== 1 ? ImageSize.small : ImageSize.large}
                  />
                )
              );
            })}
          </div>
          <h2
            className={cln(
              gabarito.className,
              'text-white whitespace-nowrap font-black text-[32px]',
              'rotate-270 absolute left-[51%] translate-x-[-49%] top-[50%] translate-y-[-50%]',
            )}
          >
            {reviewSubtitle}
          </h2>
          <div className="flex flex-col items-center justify-center lg:gap-y-16 gap-y-32 w-1/2">
            {reviewImages.map((reviewImage, index) => {
              return (
                index > 2 &&
                index < 5 && (
                  <ReviewImage
                    key={index}
                    images={reviewImage}
                    imageSize={index === 3 ? ImageSize.small : ImageSize.medium}
                  />
                )
              );
            })}
          </div>
        </div>
      </div>
    </SectionWrapper>
  );
};

export default ReviewSection;
