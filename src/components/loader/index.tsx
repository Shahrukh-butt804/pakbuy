import { useEffect, useState } from "react";

const STATUS_MESSAGES = [
  "Loading your experience…",
  "Getting things ready…",
  "Almost there…",
];

export const Loader = ({ fullScreen = true }: { fullScreen?: boolean }) => {
  const [statusIndex, setStatusIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setStatusIndex((i) => (i + 1) % STATUS_MESSAGES.length);
    }, 1400);
    return () => clearInterval(interval);
  }, []);

  return (
    <div
      role="status"
      aria-live="polite"
      className={
        fullScreen
          ? "fixed inset-0 z-[999] flex items-center justify-center bg-[#0b0b0b]/95 backdrop-blur-sm"
          : "flex items-center justify-center py-16"
      }
    >
      <div className="flex flex-col items-center gap-6">
        {/* Orbit + bot */}
        <div className="relative flex h-24 w-24 items-center justify-center motion-reduce:animate-none">
          {/* Rotating gradient ring */}
          <div
            className="absolute inset-0 rounded-full motion-safe:animate-[spin_2.4s_linear_infinite]"
            style={{
              background:
                "conic-gradient(from 0deg, #F26B8A 0%, #FDBB74 35%, transparent 65%, transparent 100%)",
              WebkitMask:
                "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
              mask: "radial-gradient(farthest-side, transparent calc(100% - 3px), #000 calc(100% - 3px))",
            }}
          />

          {/* Soft glow */}
          <div
            className="absolute inset-2 rounded-full opacity-60 blur-md motion-safe:animate-pulse"
            style={{
              background: "radial-gradient(circle, #d17f89 0%, transparent 70%)",
            }}
          />

          {/* Bot head */}
          <div className="relative flex h-14 w-14 items-center justify-center rounded-full border border-white/10 bg-[#141414] shadow-[0_0_20px_-4px_rgba(242,107,138,0.6)]">
            <span className="absolute -top-2 left-1/2 h-2 w-2 -translate-x-1/2 rounded-full bg-[#F26B8A]" />
            <span className="absolute -top-3.5 left-1/2 h-2 w-[2px] -translate-x-1/2 bg-white/20" />
            <div className="flex items-center gap-2">
              <span className="h-2 w-2 rounded-full bg-[#F26B8A] motion-safe:animate-pulse" />
              <span
                className="h-2 w-2 rounded-full bg-[#F26B8A] motion-safe:animate-pulse"
                style={{ animationDelay: "0.3s" }}
              />
            </div>
          </div>
        </div>

        {/* Cycling status text */}
        <div className="flex flex-col items-center gap-2">
          <span className="bg-gradient-to-r from-[#F26B8A] via-[#F4845F] to-[#FDBB74] bg-clip-text text-sm font-semibold uppercase tracking-wide text-transparent">
            PakBuy AI
          </span>
          <p
            key={statusIndex}
            className="min-w-[180px] text-center text-sm text-white/60 motion-safe:animate-[fadeIn_0.3s_ease]"
          >
            {STATUS_MESSAGES[statusIndex]}
          </p>
        </div>
      </div>

      <style>{`
        @keyframes fadeIn {
          from { opacity: 0; transform: translateY(4px); }
          to { opacity: 1; transform: translateY(0); }
        }
      `}</style>
    </div>
  );
};