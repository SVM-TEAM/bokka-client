import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

const CommonContentForm = () => {
  return (
    <>
      <CssBaseline />
      <Container component="main" maxWidth="sm">
        <Outlet />
      </Container>
    </>
  );
};

export default CommonContentForm;
