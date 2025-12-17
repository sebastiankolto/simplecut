"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useResponsive } from "../../utils/useResponsive";
import { QuickLink, SectionWrapper } from "../../components";
import {
  BuiltBy,
  CompanyInfoPair,
  OpeningHours,
  QuickLinkPair,
} from "../../types/interfaces";

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
  const { aboveXl } = useResponsive();
  const [hydrated, setHydrated] = useState(false);
  useEffect(() => {
    setHydrated(true);
  }, []);
  const isLargeScreen = hydrated && aboveXl;

  const dayClosed = openingHours.dayClosed.split("/")?.[0];
  const dayClosedText = openingHours.dayClosed.split("/")?.[1];

  return (
    <SectionWrapper
      isFooter={true}
      classNames="px-5 sm:px-10"
      isHorizontalPadding={isLargeScreen}
      style={{ borderTop: "1px solid #1A1A1A" }}
    >
      <footer className="flex flex-col">
        <div className="w-full flex flex-col items-center gap-y-14 lg:flex-row justify-between">
          {/*LOGO*/}
          <div className="flex items-center flex-1">
            <Image
              width={170}
              height={100}
              className="w-[150px] sm:w-[170px]"
              src={"./images/simple-cut-logo.svg"}
              alt={"SimpleCut logo"}
            />
          </div>
          {/*logo*/}
          {/*COMPANY INFO*/}
          <div className="flex flex-1 flex-col items-center">
            <h4 className="text-[14px] font-bold text-[#505050]">
              {companyInfoTitle}
            </h4>
            <div className="flex gap-x-6 text-[14px] mt-6">
              <div className="flex flex-col">
                {companyInfo.map((item) => {
                  return (
                    <div key={item.id} className="flex gap-x-6">
                      <span className="w-full text-end text-[#505050]">
                        {item.name}
                      </span>
                      <span className="w-full text-white">{item.value}</span>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
          {/*company info built by*/}
          {/*OPENING HOURS QUICK LINKS*/}
          <div className="w-full lg:w-fit flex flex-1 flex-col items-center lg:items-end">
            <div className="flex w-full lg:w-fit flex-col items-center">
              <h4 className="text-[14px] font-bold text-[#505050]">
                {openingHoursTitle}
              </h4>
              <div className="w-full lg:w-fit flex gap-x-6 text-[14px] mt-6">
                <div className="w-full lg:w-fit text-[#505050] gap-y-[6px] text-end">
                  <p className="whitespace-nowrap">
                    {openingHours.openingDay} - {openingHours.closingDay}
                  </p>
                  <p>{dayClosed}</p>
                </div>
                <div className="w-full lg:w-fit text-white gap-y-[6px]">
                  <p>
                    {openingHours.openTime.slice(0, 5)} -{" "}
                    {openingHours.closeTime.slice(0, 5)}
                  </p>
                  <p>{dayClosedText}</p>
                </div>
              </div>
              <div className="flex mt-4 gap-x-4">
                {quickLinks.map((link) => {
                  return (
                    <QuickLink
                      imageUrl={link.icon}
                      url={link.url}
                      key={link.id}
                      alt={"quicklink"}
                    />
                  );
                })}
              </div>
            </div>
          </div>
          {/*  opening hours quick links*/}
        </div>
        {/*BUILT BY*/}
        <div className="flex flex-col items-center mt-16 gap-y-2">
          <div className="flex flex-row gap-x-2 items-end">
            <p className="font-bold text-[#505050] text-[14px]">
              {builtBy?.builtBy}
            </p>
            <p className="font-bold text-white text-[14px]">{builtBy?.name}</p>
          </div>
          <div className="flex gap-x-4 items-center justify-center">
            {builtBy.linkedinUrl && (
              <QuickLink
                imagePath={"./images/linkedin.svg"}
                url={builtBy.linkedinUrl}
                alt={"LinkedIn icon"}
                size={{ width: 28, height: 28 }}
              />
            )}
            {builtBy.behanceUrl && (
              <QuickLink
                imagePath={"./images/behance.svg"}
                url={builtBy.behanceUrl}
                alt={"Behance icon"}
                style={{ paddingTop: 4 }}
              />
            )}
            {builtBy.websiteUrl && (
              <QuickLink
                imageUrl={builtBy.logo}
                url={builtBy.websiteUrl}
                alt={builtBy.name ? builtBy.name : "Website logo"}
              />
            )}
          </div>
        </div>
      </footer>
    </SectionWrapper>
  );
};

export default FooterSection;
