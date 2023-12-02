export type LocaleStr = 'en-US' | 'es-US' | 'fr-FR' | 'ja-JP' | 'zh-CN' | 'zh-TW';

export type VariablesObject = {
  [locale in LocaleStr]?: {
    [key: string]: string;
  };
}

/**
 * These variables correspond with text in each locale JSON file.
 * eg, `"The current year is {year} and it is now {time}"`
 * See the README.md file in this directory for more information.
 */
export const variables: VariablesObject = {
  'en-US': {
    year: String(new Date().getFullYear()),
  },
};
