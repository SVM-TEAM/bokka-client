import {
  AuthErrorCodeType,
  BaseResponse,
  LocalLoginDto,
  SocialLoginDto,
} from 'src/types';
import axiosInstanceObj from '.';
import { DEFAULT_WEB_SITE_TYPE } from 'src/constants/datas';
import { AUTH_ERROR_CODE_MAPPING } from 'src/constants/errorCodes';

const socialLogin = async (dto: SocialLoginDto) => {
  try {
    switch (dto.authProvider) {
      case 'GOOGLE':
        return await axiosInstanceObj.authAxiosInstance.get(
          `/auth/login/google?site=${DEFAULT_WEB_SITE_TYPE}`,
          { withCredentials: true }
        );
      case 'KAKAO':
      case 'NAVER':
    }
  } catch (e) {
    console.error(e);
  }
};

const login = async (dto: LocalLoginDto): Promise<string> => {
  try {
    const data = {
      userId: dto.userId,
      password: dto.password,
      siteType: DEFAULT_WEB_SITE_TYPE,
      loginProvider: dto.authProvider,
    };
    await axiosInstanceObj.authAxiosInstance.post('/auth/login', data, {
      withCredentials: true,
    });
    return 'SUCCESS_LOGIN';
  } catch (e: any) {
    const errorCode: AuthErrorCodeType = e.response.data.code ?? 5000;
    return AUTH_ERROR_CODE_MAPPING[errorCode];
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
    return result;
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

const emailAuthentication = async (
  verifyCode: string
): Promise<BaseResponse<boolean>> => {
  const response = await axiosInstanceObj.authAxiosInstance.get<
    BaseResponse<boolean>
  >(`/auth/email/authentication?verifyCode=${verifyCode}`, {});
  return response.data;
};

const authApi = {
  login,
  socialLogin,
  checkCookie,
  logout,
  refresh,
  emailAuthentication,
};

export default authApi;
