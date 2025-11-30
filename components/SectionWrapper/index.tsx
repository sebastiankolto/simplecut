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
    <div style={style} className="flex bg-[#000E0F] relative w-full max-w-full justify-center">
      <div
        className={cln(
          'w-full h-full max-w-[1920px] relative',
          classNames,
          isHorizontalPadding ? 'px-10 py-20' : 'py-20 px-0',
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
