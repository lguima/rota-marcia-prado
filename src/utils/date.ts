import localization from '@config/localization.mjs'

export function formatDate(date: Date): string {
  return new Intl.DateTimeFormat(localization.locale, {
    year: localization.date.year as Intl.DateTimeFormatOptions['year'],
    month: localization.date.month as Intl.DateTimeFormatOptions['month'],
    day: localization.date.day as Intl.DateTimeFormatOptions['day'],
  }).format(date)
}
