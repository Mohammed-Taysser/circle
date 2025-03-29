import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import authReducer from './features/auth.slice';
import profileReducer from './features/profile.slice';
import subscribeReducer from './features/subscribe.slice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
    subscribe: subscribeReducer,
  },
});

const ReduxProvider = (props: { children: React.ReactNode }) => (
  <Provider store={store}>{props.children}</Provider>
);

export default store;
export { ReduxProvider };
