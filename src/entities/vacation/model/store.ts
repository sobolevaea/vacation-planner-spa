import { create } from "zustand";
import type { VacationState } from "./types";

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