import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';

const MainLayout = () => {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
