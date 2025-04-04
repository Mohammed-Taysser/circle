import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import authReducer from './features/auth.slice';
import userEventReducer from './features/event.slice';
import groupReducer from './features/group.slice';
import profileReducer from './features/profile.slice';
import subscriptionSlice from './features/subscription.slice';
import userReducer from './features/user.slice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
    subscribe: subscriptionSlice.reducer,
    user: userReducer.reducer,
    event: userEventReducer.reducer,
    group: groupReducer.reducer,
  },
});

const ReduxProvider = (props: { children: React.ReactNode }) => (
  <Provider store={store}>{props.children}</Provider>
);

export default store;
export { ReduxProvider };
