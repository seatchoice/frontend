import { Text, Button } from "@/components";
import { useReadAllMutation } from "../../hooks/query";

export function NotificationHeader() {
  const { mutate: readAllNotification } = useReadAllMutation();

  return (
    <header>
      <Text as="h3">알림 목록</Text>
      <Text as="h4">전체 목록</Text>
      <Button onClick={() => readAllNotification()} className="w-full">
        전체 읽기
      </Button>
    </header>
  );
}
