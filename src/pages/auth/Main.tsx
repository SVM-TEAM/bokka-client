import { Button, Box, Divider, Stack, Typography } from '@mui/material';
import SocialLoginButtons, {
  SocialLoginButtonProps,
} from 'src/components/atoms/buttons/SocialLoginButton';
import GoogleIcon from '@mui/icons-material/Google';

import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const AuthMain = () => {
  const { pathname } = useLocation();
  const navigate = useNavigate();

  const socialLoginButtonList: SocialLoginButtonProps[] = [
    {
      icon: <GoogleIcon />,
      label: 'GOOGLE',
      color: '#DB4437',
    },
    {
      icon: <GoogleIcon />,
      label: 'NAVER',
      color: '#1DDB16',
    },
    {
      icon: <GoogleIcon />,
      label: 'KAKAO',
      color: '#FFE400',
    },
  ];

  const clickAuthButton = () => {
    if (pathname === '/auth/login') navigate('sign-up');
    else navigate('login');
  };

  return (
    <>
      <Box
        sx={{
          marginTop: 8,
          border: '1px solid #666',
          borderRadius: '2px',
          padding: '20px',
        }}
      >
        <Outlet />
        <Divider>또는</Divider>
        <Stack direction="row" spacing={2}>
          {socialLoginButtonList.map((socialLoginButton, idx) => (
            <SocialLoginButtons
              key={`${socialLoginButton.label}-${idx}`}
              {...socialLoginButton}
            />
          ))}
        </Stack>
        <Typography variant="button" color={'#0054FF'}>
          비밀번호를 잊어버리셨나요?
        </Typography>
      </Box>

      <Box
        sx={{
          marginTop: 1,
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #666',
          borderRadius: '2px',
        }}
      >
        <Button fullWidth variant="text" onClick={clickAuthButton}>
          {pathname === '/auth/login' ? '이메일로 가입하기' : '로그인 하기'}
        </Button>
      </Box>
    </>
  );
};

export default AuthMain;
