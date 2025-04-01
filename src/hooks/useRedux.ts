import type { TypedUseSelectorHook } from 'react-redux';
import { useDispatch, useSelector } from 'react-redux';
import store from '../redux/store';

type RootState = ReturnType<typeof store.getState>;
type AppDispatch = typeof store.dispatch;

// Use throughout your app instead of plain `useDispatch` and `useSelector`
const useAppDispatch: () => AppDispatch = useDispatch;
const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

const selectProfile = (state: RootState) => state.profile;
const selectAuth = (state: RootState) => state.auth;
const selectSubscribe = (state: RootState) => state.subscribe;

export {
  selectAuth,
  selectSubscribe,
  useAppDispatch,
  useAppSelector,
  selectProfile,
};
export type { RootState };
