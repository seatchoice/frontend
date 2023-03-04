import { getDateDiff } from "./getDateDiff";

const isValidDate = (date: string) => {
  const dateRegex = /\d{4}-\d{2}-\d{2}/;
  const dateWithTimeRegex = /\d{4}-\d{2}-\d{2} \d{2}:\d{2}:\d{2}/;

  return dateRegex.test(date) || dateWithTimeRegex.test(date);
};

export const getDateDiffTextFromNow = (date: string) => {
  if (!isValidDate(date)) throw new Error("날짜 형식이 올바르지 않습니다.");

  const now = new Date();
  const { days, hours, minutes, seconds } = getDateDiff(new Date(date), now);

  return `${
    days
      ? `${days}일`
      : hours
      ? `${hours}시간`
      : minutes
      ? `${minutes}분`
      : seconds
      ? `${seconds}초`
      : "지금"
  }`;
};
