import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

type LayoutState = {
  useDarkMode: boolean;
  hasSubMenu: boolean;
  collapsedMenu: boolean;
  title: string;
  backUrl?: string;
  setMode: (useDarkMode: boolean) => void;
  setCollapsedMenu: (collapsedMenu: boolean) => void;
  setInitialState: (title: string, hasSubMenu?: boolean, backUrl?: string) => void;
};

export const useLayoutStore = create<LayoutState>()(
  devtools(
    persist(
      (set) => ({
        title: '',
        backUrl: undefined,
        useDarkMode: false,
        hasSubMenu: false,
        collapsedMenu: false,
        setMode: (useDarkMode: boolean) => set({useDarkMode: useDarkMode}),
        setCollapsedMenu: (collapsedMenu: boolean) => set({collapsedMenu: collapsedMenu}),
        setInitialState: (title: string, hasSubMenu?: boolean, backUrl?: string) =>
          set({
            title: title,
            hasSubMenu: hasSubMenu ?? false,
            backUrl: backUrl,
          }),
      }),
      {
        name: 'builder-layout-storage',
      }
    )
  )
);
