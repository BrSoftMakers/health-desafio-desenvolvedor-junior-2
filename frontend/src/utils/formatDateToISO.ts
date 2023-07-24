export function formatDateToISO(dateStr: string): string {
  const [day, month, year] = dateStr.split("/").map(Number);

  const date = new Date(year, month - 1, day);

  return date.toISOString();
}
