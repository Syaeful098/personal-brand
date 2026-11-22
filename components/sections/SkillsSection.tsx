"use client";

import { motion, useInView } from "motion/react";
import {
  Code2,
  Globe,
  Database,
  Workflow,
  ArrowUpRight,
  BarChart3,
} from "lucide-react";
import { useRef } from "react";

const skillGroups = [
  {
    number: "01",
    category: "Programming & IoT",
    subtitle: "Languages, embedded systems & communication",
    icon: Code2,
    skills: [
      "Python",
      "JavaScript",
      "TypeScript",
      "C / C++",
      "HTML",
      "CSS",
      "JSON",
      "ESP32",
      "Arduino",
      "MQTT",
      "Mosquitto",
      "Node-RED",
      "pH Sensor (PH4502C)",
      "DS18B20",
      "TDS Sensor",
    ],
    description:
      "Pemrograman, pengembangan sistem embedded, akuisisi data sensor, komunikasi IoT, serta pemrosesan telemetri menggunakan MQTT dan Node-RED.",
  },
  {
    number: "02",
    category: "Web Development",
    subtitle: "Frontend, interfaces & user experience",
    icon: Globe,
    skills: [
      "Next.js",
      "React",
      "Tailwind CSS v4",
      "Motion",
      "Lucide React",
      "React Hooks",
      "REST API",
    ],
    description:
      "Membangun aplikasi web modern menggunakan component-based architecture, responsive design, integrasi API, serta animasi dan interaksi antarmuka.",
  },
  {
    number: "03",
    category: "Backend & Data Processing",
    subtitle: "APIs, data manipulation & systems",
    icon: Database,
    skills: [
      "FastAPI",
      "Uvicorn",
      "Pydantic",
      "Pandas",
      "NumPy",
      "OpenPyXL",
      "Python Standard Library",
      "Data Cleaning",
      "Data Transformation",
      "Statistical Analysis",
      "Excel",
      "CSV",
      "JSON",
    ],
    description:
      "Mengembangkan backend dan REST API, melakukan validasi data, manipulasi dataset, cleaning, transformasi, agregasi, serta pemrosesan berbagai format data.",
  },
  {
    number: "04",
    category: "Data Analytics & AI",
    subtitle: "Visualization, statistical insights & AI integration",
    icon: BarChart3,
    skills: [
      "Recharts",
      "Matplotlib",
      "Seaborn",
      "Data Visualization",
      "Correlation Analysis",
      "Statistical Analysis",
      "Ollama",
      "Llama 3.1",
      "Qwen 2.5 3B",
      "Local AI",
      "AI Integration",
      "ReportLab",
      "PDF Generation",
      "BytesIO",
    ],
    description:
      "Mengembangkan visualisasi data interaktif dan statistik, menghasilkan laporan PDF otomatis, serta mengintegrasikan model AI lokal untuk interpretasi dan analisis data.",
  },
  {
    number: "05",
    category: "Tools & Development Workflow",
    subtitle: "Development environment & engineering tools",
    icon: Workflow,
    skills: [
      "Visual Studio Code",
      "Git",
      "GitHub",
      "npm",
      "ESLint",
      "TypeScript Compiler",
      "Tailwind CSS IntelliSense",
      "Arduino IDE",
      "Node-RED",
      "AI-assisted Development",
      "Debugging",
      "Version Control",
    ],
    description:
      "Menggunakan development tools untuk coding, debugging, version control, pengelolaan dependencies, pemeriksaan kode, pengembangan firmware, serta workflow pengembangan aplikasi.",
  },
];

export default function SkillsSection() {
  const sectionRef = useRef<HTMLElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.15,
  });

  return (
    <section
      id="skills"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#F4F1E9] px-6 py-28 text-[#292B26] sm:px-10 md:py-36 lg:px-16"
    >
      {/* Background Decoration */}
      <div className="pointer-events-none absolute -right-40 top-20 h-[500px] w-[500px] rounded-full bg-[#DCE0D0]/30 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* Section Heading */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{ duration: 0.8 }}
          className="mb-20"
        >
          {/* Label */}
          <div className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#81856D]" />

            <span className="text-[11px] tracking-[0.24em] text-[#858579] uppercase">
              04 — Skills & Tools
            </span>
          </div>

          {/* Heading */}
          <div className="flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
            <h2 className="max-w-4xl text-5xl leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[88px]">
              Things I work with,
              <br />

              <span className="font-serif italic text-[#81856D]">
                and continue to explore.
              </span>
            </h2>

            <div className="max-w-sm lg:pb-3">
              <p className="text-sm leading-7 text-[#77796F]">
                Sebuah koleksi teknologi, tools, dan pendekatan
                yang saya gunakan dalam proses membangun
                aplikasi, mengolah data, mengembangkan sistem
                IoT, serta terus memperluas kemampuan.
              </p>

              <div className="mt-6 flex items-center gap-3">
                <span className="h-px w-8 bg-[#9B9D89]" />

                <span className="text-[10px] tracking-[0.18em] text-[#99998C] uppercase">
                  A work in progress
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Skill List */}
        <div className="border-t border-[#D8D5CA]">
          {skillGroups.map((group, index) => {
            const Icon = group.icon;

            return (
              <motion.div
                key={group.number}
                initial={{
                  opacity: 0,
                  y: 24,
                }}
                animate={
                  isInView
                    ? {
                        opacity: 1,
                        y: 0,
                      }
                    : {}
                }
                transition={{
                  duration: 0.65,
                  delay: 0.12 + index * 0.12,
                }}
                className="group relative border-b border-[#D8D5CA] py-9 sm:py-11 lg:py-12"
              >
                <div className="grid grid-cols-1 gap-7 lg:grid-cols-[0.85fr_1.5fr_0.9fr] lg:items-center lg:gap-12">
                  {/* Category */}
                  <div className="flex items-start gap-5">
                    <span className="pt-1 text-[11px] tracking-widest text-[#A09F91]">
                      {group.number}
                    </span>

                    <div>
                      <div className="flex items-center gap-3">
                        <h3 className="text-lg tracking-[-0.025em] sm:text-xl">
                          {group.category}
                        </h3>

                        <motion.div
                          className="text-[#898C76]"
                          whileHover={{
                            rotate: 12,
                          }}
                          transition={{
                            duration: 0.25,
                          }}
                        >
                          <Icon
                            size={17}
                            strokeWidth={1.5}
                          />
                        </motion.div>
                      </div>

                      <p className="mt-2 text-xs text-[#929286]">
                        {group.subtitle}
                      </p>
                    </div>
                  </div>

                  {/* Technologies */}
                  <div className="flex flex-wrap items-center gap-x-3 gap-y-2 sm:gap-x-4">
                    {group.skills.map((skill, skillIndex) => (
                      <div
                        key={skill}
                        className="flex items-center gap-3"
                      >
                        <motion.span className="text-[15px] text-[#55574F] transition-colors duration-300 group-hover:text-[#292B26] sm:text-base">
                          {skill}
                        </motion.span>

                        {skillIndex !== group.skills.length - 1 && (
                          <span className="text-xs text-[#B7B5A9]">
                            /
                          </span>
                        )}
                      </div>
                    ))}
                  </div>

                  {/* Description */}
                  <div className="flex items-start justify-between gap-5 lg:gap-4">
                    <p className="max-w-sm text-xs leading-6 text-[#85857A] sm:text-[13px]">
                      {group.description}
                    </p>

                    <ArrowUpRight
                      size={16}
                      strokeWidth={1.5}
                      className="mt-1 shrink-0 text-[#A1A18F] transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#656B55]"
                    />
                  </div>
                </div>

                {/* Hover Accent */}
                <div className="absolute bottom-[-1px] left-0 h-px w-0 bg-[#858A70] transition-all duration-700 group-hover:w-full" />
              </motion.div>
            );
          })}
        </div>

        {/* Closing Statement */}
        <motion.div
          initial={{
            opacity: 0,
            y: 20,
          }}
          animate={
            isInView
              ? {
                  opacity: 1,
                  y: 0,
                }
              : {}
          }
          transition={{
            duration: 0.7,
            delay: 0.65,
          }}
          className="mt-12 flex flex-col justify-between gap-5 sm:flex-row sm:items-center"
        >
          <p className="max-w-lg text-sm leading-7 text-[#77796F]">
            Tidak berhenti pada apa yang sudah dikuasai.
            Selalu ada ruang untuk belajar, bereksperimen,
            dan berkembang.
          </p>

          <span className="text-xs tracking-wide text-[#99998C]">
            Learning through building.
          </span>
        </motion.div>
      </div>
    </section>
  );
}