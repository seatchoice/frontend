type _Notification = {
  id: string;
  type: "LIKE" | "COMMENT";
  targetId: number;
  targetMember: string;
  alarmMessage: string;
  checkAlarm: boolean;
  createdAt: string;
};
