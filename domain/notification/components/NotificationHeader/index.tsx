import { Text, Button } from "@/components";

export function NotificationHeader() {
  return (
    <header>
      <Text as="h3">알람 목록</Text>
      <Text as="h4">전체 목록</Text>
      <Button className="w-full">전체 읽기</Button>
    </header>
  );
}
