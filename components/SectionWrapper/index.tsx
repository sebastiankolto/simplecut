import React from 'react';
import { cln } from '../../utils/classnames';

interface Props {
  children: React.ReactNode;
  classNames?: string;
  isHorizontalPadding?: boolean;
  style?: React.CSSProperties;
}

const SectionWrapper: React.FC<Props> = ({
  children,
  classNames,
  isHorizontalPadding = true,
  style,
}) => {
  return (
    <div style={style} className="flex bg-[#001011] relative w-full justify-center">
      <div
        className={cln(
          'w-full h-full max-w-[1920px] relative',
          classNames,
          isHorizontalPadding ? 'p-10' : 'py-10 px-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
