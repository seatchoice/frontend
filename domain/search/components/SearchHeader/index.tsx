import { Text } from "@/components";

export default function SearchHeader() {
  return (
    <header className="flex flex-col justify-center items-center py-4">
      <Text className="text-lg">공연 볼 때</Text>
      <Text as="h1" className="text-primary-800 dark:text-primary-300">
        자리어때
      </Text>
    </header>
  );
}
