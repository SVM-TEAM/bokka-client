import { createSlice } from '@reduxjs/toolkit';

interface SnackbarState {
  open: boolean;
  message: string;
}

const initialState: SnackbarState = {
  open: false,
  message: '',
};

const snackBarSlice = createSlice({
  name: 'snackbar',
  initialState,
  reducers: {
    openSnackBar: (state, action) => {
      state.open = true;
      state.message = action.payload;
    },
    closeSnackBar: (state) => {
      state.open = false;
      state.message = '';
    },
  },
});

export const { openSnackBar, closeSnackBar } = snackBarSlice.actions;
export default snackBarSlice;
