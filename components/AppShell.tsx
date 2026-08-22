"use client";
import { useEffect } from "react";
import { usePhaseStore } from "@/store/usePhaseStore";
import Boot from "./boot/Boot";
import Desktop from "./desktop/Desktop";
import LoadingOS from "./loadingOS/LoadingOS";

export default function AppShell() {
  const { step, setStep } = usePhaseStore();

  useEffect(() => {
    const handleGlobalKeyDown = (e: KeyboardEvent) => {
      if (e.key === "Escape" && step === "bootup") {
        setStep("desktop");
      }
    };

    window.addEventListener("keydown", handleGlobalKeyDown);

    return () => window.removeEventListener("keydown", handleGlobalKeyDown);
  }, [step]);

  return (
    <div>
      {step === "bootup" && <Boot />}
      {step === "loadingOS" && <LoadingOS />}
      {step === "desktop" && <Desktop />}
    </div>
  );
}
