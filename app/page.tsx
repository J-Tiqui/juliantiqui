import Image from "next/image";

import { GlassCard } from "@/components/glass-card";
import { ArrowIcon, DownloadIcon, LocationIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import {
  eyebrowClass,
  largeTagClass,
  primaryButtonClass,
  secondaryButtonClass,
  sectionPadClass,
  shellClass,
  tagClass,
  wordmarkClass,
} from "@/components/ui-styles";
import {
  experiences,
  focusAreas,
  projects,
  skillGroups,
  updates,
} from "@/data/site-data";

function ExperienceTimeline() {
  return (
    <div className="grid gap-4">
      {experiences.map((experience, index) => (
        <GlassCard
          key={`${experience.role}-${experience.company}`}
          className="group rounded-[22px]"
          contentClassName="p-6 sm:p-8"
          interactive
        >
          <article className="relative grid gap-6 sm:grid-cols-[0.38fr_1fr] sm:gap-10">
            <div>
              <div className="flex items-center gap-3">
                <span
                  className="h-2 w-2 rounded-full bg-[#ff6542] shadow-[0_0_14px_rgba(255,94,58,0.7)]"
                  aria-hidden="true"
                />
                <p className={`${eyebrowClass} text-[#ffb077]`}>
                  {experience.kind}
                </p>
              </div>
              <h3 className="mt-3 text-lg font-medium tracking-[-0.02em] text-white">
                {experience.company}
              </h3>
              <p className="mt-1 text-sm text-white/55">{experience.scope}</p>
            </div>
            <div>
              <p className="pr-8 text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl">
                {experience.role}
              </p>
              <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/62">
                {experience.description}
              </p>
              <div className="mt-5 flex flex-wrap gap-2">
                {experience.tools.map((tool) => (
                  <span className={tagClass} key={tool}>
                    {tool}
                  </span>
                ))}
              </div>
            </div>
            <span className="absolute right-0 top-0 font-mono text-[10px] text-white/28">
              0{index + 1}
            </span>
          </article>
        </GlassCard>
      ))}
    </div>
  );
}

function ProjectCard({
  project,
  index,
}: {
  project: (typeof projects)[number];
  index: number;
}) {
  return (
    <GlassCard
      className={`group rounded-[24px] ${
        project.featured ? "md:col-span-2 md:min-h-[370px]" : ""
      }`}
      contentClassName={`flex min-h-[310px] flex-col p-6 sm:p-7 ${
        project.featured ? "md:min-h-[370px]" : ""
      }`}
      interactive
    >
      <article className="flex flex-1 flex-col">
        <div
          className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent}`}
          aria-hidden="true"
        />
        <div className="flex items-center justify-between">
          <span className="font-mono text-[10px] tracking-[0.18em] text-white/42">
            PROJECT / 0{index + 1}
          </span>
          <span className="grid h-9 w-9 place-items-center rounded-full border border-white/[0.12] bg-white/[0.035] text-white/55 shadow-[inset_0_1px_0_rgba(255,255,255,0.1)] transition duration-300 group-hover:border-[#ff603c]/45 group-hover:bg-[#ff603c]/12 group-hover:text-[#ff9b7e]">
            <ArrowIcon />
          </span>
        </div>

        <div className="mt-auto pt-20">
          {project.featured && (
            <p className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffbd86]">
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff633e] shadow-[0_0_10px_#ff633e]" />
              Flagship system
            </p>
          )}
          <h3
            className={`max-w-xl font-medium tracking-[-0.035em] text-white ${
              project.featured ? "text-3xl sm:text-4xl" : "text-2xl"
            }`}
          >
            {project.title}
          </h3>
          <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/62">
            {project.description}
          </p>
          <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
            {project.stack.map((item) => (
              <span
                className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/42"
                key={item}
              >
                {item}
              </span>
            ))}
          </div>
        </div>
      </article>
    </GlassCard>
  );
}

export default function Home() {
  return (
    <>
      <a
        href="#main-content"
        className="fixed left-4 top-3 z-[100] -translate-y-20 rounded bg-white px-4 py-2 text-sm font-medium text-black transition focus:translate-y-0"
      >
        Skip to content
      </a>
      <Navbar />

      <main id="main-content" className="overflow-hidden">
        <section
          id="home"
          className="relative flex min-h-svh items-center overflow-hidden border-b border-white/8 pb-20 pt-24 sm:pt-28"
        >
          <Image
            src="/images/mustang-hero.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-[62%_center] contrast-[1.04] saturate-[0.78] sm:object-[60%_center] lg:object-center"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.55)_0%,rgba(5,5,6,0.14)_35%,rgba(5,5,6,0.48)_72%,#070708_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,6,0.78)_0%,rgba(5,5,6,0.48)_44%,rgba(5,5,6,0.12)_78%,rgba(5,5,6,0.28)_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.026)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.026)_1px,transparent_1px)] opacity-20 [background-size:70px_70px] [mask-image:linear-gradient(to_bottom,black,transparent_92%)]"
            aria-hidden="true"
          />
          <div
            className="absolute -left-20 top-20 h-[440px] w-[440px] rounded-full bg-[#e94729]/10 blur-[130px]"
            aria-hidden="true"
          />
          <div className={`${shellClass} relative z-10`}>
            <GlassCard
              className="max-w-[780px] rounded-[26px] sm:rounded-[32px]"
              contentClassName="px-6 py-7 sm:px-10 sm:py-10 lg:px-12 lg:py-11"
            >
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#ff5e3b]" />
                <p className={`${eyebrowClass} text-white/70`}>
                  Julian Tiqui · AI / Autonomy / Engineering
                </p>
              </div>

              <h1 className="mt-7 max-w-[720px] text-balance text-[clamp(2.45rem,7.4vw,6.4rem)] font-semibold leading-[0.9] tracking-[-0.065em] text-white sm:leading-[0.88] sm:tracking-[-0.07em]">
                Building systems
                <span className="mt-2 block bg-gradient-to-r from-white/85 via-white/58 to-[#ffad72]/72 bg-clip-text text-transparent">
                  with intelligence.
                </span>
              </h1>

              <p className="mt-7 max-w-xl text-base leading-7 text-white/72 sm:text-lg sm:leading-8">
                AI Automation Analyst and Computer Engineering student creating
                practical agents, autonomous robotics, and software systems that
                move complex work forward.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#projects" className={primaryButtonClass}>
                  Explore my work
                  <ArrowIcon />
                </a>
                <a href="#about" className={secondaryButtonClass}>
                  More about me
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </GlassCard>
          </div>
          <div
            className={`${shellClass} absolute inset-x-0 bottom-7 z-10 hidden items-end justify-between sm:flex`}
          >
            <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.17em] text-white/42">
              Scroll to inspect
              <br />
              Selected work / 2026
            </p>
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.17em] text-white/42">
              <span>Signal / Active</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5938] shadow-[0_0_10px_#ff5938]" />
            </div>
          </div>
        </section>

        <section
          id="about"
          className={`${sectionPadClass} relative scroll-mt-24 before:absolute before:left-[-10rem] before:top-1/3 before:h-80 before:w-80 before:rounded-full before:bg-[#ff633b]/[0.035] before:blur-[100px]`}
        >
          <div className={shellClass}>
            <SectionHeading
              index="01"
              label="About"
              title="I work where software meets the real world."
            />
            <div className="mt-14 grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-24">
              <GlassCard
                className="min-h-[320px] rounded-[24px]"
                contentClassName="flex min-h-[320px] flex-col justify-between p-7 sm:p-9"
              >
                <div className="flex items-start justify-between gap-4">
                  <p className="max-w-sm text-2xl font-medium leading-[1.35] tracking-[-0.03em] text-white sm:text-3xl">
                    Technical depth.
                    <br />
                    <span className="text-white/48">Practical outcomes.</span>
                  </p>
                  <span className="font-mono text-[9px] uppercase tracking-[0.18em] text-white/50">
                    Profile / JT
                  </span>
                </div>
                <div>
                  <div className="mb-5 h-px bg-gradient-to-r from-[#ff643f]/80 via-[#ffad6f]/35 to-transparent" />
                  <p className="flex items-center gap-2 text-sm text-white/58">
                    <LocationIcon />
                    Queen&apos;s University · Computer Engineering
                  </p>
                </div>
              </GlassCard>

              <div>
                <p className="max-w-3xl text-xl leading-9 tracking-[-0.015em] text-white/82 sm:text-2xl sm:leading-10">
                  I&apos;m Julian — an engineer and analyst interested in how
                  intelligent systems can make teams faster, machines more
                  capable, and information easier to act on.
                </p>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/60">
                  From enterprise automation to autonomous surface vessels, I
                  like turning ambiguous problems into systems that are clear,
                  reliable, and useful. My work spans the full path from
                  exploration and architecture to implementation and iteration.
                </p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span className={largeTagClass} key={area}>
                      {area}
                    </span>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        <section
          id="experience"
          className={`${sectionPadClass} scroll-mt-24 border-y border-white/[0.07] bg-[radial-gradient(circle_at_85%_20%,rgba(255,99,59,0.045),transparent_28%)]`}
        >
          <div className={shellClass}>
            <SectionHeading
              index="02"
              label="Experience"
              title="Applied across teams, tools, and environments."
            />
            <div className="mt-16">
              <ExperienceTimeline />
            </div>
          </div>
        </section>

        <section
          id="projects"
          className={`${sectionPadClass} scroll-mt-24`}
        >
          <div className={shellClass}>
            <SectionHeading
              index="03"
              label="Featured projects"
              title="Selected systems I've helped bring to life."
              aside="A mix of autonomy, machine learning, and workflow engineering."
            />
            <div className="mt-14 grid gap-4 md:grid-cols-2">
              {projects.map((project, index) => (
                <ProjectCard project={project} index={index} key={project.title} />
              ))}
            </div>
          </div>
        </section>

        <section
          id="skills"
          className={`${sectionPadClass} scroll-mt-24 border-y border-white/[0.07] bg-[#09090a]`}
        >
          <div className={shellClass}>
            <SectionHeading
              index="04"
              label="Capabilities"
              title="A toolkit built for connected systems."
            />
            <div className="mt-14 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <GlassCard
                  className="group min-h-[235px] rounded-[22px]"
                  contentClassName="p-6 sm:p-8"
                  interactive
                  key={group.title}
                >
                  <article>
                    <div className="flex items-center justify-between">
                      <span className="font-mono text-[10px] text-[#ff9b77]">
                        0{index + 1}
                      </span>
                      <span className="h-1.5 w-1.5 rounded-full bg-white/20 transition group-hover:bg-[#ff6544] group-hover:shadow-[0_0_9px_#ff6544]" />
                    </div>
                    <h3 className="mt-10 text-xl font-medium tracking-[-0.025em] text-white">
                      {group.title}
                    </h3>
                    <ul className="mt-5 space-y-2">
                      {group.items.map((item) => (
                        <li className="text-sm text-white/58" key={item}>
                          {item}
                        </li>
                      ))}
                    </ul>
                  </article>
                </GlassCard>
              ))}
              <GlassCard
                className="min-h-[235px] rounded-[22px]"
                contentClassName="flex min-h-[235px] flex-col justify-between p-8"
              >
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,126,62,0.11),transparent_38%)]" />
                <div className="relative flex flex-1 flex-col justify-between">
                  <p className={eyebrowClass}>Always learning</p>
                  <p className="max-w-[250px] text-lg leading-7 tracking-[-0.02em] text-white/70">
                    Currently exploring better ways to make agents dependable,
                    observable, and genuinely useful.
                  </p>
                </div>
              </GlassCard>
            </div>
          </div>
        </section>

        <section
          id="resume"
          className={`${sectionPadClass} scroll-mt-24`}
        >
          <div className={shellClass}>
            <GlassCard
              className="rounded-[28px] after:bg-[#ff813f]/[0.11]"
              contentClassName="px-6 py-12 sm:px-12 sm:py-16 lg:px-16"
            >
              <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className={`${eyebrowClass} text-[#ffac7e]`}>
                    Résumé / Snapshot
                  </p>
                  <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.06] tracking-[-0.05em] text-white sm:text-6xl">
                    The complete story,
                    <span className="text-white/46"> one page.</span>
                  </h2>
                  <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/62">
                    A concise view of my engineering experience, technical
                    projects, and education—ready whenever you need the details.
                  </p>
                </div>
                <a
                  className={primaryButtonClass}
                  href="/Julian_Tiqui_Resume.pdf"
                  download
                >
                  <DownloadIcon />
                  Download résumé
                </a>
              </div>
            </GlassCard>
          </div>
        </section>

        <section
          id="updates"
          className={`${sectionPadClass} scroll-mt-24 border-t border-white/8`}
        >
          <div className={shellClass}>
            <SectionHeading
              index="05"
              label="Selected updates"
              title="What I'm focused on now."
            />
            <GlassCard
              className="mt-14 rounded-[24px]"
              contentClassName="divide-y divide-white/[0.08]"
            >
              {updates.map((update, index) => (
                <a
                  href={update.href}
                  className="group grid gap-4 px-6 py-6 transition hover:bg-white/[0.035] sm:grid-cols-[0.16fr_0.55fr_1fr_auto] sm:items-center sm:px-8"
                  key={update.title}
                >
                  <span className="font-mono text-[10px] tracking-[0.14em] text-white/50">
                    0{index + 1}
                  </span>
                  <span className={`${eyebrowClass} text-[#ff9c74]`}>
                    {update.category}
                  </span>
                  <span className="text-base text-white/74 transition group-hover:text-white">
                    {update.title}
                  </span>
                  <span className="text-white/42 transition group-hover:translate-x-1 group-hover:text-[#ff9272]">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </GlassCard>
          </div>
        </section>
      </main>

      <footer
        id="contact"
        className="scroll-mt-24 border-t border-white/[0.07] bg-[radial-gradient(circle_at_50%_100%,rgba(255,91,47,0.07),transparent_36%)]"
      >
        <div className={`${shellClass} pb-8 pt-20 sm:pt-28`}>
          <GlassCard
            className="rounded-[28px]"
            contentClassName="px-6 py-10 sm:px-10 sm:py-12 lg:px-14 lg:py-14"
          >
            <p className={`${eyebrowClass} text-[#ff9f79]`}>
              Contact / Open channel
            </p>
            <div className="mt-6 flex flex-col items-start justify-between gap-10 border-b border-white/[0.1] pb-12 lg:flex-row lg:items-end">
              <h2 className="max-w-4xl text-[clamp(3rem,7vw,6.6rem)] font-semibold leading-[0.88] tracking-[-0.07em] text-white">
                Let&apos;s build
                <br />
                <span className="text-white/42">what&apos;s next.</span>
              </h2>
              <a
                href="#home"
                className={`${secondaryButtonClass} shrink-0`}
              >
                Back to top
                <span aria-hidden="true">↑</span>
              </a>
            </div>
            <div className="flex flex-col gap-5 pt-7 text-sm text-white/52 sm:flex-row sm:items-center sm:justify-between">
              <a
                className={`${wordmarkClass} w-fit text-white/78 transition hover:text-white`}
                href="#home"
                aria-label="juliantiqui, back to home"
              >
                juliantiqui<span className="text-[#ff754d]">.</span>
              </a>
              <p>
                Open to conversations about AI, autonomy, and engineering · Contact
                links coming soon
              </p>
              <p className="font-mono text-[10px] uppercase tracking-[0.14em]">
                © {new Date().getFullYear()} Julian Tiqui
              </p>
            </div>
          </GlassCard>
        </div>
      </footer>
    </>
  );
}
