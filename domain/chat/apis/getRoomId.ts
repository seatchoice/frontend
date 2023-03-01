import { AxiosResponse, AxiosError } from 'axios';
import { api } from '@/api';

const getRoomId = (id: string, token: string): Promise<any | AxiosResponse> =>
  api
    .post(
      '/chat',
      { theaterId: id },
      {
        headers: {
          Authorization: token,
          'Content-Type': 'application/json',
        },
      }
    )
    .catch((error: AxiosError) => {
      if (error.response?.status === 401) {
        return {
          data: {
            roomId: -1,
          },
        };
      }
      return {
        data: {
          roomId: -2,
        },
      };
    });
export { getRoomId };
