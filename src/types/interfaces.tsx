export enum LangOptions {
  en = "en",
  hu = "hu",
}

export type PageProps = {
  lang: LangOptions;
};

export interface NavItem {
  id: number;
  label: string;
  sectionId: string;
}

export interface OpeningHours {
  openingDay: string;
  closingDay: string;
  openTime: string;
  closeTime: string;
  id: number;
  dayClosed: string;
}

export interface CallToAction {
  callToActionText: string;
  callToActionUrl: string;
  id: number;
}

export interface Review {
  id: number;
  author_name: string;
  rating: number;
  text: string;
  profile_photo_url: string;
}

export interface ReviewImageType {
  image1: string;
  image2: string;
}

export enum ImageSize {
  large = "large",
  medium = "medium",
  small = "small",
}

export interface Service {
  image: ImageInterface;
  title: string;
  priceText: string;
  price: string;
}

export interface ImageInterface {
  url: string;
  alternativeText?: string;
  name: string;
  formats: ImageFormats;
}

export interface ImageFormats {
  thumbnail?: ImageSizeDetail;
  small?: ImageSizeDetail;
  medium?: ImageSizeDetail;
  large?: ImageSizeDetail;
}

export interface ImageSizeDetail {
  url: string;
}

export interface Barber {
  image: ImageInterface;
  name: string;
  instaUrl?: string;
  bookingUrl?: string;
}

export interface CompanyInfoPair {
  id: number;
  name: string;
  value: string;
}

export interface QuickLinkPair {
  id: number;
  icon: ImageInterface;
  url: string;
}

export interface BuiltBy {
  builtBy: string;
  name?: string;
  websiteUrl?: string;
  logo?: ImageInterface;
  linkedinUrl?: string;
  behanceUrl?: string;
  emailAddress?: string;
}
