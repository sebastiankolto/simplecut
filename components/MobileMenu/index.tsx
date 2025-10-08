'use client';
import React from 'react';
import { motion, Variants, stagger } from 'motion/react';
import { LangOptions, NavItem } from '../../types/interfaces';
import { gabarito } from '../../utils/fontsImporter';
import { cln } from '../../utils/classnames';

interface Props {
  navigation: NavItem[];
  lang: LangOptions;
  onClick: () => void;
  isOpen: boolean;
}
const MobileMenu: React.FC<Props> = ({ navigation, lang, onClick, isOpen }) => {
  const navVariants = {
    open: {
      height: '100vh',
      width: '100vw',
      opacity: 1,
      transition: { staggerChildren: 0.1, when: 'beforeChildren', duration: 0.3 },
    },
    closed: {
      height: 0,
      width: 0,
      opacity: 0,
      transition: {
        staggerChildren: 0.1,
        staggerDirection: -1,
        when: 'afterChildren',
        duration: 0.3,
      },
    },
  };

  const itemVariants = {
    open: {
      y: 0,
      opacity: 1,
      transition: { stiffness: 1000, velocity: -100, duration: 0.2 },
    },
    closed: {
      y: 50,
      opacity: 0,
      transition: { stiffness: 1000, duration: 0.2 },
    },
  };

  return (
    <motion.nav
      initial={'closed'}
      animate={'open'}
      exit={'closed'}
      variants={navVariants}
      className={cln(
        'w-screen flex flex-col items-center justify-end md:justify-center bg-black ',
        'absolute top-0 right-0 z-0 overflow-hidden',
        'pb-16 md:pb-0 gap-y-4',
      )}
    >
      {navigation.map((navItem) => {
        return (
          <motion.a
            variants={itemVariants}
            onClick={onClick}
            key={navItem.sectionId}
            href={`${lang === LangOptions.en ? LangOptions.en : ''}#${navItem.sectionId}`}
            className={cln(gabarito.className, 'font-semibold text-[32px] text-white p-2')}
          >
            {navItem.label}
          </motion.a>
        );
      })}
    </motion.nav>
  );
};

export default MobileMenu;
