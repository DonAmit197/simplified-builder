import {create} from 'zustand';

type ReloadState = {
  reloadPage: boolean;
  forceReload: () => void;
  stopReload: () => void;
};

export const useReloadStore = create<ReloadState>((set) => ({
  reloadPage: false,
  forceReload: () => set({reloadPage: true}),
  stopReload: () => set({reloadPage: false}),
}));
