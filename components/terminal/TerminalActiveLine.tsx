import { useRef, useEffect } from "react";

export default function TerminalActiveLine() {
  const inputRef = useRef<HTMLInputElement>(null);

  const focusInput = () => {
    inputRef.current?.focus();
  };

  useEffect(() => {
    focusInput();
  }, []);

  return (
    <div className="flex gap-2 select-none">
      guest@portfolio:~${" "}
      <span>
        <input ref={inputRef} type="text" className="w-full" />
      </span>
    </div>
  );
}
