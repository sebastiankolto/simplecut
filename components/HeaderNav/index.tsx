"use client";
import React, { useRef, useState } from "react";
import Image from "next/image";
import {
  AnimatePresence,
  motion,
  useMotionValueEvent,
  useScroll,
} from "motion/react";
import { cln } from "../../utils/classnames";
import { gabarito } from "../../utils/fontsImporter";
import {
  CtaButton,
  HamburgerButton,
  LanguageToggle,
  MobileMenu,
} from "../index";
import {
  CallToAction,
  LangOptions,
  NavItem,
  OpeningHours,
} from "../../types/interfaces";
import { useResponsive } from "../../utils/useResponsive";

interface Props {
  navigation: NavItem[];
  lang: LangOptions;
  openingHours: OpeningHours;
  callToAction: CallToAction;
}

const HeaderNav: React.FC<Props> = ({
  navigation,
  lang,
  openingHours,
  callToAction,
}) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const headerRef = useRef(null);

  const [isScrolled, setIsScrolled] = useState(false);
  const [isScrollingDown, setIsScrollingDown] = useState(false);
  const [currentScroll, setCurrentScroll] = useState(0);

  const [reachingTop, setReachingTop] = useState(0);

  const { belowSm, aboveLg } = useResponsive();

  const { scrollY } = useScroll();

  useMotionValueEvent(scrollY, "change", (current) => {
    const diff = current - scrollY.getPrevious();
    setIsScrollingDown(diff > 0);
    setIsScrolled(current > 50);
    setReachingTop(window.innerHeight - 80);
    setCurrentScroll(current);
  });

  function openMenu() {
    setIsOpen((prevState) => !prevState);
  }

  const showToggle = aboveLg;
  const showBoth = aboveLg && currentScroll > reachingTop;
  const showCtaBig = !aboveLg && !belowSm && currentScroll > reachingTop;
  const showCtaSmall = !isOpen && belowSm && currentScroll > reachingTop;

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <motion.div
      className={cln(
        "w-full flex flec-col justify-center fixed left-0 z-99",
        isScrolled ? "pt-0" : "pt-0 sm:pt-10",
        !isScrollingDown &&
          isScrolled &&
          "backdrop-blur-[12px] bg-[#000E0F]/20",
      )}
      transition={{
        duration: 0.5,
        ease: "easeInOut",
      }}
    >
      <motion.header
        initial={false}
        animate={{
          y: isScrollingDown && isScrolled ? "-200%" : 0,
        }}
        transition={{ duration: 0.5, ease: "easeInOut" }}
        className={cln(
          "py-4 h-19 sm:h-21 w-full max-w-[1400px] flex justify-center",
          "z-99",
        )}
        ref={headerRef}
      >
        <div className="flex justify-between items-center w-full max-w-[1400px] px-5 sm:px-10 xl:px-20">
          <Image
            width={170}
            height={100}
            className="w-[150px] sm:w-[170px] cursor-pointer"
            src={"./images/simple-cut-logo.svg"}
            alt={"SimpleCut logo"}
            onClick={scrollToTop}
          />
          <nav className="hidden lg:flex gap-x-2 absolute left-[50%] translate-x-[-50%]">
            {navigation.map((navItem) => {
              const isHovered = hoveredItem === navItem.id;
              return (
                <motion.a
                  className={cln(
                    "flex items-center justify-center h-11 min-w-[128px] px-2 overflow-hidden relative whitespace-nowrap",
                    "bg-white/5 hover:bg-white/10 border-1 border-white/20 hover:border-white/50 backdrop-blur-md",
                    gabarito.className,
                    "text-[16px] text-white tracking-wide font-normal",
                    "duration-500 ease-in-out",
                  )}
                  href={`${lang === LangOptions.en ? LangOptions.en : ""}#${navItem.sectionId}`}
                  key={navItem.id}
                  onMouseEnter={() => setHoveredItem(navItem.id)}
                  onMouseLeave={() => setHoveredItem(null)}
                >
                  <motion.span
                    initial={false}
                    animate={{ y: isHovered ? "150%" : "0%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {navItem.label}
                  </motion.span>
                  <motion.span
                    initial={false}
                    className="absolute"
                    animate={{ y: isHovered ? "0%" : "-150%" }}
                    transition={{ duration: 0.4, ease: "easeOut" }}
                  >
                    {navItem.label}
                  </motion.span>
                </motion.a>
              );
            })}
          </nav>
          <div className="flex items-center gap-x-4 sm:gap-x-4">
            <AnimatePresence>
              {showBoth ? (
                <>
                  <CtaButton isCollapsed={true} callToAction={callToAction} />
                  <LanguageToggle />
                </>
              ) : showToggle ? (
                <LanguageToggle />
              ) : showCtaBig && !isOpen ? (
                <motion.div
                  key="toggle"
                  initial={{ opacity: 0, x: -50 }}
                  animate={{ opacity: 1, x: 0 }}
                  exit={{ opacity: 0, x: -50 }}
                  transition={{ duration: 0.3 }}
                >
                  <CtaButton callToAction={callToAction} />
                </motion.div>
              ) : showCtaSmall ? (
                <motion.div
                  key="small-cta"
                  initial={{ opacity: 0, y: isOpen ? 500 : 0 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: isOpen ? 500 : 0 }}
                  transition={{ duration: 0.5 }}
                >
                  <CtaButton callToAction={callToAction} isCollapsed={true} />
                </motion.div>
              ) : null}
            </AnimatePresence>
            <div className="flex lg:hidden">
              <HamburgerButton isOpen={isOpen} onClick={openMenu} />
            </div>
          </div>
        </div>
      </motion.header>
      <AnimatePresence>
        {isOpen && (
          <MobileMenu
            navigation={navigation}
            lang={lang}
            onClick={openMenu}
            openingHours={openingHours}
            callToAction={callToAction}
          />
        )}
      </AnimatePresence>
    </motion.div>
  );
};

export default HeaderNav;
