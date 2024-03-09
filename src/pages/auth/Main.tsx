import {
  Button,
  Container,
  CssBaseline,
  Box,
  Divider,
  Stack,
} from '@mui/material';
import { createTheme, ThemeProvider } from '@mui/material/styles';
import SocialLoginButtons, {
  SocialLoginButtonProps,
} from 'src/components/atoms/buttons/SocialLoginButton';
import GoogleIcon from '@mui/icons-material/Google';

import LoginForm from 'src/components/molecules/forms/auth/LoginForm';
import SignUpForm from 'src/components/molecules/forms/auth/SignUpForm';
import { Outlet, useLocation, useNavigate } from 'react-router-dom';

const theme = createTheme({
  palette: {
    primary: {
      main: '#9575cd',
    },
    background: {
      default: '#f3e5f5',
    },
  },
  typography: {
    fontFamily: '"Comic Sans MS", cursive, sans-serif',
  },
  components: {
    MuiDivider: {
      styleOverrides: {
        root: {
          color: 'grey',
        },
      },
    },
    MuiButton: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          padding: '10px 20px',
        },
      },
    },
    MuiTextField: {
      styleOverrides: {
        root: {
          borderRadius: 20,
          marginBottom: '10px',
        },
      },
    },
  },
});

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
          display: 'flex',
          flexDirection: 'column',
          alignItems: 'center',
          border: '1px solid #666',
          borderRadius: '2px',
          padding: '20px',
        }}
      >
        <ThemeProvider theme={theme}>
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
        </ThemeProvider>
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
