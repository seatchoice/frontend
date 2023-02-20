import ChatBox from './ChatBox';

export default function ChatPanel({ chats }) {
  return (
    <section className="grow p-2">
      <div className="overflow-y-hidden border h-full rounded-md p-2 dark:border-slate-900 text-white scroll-auto">
        {chats.map((chat, idx) => (
          <ChatBox key={idx} chat={chat} />
        ))}
      </div>
    </section>
  );
}
