import { Box } from '@mui/material';
import { useParams } from 'react-router-dom';
import EmailAuthenticationMessage from 'src/components/molecules/messages/EmailAuthenticationMessage';
import { useEmailVerification } from 'src/hooks/useEmailVerification';

const EmailAuthentication = () => {
  const { verifyCode } = useParams();
  const { data } = useEmailVerification(verifyCode ?? '');

  return (
    <Box>
      <EmailAuthenticationMessage
        code={data?.code ?? 0}
        userId={data?.result ? `${data.result} 님.` : ''}
      />
    </Box>
  );
};

export default EmailAuthentication;
