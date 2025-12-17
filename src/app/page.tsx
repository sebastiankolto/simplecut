// src/app/[lang]/page.tsx
import LandingPageContent from "./../components/LandingPageContent";
import { LangOptions } from "@/types/interfaces";

type HomePageProps = {
  params: {
    lang: LangOptions;
  };
};

export default async function Home({ params }: HomePageProps) {
  return <LandingPageContent params={params} />;
}
