import { HeaderNav } from '../index';
import { LangOptions } from '../../types/interfaces';
import { HeroSection, IntroAnimation } from '../../sections';

export default async function LandingPageContent(props: {
  params: Promise<{ lang: LangOptions }>;
}) {
  const { lang } = await props.params;
  const res = await fetch(
    `http://localhost:1337/api/landing-page?locale=${lang ? lang : 'hu'}&populate=*`,
  );
  const data = await res.json();

  // TODO: Once data is finished in type, pass down the whole data instead of single parts
  //  TODO: Loading screen, when changing language, weird reload in nav texts
  return (
    <div className="w-screen max-w-full flex flex-col items-center justify-start overflow-hidden">
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
      />
      <div className="flex max-w-full h-[2000px] border-red" />
    </div>
  );
}
