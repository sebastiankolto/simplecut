import React from "react";
import { cln } from "../../utils/classnames";

interface Props {
  children?: React.ReactNode;
  classNames?: string;
  isHorizontalPadding?: boolean;
  style?: React.CSSProperties;
  isFooter?: boolean;
  id?: string;
  onMouseMove?: React.MouseEventHandler<HTMLDivElement>;
  ref?: React.Ref<HTMLDivElement>;
}

const SectionWrapper: React.FC<Props> = ({
  children,
  classNames,
  isHorizontalPadding = true,
  style,
  isFooter,
  id,
  onMouseMove,
  ref,
}) => {
  return (
    <div
      style={style}
      className={`flex ${isFooter ? "bg-[#000505]" : "bg-[#000E0F]"} relative w-full max-w-full justify-center`}
      id={id}
      onMouseMove={onMouseMove}
      ref={ref}
    >
      <div
        className={cln(
          "w-full h-full max-w-[1920px] relative",
          isHorizontalPadding
            ? `px-10 ${isFooter ? "py-10" : "py-30"}`
            : `${isFooter ? "py-10" : "py-20 sm:py-30"} px-0`,
          classNames,
        )}
      >
        {children}
      </div>
    </div>
  );
};

export default SectionWrapper;
