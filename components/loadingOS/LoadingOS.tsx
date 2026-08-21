"use client";
import { LoaderCircle } from "lucide-react";
import { useEffect, useState } from "react";
import { usePhaseStore } from "@/store/usePhaseStore";
import clsx from "clsx";

export default function LoadingOS() {
  const [isReady, setIsReady] = useState<boolean>(false);
  const { setStep } = usePhaseStore();

  useEffect(() => {
    const id = setTimeout(() => {
      setIsReady(true);
    }, 1500);

    const step = setTimeout(() => {
      setStep("desktop");
    }, 4000);

    return () => [id, step].forEach((timer) => clearTimeout(timer));
  }, []);

  return (
    <div
      className="h-screen relative overflow-hidden font-sans p-2 flex items-center justify-center"
      id="loadingos"
    >
      <div className="flex items-center justify-center flex-col gap-20">
        <h1 className="text-8xl font-thin fade-in">Hi, I'm Bart</h1>
        <LoaderCircle
          size={36}
          className={clsx(
            "animate-spin [animation-duration:2000ms] transition-all duration-300",
            isReady ? "opacity-70" : "opacity-0",
          )}
        />
      </div>
    </div>
  );
}
