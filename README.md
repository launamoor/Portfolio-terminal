# Port Terminal

A portfolio website, reimagined as a fake operating system.

Instead of a typical scroll-of-cards portfolio, this site boots up like an OS, drops you onto a desktop, and opens a fully interactive terminal — the only real way to explore projects, skills, and contact info.

## Live demo

NOT LIVE YET

## Features

- **Boot sequence** — a skippable boot log on first load
- **Desktop environment** — background, selectable/highlightable desktop icons (Lucide icons or custom images)
- **Taskbar** — app icons, a live clock, and a calendar popover showing the current month
- **Terminal window**
  - Real command parser (not hardcoded if/else) with a registry-based command system
  - Fake filesystem (`ls`, `cd`, `cat`) used to browse projects, about info, and resume
  - Command history via up/down arrows
  - `whoami`, `help`, `skills`, `open <link>`, and other custom commands
- **Windows-style interactions**
  - Terminal "jumps out" of the taskbar on open (genie/minimize-restore effect via Framer Motion)
  - Double-clicking a desktop icon triggers a toast
- **Responsive** — a separate, simplified full-screen terminal experience on mobile (no desktop chrome, no taskbar)

## Tech stack

- [Next.js](https://nextjs.org/) (App Router) + TypeScript
- [Tailwind CSS](https://tailwindcss.com/) v4
- [Zustand](https://github.com/pmndrs/zustand) for state management (desktop, terminal, UI phase)
- [Framer Motion](https://www.framer.com/motion/) for window animations
- [Lucide React](https://lucide.dev/) for icons
- [react-toastify](https://fkhadra.github.io/react-toastify/) for toast notifications

## Available terminal commands

| Command             | Description                                  |
| ------------------- | -------------------------------------------- |
| `help`              | List all available commands                  |
| `whoami`            | Short bio                                    |
| `ls` / `cd` / `cat` | Browse the fake filesystem                   |
| `skills`            | List skills, optionally filtered             |
| `open <target>`     | Open external links (GitHub, LinkedIn, etc.) |
| `clear`             | Clear the terminal output                    |

## Roadmap / ideas

- [ ] Fake browser window (curated fake pages, not live iframes)
- [ ] Tab-completion for commands and filenames
- [ ] Theme switching (`theme dark|light|matrix`)
- [ ] More desktop icon interactions

## License

MIT
