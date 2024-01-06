import { format } from 'date-fns';

export const getCurrentFormattedDate = (date: Date = new Date(), formatString: string = 'MMddyy'): string => {
  return format(date, formatString);
};

export const getFormattedDateForQuery = (year: number, month: number, day: number): string => {
    // Ensure month and day are two digits
    const formattedMonth = month.toString().padStart(2, '0');
    const formattedDay = day.toString().padStart(2, '0');
  
    return `${year}${formattedMonth}${formattedDay}`;
  };