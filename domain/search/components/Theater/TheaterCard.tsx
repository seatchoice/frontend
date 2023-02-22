export default function TheaterCard({ theater }) {
  const { name = '', address, id } = theater;
  return (
    <div className="ml-4">
      <h3 className="font-medium sm:text-lg">
        <a href={`/${id}`} className="hover:underline">
          {name}
        </a>
      </h3>

      <p className="text-sm text-gray-700 line-clamp-2">{address}</p>

      <div className="mt-2 sm:flex sm:items-center sm:gap-2">
        <div className="flex items-center text-gray-500">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-4 w-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="2">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M17 8h2a2 2 0 012 2v6a2 2 0 01-2 2h-2v4l-4-4H9a1.994 1.994 0 01-1.414-.586m0 0L11 14h4a2 2 0 002-2V6a2 2 0 00-2-2H5a2 2 0 00-2 2v6a2 2 0 002 2h2v4l.586-.586z"
            />
          </svg>
        </div>
      </div>
    </div>
  );
}
