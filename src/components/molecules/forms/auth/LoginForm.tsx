import { Typography, TextField, FormHelperText, Button } from '@mui/material';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import authApi from 'src/apis/auth';

const LoginForm = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState<string>('');
  const [password, setPassword] = useState<string>('');
  const [error, setError] = useState<boolean>(false);
  const [errorHelperText, setErrorHelperText] = useState<string>('');

  const onLogin = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const result = await authApi.login({
      userId: username,
      password: password,
      authProvider: 'LOCAL',
    });
    if (result === 'SUCCESS_LOGIN') return navigate('/', { replace: true });
    setError(true);
    setErrorHelperText(result);
  };
  return (
    <>
      <Typography component="h1" variant="h5">
        로그인
      </Typography>
      <form onSubmit={onLogin}>
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          id="username"
          label="email"
          name="username"
          autoComplete="username"
          autoFocus
          onChange={(e) => setUsername(e.target.value)}
          error={error}
        />
        <TextField
          variant="outlined"
          margin="normal"
          fullWidth
          name="password"
          label="password"
          type="password"
          id="password"
          autoComplete="current-password"
          onChange={(e) => setPassword(e.target.value)}
          error={error}
        />
        {error && <FormHelperText error>{errorHelperText}</FormHelperText>}
        <Button
          type="submit"
          fullWidth
          variant="contained"
          color="primary"
          sx={{ mt: 3, mb: 2 }}
        >
          로그인
        </Button>
      </form>
    </>
  );
};

export default LoginForm;
