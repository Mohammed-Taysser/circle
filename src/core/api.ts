import axios, { AxiosInstance } from 'axios';
import { logout } from '../redux/features/auth.slice';
import { SERVER_URL } from './config';
import LOCAL_STORAGE from './localStorage';

const API_ENDPOINT = SERVER_URL + '/api/v1';

class AxiosAPI {
  private readonly axiosInstance: AxiosInstance;

  constructor() {
    this.axiosInstance = axios.create({
      baseURL: API_ENDPOINT,
    });

    this.axiosInstance.interceptors.request.use(
      async (request) => {
        const token = LOCAL_STORAGE.get<string>('token');

        request.headers['Authorization'] = `Bearer ${token}`;
        request.headers['Accept-Language'] = 'en';
        request.headers['Content-Type'] = 'application/json';

        return request;
      },
      (error) => {
        return Promise.reject(error);
      }
    );

    this.axiosInstance.interceptors.response.use(
      function (response) {
        return response;
      },
      async (error) => {
        if (error.response.status === 401) {
          const { default: store } = await import('../redux/store');
          store.dispatch(logout());
        }

        return Promise.reject(error);
      }
    );
  }

  login(body: LoginRequestBody) {
    return this.axiosInstance.post<AxiosLoginResponse>('/auth/login', body);
  }

  register(body: RegisterRequestBody) {
    return this.axiosInstance.post<AxiosRegisterResponse>(
      '/auth/register',
      body
    );
  }

  getUserById(id: string) {
    return this.axiosInstance.get<AxiosResponse<User>>(`/users/${id}`);
  }

  subscribe(email: string) {
    return this.axiosInstance.post<AxiosSubscribeResponse>('/subscription', {
      email,
    });
  }
}

const API = new AxiosAPI();

export default API;
