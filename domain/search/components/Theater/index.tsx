import { TheaterType } from './type';

import TheaterCard from './TheaterCard';
import TheaterImage from './TheaterImage';

type TheaterProps = {
  theater: TheaterType;
};

export default function Theater({ theater }: TheaterProps) {
  return (
    <div className="flex items-start p-6">
      <a href="#" className="block shrink-0">
        <TheaterImage />
      </a>
      <TheaterCard theater={theater} />
    </div>
  );
}
