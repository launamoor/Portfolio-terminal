"use client";
import { useState, useEffect } from "react";
import BootLine from "./BootLine";
import { usePhaseStore } from "@/store/usePhaseStore";
import LoadingSkipInfobox from "./LoadingSkipInfobox";

export type BootLine = {
  id: string;
  text: string;
  delay: number;
  loaded: boolean;
};

export default function Boot() {
  const [visibleLines, setVisibleLines] = useState<BootLine[]>([]);

  const { setStep } = usePhaseStore();

  const loadingLines = [
    { id: "1", text: "Initializing kernel", delay: 0, loaded: false },
    { id: "2", text: "Mounting filesystem", delay: 1400, loaded: false },
    {
      id: "3",
      text: "Searching for missing semicolon",
      delay: 200,
      loaded: false,
    },
    { id: "4", text: "Loading personality module", delay: 300, loaded: false },
    {
      id: "5",
      text: "Calibrating keyboard shortcuts",
      delay: 100,
      loaded: false,
    },
    {
      id: "imposter",
      text: "Resolving imposter syndrome",
      delay: 2500,
      loaded: false,
    },
    {
      id: "7",
      text: "Compiling years of Stack Overflow tabs",
      delay: 500,
      loaded: false,
    },
    { id: "8", text: "Starting terminal shell", delay: 1000, loaded: false },
    { id: "9", text: "Loading portfolio.exe", delay: 500, loaded: false },
    { id: "guest", text: "Welcome, guest.", delay: 3000, loaded: false },
  ];

  let runningTotal: number = 0;
  const cumulativeDelayLines: BootLine[] = loadingLines.map((line) => ({
    id: line.id,
    text: line.text,
    delay: (runningTotal += line.delay),
    loaded: false,
  }));

  const cumulativeDelay: number = loadingLines
    .map((line) => line.delay)
    .reduce((acc, curr) => curr + acc);

  const LAST_LINE_FLIP_DELAY = 300;

  useEffect(() => {
    const timeoutIds: ReturnType<typeof setTimeout>[] = [];

    cumulativeDelayLines.forEach((line, index) => {
      const previousLineId =
        index > 0 ? cumulativeDelayLines[index - 1].text : null;

      const revealId = setTimeout(() => {
        setVisibleLines((prev) => {
          const updated = prev.map((l) =>
            l.text === previousLineId ? { ...l, loaded: true } : l,
          );
          return [...updated, { ...line, loaded: false }];
        });

        // last line has no "next" line to flip it, so it flips itself
        if (index === cumulativeDelayLines.length - 1) {
          const flipId = setTimeout(() => {
            setVisibleLines((prev) =>
              prev.map((l) =>
                l.text === line.text ? { ...l, loaded: true } : l,
              ),
            );
          }, LAST_LINE_FLIP_DELAY);
          timeoutIds.push(flipId);
        }
      }, line.delay);
      timeoutIds.push(revealId);
    });

    const phaseSwitch = setTimeout(() => {
      setStep("loadingOS");
    }, cumulativeDelay + 2000);

    timeoutIds.push(phaseSwitch);

    return () => timeoutIds.forEach((id) => clearTimeout(id));
  }, []);

  return (
    <div
      className="h-screen relative overflow-hidden font-mono p-2"
      id="bootup"
    >
      {visibleLines.map((line) => {
        return (
          <BootLine
            key={line.id}
            id={line.id}
            text={line.text}
            loaded={line.loaded}
          />
        );
      })}
      <LoadingSkipInfobox />
    </div>
  );
}
