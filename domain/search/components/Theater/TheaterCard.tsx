export default function TheaterCard() {
  return (
    <div className="ml-4">
      <h3 className="font-medium sm:text-lg">
        <a href="#" className="hover:underline">
          무슨 공연 또는 좌석 또는 공연장 정보 이름 등등
        </a>
      </h3>

      <p className="text-sm text-gray-700 line-clamp-2">
        설명이 어쩌구 저쩌구 들어가겠지?
      </p>

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
          <p className="ml-1 text-xs">7 reviews</p>
        </div>

        <span className="hidden sm:block" aria-hidden="true">
          &middot;
        </span>

        <p className="hidden sm:block sm:text-xs sm:text-gray-500">
          작성자
          <a href="#" className="font-medium underline hover:text-gray-700 ml-2">
            홍길동
          </a>
        </p>
      </div>
    </div>
  );
}
