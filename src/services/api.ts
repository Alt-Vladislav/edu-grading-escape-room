import axios, {AxiosInstance, AxiosError} from 'axios';
import { toast } from 'react-toastify';
import { StatusCodes } from 'http-status-codes';
import { getToken } from './token';

const BACKEND_URL = 'https://grading.design.htmlacademy.pro/v1/escape-room/';
const REQUEST_TIMEOUT = 5000;
const EnabledStatusCode: Record<number, boolean> = {
  [StatusCodes.BAD_REQUEST]: true,
  [StatusCodes.UNAUTHORIZED]: false,
  [StatusCodes.NOT_FOUND]: true,
  [StatusCodes.CONFLICT]: true,
  [StatusCodes.INTERNAL_SERVER_ERROR]: true,
} as const;

export const createAPI = (): AxiosInstance => {
  const api = axios.create({
    baseURL: BACKEND_URL,
    timeout: REQUEST_TIMEOUT,
  });


  api.interceptors.request.use((config) => {
    const token = getToken();
    if (token && config.headers) {
      config.headers['x-token'] = token;
    }
    return config;
  });

  api.interceptors.response.use(
    (response) => response,
    (error: AxiosError<{status: number; message: string}>) => {
      if (error.status && EnabledStatusCode[error.status]) {
        toast.warn(error.message);
        throw error;
      }
    }
  );

  return api;
};
