import { ChatBoxProps } from '../type';

export default function ChatBox({ chat, nickname }: ChatBoxProps) {
  return (
    <div
      className="flex gap-1 mb-2 py-1 px-2 w-fit break-all
    bg-primary-200 text-primary-900 
    dark:bg-primary-900  dark:text-primary-200 rounded-lg ">
      <label htmlFor="nickname" className="whitespace-nowrap">
        {nickname}:
      </label>
      <p className="mr-1">{chat}</p>
    </div>
  );
}
