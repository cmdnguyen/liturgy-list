// utils/dateFormat.ts
import { format } from 'date-fns';

export const getCurrentFormattedDate = (date: Date = new Date(), formatString: string = 'MMddyy'): string => {
  return format(date, formatString);
};

export const formatFullDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    weekday: "long",
    year: "numeric",
    month: "long",
    day: "numeric",
  });
};

export const formatShortDate = (date: Date) => {
  return date.toLocaleDateString("en-US", {
    month: "long",
    day: "numeric",
  });
};
