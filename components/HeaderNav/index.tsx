import React from 'react';
import Image from 'next/image';
import { cln } from '../../utils/classnames';
import { gabarito } from '../../utils/fontsImporter';
import { LanguageToggle } from '../index';

interface NavItem {
  id: number;
  label: string;
  sectionId: string;
}
interface Props {
  navigation: NavItem[];
  lang: string;
}

const HeaderNav: React.FC<Props> = ({ navigation, lang }) => {
  return (
    <header className="flex w-full max-w-[1400px] px-10 xl:px-20 justify-between items-center mt-12 xxl:mt-16 sticky top-8 left-0">
      <Image width={170} height={100} src={'./images/simple-cut-logo.svg'} alt={'SimpleCut logo'} />
      <nav className="flex gap-x-2 absolute left-[50%] translate-x-[-50%]">
        {navigation.map((navItem) => {
          return (
            <a
              className={cln(
                'flex items-center justify-center h-11 w-[128px]',
                'bg-white/5 hover:bg-white/10 border-1 border-white/20 hover:border-white/50 backdrop-blur-md',
                gabarito.className,
                'text-[16px] tracking-wide font-normal hover:font-bold',
                'duration-500 ease-in-out',
              )}
              href={`${lang === 'en' ? 'en' : ''}#${navItem.sectionId}`}
              key={navItem.id}
            >
              {navItem.label}
            </a>
          );
        })}
      </nav>
      <LanguageToggle />
    </header>
  );
};

export default HeaderNav;
