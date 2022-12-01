import { Axios } from '@utils/axios';
import { AxiosError, AxiosResponse } from 'axios';

Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    return error.message;
  }
);
