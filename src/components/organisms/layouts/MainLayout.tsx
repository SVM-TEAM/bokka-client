import { Container, CssBaseline } from '@mui/material';
import { Outlet } from 'react-router-dom';
import CommonSnackBar from 'src/components/atoms/snack-bars/CommonSnackBar';

const MainLayout = () => {
  return (
    <Container component="main" maxWidth="sm">
      <CssBaseline />
      <CommonSnackBar />
      <Outlet />
    </Container>
  );
};

export default MainLayout;
