import { AxiosResponse } from 'axios';
import { api } from '@/api';

const getRoomId = (id: string, token: string): Promise<AxiosResponse> =>
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
