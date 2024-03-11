import React from 'react';
import { Snackbar } from '@mui/material';
import useAppSelector from 'src/hooks/useAppSelector';
import useAppDispatch from 'src/hooks/useAppDispatch';
import { closeSnackBar } from 'src/stores/notices/snackBarSlice';

const CommonSnackBar = () => {
  const dispatch = useAppDispatch();
  const { open, message } = useAppSelector((state) => state.snackBarReducer);

  const handleClose = () => {
    dispatch(closeSnackBar());
  };

  return (
    <Snackbar
      open={open}
      autoHideDuration={6000}
      onClose={handleClose}
      message={message}
    />
  );
};

export default CommonSnackBar;
