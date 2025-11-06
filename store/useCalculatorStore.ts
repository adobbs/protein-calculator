import { create } from 'zustand';

export type WeightUnit = 'lbs' | 'kg';

interface CalculatorState {
  weight: number;
  unit: WeightUnit;
  setWeight: (weight: number) => void;
  setUnit: (unit: WeightUnit) => void;
}

export const useCalculatorStore = create<CalculatorState>((set) => ({
  weight: 0,
  unit: 'lbs',
  setWeight: (weight) => set({ weight }),
  setUnit: (unit) => set({ unit }),
}));
