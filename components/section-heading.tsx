import { eyebrowClass } from "@/components/ui-styles";

type SectionHeadingProps = {
  index: string;
  label: string;
  title: string;
  aside?: string;
};

export function SectionHeading({
  index,
  label,
  title,
  aside,
}: SectionHeadingProps) {
  return (
    <div className="grid gap-7 lg:grid-cols-[0.22fr_0.78fr]">
      <div className="flex items-center gap-3 self-start pt-2">
        <span className="font-mono text-[10px] text-[#ff7455]">{index}</span>
        <span className="h-px w-5 bg-white/18" />
        <p className={`${eyebrowClass} text-white/55`}>{label}</p>
      </div>
      <div className="flex flex-col items-start justify-between gap-5 sm:flex-row sm:items-end">
        <h2 className="max-w-3xl text-4xl font-medium leading-[1.05] tracking-[-0.045em] text-white sm:text-5xl lg:text-6xl">
          {title}
        </h2>
        {aside && (
          <p className="max-w-[270px] text-sm leading-6 text-white/58">{aside}</p>
        )}
      </div>
    </div>
  );
}
