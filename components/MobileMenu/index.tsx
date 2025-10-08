'use client';
import React from 'react';
import { motion } from 'motion/react';
import { call } from 'autoprefixer';
import { CallToAction, LangOptions, NavItem, OpeningHours } from '../../types/interfaces';
import { gabarito } from '../../utils/fontsImporter';
import { cln } from '../../utils/classnames';
import { CtaButton, InfoTag } from '../index';

interface Props {
  navigation: NavItem[];
  lang: LangOptions;
  onClick: () => void;
  openingHours: OpeningHours;
  callToAction: CallToAction;
}
const MobileMenu: React.FC<Props> = ({ navigation, lang, onClick, openingHours, callToAction }) => {
  const navVariants = {
    open: {
      height: '100svh',
      width: '100vw',
      opacity: 1,
      transition: { staggerChildren: 0.05, when: 'beforeChildren', duration: 0.2 },
    },
    closed: {
      height: 0,
      width: '100vw',
      opacity: 0,
      transition: {
        staggerChildren: 0.05,
        staggerDirection: -1,
        when: 'afterChildren',
        duration: 0.2,
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
      y: -25,
      opacity: 0,
      transition: { stiffness: 1000, duration: 0.2 },
    },
  };

  const infoTagVariant = {
    open: {
      y: 0,
      opacity: 1,
      transition: { stiffness: 1000, velocity: -100, duration: 0.15 },
    },
    closed: {
      y: -25,
      opacity: 0,
      transition: { stiffness: 1000, duration: 0.15, delay: 0.25 },
    },
  };

  return (
    <motion.div
      initial={'closed'}
      animate={'open'}
      exit={'closed'}
      variants={navVariants}
      className="w-screen flex flex-col items-center justify-between absolute top-0 right-0 z-0 overflow-hidden bg-black pb-16 pt-25 px-5 gap-y-4"
    >
      <motion.div initial={'closed'} animate={'open'} exit={'closed'} variants={infoTagVariant}>
        <InfoTag openingHours={openingHours} />
      </motion.div>
      <motion.nav
        className={cln('flex flex-col w-full h-full items-center justify-end sm:justify-center')}
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
        <motion.div className="mt-8 w-full flex justify-center" variants={itemVariants}>
          <CtaButton callToAction={callToAction} />
        </motion.div>
      </motion.nav>
    </motion.div>
  );
};

export default MobileMenu;
