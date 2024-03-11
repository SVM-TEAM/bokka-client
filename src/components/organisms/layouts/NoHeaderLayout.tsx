import { ThemeProvider } from '@mui/material';
import CommonContentForm from 'src/components/molecules/forms/CommonContentForm';
import { mainTheme } from 'src/styles/themes/mainTheme';

const NoHeaderLayout = () => {
  return (
    <ThemeProvider theme={mainTheme}>
      <CommonContentForm />
    </ThemeProvider>
  );
};

export default NoHeaderLayout;
