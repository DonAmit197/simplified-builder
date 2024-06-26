import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

type FormState = {
  id: number;
  name: string;
  url: string;
  content: string;
  isPublic: boolean;
  setId: (id: number) => void;
  setName: (name: string) => void;
  setUrl: (url: string) => void;
  setContent: (content: string) => void;
  setPublic: (isPublic: boolean) => void;
};

export const useFormStore = create<FormState>()(
  devtools(
    persist(
      (set) => ({
        id: 0,
        name: '',
        url: '',
        content: '',
        isPublic: false,
        setId: (id: number) => set({id: id}),
        setName: (name: string) => set({name: name}),
        setUrl: (url: string) => set({url: url}),
        setContent: (content: string) => set({content: content}),
        setPublic: (isPublic: boolean) => set({isPublic: isPublic}),
      }),
      {
        name: 'builder-form-storage',
      }
    )
  )
);
