import {create} from 'zustand';
import {devtools, persist} from 'zustand/middleware';

type FormState = {
  id: number;
  name: string;
  content: string;
  setId: (id: number) => void;
  setName: (name: string) => void;
  setContent: (content: string) => void;
};

export const useFormStore = create<FormState>()(
  devtools(
    persist(
      (set) => ({
        id: 0,
        name: '',
        content: '',
        setId: (id: number) => set({id: id}),
        setName: (name: string) => set({name: name}),
        setContent: (content: string) => set({content: content}),
      }),
      {
        name: 'builder-form-storage',
      }
    )
  )
);
