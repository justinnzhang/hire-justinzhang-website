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

// p = product, s = SWE
declare type RoleInterest = "p" | "s";

declare type SiteOptionlist = SiteOption[];
