// src/app/[lang]/page.tsx
import LandingPageContent from "../../components/LandingPageContent";
import { LangOptions } from "@/types/interfaces";

type HomePageProps = {
  params: {
    lang: LangOptions;
  };
};

export default async function Home({ params }: HomePageProps) {
  const { lang } = await params;

  const res = await fetch(
    `${process.env.NEXT_PUBLIC_STRAPI_URL}/api/landing-page?locale=${lang ?? "hu"}&populate=all`,
    {
      next: { revalidate: 60, tags: [`landing-page-${lang}`] },
    },
  );

  if (!res.ok) {
    throw new Error("Failed to fetch landing page");
  }

  const data = await res.json();

  return <LandingPageContent data={data} lang={lang} />;
}
