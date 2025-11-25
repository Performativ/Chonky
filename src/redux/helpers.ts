import { useDispatch } from 'react-redux';
import type { ChonkyDispatch } from '../types/redux.types';

export const useThunkDispatch = () => useDispatch<ChonkyDispatch>();
