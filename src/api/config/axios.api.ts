import axios, { AxiosInstance } from 'axios';
import { SERVER_URL } from '../../core/config';
import LOCAL_STORAGE from '../../core/localStorage';
import { logout } from '../../redux/features/auth.slice';

const API_ENDPOINT = SERVER_URL + '/api/v1';

class AxiosAPI {
  protected axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_ENDPOINT,
    });

    this.axiosInstance.interceptors.request.use(
      async (request) => {
        const token = LOCAL_STORAGE.get<string>('token');

        if (token) {
          request.headers['Authorization'] = `Bearer ${token}`;
        }

        request.headers['Accept-Language'] = localStorage.getItem('i18nextLng');

        if (!request.headers['Content-Type']) {
          request.headers['Content-Type'] = 'application/json';
        }

        return request;
      },
      (error) => {
        return Promise.reject(error as Error);
      },
    );

    this.axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        if (error.response.status === 401) {
          const { default: store } = await import('../../redux/store');
          store.dispatch(logout());
        }

        if (
          error.request.responseType === 'blob' &&
          error.response.data instanceof Blob &&
          error.response.data.type &&
          error.response.data.type.toLowerCase().indexOf('json') != -1
        ) {
          return new Promise((resolve, reject) => {
            const reader = new FileReader();
            reader.onload = () => {
              if (reader.result) {
                error.response.data = JSON.parse(reader.result as string);
              }
              resolve(Promise.reject(error));
            };

            reader.onerror = () => {
              reject(error);
            };

            reader.readAsText(error.response.data);
          });
        }

        return Promise.reject(error as Error);
      },
    );
  }
}

export default AxiosAPI;
