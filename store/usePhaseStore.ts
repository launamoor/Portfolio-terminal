import { create } from "zustand";

type Phase = "bootup" | "loadingOS" | "desktop";

type PhaseStore = {
  step: Phase;
  setStep: (step: Phase) => void;
};

export const usePhaseStore = create<PhaseStore>((set) => ({
  step: "desktop",
  setStep: (step) => set({ step: step }),
}));
