import { ThemeProvider } from '@mui/material';
import MainFooter from 'src/components/molecules/footers/MainFooter';
import CommonContentForm from 'src/components/molecules/forms/CommonContentForm';
import MainHeader from 'src/components/molecules/headers/MainHeader';
import { mainTheme } from 'src/styles/themes/mainTheme';

const MainLayout = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <div className="wrapper">
        <MainHeader />
        <CommonContentForm />
        <MainFooter />
      </div>
    </ThemeProvider>
  );
};

export default MainLayout;
