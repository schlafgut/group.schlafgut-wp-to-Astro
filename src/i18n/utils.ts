export const languages = {
  de: 'Deutsch',
  en: 'English',
  nl: 'Nederlands',
} as const;

export type Lang = keyof typeof languages;

export const defaultLang: Lang = 'de';

export function getLangFromUrl(url: URL): Lang {
  const [, lang] = url.pathname.split('/');
  if (lang in languages) return lang as Lang;
  return defaultLang;
}

export function getLocalizedUrl(path: string, lang: Lang): string {
  const cleanPath = path.startsWith('/') ? path.slice(1) : path;
  if (lang === defaultLang) {
    return `/${cleanPath}`;
  }
  return `/${lang}/${cleanPath}`;
}

export function getHreflangs(currentPath: string, siteUrl?: URL): { lang: Lang; href: string }[] {
  const cleanPath = currentPath
    .replace(/^\/(en|nl)\//, '/')
    .replace(/^\//, '');

  const baseUrl = siteUrl ? siteUrl.origin : '';

  return Object.keys(languages).map((lang) => ({
    lang: lang as Lang,
    href: baseUrl + getLocalizedUrl(cleanPath, lang as Lang),
  }));
}

export function getLangHtmlAttr(lang: Lang): string {
  const langMap: Record<Lang, string> = {
    de: 'de-DE',
    en: 'en',
    nl: 'nl',
  };
  return langMap[lang];
}
