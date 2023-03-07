import { TheaterType } from './type';

import TheaterCard from './TheaterCard';
import TheaterImage from './TheaterImage';

type TheaterProps = {
  theater: TheaterType;
  show: string;
  setList: (list: TheaterType[]) => void;
};

export default function Theater({ theater, show, setList }: TheaterProps) {
  return (
    <div className="flex items-start p-6">
      {show === 'list' ? (
        ''
      ) : (
        <a href="#" className="block shrink-0">
          <TheaterImage />
        </a>
      )}
      <TheaterCard theater={theater} show={show} setList={setList} />
    </div>
  );
}
