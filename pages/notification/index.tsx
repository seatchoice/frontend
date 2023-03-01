import { SSRSuspense, MainHeader } from "@/components";
import {
  NotificationHeader,
  NotificationList,
} from "@/domain/notification/components";

export default function Notification() {
  return (
    <>
      <MainHeader />
      <NotificationHeader />
      <SSRSuspense fallback={<div>알림 조회 중..</div>}>
        <NotificationList />
      </SSRSuspense>
    </>
  );
}
