import React, { useEffect } from 'react';
import { Snackbar } from '@mui/material';
import useAppSelector from 'src/hooks/useAppSelector';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { closeSnackBar } from 'src/stores/notices/snackBarSlice';
import authApi from 'src/apis/auth';
import { useParams } from 'react-router-dom';
import { useQuery } from 'react-query';

const EmailAuthentication = () => {
  const { verifyCode } = useParams();
  console.log(verifyCode);
  const { data, isLoading, isError } = useQuery(
    ['verifyEmail', verifyCode],
    () => emailAuthenticationFetch(),
    { enabled: !!verifyCode }
  );

  const emailAuthenticationFetch = async () => {
    const result = await authApi.emailAuthentication(verifyCode ?? '');
    console.log(result);
  };

  return <>{data}</>;
};

export default EmailAuthentication;
