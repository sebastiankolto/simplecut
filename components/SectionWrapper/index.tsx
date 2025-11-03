import React from 'react';
import { cln } from '../../utils/classnames';

interface Props {
  children: React.ReactNode;
  classNames?: string;
}

const SectionWrapper: React.FC<Props> = ({ children, classNames }) => {
  return (
    <div className={cln('w-full h-full max-w-[1920px] p-20 relative', classNames)}>{children}</div>
  );
};

export default SectionWrapper;
