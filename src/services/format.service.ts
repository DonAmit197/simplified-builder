import dayjs, {Dayjs} from 'dayjs';

export function formatDate(dateString: string): string {
  const date = dayjs(dateString);
  return date.format('D MMM YYYY hh:mma');
}

export function formatTimeOnly(date: Dayjs): string {
  return date.format('ha');
}

export function formatMonthOnly(date: Dayjs): string {
  return date.format('MMM');
}
