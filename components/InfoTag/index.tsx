'use client';

import React from 'react';
import { OpeningHours } from '../../types/interfaces';
import { Counter } from '../index';

interface Props {
  openingHours: OpeningHours;
}

const InfoTag: React.FC<Props> = ({ openingHours }) => {
  const openingHourNew = openingHours.openTime.split(':').slice(0, 2);
  const closingHourNew = openingHours.closeTime.split(':').slice(0, 2);

  const openingDigits = openingHourNew.join('').split('').map(Number);
  const closingDigits = closingHourNew.join('').split('').map(Number);

  const renderTime = (digits: number[], delay: number = 1) => {
    // split digits into pairs: [hours, minutes]
    const pairs = [digits.slice(0, 2), digits.slice(2, 4)];

    return (
      <div className="flex items-center h-11">
        {pairs.map((pair, i) => (
          <React.Fragment key={i}>
            <div className="flex items-center h-11">
              {pair.map((digit, j) => (
                <Counter
                  key={j}
                  finalNumber={digit}
                  duration={1}
                  delay={delay}
                  isAnimated={false}
                />
              ))}
            </div>
            {i === 0 && <span>:</span>}
          </React.Fragment>
        ))}
      </div>
    );
  };

  return (
    <div className="h-11 w-fit px-3 border-1 flex gap-x-2 relative items-center justify-center bg-white/5 border-1 border-white/20 backdrop-blur-md text-white">
      <div className="flex gap-x-1">
        <span>{openingHours.openingDay.slice(0, 3)}</span> -{' '}
        <span>{openingHours.closingDay.slice(0, 3)}</span>
      </div>
      <span className="flex h-3.5 w-[2px] bg-white/50" />
      {renderTime(openingDigits)}
      <span>-</span>
      {renderTime(closingDigits, 1.5)}
    </div>
  );
};

export default InfoTag;
