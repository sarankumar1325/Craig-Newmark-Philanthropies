export interface NavItem {
  label: string;
  href: string;
}

export interface NewsItem {
  id: string;
  headline: string;
  date: string;
  source: string;
  category: string;
  url: string;
}

export interface FocusArea {
  id: string;
  title: string;
  description?: string;
  isTag: boolean;
  link?: string;
}

export interface SocialLink {
  platform: string;
  handle?: string;
  url: string;
}