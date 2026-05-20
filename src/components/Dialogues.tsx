import type { ReactNode } from "react";

interface DialoguesProps {
  title: string;
  children: ReactNode;
}

interface LineProps {
  speaker: "A" | "B";
  name?: string;
  children: ReactNode;
}

export function Line({ speaker, name, children }: LineProps) {
  const isA = speaker === "A";

  return (
    <div className={`flex flex-col gap-1 ${isA ? "items-start" : "items-end"}`}>
      {name && (
        <span
          className={`text-xs font-medium px-2 py-0.5 rounded-full ${
            isA
              ? "bg-amber-100 text-amber-800"
              : "bg-blue-100 text-blue-800"
          }`}
        >
          {name}
        </span>
      )}
      <div
        className={`max-w-[80%] rounded-2xl px-4 py-2 text-sm text-body [&_p]:mt-0 ${
          isA
            ? "bg-amber-50 rounded-tl-none"
            : "bg-blue-50 rounded-tr-none"
        }`}
      >
        {children}
      </div>
    </div>
  );
}

export function Dialogues({ title, children }: DialoguesProps) {
  return (
    <div className="my-6 rounded-xl border border-border overflow-hidden">
      <div className="bg-accent px-4 py-2 border-b border-border">
        <span className="text-sm font-medium text-heading">{title}</span>
      </div>
      <div className="p-4 flex flex-col gap-3">{children}</div>
    </div>
  );
}
