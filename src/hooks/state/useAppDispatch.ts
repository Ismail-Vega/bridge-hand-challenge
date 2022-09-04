import { useDispatch } from 'react-redux';
import type { AppDispatch } from '../../state/store/storeTypes';

const useAppDispatch: () => AppDispatch = useDispatch;
export default useAppDispatch;
