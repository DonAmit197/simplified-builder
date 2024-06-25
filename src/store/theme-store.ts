import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

type ThemeState = {
  useDarkMode: boolean;
  hasSubMenu: boolean;
  title: string;
  backUrl: string;
  setLightMode: () => void;
  setDarkMode: () => void;
  setHasSubMenu: (hasSubMenu: boolean) => void;
  setTitle: (title: string) => void;
  setBackUrl: (url: string) => void;
};

export const useThemeStore = create<ThemeState>()(
  devtools(
    persist(
      (set) => ({
        title: '',
        backUrl: '',
        useDarkMode: false,
        hasSubMenu: false,
        setDarkMode: () => set({useDarkMode: true}),
        setLightMode: () => set({useDarkMode: false}),
        setHasSubMenu: (hasSubMenu: boolean) => set({hasSubMenu: hasSubMenu}),
        setTitle: (title: string) => set({title: title}),
        setBackUrl: (backUrl: string) => set({backUrl: backUrl}),
      }),
      {
        name: 'builder-theme-storage',
      }
    )
  )
);
