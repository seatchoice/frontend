import TheaterCard from './TheaterCard';
import TheaterImage from './TheaterImage';

export default function Theater({ theater }) {
  return (
    <div className="flex items-start p-6">
      <a href="#" className="block shrink-0">
        <TheaterImage />
      </a>
      <TheaterCard theater={theater} />
    </div>
  );
}
