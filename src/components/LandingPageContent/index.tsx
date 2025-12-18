import React from "react";
import { HeaderNav } from "../index";
import {
  BarbersSection,
  FooterSection,
  HeroSection,
  IntroAnimation,
  OurStorySection,
  ReviewSection,
  ServicesSection,
} from "../../sections";
import { LangOptions } from "@/types/interfaces";

type Props = {
  data: any;
  lang: LangOptions;
};

export default function LandingPageContent({ data, lang }: Props) {
  return (
    <div className="flex flex-col items-center justify-start">
      <IntroAnimation />
      <HeaderNav
        navigation={data.data.navigation}
        openingHours={data.data.openingHours}
        callToAction={data.data.callToAction}
        lang={lang}
      />
      <HeroSection
        openingHours={data.data.openingHours}
        heroTitle={data.data.heroTitle}
        heroSubTitle={data.data.heroSubTitle}
        callToAction={data.data.callToAction}
        heroImage={data.data.heroImage}
      />
      {data.data.reviewSectionTitle && (
        <ReviewSection
          reviews={data.data.googleReviews}
          reviewTitle={data.data.reviewSectionTitle}
          reviewSubtitle={data.data.reviewSectionSubtitle}
          reviewImages={data.data.reviewImages}
        />
      )}
      {data.data.servicesTitle && (
        <ServicesSection
          title={data.data.servicesTitle}
          paragraph={data.data.servicesParagraph}
          services={data.data.services}
          callToAction={data.data.callToAction}
        />
      )}
      {data.data.barberSectionTitle && (
        <BarbersSection
          title={data.data.barberSectionTitle}
          barbers={data.data.barbers}
        />
      )}
      {data.data.ourStoryTitle && (
        <OurStorySection
          ourStoryTitle={data.data.ourStoryTitle}
          ourStoryParagraph={data.data.ourStoryParagraph}
          ourStoryImages={data.data.ourStoryImages}
        />
      )}
      <FooterSection
        companyInfoTitle={data.data.companyInfoTitle}
        companyInfo={data.data.companyInfo}
        openingHoursTitle={data.data.openingHoursTitle}
        openingHours={data.data.openingHours}
        quickLinks={data.data.quickLinks}
        builtBy={data.data.builtBy}
      />
    </div>
  );
}
