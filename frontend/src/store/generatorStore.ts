import { create } from 'zustand';

interface GeneratorState {
  mode: 'numerological' | 'random' | 'manual' | null;
  setMode: (mode: 'numerological' | 'random' | 'manual') => void;
}

export const useGeneratorStore = create<GeneratorState>((set) => ({
  mode: null,
  setMode: (mode) => set({ mode }),
}));