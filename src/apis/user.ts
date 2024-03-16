import { DEFAULT_WEB_SITE_TYPE } from 'src/constants/datas';
import axiosInstanceObj from '.';
import { BaseResponse } from 'src/types';

export interface CheckDuplicationUserIdDto {
  userId: string;
}

const checkDuplicationUserId = async (
  dto: CheckDuplicationUserIdDto
): Promise<BaseResponse<boolean>> => {
  const response = await axiosInstanceObj.authAxiosInstance.get<
    BaseResponse<boolean>
  >(
    `/user/check-duplication?siteType=${DEFAULT_WEB_SITE_TYPE}&userId=${dto.userId}`
  );
  return response.data;
};

const signUpUser = async (dto: {
  userId: string;
  password: string;
}): Promise<BaseResponse<boolean>> => {
  const dtoExtends = {
    ...dto,
    loginProvider: 'LOCAL',
    siteType: DEFAULT_WEB_SITE_TYPE,
  };
  const response = await axiosInstanceObj.authAxiosInstance.post<
    BaseResponse<boolean>
  >('/user/sign-up', dtoExtends);
  return response.data;
};

const getUser = async (): Promise<string> => {
  const response = await axiosInstanceObj.serviceAxiosInstance.get<{
    name: string;
  }>('/user/name', {
    withCredentials: true,
  });
  return response.data.name;
};

const userApi = {
  checkDuplicationUserId,
  signUpUser,
  getUser,
};

export default userApi;
