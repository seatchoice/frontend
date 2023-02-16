import { getDateDiff } from "./getDateDiff";

export const getDateDiffTextFromNow = (date: Date) => {
  const now = new Date();
  const { days, hours, minutes, seconds } = getDateDiff(date, now);

  return `${
    days
      ? `${days}일`
      : hours
      ? `${hours}시간`
      : minutes
      ? `${minutes}분`
      : seconds
      ? `${seconds}초`
      : ""
  }`;
};
