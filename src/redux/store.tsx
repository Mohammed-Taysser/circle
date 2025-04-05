import { configureStore } from '@reduxjs/toolkit';
import React from 'react';
import { Provider } from 'react-redux';
import authReducer from './features/auth.slice';
import badgeReducer from './features/badge.slice';
import userEventReducer from './features/event.slice';
import groupReducer from './features/group.slice';
import profileReducer from './features/profile.slice';
import subscriptionSlice from './features/subscription.slice';
import userReducer from './features/user.slice';
import reviewReducer from './features/review.slice';

const store = configureStore({
  reducer: {
    profile: profileReducer,
    auth: authReducer,
    subscriptions: subscriptionSlice.reducer,
    users: userReducer.reducer,
    events: userEventReducer.reducer,
    groups: groupReducer.reducer,
    badges: badgeReducer.reducer,
    reviews: reviewReducer.reducer,
  },
});

const ReduxProvider = (props: { children: React.ReactNode }) => (
  <Provider store={store}>{props.children}</Provider>
);

export default store;
export { ReduxProvider };
