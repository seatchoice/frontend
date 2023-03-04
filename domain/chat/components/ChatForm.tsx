type ChatFormProps = {
  handleMessage: (event: React.FormEvent<HTMLFormElement>) => void;
};
export default function ChatForm({ handleMessage }: ChatFormProps) {
  return (
    <section className="p-4 bottom-0 w-full sticky">
      <form onSubmit={handleMessage} className="relative">
        <input
          type="text"
          className="dark:bg-slate-800 w-10/12 p-1 rounded"
          name="message"
        />
        <button type="submit" disabled={false} className="absolute right-0 w-2/12 p-1">
          보내기
        </button>
      </form>
    </section>
  );
}
