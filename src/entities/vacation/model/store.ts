import { create } from "zustand";

interface VacationState {
  name: string;
  country: string;
  resort: string;
  program: string;

  setName: (name: string) => void;
  setCountry: (country: string) => void;
  setResort: (resort: string) => void;
  setProgram: (program: string) => void;

  reset: () => void;
}

export const useVacationStore = create<VacationState>((set) => ({
  name: "",
  country: "",
  resort: "",
  program: "",

  setName: (name) => set({ name }),

  setCountry: (country) =>
    set({
      country,
      resort: "",
      program: "",
    }),

  setResort: (resort) =>
    set({
      resort,
      program: "",
    }),

  setProgram: (program) => set({ program }),

  reset: () =>
    set({
      name: "",
      country: "",
      resort: "",
      program: "",
    }),
}));