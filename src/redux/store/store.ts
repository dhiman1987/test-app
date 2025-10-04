import { configureStore } from '@reduxjs/toolkit';
import notificationsReducer from '../reducers/notificationsSlice';

export const store = configureStore({
  reducer: {
    notifications: notificationsReducer,
  },
});

// Infer types for RootState and AppDispatch
export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;
