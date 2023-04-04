import { createSlice, PayloadAction } from '@reduxjs/toolkit';

interface SettingsState {
  selectedActivities: string[];
  switchToSettings: boolean;
}

const initialState: SettingsState = {
  selectedActivities: [],
  switchToSettings: false,
};

export const settingsSlice = createSlice({
  name: 'settings',
  initialState,
  reducers: {
    setSelectedActivities(state, action: PayloadAction<string[]>) {
      state.selectedActivities = action.payload;
    },
    setSwitchToSettings(state, action: PayloadAction<boolean>) {
      state.switchToSettings = action.payload;
    },
  },
});

export const { setSelectedActivities, setSwitchToSettings } = settingsSlice.actions;

export default settingsSlice.reducer;
