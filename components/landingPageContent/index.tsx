import { Locale } from '../../i18n-config';

export default async function LandingPageContent(props: { params: Promise<{ lang: Locale }> }) {
  const { lang } = await props.params;
  const res = await fetch(
    `http://localhost:1337/api/landing-page?locale=${lang ? lang : 'hu'}&populate=*`,
  );
  const data = await res.json();

  return (
    <div className="font-sans grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-20 gap-16 sm:p-20">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start" />
    </div>
  );
}
