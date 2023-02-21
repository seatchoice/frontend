export default function ChatBox({ chat }) {
  return (
    <div className="flex gap-1 mb-2 py-1 px-2 w-fit break-all dark:bg-slate-700 rounded-lg ">
      <label htmlFor="nickname" className="whitespace-nowrap">
        Nickname:
      </label>
      <p className="mr-1">{chat}</p>
    </div>
  );
}
