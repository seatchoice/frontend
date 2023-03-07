import { api } from '@/api';
import { useRouter } from 'next/router';
import { TheaterType } from './type';

type TheaterProps = {
  theater: TheaterType;
  show: string;
  setList: (list: TheaterType[]) => void;
};

export default function TheaterCard({ theater, show, setList }: TheaterProps) {
  const { name = '', address, id } = theater;
  const router = useRouter();

  const handleList = async () => {
    try {
      const url = show === 'list' ? `/${id}?name=${name}` : '';
      if (show === 'list') router.push(url);

      const { theaterList } = await api.get(`/theaters/${id}`).then(res => res.data);
      const res = theaterList.map(({ name, address, id }: TheaterType) => ({
        name,
        address,
        id,
      }));
      setList(res);
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <div className="ml-4">
      <h3 className="font-medium sm:text-lg hover:scale-y-125" onClick={handleList}>
        {name}
      </h3>

      <p className="text-sm line-clamp-2">{address}</p>
    </div>
  );
}
