import { create } from 'zustand';

interface User {
  id: number;
  email: string;
  name: string;
  birth_date: string | null;
}

interface UserState {
  user: User | null;
  setUser: (user: User) => void;
}

export const useUserStore = create<UserState>((set) => ({
  user: null,
  setUser: (user) => set({ user }),
}));