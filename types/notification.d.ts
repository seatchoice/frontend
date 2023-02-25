type _Notification = {
  id: string;
  type: "LIKE" | "COMMENT";
  targetId: number;
  alarmMessage: string;
  checkAlarm: boolean;
  madeBy: number;
  createdAt: string;
};
