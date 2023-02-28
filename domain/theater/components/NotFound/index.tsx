import Link from "next/link";
import { Button, Icon, Text } from "@/components";

export function NotFoundTheater() {
  return (
    <section>
      <Button as="icon" className="mx-auto">
        <Icon as="logo" />
      </Button>
      <Text as="h4" className="py-5">
        등록되지 않은 공연장입니다.
      </Text>
      <Link
        href="/"
        className="inline-block p-3 px-6 rounded-xl bg-primary-200 dark:bg-primary-800"
      >
        다른 공연장 검색하기
      </Link>
    </section>
  );
}
