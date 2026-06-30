import { ArrowIcon } from "@/components/icons";

const navLinks = [
  { label: "About", href: "#about" },
  { label: "Experience", href: "#experience" },
  { label: "Work", href: "#projects" },
  { label: "Skills", href: "#skills" },
];

export function Navbar() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-white/8 bg-[#070708]/78 backdrop-blur-xl">
      <nav
        aria-label="Primary navigation"
        className="shell flex h-[72px] items-center justify-between"
      >
        <a
          className="wordmark text-white transition hover:text-white/72"
          href="#home"
          aria-label="juliantiqui, home"
        >
          juliantiqui<span className="text-[#ff603e]">.</span>
        </a>

        <div className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <a className="nav-link" href={link.href} key={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <a
          className="group flex items-center gap-2 text-xs font-medium text-white/75 transition hover:text-white"
          href="#contact"
        >
          <span className="hidden sm:inline">Let&apos;s talk</span>
          <span className="grid h-8 w-8 place-items-center rounded-full border border-white/12 bg-white/[0.035] transition group-hover:border-[#ff603e]/50 group-hover:bg-[#ff603e]/10 group-hover:text-[#ff795a]">
            <ArrowIcon className="h-3.5 w-3.5" />
          </span>
        </a>
      </nav>
    </header>
  );
}
