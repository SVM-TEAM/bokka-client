import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useState } from 'react';

const MainFooter = () => {
  const [value, setValue] = useState('news');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      <BottomNavigationAction
        label="소식"
        value="news"
        icon={<NewspaperIcon />}
      />
      <BottomNavigationAction
        label="학습"
        value="learn"
        icon={<SchoolIcon />}
      />
      <BottomNavigationAction
        label="랭크"
        value="rank"
        icon={<EmojiEventsIcon />}
      />
      <BottomNavigationAction
        label="영상"
        value="shorts"
        icon={<SlideshowIcon />}
      />
    </BottomNavigation>
  );
};

export default MainFooter;
