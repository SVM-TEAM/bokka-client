import { Box } from '@mui/material';
import { useEffect, useState } from 'react';
import { Outlet } from 'react-router-dom';
import PopUpModal from 'src/components/molecules/modals/PopUpModal';
import useAppSelector from 'src/hooks/useAppSelector';

const HomeMain = () => {
  const [modalOpen, setModalOpen] = useState<boolean>(true);
  const userId = useAppSelector((state) => state.userReducer.userId);
  const message = `안녕하세요. ${userId} 님.`;

  const handleModalClose = () => setModalOpen(false);
  useEffect(() => {
    const timer = setTimeout(() => handleModalClose(), 1500);
    return () => clearTimeout(timer);
  }, []);

  return (
    <Box>
      <PopUpModal
        open={modalOpen}
        handleClose={handleModalClose}
        content={message}
      />
      <Outlet />
    </Box>
  );
};

export default HomeMain;
