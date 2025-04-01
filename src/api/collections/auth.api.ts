import AxiosAPI from '../config/axios.api';

class AuthAPI extends AxiosAPI {
  login(body: LoginRequestBody) {
    return this.axiosInstance.post<AxiosLoginResponse>('/auth/login', body);
  }

  register(body: RegisterRequestBody) {
    return this.axiosInstance.post<AxiosRegisterResponse>(
      '/auth/register',
      body,
    );
  }

  refreshToken(token: string) {
    return this.axiosInstance.post<AxiosRefreshTokenResponse>(
      'token/refresh/',
      {
        refresh: token,
      },
    );
  }

  resetPassword(userId: number, password: string) {
    return this.axiosInstance.post(`users/${userId}/reset-password/`, {
      new_password: password,
    });
  }
}

export default AuthAPI;
