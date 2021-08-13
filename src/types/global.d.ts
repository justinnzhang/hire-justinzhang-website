declare interface ContentItem {
  style: string;
  text?: string;
  textEmp?: string;
  badgeText?: string;
}

declare type Content = ContentItem[];

declare interface SiteOption {
  company?: string;
  resumeLink?: string;
}

declare type SiteOptionlist = SiteOption[];
