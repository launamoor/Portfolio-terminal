"use client";
import { usePhaseStore } from "@/store/usePhaseStore";
import Boot from "./boot/Boot";
import Desktop from "./desktop/Desktop";
import LoadingOS from "./loadingOS/LoadingOS";

export default function AppShell() {
  const { step } = usePhaseStore();
  return (
    <div>
      {step === "bootup" && <Boot />}
      {step === "loadingOS" && <LoadingOS />}
      {step === "desktop" && <Desktop />}
    </div>
  );
}
