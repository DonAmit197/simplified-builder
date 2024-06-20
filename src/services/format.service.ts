import dayjs from 'dayjs';

export function formatDate(dateString: string): string {
  const date = dayjs(dateString);
  return date.format('D MMM YYYY hh:mma');
}
