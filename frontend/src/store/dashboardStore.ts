import { create } from 'zustand';

interface DashboardState {
  luckyNumbers: number[];
  setLuckyNumbers: (numbers: number[]) => void;
}

export const useDashboardStore = create<DashboardState>((set) => ({
  luckyNumbers: [7, 14, 22, 33, 41],
  setLuckyNumbers: (numbers) => set({ luckyNumbers: numbers }),
}));