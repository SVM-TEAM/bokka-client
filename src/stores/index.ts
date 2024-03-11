import { combineReducers, configureStore } from '@reduxjs/toolkit';
import snackbarSlice from './notices/snackBarSlice';
import userSlice from './users/userSlice';

const rootReducer = combineReducers({
  snackBarReducer: snackbarSlice.reducer,
  userReducer: userSlice.reducer,
});

const store = configureStore({ reducer: rootReducer });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;
