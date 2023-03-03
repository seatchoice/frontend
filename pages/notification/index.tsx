import { SSRSuspense, MainHeader, Loading } from "@/components";
import {
  NotificationHeader,
  NotificationList,
} from "@/domain/notification/components";

export default function Notification() {
  return (
    <>
      <MainHeader />
      <NotificationHeader />
      <SSRSuspense fallback={<Loading content="알림을 조회하는 중입니다" />}>
        <NotificationList />
      </SSRSuspense>
    </>
  );
}
