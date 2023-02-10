import TheaterCard from './TheaterCard';
import TheaterImage from './TheaterImage';

export default function Theater(prop) {
  return (
    <div className="flex items-start p-6">
      <h1 className="text-lg">{prop.caption}</h1>
      <a href="#" className="block shrink-0">
        <TheaterImage />
      </a>
      <TheaterCard />
    </div>
  );
}
