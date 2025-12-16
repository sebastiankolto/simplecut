import React from "react";
import { HeaderNav } from "../index";
import { LangOptions, PageProps } from "../../types/interfaces";
import {
  BarbersSection,
  FooterSection,
  HeroSection,
  IntroAnimation,
  OurStorySection,
  ReviewSection,
  ServicesSection,
} from "../../sections";

type Props = {
  params: {
    lang: LangOptions;
  };
};

export default async function LandingPageContent({ params }: Props) {
  const { lang } = params; // <- no await here
  const res = await fetch(
    `http://localhost:1337/api/landing-page?locale=${lang ?? "hu"}&populate=all`,
  );
  const data = await res.json();

  // TODO: Once data is finished in type, pass down the whole data instead of single parts
  //  TODO: Loading screen, when changing language, weird reload in nav texts
  //   TODO: Only render the sections which have data for it
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
      <ReviewSection
        reviews={data.data.googleReviews}
        reviewTitle={data.data.reviewSectionTitle}
        reviewSubtitle={data.data.reviewSectionSubtitle}
        reviewImages={data.data.reviewImages}
      />
      <ServicesSection
        title={data.data.servicesTitle}
        paragraph={data.data.servicesParagraph}
        services={data.data.services}
        callToAction={data.data.callToAction}
      />
      <BarbersSection
        title={data.data.barberSectionTitle}
        barbers={data.data.barbers}
      />
      <OurStorySection
        ourStoryTitle={data.data.ourStoryTitle}
        ourStoryParagraph={data.data.ourStoryParagraph}
        ourStoryImages={data.data.ourStoryImages}
      />
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
