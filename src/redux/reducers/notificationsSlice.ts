import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState: string[] = [];

const notificationsSlice = createSlice({
  name: 'notifications',
  initialState,
  reducers: {
    addNotification: (state, action: PayloadAction<string>) => {
      state.push(action.payload);
    },
    clearNotifications: () => {
      return [];
    },
  },
});

export const { addNotification, clearNotifications } = notificationsSlice.actions;
export default notificationsSlice.reducer;