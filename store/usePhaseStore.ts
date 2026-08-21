import { create } from "zustand";

type PhaseStore = {
  step: "bootup" | "loadingOS" | "desktop";
};

export const usePhaseStore = create<PhaseStore>((set) => ({
  step: "loadingOS",
}));
