import Image from 'next/image';
import { TheaterType } from './type';

import TheaterCard from './TheaterCard';
import TheaterImage from './TheaterImage';

type TheaterProps = {
  theater: TheaterType;
  show: string;
  type: string;
  setList: (list: TheaterType[]) => void;
};

export default function Theater({ theater, show, setList, type }: TheaterProps) {
  return (
    <div className="flex items-start p-6">
      {show === 'list' ? (
        ''
      ) : (
        <a href="#" className="block shrink-0">
          {type === 'PERFORMANCE' ? (
            <Image width={75} height={75} src={theater.poster} alt="포스터" />
          ) : (
            <TheaterImage />
          )}
        </a>
      )}
      <TheaterCard theater={theater} show={show} setList={setList} type={type} />
    </div>
  );
}
