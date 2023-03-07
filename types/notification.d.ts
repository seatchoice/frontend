type _Notification = {
  id: number;
  type: "LIKE" | "COMMENT";
  targetReviewId: number;
  targetMember: string;
  alarmMessage: string;
  checkAlarm: boolean;
  createdAt: string;
};
