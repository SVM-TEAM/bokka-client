import BottomNavigation from '@mui/material/BottomNavigation';
import BottomNavigationAction from '@mui/material/BottomNavigationAction';
import EmojiEventsIcon from '@mui/icons-material/EmojiEvents';
import SchoolIcon from '@mui/icons-material/School';
import SlideshowIcon from '@mui/icons-material/Slideshow';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { MainFooterObjectType } from 'src/types';
import { MAIN_FOOTER_ICONS } from 'src/constants/datas';
import EachElement from 'src/components/organisms/utils/EachElement';

const MainFooter = () => {
  const navigate = useNavigate();
  const [value, setValue] = useState<MainFooterObjectType>(
    MAIN_FOOTER_ICONS.NEWS
  );

  const getIcon = (value: MainFooterObjectType['value']) => {
    switch (value) {
      case 'NEWS':
        return <NewspaperIcon />;
      case 'LEARN':
        return <SchoolIcon />;
      case 'RANK':
        return <EmojiEventsIcon />;
      case 'SHORTS':
        return <SlideshowIcon />;
    }
  };

  const handleChange = (
    event: React.SyntheticEvent,
    newValue: MainFooterObjectType
  ) => {
    setValue(newValue);
    navigate(`/home/${newValue.url}`);
  };

  return (
    <BottomNavigation value={value} onChange={handleChange}>
      {Object.values(MAIN_FOOTER_ICONS).map((item) => (
        <BottomNavigationAction
          key={item.value}
          label={item.label}
          value={item}
          icon={getIcon(item.value)}
        />
      ))}
    </BottomNavigation>
  );
};

export default MainFooter;
