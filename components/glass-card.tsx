import type { ComponentPropsWithoutRef, ReactNode } from "react";

type GlassCardProps = ComponentPropsWithoutRef<"div"> & {
  children: ReactNode;
  contentClassName?: string;
  interactive?: boolean;
};

export function GlassCard({
  children,
  className = "",
  contentClassName = "",
  interactive = false,
  ...props
}: GlassCardProps) {
  return (
    <div
      className={[
        "relative isolate overflow-hidden rounded-[28px] border border-white/[0.12]",
        "bg-[#0a0a0c]/68",
        "bg-[linear-gradient(135deg,rgba(255,255,255,0.09),rgba(255,255,255,0.035)_42%,rgba(8,8,10,0.72)_100%)]",
        "shadow-[inset_0_1px_0_rgba(255,255,255,0.16),inset_0_-1px_0_rgba(255,255,255,0.03),0_28px_90px_rgba(0,0,0,0.42)]",
        "backdrop-blur-xl backdrop-saturate-125 sm:backdrop-blur-2xl",
        "before:pointer-events-none before:absolute before:inset-x-7 before:top-0 before:h-px before:bg-gradient-to-r before:from-transparent before:via-white/45 before:to-transparent",
        "after:pointer-events-none after:absolute after:-right-24 after:-top-24 after:h-56 after:w-56 after:rounded-full after:bg-[#ff603e]/[0.07] after:blur-3xl",
        interactive
          ? "transition duration-300 hover:-translate-y-1 hover:border-white/[0.2] hover:shadow-[inset_0_1px_0_rgba(255,255,255,0.2),0_32px_90px_rgba(0,0,0,0.5)]"
          : "",
        className,
      ].join(" ")}
      {...props}
    >
      <div className={`relative z-10 ${contentClassName}`}>{children}</div>
    </div>
  );
}
