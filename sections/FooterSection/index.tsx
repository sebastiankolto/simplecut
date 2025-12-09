'use client';

import React, { useEffect, useState } from 'react';
import Image from 'next/image';
import { useResponsive } from '../../utils/useResponsive';
import { SectionWrapper } from '../../components';
import {
  BuiltBy,
  CompanyInfoPair,
  LangOptions,
  OpeningHours,
  QuickLinkPair,
} from '../../types/interfaces';

interface Props {
  companyInfoTitle: string;
  companyInfo: CompanyInfoPair[];
  openingHoursTitle: string;
  openingHours: OpeningHours;
  quickLinks: QuickLinkPair[];
  builtBy: BuiltBy;
}

const FooterSection: React.FC<Props> = ({
  companyInfoTitle,
  companyInfo,
  openingHoursTitle,
  openingHours,
  quickLinks,
  builtBy,
}) => {
  const { aboveXl, aboveLg } = useResponsive();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const isLargeScreen = hydrated && aboveXl;

  const dayClosed = openingHours.dayClosed.split('/')[0];
  const dayClosedText = openingHours.dayClosed.split('/')?.[1];

  return (
    <SectionWrapper
      isFooter={true}
      classNames="px-5 sm:px-10"
      isHorizontalPadding={isLargeScreen}
      style={{ borderTop: '1px solid #1A1A1A' }}
    >
      <footer className="flex flex-col">
        <div className="w-full flex flex-col items-center gap-y-14 lg:flex-row justify-between">
          {/*LOGO*/}
          <div className="flex items-center">
            <Image
              width={170}
              height={100}
              className="w-[150px] sm:w-[170px]"
              src={'./images/simple-cut-logo.svg'}
              alt={'SimpleCut logo'}
            />
          </div>
          {/*logo*/}
          {/*COMPANY INFO*/}
          <div className="flex flex-col items-center">
            <h4 className="text-[14px] font-bold text-[#505050]">{companyInfoTitle}</h4>
            <div className="flex gap-x-6 text-[14px] mt-6">
              {/*<ul className="text-[#505050] gap-y-[6px] text-end">*/}
              {/*  {companyInfo.map((item) => {*/}
              {/*    return <li key={item.id}>{item.name}</li>;*/}
              {/*  })}*/}
              {/*</ul>*/}
              {/*<ul className="text-white gap-y-[6px]">*/}
              {/*  {companyInfo.map((item) => {*/}
              {/*    return <li key={item.id}>{item.value}</li>;*/}
              {/*  })}*/}
              {/*</ul>*/}
              <div className="flex flex-col">
                {companyInfo.map((item) => {
                  return (
                    <div key={item.id} className="flex gap-x-6">
                      <span className="w-[50%] lg:w-full text-end text-[#505050]">{item.name}</span>
                      <span className="w-[50%] lg:w-full">{item.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/*company info built by*/}
          {/*OPENING HOURS QUICK LINKS*/}
          <div className="flex flex-col items-center">
            <h4 className="text-[14px] font-bold text-[#505050]">{openingHoursTitle}</h4>
            <div className="flex gap-x-6 text-[14px] mt-6">
              <div className="text-[#505050] gap-y-[6px] text-end">
                <p>
                  {openingHours.openingDay} - {openingHours.closingDay}
                </p>
                <p>{dayClosed}</p>
              </div>
              <div className="text-white gap-y-[6px]">
                <p>
                  {openingHours.openTime.slice(0, 5)} - {openingHours.closeTime.slice(0, 5)}
                </p>
                <p>{dayClosedText}</p>
              </div>
            </div>
            <div className="flex mt-4 gap-x-4">
              {quickLinks.map((link) => {
                return (
                  <a key={link.id} href={link.url} className="p-2">
                    <Image
                      width={35}
                      height={35}
                      src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${link.icon.url}`}
                      alt={'Quick link icon'}
                    />
                  </a>
                );
              })}
            </div>
          </div>
          {/*  opening hours quick links*/}
        </div>
        <div className="flex flex-col items-center mt-16 gap-y-2">
          <div className="flex flex-row gap-x-2 items-end">
            <p className="font-bold text-[#505050] text-[14px]">{builtBy?.builtBy}</p>
            <p className="font-bold text-white text-[14px]">{builtBy?.name}</p>
          </div>
          <div className="flex gap-x-2 items-end justify-center">
            {builtBy.linkedinUrl && (
              <a href={builtBy.linkedinUrl} className="p-2">
                <Image width={25} height={23} src={'./images/linkedin.svg'} alt={'LinkedIn logo'} />
              </a>
            )}
            {builtBy.behanceUrl && (
              <a href={builtBy.behanceUrl} className="p-2">
                <Image width={32} height={20} src={'./images/behance.svg'} alt={'LinkedIn logo'} />
              </a>
            )}
            {builtBy.websiteUrl && (
              <a href={builtBy.websiteUrl} className="p-2">
                <Image
                  width={60}
                  height={30}
                  src={`${process.env.NEXT_PUBLIC_STRAPI_URL}${builtBy.logo.url}`}
                  alt={'Website logo'}
                />
              </a>
            )}
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};

export default FooterSection;
