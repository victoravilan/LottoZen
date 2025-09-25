import { create } from 'zustand';

interface AnalysisState {
  lottery: string;
  setLottery: (lottery: string) => void;
}

export const useAnalysisStore = create<AnalysisState>((set) => ({
  lottery: 'euromillions',
  setLottery: (lottery) => set({ lottery }),
}));