export default function ChatForm({ handleMessage }) {
  return (
    <section className="p-4 bottom-0 w-full sticky">
      <form onSubmit={handleMessage} className="relative">
        <input
          type="text"
          className="dark:bg-slate-800 w-10/12 p-1 rounded"
          name="message"
        />
        <button type="submit" className="absolute right-0 w-2/12 p-1">
          보내기
        </button>
      </form>
    </section>
  );
}
