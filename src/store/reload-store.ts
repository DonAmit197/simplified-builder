import {RoutesEnum} from 'src/routes.tsx';
import {create} from 'zustand';

type ReloadState = {
  reloadPage?: RoutesEnum;
  forceReload: (page: RoutesEnum) => void;
  stopReload: () => void;
};

export const useReloadStore = create<ReloadState>((set) => ({
  reloadPage: undefined,
  forceReload: (page: RoutesEnum) => set({reloadPage: page}),
  stopReload: () => set({reloadPage: undefined}),
}));
