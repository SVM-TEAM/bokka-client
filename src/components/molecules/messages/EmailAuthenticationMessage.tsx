import { Button, Typography } from '@mui/material';
import { useNavigate } from 'react-router-dom';

const EmailAuthenticationMessage = ({
  code,
  userId,
}: {
  code: number;
  userId: string;
}) => {
  const navigate = useNavigate();

  const getMessage = () => {
    switch (code) {
      case 1000:
        return '인증이 완료되었습니다. 로그인 버튼을 눌러 로그인을 해주시기 바랍니다.';
      case 1001:
        return '이미 인증을 완료한 이메일입니다.';
      default:
        return '유효하지 않은 접근입니다.';
    }
  };

  const message = getMessage();

  const goLogin = () => {
    return navigate('/auth/login', { replace: true });
  };
  return (
    <>
      {userId && <Typography variant="h4"> 안녕하세요. {userId} </Typography>}
      <Typography variant="body1"> {message}</Typography>
      <Button
        fullWidth
        variant="contained"
        color="primary"
        sx={{ mt: 3, mb: 2 }}
        onClick={goLogin}
      >
        로그인 하러 가기
      </Button>
    </>
  );
};

export default EmailAuthenticationMessage;
