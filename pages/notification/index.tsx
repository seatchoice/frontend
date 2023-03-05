import { SSRSuspense, MainHeader, Loading } from "@/components";
import { Container } from "@/components";
import {
  NotificationHeader,
  NotificationList,
} from "@/domain/notification/components";

export default function Notification() {
  return (
    <>
      <MainHeader />
      <Container>
        <NotificationHeader />
        <SSRSuspense fallback={<Loading content="알림을 조회하는 중입니다" />}>
          <NotificationList />
        </SSRSuspense>
      </Container>
    </>
  );
}
