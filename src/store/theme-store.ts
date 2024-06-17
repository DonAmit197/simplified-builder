import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

type ThemeState = {
  useDarkMode: boolean;
  setLightMode: () => void;
  setDarkMode: () => void;
};

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        useDarkMode: false,
        setDarkMode: () => set({useDarkMode: true}),
        setLightMode: () => set({useDarkMode: false}),
      }),
      {
        name: 'builder-theme-storage',
      }
    )
  )
);
