"use client";

import {
  ArrowUpRight,
  ArrowRight,
  Code2,
  BarChart3,
  FileSpreadsheet,
  Layers3,
  Sparkles,
} from "lucide-react";

import { motion } from "motion/react";

// ======================================================
// PROJECT DATA
// ======================================================

const projects = [
  {
    id: "data-analyzer",
    title: "Data Analyzer",
    category: "Data Analytics Application",
    description:
      "A web-based data analysis application designed to transform raw datasets into meaningful insights through statistical analysis, data visualization, and automated reporting.",
    status: "Completed",
    technologies: [
      "Next.js",
      "TypeScript",
      "FastAPI",
      "Python",
      "Pandas",
      "NumPy",
    ],
    link: {
      label: "Project Documentation",
      href: "https://drive.google.com/drive/folders/1gdl1IHVdu3Im6bzAVhntNdblktClth6F?usp=drive_link",
      type: "documentation",
    },
  },
  {
    id: "personal-website",
    title: "Personal Website",
    category: "Personal Branding",
    description:
      "A personal website designed to showcase my background, projects, skills, learning journey, and professional interests through a modern and interactive experience.",
    status: "In Progress",
    technologies: [
      "Next.js",
      "TypeScript",
      "Tailwind CSS",
      "Motion",
    ],
    link: {
      label: "Source Code",
      href: "https://github.com/Syaeful098",
      type: "source",
    },
  },
];

// ======================================================
// DATA ANALYZER PREVIEW
// ======================================================

function DataAnalyzerPreview() {
  const metrics = [
    {
      label: "Total Revenue",
      value: "Rp 24.8M",
      icon: BarChart3,
    },
    {
      label: "Total Records",
      value: "1,248",
      icon: FileSpreadsheet,
    },
    {
      label: "Average Value",
      value: "Rp 198K",
      icon: Layers3,
    },
    {
      label: "Data Quality",
      value: "98.4%",
      icon: Sparkles,
    },
  ];

  const chartData = [
    35, 52, 43, 72, 60, 85, 68, 95, 73, 88, 65, 100,
  ];

  const insights = [
    "Revenue increased compared to the previous period.",
    "Highest performance recorded in August.",
    "Several data patterns identified.",
  ];

  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e5dd] bg-[#f8f8f5] p-4 sm:p-5">
      {/* Browser Header */}
      <div className="mb-5 flex items-center justify-between">
        <div className="flex items-center gap-2">
          <div className="flex gap-1.5">
            <span className="h-2.5 w-2.5 rounded-full bg-[#d8c8b8]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#d5d7c7]" />
            <span className="h-2.5 w-2.5 rounded-full bg-[#c8d2c4]" />
          </div>

          <span className="ml-2 text-[10px] text-[#92938a]">
            Data Analyzer
          </span>
        </div>

        <div className="flex items-center gap-1.5 rounded-full bg-white px-2.5 py-1">
          <span className="h-1.5 w-1.5 rounded-full bg-[#82916e]" />

          <span className="text-[9px] text-[#77796f]">
            Dashboard
          </span>
        </div>
      </div>

      {/* KPI Cards */}
      <div className="grid grid-cols-2 gap-3 sm:grid-cols-4">
        {metrics.map((metric, index) => {
          const Icon = metric.icon;

          return (
            <div
              key={index}
              className="rounded-xl border border-[#ecebe5] bg-white p-3"
            >
              <div className="mb-2 flex items-center justify-between gap-1">
                <span className="text-[9px] text-[#92938a]">
                  {metric.label}
                </span>

                <Icon
                  size={12}
                  className="shrink-0 text-[#929b80]"
                />
              </div>

              <p className="text-sm font-medium text-[#34362f] sm:text-base">
                {metric.value}
              </p>
            </div>
          );
        })}
      </div>

      {/* Charts and Insights */}
      <div className="mt-3 grid grid-cols-1 gap-3 sm:grid-cols-[1.4fr_1fr]">
        {/* Revenue Chart */}
        <div className="rounded-xl border border-[#ecebe5] bg-white p-3">
          <div className="mb-4 flex items-center justify-between">
            <div>
              <p className="text-[10px] font-medium text-[#494a42]">
                Revenue Overview
              </p>

              <p className="mt-1 text-[9px] text-[#999a91]">
                Monthly performance
              </p>
            </div>

            <span className="rounded-md bg-[#f1f2eb] px-2 py-1 text-[9px] text-[#7e8871]">
              2026
            </span>
          </div>

          {/* Chart */}
          <div className="flex h-[100px] items-end justify-between gap-2 px-1">
            {chartData.map((height, index) => (
              <div
                key={index}
                className="flex h-full flex-1 items-end"
              >
                <motion.div
                  initial={{ height: "0%" }}
                  whileInView={{ height: `${height}%` }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.7,
                    delay: index * 0.04,
                    ease: "easeOut",
                  }}
                  className={`w-full rounded-t-sm ${
                    index === 7
                      ? "bg-[#879477]"
                      : "bg-[#d8ddcf]"
                  }`}
                />
              </div>
            ))}
          </div>

          {/* Chart Labels */}
          <div className="mt-2 flex justify-between text-[8px] text-[#a2a39a]">
            <span>Jan</span>
            <span>Mar</span>
            <span>May</span>
            <span>Jul</span>
            <span>Sep</span>
            <span>Dec</span>
          </div>
        </div>

        {/* Data Insights */}
        <div className="rounded-xl border border-[#ecebe5] bg-white p-3">
          <div className="mb-3 flex items-center gap-2">
            <Sparkles
              size={12}
              className="text-[#8b9679]"
            />

            <p className="text-[10px] font-medium text-[#494a42]">
              Data Insights
            </p>
          </div>

          <div className="space-y-2.5">
            {insights.map((insight, index) => (
              <div
                key={index}
                className="flex gap-2"
              >
                <span className="mt-1 h-1 w-1 shrink-0 rounded-full bg-[#899477]" />

                <p className="text-[9px] leading-relaxed text-[#77796f]">
                  {insight}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* PDF Report */}
      <div className="mt-3 flex items-center justify-between rounded-xl border border-[#ecebe5] bg-white px-3 py-2.5">
        <div className="flex items-center gap-2">
          <FileSpreadsheet
            size={13}
            className="text-[#879477]"
          />

          <span className="text-[9px] text-[#77796f]">
            Automated Analysis Report
          </span>
        </div>

        <span className="rounded-md bg-[#f1f2eb] px-2 py-1 text-[9px] text-[#7e8871]">
          PDF
        </span>
      </div>
    </div>
  );
}

// ======================================================
// PERSONAL WEBSITE PREVIEW
// ======================================================

function PersonalWebsitePreview() {
  return (
    <div className="overflow-hidden rounded-2xl border border-[#e7e5dd] bg-[#f7f6f1] p-4 sm:p-5">
      {/* Browser Header */}
      <div className="mb-5 flex items-center gap-2">
        <div className="flex gap-1.5">
          <span className="h-2.5 w-2.5 rounded-full bg-[#d8c8b8]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#d5d7c7]" />
          <span className="h-2.5 w-2.5 rounded-full bg-[#c8d2c4]" />
        </div>

        <div className="ml-2 flex-1 rounded-full bg-white px-3 py-1">
          <span className="text-[8px] text-[#a0a197]">
            personal-portfolio
          </span>
        </div>
      </div>

      {/* Website Preview */}
      <div className="relative min-h-[240px] overflow-hidden rounded-xl bg-[#eae9e1] p-5 sm:p-7">
        {/* Decorative Background */}
        <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-[#d4d8c9] opacity-70 blur-2xl" />

        <div className="relative z-10">
          {/* Navbar */}
          <div className="flex items-center justify-between">
            <span className="text-[9px] font-medium tracking-wide text-[#53554b]">
              PORTFOLIO
            </span>

            <div className="flex gap-3 text-[8px] text-[#77796f]">
              <span>About</span>
              <span>Projects</span>
              <span>Contact</span>
            </div>
          </div>

          {/* Hero Content */}
          <div className="mt-10">
            <p className="text-[9px] tracking-[0.2em] text-[#85877c]">
              HELLO, I&apos;M
            </p>

            <h3 className="mt-2 max-w-[200px] text-2xl font-medium leading-tight tracking-tight text-[#3b3d34] sm:text-3xl">
              Building ideas
              <br />
              into reality.
            </h3>

            <p className="mt-3 max-w-[190px] text-[9px] leading-relaxed text-[#77796f]">
              Informatics graduate exploring technology,
              data, and meaningful digital experiences.
            </p>

            <div className="mt-4 inline-flex items-center gap-1.5 rounded-full bg-[#747e64] px-3 py-1.5 text-[8px] text-white">
              Explore my work

              <ArrowUpRight size={10} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

// ======================================================
// PROJECT CARD
// ======================================================

function ProjectCard({
  project,
  preview,
}: {
  project: (typeof projects)[number];
  preview: React.ReactNode;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 24 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.15 }}
      transition={{ duration: 0.65 }}
      className="group"
    >
      {/* Preview */}
      {preview}

      {/* Project Details */}
      <div className="mt-5">
        {/* Title and Status */}
        <div className="flex flex-wrap items-center justify-between gap-3">
          <div>
            <p className="text-[10px] uppercase tracking-[0.16em] text-[#96978d]">
              {project.category}
            </p>

            <h3 className="mt-2 text-xl font-medium tracking-tight text-[#35372f]">
              {project.title}
            </h3>
          </div>

          <span
            className={`rounded-full px-3 py-1 text-[10px] ${
              project.status === "Completed"
                ? "bg-[#e9ede4] text-[#77846b]"
                : "bg-[#f0ece2] text-[#a18b69]"
            }`}
          >
            {project.status}
          </span>
        </div>

        {/* Description */}
        <p className="mt-3 max-w-xl text-sm leading-7 text-[#77796f]">
          {project.description}
        </p>

        {/* Technologies */}
        <div className="mt-4 flex flex-wrap gap-2">
          {project.technologies.map((technology) => (
            <span
              key={technology}
              className="rounded-full border border-[#e7e5dd] bg-white px-3 py-1.5 text-[10px] text-[#77796f]"
            >
              {technology}
            </span>
          ))}
        </div>

        {/* Project Link */}
        {project.link && (
          <div className="mt-5">
            <a
              href={project.link.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 text-xs font-medium text-[#525449] transition-colors hover:text-[#899477]"
            >
              {project.link.type === "documentation" ? (
                <FileSpreadsheet size={14} />
              ) : (
                <Code2 size={14} />
              )}

              {project.link.label}

              <ArrowUpRight size={13} />
            </a>
          </div>
        )}
      </div>
    </motion.article>
  );
}

// ======================================================
// PROJECTS SECTION
// ======================================================

export default function ProjectsSection() {
  return (
    <section
      id="projects"
      className="relative overflow-hidden px-6 py-24 sm:px-10 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mb-16"
        >
          {/* Label */}
          <div className="mb-4 flex items-center gap-3">
            <span className="h-px w-8 bg-[#a0a48e]" />

            <span className="text-[10px] uppercase tracking-[0.25em] text-[#92938a]">
              03 — Selected Works
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col justify-between gap-5 md:flex-row md:items-end">
            <div>
              <h2 className="text-4xl font-medium tracking-tight text-[#35372f] sm:text-5xl lg:text-6xl">
                Projects &
                <span className="font-serif italic text-[#899477]">
                  {" "}
                  Experiments.
                </span>
              </h2>

              <p className="mt-5 max-w-xl text-sm leading-7 text-[#77796f] sm:text-base">
                A collection of projects, ideas, and experiments
                that reflect my journey in learning and building
                digital solutions.
              </p>
            </div>

            <div className="flex items-center gap-2 text-xs text-[#92938a]">
              <span>Selected projects</span>

              <ArrowRight size={13} />
            </div>
          </div>
        </motion.div>

        {/* Project Grid */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-2 lg:gap-16">
          {/* Project 1 */}
          <ProjectCard
            project={projects[0]}
            preview={<DataAnalyzerPreview />}
          />

          {/* Project 2 */}
          <ProjectCard
            project={projects[1]}
            preview={<PersonalWebsitePreview />}
          />
        </div>

        {/* More Projects */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-20 border-t border-[#e7e5dd] pt-8"
        >
          <div className="flex flex-col justify-between gap-4 sm:flex-row sm:items-center">
            <div>
              <p className="text-xs text-[#92938a]">
                More projects coming
              </p>

              <p className="mt-2 text-sm text-[#77796f]">
                More ideas are currently being explored and developed.
              </p>
            </div>

            <div className="flex items-center gap-2 text-[#92938a]">
              <Layers3 size={15} />

              <span className="text-xs">
                In the making
              </span>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}