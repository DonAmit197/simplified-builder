import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

type AuthState = {
  isAuthenticated: boolean;
  isOnTrial: boolean;
  userName: string;
  email: string;
  login: (userName: string, email: string, onTrial: boolean) => void;
  logout: () => void;
};

export const useAuthStore = create<AuthState>()(
  devtools(
    persist(
      (set) => ({
        isAuthenticated: false,
        isOnTrial: true,
        userName: '',
        email: '',
        login: (userName, email, onTrial) =>
          set({
            isAuthenticated: true,
            isOnTrial: onTrial,
            userName: userName,
            email: email,
          }),
        logout: () =>
          set({
            isAuthenticated: false,
            isOnTrial: true,
            userName: '',
            email: '',
          }),
      }),
      {
        name: 'builder-auth-storage',
      }
    )
  )
);
