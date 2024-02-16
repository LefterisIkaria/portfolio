export function removeTrailingSlash(pathname: string) {
  const matchTrailingSlash = /\w+\/$/;
  if (matchTrailingSlash.test(pathname)) return pathname.slice(0, -1);
  return pathname;
}

export function formatDate(
  date: Date,
  locale: string = "en-US",
  options: Intl.DateTimeFormatOptions = {}
): string {
  return new Intl.DateTimeFormat(locale, {
    ...options,
    // Example options:
    year: "numeric",
    month: "long",
    day: "2-digit",
    // Add more options as needed
  }).format(date);
}
