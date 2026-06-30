import Image from "next/image";

import { ArrowIcon, DownloadIcon, LocationIcon } from "@/components/icons";
import { Navbar } from "@/components/navbar";
import { SectionHeading } from "@/components/section-heading";
import {
  experiences,
  focusAreas,
  projects,
  skillGroups,
  updates,
} from "@/data/site-data";

function ExperienceTimeline() {
  return (
    <div className="relative border-l border-white/10">
      {experiences.map((experience, index) => (
        <article
          key={`${experience.role}-${experience.company}`}
          className="group relative grid gap-5 border-b border-white/8 py-8 pl-7 first:pt-1 last:border-b-0 sm:grid-cols-[0.42fr_1fr] sm:gap-10 sm:pl-10"
        >
          <span
            className={`absolute -left-[4.5px] h-2 w-2 rounded-full border border-[#ff603c] bg-[#0a0a0b] shadow-[0_0_0_5px_rgba(255,81,47,0.06)] transition group-hover:bg-[#ff603c] group-hover:shadow-[0_0_18px_rgba(255,81,47,0.65)] ${
              index === 0 ? "top-2" : "top-10"
            }`}
            aria-hidden="true"
          />
          <div>
            <p className="eyebrow">{experience.kind}</p>
            <h3 className="mt-2 text-lg font-medium tracking-[-0.02em] text-white">
              {experience.company}
            </h3>
            <p className="mt-1 text-sm text-white/45">{experience.scope}</p>
          </div>
          <div>
            <p className="text-xl font-medium tracking-[-0.025em] text-white sm:text-2xl">
              {experience.role}
            </p>
            <p className="mt-3 max-w-2xl text-[15px] leading-7 text-white/52">
              {experience.description}
            </p>
            <div className="mt-5 flex flex-wrap gap-2">
              {experience.tools.map((tool) => (
                <span className="tag" key={tool}>
                  {tool}
                </span>
              ))}
            </div>
          </div>
          <span className="absolute right-0 top-7 font-mono text-[11px] text-white/18">
            0{index + 1}
          </span>
        </article>
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
    <article
      className={`project-card group relative flex min-h-[310px] flex-col overflow-hidden rounded-[20px] border border-white/9 bg-[#0e0e10] p-6 transition duration-500 hover:-translate-y-1 hover:border-white/18 sm:p-7 ${
        project.featured ? "md:col-span-2 md:min-h-[370px]" : ""
      }`}
    >
      <div
        className={`absolute inset-x-0 top-0 h-px bg-gradient-to-r ${project.accent}`}
        aria-hidden="true"
      />
      <div className="flex items-center justify-between">
        <span className="font-mono text-[10px] tracking-[0.18em] text-white/32">
          PROJECT / 0{index + 1}
        </span>
        <span className="grid h-9 w-9 place-items-center rounded-full border border-white/9 text-white/45 transition duration-300 group-hover:border-[#ff603c]/35 group-hover:bg-[#ff603c]/10 group-hover:text-[#ff765b]">
          <ArrowIcon />
        </span>
      </div>

      <div className="mt-auto pt-20">
        {project.featured && (
          <p className="mb-4 inline-flex items-center gap-2 font-mono text-[10px] uppercase tracking-[0.16em] text-[#ffaf66]">
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
        <p className="mt-4 max-w-2xl text-[15px] leading-7 text-white/50">
          {project.description}
        </p>
        <div className="mt-6 flex flex-wrap gap-x-4 gap-y-2">
          {project.stack.map((item) => (
            <span
              className="font-mono text-[10px] uppercase tracking-[0.12em] text-white/30"
              key={item}
            >
              {item}
            </span>
          ))}
        </div>
      </div>
      <div
        className="absolute -right-20 -top-20 h-56 w-56 rounded-full bg-[#ff4f30]/0 blur-3xl transition duration-700 group-hover:bg-[#ff4f30]/8"
        aria-hidden="true"
      />
    </article>
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
          className="relative flex min-h-[calc(100svh-72px)] items-center overflow-hidden border-b border-white/8 pb-20 pt-28 sm:pt-32"
        >
          <Image
            src="/images/mustang-hero.jpg"
            alt=""
            fill
            preload
            sizes="100vw"
            className="object-cover object-[58%_center] contrast-[1.08] saturate-[0.82] sm:object-[60%_center] lg:object-center"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,5,6,0.72)_0%,rgba(5,5,6,0.26)_34%,rgba(5,5,6,0.58)_72%,#070708_100%)]"
            aria-hidden="true"
          />
          <div
            className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,5,6,0.96)_0%,rgba(5,5,6,0.88)_28%,rgba(5,5,6,0.56)_52%,rgba(5,5,6,0.2)_78%,rgba(5,5,6,0.3)_100%)]"
            aria-hidden="true"
          />
          <div className="hero-grid absolute inset-0 opacity-20" aria-hidden="true" />
          <div
            className="absolute -left-20 top-20 h-[440px] w-[440px] rounded-full bg-[#e94729]/10 blur-[130px]"
            aria-hidden="true"
          />
          <div className="shell relative z-10 w-full">
            <div className="max-w-[900px]">
              <div className="flex items-center gap-3">
                <span className="h-px w-8 bg-[#ff5e3b]" />
                <p className="eyebrow text-white/64">
                  Julian Tiqui · AI / Autonomy / Engineering
                </p>
              </div>

              <h1 className="hero-title mt-8 max-w-[820px] text-[clamp(3.6rem,8.4vw,7.4rem)] font-semibold leading-[0.86] tracking-[-0.075em] text-white">
                Building systems
                <span className="mt-2 block text-white/48">with intelligence.</span>
              </h1>

              <p className="mt-8 max-w-xl text-base leading-7 text-white/68 sm:text-lg sm:leading-8">
                AI Automation Analyst and Computer Engineering student creating
                practical agents, autonomous robotics, and software systems that
                move complex work forward.
              </p>

              <div className="mt-10 flex flex-wrap items-center gap-3">
                <a href="#projects" className="button-primary">
                  Explore my work
                  <ArrowIcon />
                </a>
                <a href="#about" className="button-secondary">
                  More about me
                  <span aria-hidden="true">↓</span>
                </a>
              </div>
            </div>
          </div>
          <div className="shell absolute inset-x-0 bottom-7 z-10 hidden items-end justify-between sm:flex">
            <p className="font-mono text-[9px] uppercase leading-5 tracking-[0.17em] text-white/24">
              Scroll to inspect
              <br />
              Selected work / 2026
            </p>
            <div className="flex items-center gap-3 font-mono text-[9px] uppercase tracking-[0.17em] text-white/24">
              <span>Signal / Active</span>
              <span className="h-1.5 w-1.5 rounded-full bg-[#ff5938] shadow-[0_0_10px_#ff5938]" />
            </div>
          </div>
        </section>

        <section id="about" className="section-pad scroll-mt-24">
          <div className="shell">
            <SectionHeading
              index="01"
              label="About"
              title="I work where software meets the real world."
            />
            <div className="mt-14 grid gap-12 lg:grid-cols-[0.86fr_1.14fr] lg:gap-24">
              <div className="surface-card relative min-h-[320px] overflow-hidden rounded-[20px] p-7 sm:p-9">
                <div className="absolute right-7 top-7 font-mono text-[9px] uppercase tracking-[0.18em] text-white/25">
                  Profile / JT
                </div>
                <p className="max-w-sm text-2xl font-medium leading-[1.35] tracking-[-0.03em] text-white sm:text-3xl">
                  Technical depth.
                  <br />
                  <span className="text-white/34">Practical outcomes.</span>
                </p>
                <div className="absolute bottom-8 left-7 right-7 sm:left-9 sm:right-9">
                  <div className="mb-5 h-px bg-gradient-to-r from-[#ff5432]/70 via-white/10 to-transparent" />
                  <p className="flex items-center gap-2 text-sm text-white/42">
                    <LocationIcon />
                    Queen&apos;s University · Computer Engineering
                  </p>
                </div>
              </div>

              <div>
                <p className="max-w-3xl text-xl leading-9 tracking-[-0.015em] text-white/76 sm:text-2xl sm:leading-10">
                  I&apos;m Julian — an engineer and analyst interested in how
                  intelligent systems can make teams faster, machines more
                  capable, and information easier to act on.
                </p>
                <p className="mt-6 max-w-2xl text-[15px] leading-7 text-white/46">
                  From enterprise automation to autonomous surface vessels, I
                  like turning ambiguous problems into systems that are clear,
                  reliable, and useful. My work spans the full path from
                  exploration and architecture to implementation and iteration.
                </p>
                <div className="mt-9 flex flex-wrap gap-2">
                  {focusAreas.map((area) => (
                    <span className="tag tag-large" key={area}>
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
          className="section-pad scroll-mt-24 border-y border-white/8 bg-white/[0.012]"
        >
          <div className="shell">
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

        <section id="projects" className="section-pad scroll-mt-24">
          <div className="shell">
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
          className="section-pad scroll-mt-24 border-y border-white/8 bg-[#09090a]"
        >
          <div className="shell">
            <SectionHeading
              index="04"
              label="Capabilities"
              title="A toolkit built for connected systems."
            />
            <div className="mt-14 grid border-l border-t border-white/8 sm:grid-cols-2 lg:grid-cols-3">
              {skillGroups.map((group, index) => (
                <article
                  className="group min-h-[235px] border-b border-r border-white/8 p-6 transition duration-300 hover:bg-white/[0.025] sm:p-8"
                  key={group.title}
                >
                  <div className="flex items-center justify-between">
                    <span className="font-mono text-[10px] text-[#ff7658]">
                      0{index + 1}
                    </span>
                    <span className="h-1.5 w-1.5 rounded-full bg-white/12 transition group-hover:bg-[#ff6544] group-hover:shadow-[0_0_9px_#ff6544]" />
                  </div>
                  <h3 className="mt-10 text-xl font-medium tracking-[-0.025em] text-white">
                    {group.title}
                  </h3>
                  <ul className="mt-5 space-y-2">
                    {group.items.map((item) => (
                      <li className="text-sm text-white/43" key={item}>
                        {item}
                      </li>
                    ))}
                  </ul>
                </article>
              ))}
              <div className="relative min-h-[235px] overflow-hidden border-b border-r border-white/8 p-8">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_70%_25%,rgba(255,82,45,0.11),transparent_38%)]" />
                <div className="relative flex h-full flex-col justify-between">
                  <p className="eyebrow">Always learning</p>
                  <p className="max-w-[250px] text-lg leading-7 tracking-[-0.02em] text-white/60">
                    Currently exploring better ways to make agents dependable,
                    observable, and genuinely useful.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <section id="resume" className="section-pad scroll-mt-24">
          <div className="shell">
            <div className="resume-panel relative overflow-hidden rounded-[24px] border border-white/10 px-6 py-12 sm:px-12 sm:py-16 lg:px-16">
              <div className="relative grid items-end gap-10 lg:grid-cols-[1fr_auto]">
                <div>
                  <p className="eyebrow text-[#ff8a65]">Résumé / Snapshot</p>
                  <h2 className="mt-5 max-w-3xl text-4xl font-medium leading-[1.06] tracking-[-0.05em] text-white sm:text-6xl">
                    The complete story,
                    <span className="text-white/30"> one page.</span>
                  </h2>
                  <p className="mt-6 max-w-xl text-[15px] leading-7 text-white/46">
                    A concise view of my engineering experience, technical
                    projects, and education. PDF download will be added shortly.
                  </p>
                </div>
                <button
                  className="button-primary cursor-not-allowed opacity-55"
                  type="button"
                  disabled
                  title="Résumé PDF coming soon"
                >
                  <DownloadIcon />
                  Download résumé
                  <span className="ml-1 font-mono text-[8px] uppercase tracking-[0.14em]">
                    Soon
                  </span>
                </button>
              </div>
            </div>
          </div>
        </section>

        <section
          id="updates"
          className="section-pad scroll-mt-24 border-t border-white/8"
        >
          <div className="shell">
            <SectionHeading
              index="05"
              label="Selected updates"
              title="What I'm focused on now."
            />
            <div className="mt-14 divide-y divide-white/8 border-y border-white/8">
              {updates.map((update, index) => (
                <a
                  href={update.href}
                  className="group grid gap-5 py-7 transition hover:bg-white/[0.018] sm:grid-cols-[0.16fr_0.55fr_1fr_auto] sm:items-center sm:px-4"
                  key={update.title}
                >
                  <span className="font-mono text-[10px] tracking-[0.14em] text-white/24">
                    0{index + 1}
                  </span>
                  <span className="eyebrow text-white/38">{update.category}</span>
                  <span className="text-base text-white/70 transition group-hover:text-white">
                    {update.title}
                  </span>
                  <span className="text-white/28 transition group-hover:translate-x-1 group-hover:text-[#ff7658]">
                    <ArrowIcon />
                  </span>
                </a>
              ))}
            </div>
          </div>
        </section>
      </main>

      <footer id="contact" className="scroll-mt-24 border-t border-white/8">
        <div className="shell pb-8 pt-20 sm:pt-28">
          <p className="eyebrow text-[#ff7959]">Contact / Open channel</p>
          <div className="mt-6 flex flex-col items-start justify-between gap-10 border-b border-white/10 pb-16 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-[clamp(3.2rem,8vw,7.2rem)] font-semibold leading-[0.87] tracking-[-0.07em] text-white">
              Let&apos;s build
              <br />
              <span className="text-white/26">what&apos;s next.</span>
            </h2>
            <a href="#home" className="button-secondary shrink-0">
              Back to top
              <span aria-hidden="true">↑</span>
            </a>
          </div>
          <div className="flex flex-col gap-5 pt-7 text-sm text-white/34 sm:flex-row sm:items-center sm:justify-between">
            <a
              className="wordmark w-fit text-white/70 transition hover:text-white"
              href="#home"
              aria-label="juliantiqui, back to home"
            >
              juliantiqui<span className="text-[#ff633f]">.</span>
            </a>
            <p>
              Open to conversations about AI, autonomy, and engineering · Contact
              links coming soon
            </p>
            <p className="font-mono text-[10px] uppercase tracking-[0.14em]">
              © {new Date().getFullYear()} Julian Tiqui
            </p>
          </div>
        </div>
      </footer>
    </>
  );
}
