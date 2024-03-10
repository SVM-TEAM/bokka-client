import { AuthErrorCodeType } from 'src/types';

export const AUTH_ERROR_CODE_MAPPING: { [key in AuthErrorCodeType]: string } = {
  3000: '이미 사용 중인 이메일입니다.', // DUPLICATION_USER_ID
  3001: '유효한 계정 정보를 입력해주세요.', // INVALID_USER
  3002: '이메일을 통해 계정 인증을 완료해주세요.', // NOT_READY_USER_ID_AUTHENTICATION
  5000: '네트워크 통신 중 오류가 발생했습니다.', // NETWORK_ERROR
};
