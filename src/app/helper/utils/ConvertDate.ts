export function formatDate(dateString: string): string {
  const date: Date = new Date(dateString);

  const options: Intl.DateTimeFormatOptions = {
    day: "2-digit",
    month: "long",
    year: "numeric",
  };
  const formatDate = date.toLocaleDateString("en-GB", options);

  return formatDate;
}
