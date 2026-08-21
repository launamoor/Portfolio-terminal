"use client";

import { useState, useEffect } from "react";
import { TASKBAR_HEIGHT } from "./Taskbar";
import { X } from "lucide-react";
import { useDesktopStore } from "@/store/useDesktopStore";

const WEEKDAYS: string[] = [
  "Sunday",
  "Monday",
  "Tuesday",
  "Wednesday",
  "Thursday",
  "Friday",
  "Saturday",
];
const WEEKDAYS_SHORT: string[] = ["Mo", "Tu", "We", "Th", "Fr", "Sa", "Su"];

const MONTHS: string[] = [
  "January",
  "February",
  "March",
  "April",
  "May",
  "June",
  "July",
  "August",
  "September",
  "October",
  "November",
  "December",
];

type MonthType = "current" | "previous";

function getNumberOfDaysInMonth(now: Date, month: MonthType): number {
  const daysInMonth: number = new Date(
    now.getFullYear(),
    month === "current" ? now.getMonth() + 1 : now.getMonth(),
    0,
  ).getDate();

  return daysInMonth;
}

function generatePreviousMonthDays(now: Date): number[] {
  const previousMonthDays: number[] = [];
  const numberOfDays: number = getNumberOfDaysInMonth(now, "previous");
  const monthStartDate = new Date(
    now.getFullYear(),
    now.getMonth(),
    1,
  ).getDay();
  const leadingDays = (monthStartDate + 6) % 7;

  for (let i = 0; i < leadingDays; i++) {
    previousMonthDays.push(numberOfDays - i);
  }

  return previousMonthDays.reverse();
}

export default function Calendar() {
  const { calendarOpened, toggleCalendar } = useDesktopStore();
  const [now, setNow] = useState<Date | null>(null);

  useEffect(() => {
    setNow(new Date());
  }, []);

  if (!now) return null;

  const CURRENT_DAY_NUMBER = now.getDay();
  const CURRENT_DAY = now.getDate();
  const CURRENT_MONTH = now.getMonth();
  const CURRENT_YEAR = now.getFullYear();

  const currentMonthsDays: number[] = Array.from(
    { length: getNumberOfDaysInMonth(now, "current") },
    (_, i) => i + 1,
  );

  const monthLastDay = new Date(
    CURRENT_YEAR,
    CURRENT_MONTH,
    getNumberOfDaysInMonth(now, "current"),
  ).getDay();

  const nextMonthDaysToDisplay: number[] = Array.from(
    { length: 7 - monthLastDay },
    (_, i) => i + 1,
  );

  return (
    <div
      style={{
        bottom: TASKBAR_HEIGHT + 20,
        right: calendarOpened ? 20 : -500,
        zIndex: calendarOpened ? 999 : 0,
        visibility: !calendarOpened ? "hidden" : "visible",
        userSelect: !calendarOpened ? "none" : "all",
      }}
      className="absolute bg-[#222] rounded-lg overflow-hidden transition-all duration-200"
    >
      <div className="p-4 bg-[#111] flex items-center justify-between">
        <div>{`${WEEKDAYS[CURRENT_DAY_NUMBER]} ${CURRENT_DAY} ${MONTHS[CURRENT_MONTH]}`}</div>
        <button
          onClick={toggleCalendar}
          className="rounded-md bg-[#222] hover:bg-[#333] select-none"
        >
          <X size={20} />
        </button>
      </div>
      <div className="p-4 flex flex-col gap-6">
        <div>{`${MONTHS[CURRENT_MONTH]} ${CURRENT_YEAR}`}</div>
        <div className="grid grid-cols-7 grid-rows-7 text-sm gap-2 justify-items-center select-none">
          {WEEKDAYS_SHORT.map((day, i) => (
            <div className="text-sm px-2 py-1" key={i}>
              {day}
            </div>
          ))}

          {generatePreviousMonthDays(now).map((day, i) => (
            <div key={`prevMonthDay: ${i}`} className="text-[#666] px-2 py-1">
              {day}
            </div>
          ))}

          {currentMonthsDays.map((day, i) => {
            if (day === CURRENT_DAY) {
              return (
                <div
                  key={`currMonthDay: ${i}`}
                  className="bg-[#666] px-2 py-1 rounded-lg"
                >
                  {day}
                </div>
              );
            }
            return (
              <div key={`currMonthDay: ${i}`} className="px-2 py-1">
                {day}
              </div>
            );
          })}

          {nextMonthDaysToDisplay.map((day, i) => (
            <div key={`nextMonthDay: ${i}`} className="text-[#666] px-2 py-1">
              {day}
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
