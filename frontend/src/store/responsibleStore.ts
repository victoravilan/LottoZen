import { create } from 'zustand';

interface ResponsibleState {
  zenModeActive: boolean;
  toggleZenMode: () => void;
}

export const useResponsibleStore = create<ResponsibleState>((set) => ({
  zenModeActive: false,
  toggleZenMode: () => set((state) => ({ zenModeActive: !state.zenModeActive })),
}));