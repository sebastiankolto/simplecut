export enum LangOptions {
  en = 'en',
  hu = 'hu',
}

export interface NavItem {
  id: number;
  label: string;
  sectionId: string;
}

export interface OpeningHours {
  days: string;
  openTime: string;
  closeTime: string;
  id: number;
}
