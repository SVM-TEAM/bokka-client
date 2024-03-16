import AppBar from '@mui/material/AppBar';
import Box from '@mui/material/Box';
import Toolbar from '@mui/material/Toolbar';
import IconButton from '@mui/material/IconButton';
import Typography from '@mui/material/Typography';
import MenuIcon from '@mui/icons-material/Menu';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import useAppSelector from 'src/hooks/useAppSelector';

const MainHeader = () => {
  const userName = useAppSelector((state) => state.userReducer.userName);
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="static" color="primary">
        <Toolbar color="primary">
          <IconButton
            size="large"
            edge="start"
            color="inherit"
            aria-label="open drawer"
            sx={{ mr: 1 }}
          >
            <MenuIcon />
          </IconButton>
          <Typography variant="h6" noWrap component="div">
            {userName}
          </Typography>

          <Box sx={{ flexGrow: 1 }} />
          <Box>
            <IconButton aria-label="show 4 new mails" color="inherit">
              <MailIcon />
            </IconButton>
            <IconButton aria-label="show 17 new notifications" color="inherit">
              <NotificationsIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </AppBar>
    </Box>
  );
};

export default MainHeader;
