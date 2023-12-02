type NavItem = {
  text: string,
  href: string,
}

type NavItemWithChildren = {
  children?: NavItem[],
} & NavItem;

type socialItem = {
  type: string,
  title: string,
  href: string,
}

export type GlobalLocale = {
  nav: NavItemWithChildren[],
  siteMap: NavItem[],
  // social: socialItem[],
  photoCredits: NavItem[],
  copyright: string,
}

export type HomeLocale = {
  title: string,
  subtitle: string,
  main: string,
};
