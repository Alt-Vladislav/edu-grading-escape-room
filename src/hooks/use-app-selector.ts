import { useSelector, TypedUseSelectorHook } from 'react-redux';
import { store } from '../store/store';


export type State = ReturnType<typeof store.getState>;

export const useAppSelector: TypedUseSelectorHook<State> = useSelector;
