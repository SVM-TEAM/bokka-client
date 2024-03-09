import {
  LOGIN_ERROR_TYPE,
  LOGIN_SUCCESS_TYPE,
  LocalLoginDto,
  SocialLoginDto,
} from 'src/types';
import axiosInstanceObj from '.';
import { DEFAULT_WEB_SITE_NAME } from 'src/constants/datas';

const socialLogin = async (dto: SocialLoginDto) => {
  try {
    switch (dto.authProvider) {
      case 'GOOGLE':
        return await axiosInstanceObj.authAxiosInstance.get(
          `/auth/login/google?site=${DEFAULT_WEB_SITE_NAME}`,
          { withCredentials: true }
        );
      case 'KAKAO':
      case 'NAVER':
    }
  } catch (e) {
    console.error(e);
  }
};

const login = async (
  dto: LocalLoginDto
): Promise<LOGIN_SUCCESS_TYPE | LOGIN_ERROR_TYPE> => {
  if (dto.password === '' || dto.userId === '') return 'NULL_INPUT';
  try {
    const data = {
      userId: dto.userId,
      password: dto.password,
      siteType: DEFAULT_WEB_SITE_NAME,
      loginProvider: dto.authProvider,
    };
    await axiosInstanceObj.authAxiosInstance.post('/auth/login', data, {
      withCredentials: true,
    });
    return 'SUCCESS_LOGIN';
  } catch (e: any) {
    return e.response.data.result.error.message ?? 'INVALID_USER';
  }
};

const checkCookie = async () => {
  try {
    const result = await axiosInstanceObj.authAxiosInstance.get(
      '/auth/jwt/check',
      {
        withCredentials: true,
      }
    );
    return true;
  } catch (e: any) {
    if (e.response.data.code === 5002) {
      try {
        await axiosInstanceObj.authAxiosInstance.get('/auth/refresh', {
          withCredentials: true,
        });
        return true;
      } catch (e) {
        return false;
      }
    }
    return false;
  }
};

const logout = async () => {
  try {
    await axiosInstanceObj.authAxiosInstance.post(
      '/auth/logout',
      {},
      {
        withCredentials: true,
      }
    );
  } catch (e) {
    console.error(e);
  }
};

const refresh = async () => {
  try {
    await axiosInstanceObj.authAxiosInstance.get('/auth/refresh', {
      withCredentials: true,
    });
    return true;
  } catch (e) {
    await logout();
    return false;
  }
};

const authApi = {
  login,
  socialLogin,
  checkCookie,
  logout,
  refresh,
};

export default authApi;
