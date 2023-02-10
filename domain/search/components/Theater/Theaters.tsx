import useIntersectionObserver from '../../hooks/useObserver';

import Theater from '.';

export default function Theaters() {
  const showSeats = () => {
    console.log('해당 좌석목록을 보여줍니다. /api/reviews/:id');
  };

  const props = [
    { test: 1, caption: 'a' },
    { test: 2, caption: 'b' },
    { test: 3, caption: 'c' },
    { test: 4, caption: 'd' },
    { test: 5, caption: 'e' },
    { test: 6, caption: 'f' },
    { test: 7, caption: 'g' },
    { test: 8, caption: 'h' },
  ];

  const props2 = [
    { test: 10, caption: 'a1' },
    { test: 20, caption: 'b1' },
    { test: 30, caption: 'c1' },
    { test: 40, caption: 'd1' },
    { test: 50, caption: 'e1' },
    { test: 60, caption: 'f1' },
    { test: 70, caption: 'g1' },
    { test: 80, caption: 'h1' },
  ];

  const onIntersect: IntersectionObserverCallback = ([{ isIntersecting }]) => {
    if (isIntersecting) {
      console.log(props2);
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <ul onClick={showSeats}>
      {props.map(prop => (
        <li
          key={prop.test}
          className="rounded-xl border-2 border-gray-100 bg-white dark:text-white
        dark:rounded-xl dark:border-2 dark:border-gray-100 dark:bg-slate-900 relative">
          <Theater prop={prop} />
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-16 w-16 absolute bottom-0 right-0 pr-4"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
            strokeWidth="1">
            <path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path>
            <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
          </svg>
        </li>
      ))}
      <li ref={setTarget}>more</li>
    </ul>
  );
}
