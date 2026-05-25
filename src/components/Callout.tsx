import type { ReactNode } from "react";

interface CalloutProps {
  children: ReactNode;
}

function NoteIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <circle cx="12" cy="12" r="10" />
      <line x1="12" y1="8" x2="12" y2="12" />
      <line x1="12" y1="16" x2="12.01" y2="16" />
    </svg>
  );
}

function TipIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M12 2a7 7 0 0 1 7 7c0 2.38-1.19 4.47-3 5.74V17a2 2 0 0 1-2 2h-4a2 2 0 0 1-2-2v-2.26C6.19 13.47 5 11.38 5 9a7 7 0 0 1 7-7z" />
      <line x1="10" y1="21" x2="14" y2="21" />
    </svg>
  );
}

function WarnIcon() {
  return (
    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
      <path d="M10.29 3.86L1.82 18a2 2 0 0 0 1.71 3h16.94a2 2 0 0 0 1.71-3L13.71 3.86a2 2 0 0 0-3.42 0z" />
      <line x1="12" y1="9" x2="12" y2="13" />
      <line x1="12" y1="17" x2="12.01" y2="17" />
    </svg>
  );
}

export function Note({ children }: CalloutProps) {
  return (
    <div className="my-4 rounded-r-lg border-l-4 border-blue-300 bg-blue-50 px-4 py-3">
      <div className="mb-1 flex items-center gap-1.5 text-sm font-semibold text-blue-700">
        <NoteIcon />
        <span>Note</span>
      </div>
      <div className="text-sm text-blue-900 [&_p]:mt-0 [&_p]:mb-0">{children}</div>
    </div>
  );
}

export function Tip({ children }: CalloutProps) {
  return (
    <div className="my-4 rounded-r-lg border-l-4 border-green-300 bg-green-50 px-4 py-3">
      <div className="mb-1 flex items-center gap-1.5 text-sm font-semibold text-green-700">
        <TipIcon />
        <span>Tip</span>
      </div>
      <div className="text-sm text-green-900 [&_p]:mt-0 [&_p]:mb-0">{children}</div>
    </div>
  );
}

export function Warn({ children }: CalloutProps) {
  return (
    <div className="my-4 rounded-r-lg border-l-4 border-amber-300 bg-amber-50 px-4 py-3">
      <div className="mb-1 flex items-center gap-1.5 text-sm font-semibold text-amber-700">
        <WarnIcon />
        <span>Warning</span>
      </div>
      <div className="text-sm text-amber-900 [&_p]:mt-0 [&_p]:mb-0">{children}</div>
    </div>
  );
}
