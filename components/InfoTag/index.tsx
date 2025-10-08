'use client';

import React from 'react';
import { OpeningHours } from '../../types/interfaces';

interface Props {
  openingHours: OpeningHours;
}

const InfoTag: React.FC<Props> = ({ openingHours }) => {
  //   TODO: Rolling times, stops where the final time is
  const days = openingHours.days.split(' ');

  return (
    <div className="h-11 px-3 border-1 flex gap-x-4 relative items-center justify-center bg-white/5 border-1 border-white/20 backdrop-blur-md text-white">
      <div className="flex gap-x-1">
        <span>{days[0]?.slice(0, 3)}</span> - <span>{days[1]?.slice(0, 3)}</span>
      </div>
      <span className="flex h-3.5 w-[2px] bg-white/50" />
      <div className="flex gap-x-1">
        <span>{openingHours.openTime.slice(0, 5)}</span>-
        <span>{openingHours.closeTime.slice(0, 5)}</span>
      </div>
    </div>
  );
};

export default InfoTag;
