import ChatBox from './ChatBox';

type ChatPanelProps = {
  chats: string[];
};

export default function ChatPanel({ chats }: ChatPanelProps) {
  return (
    <section className="grow p-2">
      <div className="overflow-y-hidden border h-full rounded-md p-2 dark:border-slate-900 text-white scroll-auto">
        {chats.map((chat: string, idx: number) => (
          <ChatBox key={idx} chat={chat} nickname={'NICKNAME'} />
        ))}
      </div>
    </section>
  );
}
