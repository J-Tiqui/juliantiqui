const readings = [
  { label: "Automation", value: "92" },
  { label: "Robotics", value: "86" },
  { label: "Software", value: "95" },
];

export function SignalPanel() {
  return (
    <div
      className="relative mx-auto w-full max-w-[470px] overflow-hidden rounded-[24px] border border-white/10 bg-[#0b0b0d]/88 p-5 shadow-[0_40px_100px_rgba(0,0,0,0.55)] sm:p-7"
      aria-label="Focus area visualization"
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_84%_8%,rgba(255,87,49,0.12),transparent_30%)]" />
      <div className="absolute inset-x-0 top-0 h-20 bg-gradient-to-b from-transparent via-white/[0.025] to-transparent" />
      <div className="relative">
        <div className="flex items-start justify-between">
          <div>
            <p className="font-mono text-[9px] uppercase tracking-[0.2em] text-white/28">
              System profile
            </p>
            <p className="mt-2 text-sm font-medium text-white/76">JT / Engineering</p>
          </div>
          <div className="flex items-center gap-2 rounded-full border border-white/8 bg-white/[0.025] px-3 py-1.5">
            <span className="h-1.5 w-1.5 rounded-full bg-[#ff5b39] shadow-[0_0_9px_#ff5b39]" />
            <span className="font-mono text-[8px] uppercase tracking-[0.16em] text-white/40">
              Active
            </span>
          </div>
        </div>

        <div className="relative my-10 flex h-[180px] items-center justify-center">
          <div className="absolute h-[176px] w-[176px] animate-spin rounded-full bg-[conic-gradient(from_218deg,rgba(255,90,55,0.95)_0deg,rgba(255,148,83,0.4)_76deg,rgba(255,255,255,0.08)_78deg,rgba(255,255,255,0.02)_230deg,rgba(255,81,47,0.5)_312deg,rgba(255,90,55,0.95)_360deg)] p-px [animation-duration:24s] [mask-composite:exclude] [mask:linear-gradient(#000_0_0)_content-box,linear-gradient(#000_0_0)]" />
          <div className="absolute h-[132px] w-[132px] rounded-full border border-dashed border-white/10" />
          <div className="absolute h-[86px] w-[86px] rounded-full border border-[#ff5e3b]/24 bg-[#ff5e3b]/[0.035] shadow-[inset_0_0_35px_rgba(255,74,43,0.08),0_0_40px_rgba(255,74,43,0.05)]" />
          <div className="text-center">
            <p className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/28">
              Core
            </p>
            <p className="mt-1 text-2xl font-medium tracking-[-0.04em] text-white">
              Build
            </p>
          </div>
          <span className="absolute left-1/2 top-0 h-1.5 w-1.5 -translate-x-1/2 rounded-full bg-[#ff754f] shadow-[0_0_12px_#ff754f]" />
        </div>

        <div className="grid grid-cols-3 border-y border-white/8 py-5">
          {readings.map((reading, index) => (
            <div
              className={`text-center ${index !== readings.length - 1 ? "border-r border-white/8" : ""}`}
              key={reading.label}
            >
              <p className="font-mono text-lg text-white/80">
                {reading.value}
                <span className="text-[9px] text-[#ff7455]">%</span>
              </p>
              <p className="mt-1 font-mono text-[7px] uppercase tracking-[0.14em] text-white/28">
                {reading.label}
              </p>
            </div>
          ))}
        </div>

        <div className="mt-5 flex items-center justify-between font-mono text-[8px] uppercase tracking-[0.14em] text-white/22">
          <span>Precision / 01</span>
          <span>Iteration / Continuous</span>
        </div>
      </div>
    </div>
  );
}
