import { create } from "zustand";
import { LucideIcon, Trash2 } from "lucide-react";

type LucideIconItem = {
  id: string;
  type: "lucide";
  icon: LucideIcon;
  text: string;
};

type ImageIconItem = {
  id: string;
  type: "image";
  src: string;
  alt: string;
  text: string;
};

export type TaskbarIconItem = {
  id: string;
  src: string;
  alt: string;
  title: string;
};

export type DesktopIconItem = LucideIconItem | ImageIconItem;

export type DesktopStore = {
  desktopIcons: DesktopIconItem[];
  taskbarIcons: TaskbarIconItem[];
  selectedIconId: string | null;
  highlightedIconId: string | null;
  calendarOpened: boolean;
  selectIcon: (id: string | null) => void;
  highlightIcon: (id: string | null) => void;
  toggleCalendar: () => void;
  hideCalendar: () => void;
};

export const useDesktopStore = create<DesktopStore>((set) => ({
  desktopIcons: [
    {
      id: "bin",
      type: "lucide",
      icon: Trash2,
      text: "Recycle Bin",
    },
    {
      id: "vc",
      type: "image",
      src: "/assets/vc.png",
      alt: "GTA VC Icon",
      text: "Best GTA ever made",
    },
    {
      id: "cs",
      type: "image",
      src: "/assets/cs.png",
      alt: "Counter Strike Icon",
      text: "CS 1.6",
    },
    {
      id: "tibia",
      type: "image",
      src: "/assets/tibia.png",
      alt: "Tibia Icon",
      text: "Tibia",
    },
    {
      id: "winamp",
      type: "image",
      src: "/assets/winamp.png",
      alt: "Winamp Icon",
      text: "Winamp",
    },
  ],
  taskbarIcons: [
    {
      id: "duckduckgo",
      src: "/assets/duckduckgo.png",
      alt: "DuckDuckGo Icon",
      title: "DuckDuckGo",
    },
    {
      id: "teams",
      src: "/assets/teams.png",
      alt: "Teams Icon",
      title: "Teams",
    },
    {
      id: "terminal",
      src: "/assets/terminal.png",
      alt: "Terminal Icon",
      title: "Terminal",
    },
  ],
  selectedIconId: null,
  highlightedIconId: null,
  selectIcon: (id) => set({ selectedIconId: id }),
  highlightIcon: (id) => set({ highlightedIconId: id }),
  calendarOpened: false,
  toggleCalendar: () =>
    set((state) => ({ calendarOpened: !state.calendarOpened })),
  hideCalendar: () => set({ calendarOpened: false }),
}));
