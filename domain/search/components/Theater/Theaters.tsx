import { useRouter } from 'next/router';
import { useState } from 'react';
import { Text } from '@/components';
import useIntersectionObserver from '../../hooks/useObserver';

import { TheaterType } from './type';

import Theater from '.';

type TheatersProps = {
  theaters: TheaterType[];
  getMoreSearched: () => void;
  nomore: boolean;
};

export default function Theaters({ theaters, getMoreSearched, nomore }: TheatersProps) {
  const router = useRouter();

  const showSeats = (event: React.MouseEvent<SVGSVGElement, MouseEvent>) => {
    const motherBox = (event.target as SVGSVGElement).closest('li');
    const id = String(motherBox?.id);
    router.push(`chat/${+id}?name=${motherBox?.textContent}`);
  };

  const [list, setList] = useState<TheaterType[]>([]);

  // https://dev.to/manojpatra1991/intersection-observer-in-react-24od
  const onIntersect: IntersectionObserverCallback = async ([{ isIntersecting }]) => {
    if (isIntersecting) {
      getMoreSearched();
    }
  };

  const { setTarget } = useIntersectionObserver({ onIntersect });

  return (
    <>
      {list.length > 0 ? (
        <ul>
          <Text as="h2">리뷰를 남길 공연장을 선택하세요.</Text>
          {list.map(theater => (
            <li
              id={`${theater.id}`}
              key={theater.id}
              className=" text-primary-900 bg-primary-200 dark:bg-primary-900 dark:text-primary-200
          rounded-xl mb-2 border-2 border-gray-100 
        dark:rounded-xl dark:border-2 dark:border-gray-100  relative">
              <Theater theater={theater} show={'list'} setList={setList} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 absolute bottom-0 right-0 pr-4 hover:text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1">
                <path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path>
                <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
              </svg>
            </li>
          ))}
        </ul>
      ) : (
        <ul>
          {theaters.map(theater => (
            <li
              id={`${theater.id}`}
              key={theater.id}
              className=" text-primary-900 bg-primary-200 dark:bg-primary-900 dark:text-primary-200
          rounded-xl mb-2 border-2 border-gray-100 
        dark:rounded-xl dark:border-2 dark:border-gray-100  relative">
              <Theater theater={theater} show={'fac'} setList={setList} />
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-16 w-16 absolute bottom-0 right-0 pr-4 hover:text-slate-500"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
                strokeWidth="1">
                <path d="M5 18v3.766l1.515-.909L11.277 18H16c1.103 0 2-.897 2-2V8c0-1.103-.897-2-2-2H4c-1.103 0-2 .897-2 2v8c0 1.103.897 2 2 2h1zM4 8h12v8h-5.277L7 18.234V16H4V8z"></path>
                <path d="M20 2H8c-1.103 0-2 .897-2 2h12c1.103 0 2 .897 2 2v8c1.103 0 2-.897 2-2V4c0-1.103-.897-2-2-2z"></path>
              </svg>
            </li>
          ))}
          <li ref={setTarget} className={nomore ? 'hidden' : ''}>
            more
          </li>
          {nomore ? <li>결과가 없습니다.</li> : ''}
        </ul>
      )}
    </>
  );
}
