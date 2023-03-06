import { Text, Button } from "@/components";
import { useReadAllMutation } from "../../hooks/query";

export function NotificationHeader() {
  const { mutate: readAllNotification } = useReadAllMutation();

  return (
    <header className="flex items-center gap-2 py-3">
      <Text as="h3">알림 목록</Text>
      <Button
        onClick={() => readAllNotification()}
        className="font-semibold bg-transparent hover:bg-light-fg dark:bg-transparent dark:hover:bg-dark-fg dark:text-primary-500"
      >
        전체 읽기
      </Button>
    </header>
  );
}
