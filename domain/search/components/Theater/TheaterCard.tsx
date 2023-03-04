import Link from 'next/link';
import { TheaterType } from './type';

type TheaterProps = {
  theater: TheaterType;
};

export default function TheaterCard({ theater }: TheaterProps) {
  const { name = '', address, id } = theater;

  return (
    <div className="ml-4">
      <h3 className="font-medium sm:text-lg">
        <Link href={`/${id}?name=${name}`} className="hover:underline">
          {name}
        </Link>
      </h3>

      <p className="text-sm line-clamp-2">{address}</p>
    </div>
  );
}
