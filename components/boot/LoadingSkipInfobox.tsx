"use client";
import { usePhaseStore } from "@/store/usePhaseStore";

export default function LoadingSkipInfobox() {
  const { setStep } = usePhaseStore();
  return (
    <div className="absolute bottom-2 right-4">
      <div className="hidden lg:block">Press ESC to skip</div>
      <button
        onClick={() => setStep("desktop")}
        style={{ border: "1px solid #333" }}
        className="p-2 lg:hidden"
      >
        Skip loading animation
      </button>
    </div>
  );
}
