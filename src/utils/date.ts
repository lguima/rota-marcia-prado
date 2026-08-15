import localization from '@config/localization.mjs'

export function formatDateLong(date: Date): string {
  const dateTimeFormatOptionsLong: Intl.DateTimeFormatOptions = {
    year: localization.date.year as Intl.DateTimeFormatOptions['year'],
    month: localization.date.month as Intl.DateTimeFormatOptions['month'],
    day: localization.date.day as Intl.DateTimeFormatOptions['day'],
  }

  return new Intl.DateTimeFormat(localization.locale, dateTimeFormatOptionsLong).format(date)
}

export function formatDateShort(date: Date): string {
  const dateTimeFormatOptionsShort: Intl.DateTimeFormatOptions = {
    dateStyle: "short",
  }

  return new Intl.DateTimeFormat(localization.locale, dateTimeFormatOptionsShort).format(date)
}
