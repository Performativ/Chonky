import { useDispatch } from 'react-redux';
import { ChonkyDispatch } from '../types/redux.types';

export const useThunkDispatch = () => useDispatch<ChonkyDispatch>();
