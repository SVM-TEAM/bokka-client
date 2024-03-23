import {
  Avatar,
  Box,
  Button,
  Card,
  CardContent,
  CardHeader,
  CardMedia,
  Divider,
  Tooltip,
  Typography,
} from '@mui/material';
import StarIcon from '@mui/icons-material/Star';
import Zoom from '@mui/material/Zoom';

const LearnContent = () => {
  return (
    <Card
      sx={{
        height: 'auto',
        overflow: 'visible',
        mt: 3,
        backgroundColor: '#EAEAEA',
        borderRadius: '15px',
      }}
    >
      <CardHeader />
      <Divider variant="middle" />
      <CardMedia
        component="img"
        image="https://i1.sndcdn.com/avatars-g8wTS6RFcvm07Ein-Gru6Lg-t240x240.jpg"
        alt="캐릭터 이미지"
        sx={{
          width: '50%',
          margin: 'auto',
          mt: 3,
          borderRadius: '50%',
          border: '2px solid #000',
        }}
      />
      <CardContent>
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
          }}
        >
          <Typography variant="body1">레벨 : 1</Typography>
          <Tooltip TransitionComponent={Zoom} disableFocusListener title="Add">
            <Avatar
              sx={{
                background: 'linear-gradient(45deg, #FFC0CB, #FFD700, #FFA500)',
              }}
            >
              <StarIcon />
            </Avatar>
          </Tooltip>
        </Box>
      </CardContent>
      <Box
        sx={{
          display: 'flex',
          justifyContent: 'center',
          mt: -2,
        }}
      >
        <Button
          variant="contained"
          sx={{
            fontSize: 'large',
            borderRadius: '15px',
            transform: 'translateY(50%)',
            width: '60%',
          }}
        >
          학습하기
        </Button>
      </Box>
    </Card>
  );
};

export default LearnContent;
