import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';

type RootState = ReturnType<typeof store.getState>;
type CrudRootState = Omit<RootState, 'auth' | 'profile'>;
type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

// Generic selector creator
const createSelector = <T>(selector: (state: RootState) => T) => selector;

export { createSelector, useAppDispatch, useAppSelector };
export type { RootState, CrudRootState };
