import { api } from '@/api';

const getRoomId = (id, token): Promise<T> =>
  api.post(
    '/chat',
    { theaterId: id },
    {
      headers: {
        Authorization: token,
        'Content-Type': 'application/json',
      },
    }
  );

export { getRoomId };
