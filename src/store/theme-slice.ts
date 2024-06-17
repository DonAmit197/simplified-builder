import {createSlice} from '@reduxjs/toolkit';

export const themeSlice = createSlice({
  name: 'theme',
  initialState: {
    darkMode: false,
  },
  reducers: {
    setLightMode: (state) => {
      state.darkMode = false;
    },
    setDarkMode: (state) => {
      state.darkMode = true;
    },
  },
});

// Action creators are generated for each case reducer function
export const {setDarkMode, setLightMode} = themeSlice.actions;

export default themeSlice.reducer;
