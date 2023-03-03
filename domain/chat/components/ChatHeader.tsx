import { Button } from '@/components';

type ChatHeaderProps = {
  theater: string;
  conn: () => void;
  disconn: () => void;
};
export default function ChatHeader({ theater, conn, disconn }: ChatHeaderProps) {
  const time = new Date();

  return (
    <header className="p-4 sticky top-0 dark:bg-slate-800 rounded-b-lg">
      <h1>{theater}</h1>
      <div className="flex flex-row gap-2">
        <Button onClick={conn} children={'대화시작하기'} />
        <Button onClick={disconn} children={'나가기'} />
      </div>
      <span>{time.toLocaleString()}</span>
    </header>
  );
}
