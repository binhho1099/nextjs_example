import { AxiosError, AxiosResponse } from 'axios';
import { Axios } from '../utils/axios';

Axios.interceptors.response.use(
  (response: AxiosResponse) => {
    return response.data;
  },
  async (error: AxiosError) => {
    return error.message;
  }
);
