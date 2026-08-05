"use client";
import { useState, useEffect } from "react";

export default function TasbarDateTime() {
  const [time, setTime] = useState<string | null>(null);

  const date = new Date().toLocaleDateString("en-GB");

  useEffect(() => {
    const formatTime = () =>
      new Date().toLocaleTimeString([], {
        hour: "2-digit",
        minute: "2-digit",
      });
    setTime(formatTime());

    const timer = setInterval(() => {
      setTime(formatTime());
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  if (time === null) return <span>Loading...</span>;
  return (
    <div className="h-3/4 aspect-square flex flex-col items-end text-xs justify-center px-2 cursor-pointer hover:bg-[#222] hover:outline-1 hover:outline-[#99999940] hover:rounded-sm">
      <div>{time}</div>
      <div>{date}</div>
    </div>
  );
}
