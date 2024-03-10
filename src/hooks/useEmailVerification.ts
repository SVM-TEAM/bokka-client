import { useQuery } from 'react-query';
import authApi from 'src/apis/auth';

export const useEmailVerification = (verifyCode: string) => {
  return useQuery(
    ['verifyEmail', verifyCode],
    () => authApi.emailAuthentication(verifyCode ?? ''),
    { enabled: !!verifyCode, refetchOnWindowFocus: false }
  );
};
