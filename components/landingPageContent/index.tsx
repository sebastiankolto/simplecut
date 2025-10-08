import { HeaderNav } from '../index';
import { LangOptions } from '../../types/interfaces';

export default async function LandingPageContent(props: {
  params: Promise<{ lang: LangOptions }>;
}) {
  const { lang } = await props.params;
  const res = await fetch(
    `http://localhost:1337/api/landing-page?locale=${lang ? lang : 'hu'}&populate=*`,
  );
  const data = await res.json();

  return (
    <div className="w-screen max-w-full flex flex-col items-center justify-center">
      <HeaderNav
        navigation={data.data.navigation}
        openingHours={data.data.openingHours}
        lang={lang}
      />
    </div>
  );
}
