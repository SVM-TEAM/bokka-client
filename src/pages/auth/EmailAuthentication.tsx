import { AppBar, Box, Button, Toolbar } from '@mui/material';

import { useNavigate, useParams } from 'react-router-dom';
import EmailAuthenticationMessage from 'src/components/molecules/messages/EmailAuthenticationMessage';
import { useEmailVerification } from 'src/hooks/useEmailVerification';

const EmailAuthentication = () => {
  const navigate = useNavigate();
  const { verifyCode } = useParams();
  const { data } = useEmailVerification(verifyCode ?? '');

  const goLogin = () => navigate('/auth/login', { replace: true });

  return (
    <Box>
      <AppBar position="static" sx={{ backgroundColor: '#9575cd' }}>
        <Toolbar sx={{ justifyContent: 'flex-end' }}>
          <Button color="inherit" onClick={goLogin}>
            로그인
          </Button>
        </Toolbar>
      </AppBar>
      <EmailAuthenticationMessage
        code={data?.code ?? 0}
        userId={data?.result ? `${data.result} 님.` : ''}
      />
    </Box>
  );
};

export default EmailAuthentication;
