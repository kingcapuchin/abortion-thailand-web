import { th } from './th';
import { en } from './en';

export const dictionaries = {
  th,
  en,
};

export type Dictionary = typeof th;
export type Lang = 'th' | 'en';

export const getDictionary = (lang: Lang): Dictionary => {
  return dictionaries[lang] || dictionaries.th;
};
