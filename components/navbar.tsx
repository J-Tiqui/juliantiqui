import { ArrowIcon } from "@/components/icons";
import { shellClass, wordmarkClass } from "@/components/ui-styles";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  return (
    <header className="pointer-events-none fixed inset-x-0 top-3 z-50 sm:top-4">
      <div className={shellClass}>
        <nav
          aria-label="Primary navigation"
          className="pointer-events-auto flex h-14 items-center justify-between rounded-full border border-white/[0.13] bg-[#09090b]/72 px-4 shadow-[inset_0_1px_0_rgba(255,255,255,0.14),0_18px_55px_rgba(0,0,0,0.38)] backdrop-blur-2xl sm:h-16 sm:px-5"
        >
          <a
            className={`${wordmarkClass} text-white transition hover:text-white/72`}
            href="#home"
            aria-label="juliantiqui, home"
          >
            juliantiqui<span className="text-[#ff603e]">.</span>
          </a>

          <div className="hidden items-center gap-1 rounded-full border border-white/[0.08] bg-black/20 p-1 md:flex">
            {navLinks.map((link) => (
              <a
                className="rounded-full px-4 py-2 text-[11px] font-medium text-white/58 transition hover:bg-white/[0.07] hover:text-white"
                href={link.href}
                key={link.href}
              >
                {link.label}
              </a>
            ))}
          </div>

          <a
            aria-label="Contact"
            className="group flex items-center gap-2 rounded-full pl-3 text-xs font-medium text-white/75 transition hover:bg-white/[0.04] hover:text-white"
            href="#contact"
          >
            <span className="hidden sm:inline">Let&apos;s talk</span>
            <span className="grid h-9 w-9 place-items-center rounded-full border border-[#ff7a52]/30 bg-[#ff603e]/10 text-[#ff9a78] shadow-[inset_0_1px_0_rgba(255,255,255,0.12)] transition group-hover:border-[#ff8768]/60 group-hover:bg-[#ff603e]/20 group-hover:text-white">
              <ArrowIcon className="h-3.5 w-3.5" />
            </span>
          </a>
        </nav>
      </div>
    </header>
  );
}
