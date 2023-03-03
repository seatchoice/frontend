import { AxiosResponse, AxiosError } from 'axios';
import { api } from '@/api';

const getHistory = (roomId: string, token: string): Promise<any | AxiosResponse> =>
  api.get(`/chat-history/${roomId}`);
// .catch((error: AxiosError) => {
//   if (error.response?.status === 401) {
//     return {
//       data: {
//         roomId: -1,
//       },
//     };
//   }
//   return {
//     data: {
//       error,
//       roomId: -2,
//     },
//   };
// });
export { getHistory };
