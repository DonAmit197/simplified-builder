import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

type ThemeState = {
  useDarkMode: boolean;
  title: string;
  setLightMode: () => void;
  setDarkMode: () => void;
  setTitle: (title: string) => void;
};

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        title: '',
        useDarkMode: false,
        setDarkMode: () => set({useDarkMode: true}),
        setLightMode: () => set({useDarkMode: false}),
        setTitle: (title: string) => set({title: title}),
      }),
      {
        name: 'builder-theme-storage',
      }
    )
  )
);
