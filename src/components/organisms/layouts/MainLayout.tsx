import { ThemeProvider } from '@mui/material';
import { useQuery } from 'react-query';
import userApi from 'src/apis/user';
import MainFooter from 'src/components/molecules/footers/MainFooter';
import CommonContentForm from 'src/components/molecules/forms/CommonContentForm';
import MainHeader from 'src/components/molecules/headers/MainHeader';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { setUserName } from 'src/stores/users/userSlice';
import { mainTheme } from 'src/styles/themes/mainTheme';

const MainLayout = () => {
  const dispatch = useAppDispatch();

  useQuery('homeNews', () => setUseNameForOnMoutned);

  const setUseNameForOnMoutned = async () => {
    const userName = await userApi.getUser();
    dispatch(setUserName(userName));
  };

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
