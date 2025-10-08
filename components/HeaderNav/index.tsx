'use client';
import React, { useState } from 'react';
import Image from 'next/image';
import { AnimatePresence, motion } from 'motion/react';
import { cln } from '../../utils/classnames';
import { gabarito } from '../../utils/fontsImporter';
import { HamburgerButton, LanguageToggle, MobileMenu } from '../index';
import { CallToAction, LangOptions, NavItem, OpeningHours } from '../../types/interfaces';
import { useResponsive } from '../../utils/useResponsive';

interface Props {
  navigation: NavItem[];
  lang: LangOptions;
  openingHours: OpeningHours;
  callToAction: CallToAction;
}

const HeaderNav: React.FC<Props> = ({ navigation, lang, openingHours, callToAction }) => {
  const [isOpen, setIsOpen] = useState(false);
  const [hoveredItem, setHoveredItem] = useState<number | null>(null);
  const { belowSm } = useResponsive();

  function openMenu() {
    setIsOpen((prevState) => !prevState);
  }

  return (
    <div className="w-full">
      <header
        className={cln(
          'flex w-full max-w-[1400px] justify-between items-center sticky top-8 left-0 z-99',
          'px-5 sm:px-10 xl:px-20 mt-5 sm:mt-10 2xl:mt-16',
        )}
      >
        <Image
          width={170}
          height={100}
          className="w-[150px] sm:w-[170px]"
          src={'./images/simple-cut-logo.svg'}
          alt={'SimpleCut logo'}
        />
        <nav className="hidden lg:flex gap-x-2 absolute left-[50%] translate-x-[-50%]">
          {navigation.map((navItem) => {
            const isHovered = hoveredItem === navItem.id;
            return (
              <motion.a
                className={cln(
                  'flex items-center justify-center h-11 w-[128px] overflow-hidden relative',
                  'bg-white/5 hover:bg-white/10 border-1 border-white/20 hover:border-white/50 backdrop-blur-md',
                  gabarito.className,
                  'text-[16px] text-white tracking-wide font-normal',
                  'duration-500 ease-in-out',
                )}
                href={`${lang === LangOptions.en ? LangOptions.en : ''}#${navItem.sectionId}`}
                key={navItem.id}
                onMouseEnter={() => setHoveredItem(navItem.id)}
                onMouseLeave={() => setHoveredItem(null)}
              >
                <motion.span
                  animate={{ y: isHovered ? '150%' : '0%' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {navItem.label}
                </motion.span>
                <motion.span
                  className="absolute"
                  animate={{ y: isHovered ? '0%' : '-150%' }}
                  transition={{ duration: 0.2, ease: 'easeOut' }}
                >
                  {navItem.label}
                </motion.span>
              </motion.a>
            );
          })}
        </nav>
        <div className="hidden lg:flex">
          <LanguageToggle />
        </div>
        <div className="flex lg:hidden">
          <HamburgerButton isOpen={isOpen} onClick={openMenu} />
        </div>
      </header>
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
    </div>
  );
};

export default HeaderNav;
