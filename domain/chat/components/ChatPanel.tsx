import ChatBox from './ChatBox';

type info = {
  nickname: string;
  message: string;
};

type ChatPanelProps = {
  chats: info[];
};

export default function ChatPanel({ chats }: ChatPanelProps) {
  return (
    <section className="grow p-2">
      <div className="overflow-y-hidden border h-full rounded-md p-2 dark:border-slate-900 text-white scroll-auto">
        {chats.map((chat: info, idx: number) => (
          <ChatBox key={idx} chat={chat.message} nickname={chat.nickname} />
        ))}
      </div>
    </section>
  );
}
