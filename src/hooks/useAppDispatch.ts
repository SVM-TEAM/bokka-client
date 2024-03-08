import { useDispatch } from 'react-redux';
import { AppDispatch } from '../stores';

const useAppDispatch = () => useDispatch<AppDispatch>();

export default useAppDispatch;
