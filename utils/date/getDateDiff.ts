export const getDateDiff = (startDate: Date, endDate: Date) => {
  const SECOND_TO_MS = 1000;
  const MINUTE_TO_MS = 1000 * 60;
  const HOUR_TO_MS = 1000 * 60 * 60;
  const DAY_TO_MS = 1000 * 60 * 60 * 24;
  const endTime = endDate.getTime();
  const startTime = startDate.getTime();
  const distance = endTime - startTime;

  if (distance <= 0) {
    return {
      days: 0,
      hours: 0,
      minutes: 0,
      seconds: 0,
    };
  }

  return {
    days: Math.floor(distance / DAY_TO_MS),
    hours: Math.floor((distance % DAY_TO_MS) / HOUR_TO_MS),
    minutes: Math.floor((distance % HOUR_TO_MS) / MINUTE_TO_MS),
    seconds: Math.floor((distance % MINUTE_TO_MS) / SECOND_TO_MS),
  };
};
