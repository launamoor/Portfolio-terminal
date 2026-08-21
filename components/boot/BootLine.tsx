import type { BootLine } from "./Boot";
import { useEffect, useState } from "react";
import clsx from "clsx";

type LineProps = {
  id: string;
  text: string;
  loaded: boolean;
};

export default function BootLine({ id, text, loaded }: LineProps) {
  const [loadingDots, setLoadingDots] = useState<string>("");

  useEffect(() => {
    const LIMIT = 2;
    const id = setInterval(() => {
      setLoadingDots((prev) => (prev.length > LIMIT ? "" : (prev += ".")));
    }, 200);

    return () => clearInterval(id);
  }, []);

  return (
    <div className="flex gap-2">
      <div className="whitespace-pre">{loaded ? text.padEnd(50) : text}</div>
      <div>{!loaded && text !== "Welcome, guest." && loadingDots}</div>
      <div
        className={clsx(
          "font-bold",
          id === "imposter" ? "text-amber-400" : "text-green-600",
        )}
      >
        {loaded && id === "imposter" && "[WARNING] Ignored"}
        {loaded && id !== "guest" && id !== "imposter" && "OK"}
      </div>
    </div>
  );
}
