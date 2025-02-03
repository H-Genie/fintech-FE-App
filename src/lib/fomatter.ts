const DEFAULT_LOCALE = 'ko';

export const convertCurrencyFormat = (amount: number, locale?: string) => {
  return amount.toLocaleString(locale ?? DEFAULT_LOCALE);
};

export const converDateFormat = (date: string, locale?: string) => {
  return new Date(date).toLocaleDateString(locale ?? DEFAULT_LOCALE);
};
