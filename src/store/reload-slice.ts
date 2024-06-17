import {createSlice} from '@reduxjs/toolkit';

export const reloadSlice = createSlice({
  name: 'reload',
  initialState: {
    reloadPage: false,
  },
  reducers: {
    forceReload: (state) => {
      state.reloadPage = true;
    },
    stopReload: (state) => {
      state.reloadPage = false;
    },
  },
});

// Action creators are generated for each case reducer function
export const {forceReload, stopReload} = reloadSlice.actions;

export default reloadSlice.reducer;
