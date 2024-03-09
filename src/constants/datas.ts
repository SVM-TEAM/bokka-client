import { LOGIN_ERROR_TYPE } from 'src/types';

export const DEFAULT_WEB_SITE_NAME = 'MYEONJEOB_BOKKA';

export const ERROR_CODE: { [key in LOGIN_ERROR_TYPE]: string } = {
  INVALID_USER: '올바른 계정 정보가 아닙니다.',
  NULL_INPUT: '아이디 및 비밀번호를 입력해주세요.',
};
