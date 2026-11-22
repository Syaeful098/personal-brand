"use client";

import {
  motion,
  useInView,
  useScroll,
  useTransform,
} from "motion/react";

import {
  ArrowUpRight,
  Compass,
  GraduationCap,
  Lightbulb,
  Code2,
  Sprout,
} from "lucide-react";

import { useRef } from "react";

const journey = [
  {
    period: "THE BEGINNING",
    year: "01",
    title: "A curiosity for technology",
    description:
      "Semuanya berawal dari rasa penasaran terhadap bagaimana teknologi bekerja, bagaimana sebuah aplikasi dibuat, dan bagaimana sebuah ide bisa diwujudkan menjadi sesuatu yang nyata.",
    icon: Compass,
    side: "left",
    tag: "Curiosity",
  },
  {
    period: "EDUCATION",
    year: "02",
    title: "Building a foundation",
    description:
      "Menempuh pendidikan Teknik Informatika, mempelajari dasar pemrograman, sistem komputer, pengembangan software, serta berbagai konsep yang membentuk fondasi di bidang teknologi.",
    icon: GraduationCap,
    side: "right",
    tag: "Informatics",
  },
  {
    period: "EXPLORATION",
    year: "03",
    title: "Learning through experiments",
    description:
      "Mulai mengeksplorasi berbagai teknologi dan bidang. Belajar tidak hanya dari teori, tetapi juga dari mencoba, membuat kesalahan, memperbaiki, dan membangun proyek secara mandiri.",
    icon: Lightbulb,
    side: "left",
    tag: "Experimentation",
  },
  {
    period: "BUILDING",
    year: "04",
    title: "Turning ideas into projects",
    description:
      "Mulai membangun proyek yang lebih nyata, menggabungkan frontend, backend, pengolahan data, dan berbagai tools untuk menciptakan solusi yang bisa digunakan.",
    icon: Code2,
    side: "right",
    tag: "Projects",
  },
  {
    period: "PRESENT",
    year: "05",
    title: "A new chapter begins",
    description:
      "Setelah menyelesaikan pendidikan, perjalanan berlanjut ke dunia profesional. Terus belajar, memperluas pengalaman, membangun kemampuan, dan menemukan arah yang ingin dituju.",
    icon: Sprout,
    side: "left",
    tag: "Growth",
  },
];

export default function JourneySection() {
  const sectionRef = useRef<HTMLElement>(null);
  const timelineRef = useRef<HTMLDivElement>(null);

  const isInView = useInView(sectionRef, {
    once: true,
    amount: 0.1,
  });

  const { scrollYProgress } = useScroll({
    target: timelineRef,
    offset: ["start 70%", "end 70%"],
  });

  const lineScale = useTransform(
    scrollYProgress,
    [0, 1],
    [0, 1]
  );

  return (
    <section
      id="journey"
      ref={sectionRef}
      className="relative overflow-hidden bg-[#30332D] px-6 py-28 text-[#F1EFE7] sm:px-10 md:py-36 lg:px-16"
    >
      {/* Background atmosphere */}
      <div className="pointer-events-none absolute -left-52 top-1/3 h-[500px] w-[500px] rounded-full bg-[#788066]/15 blur-[150px]" />

      <div className="pointer-events-none absolute right-[-150px] top-[-100px] h-[400px] w-[400px] rounded-full bg-[#A0A58A]/10 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Heading */}
        <motion.div
          initial={{
            opacity: 0,
            y: 30,
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
            duration: 0.8,
          }}
          className="mb-28"
        >
          <div className="mb-8 flex items-center gap-3">
            <span className="h-1.5 w-1.5 rounded-full bg-[#B5BA9F]" />

            <span className="text-[11px] tracking-[0.24em] text-[#B2B4A6] uppercase">
              05 — My Journey
            </span>
          </div>

          <div className="grid grid-cols-1 gap-10 lg:grid-cols-[1.5fr_0.7fr] lg:items-end">
            <h2 className="text-5xl leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[90px]">
              A path of
              <br />

              <span className="font-serif italic text-[#B5BA9F]">
                curiosity & growth.
              </span>
            </h2>

            <div className="max-w-sm lg:pb-3">
              <p className="text-sm leading-7 text-[#BFC0B5]">
                Setiap langkah membawa
                pelajaran baru. Tidak selalu
                tentang seberapa cepat sampai,
                tetapi tentang bagaimana
                perjalanan itu membentuk diri.
              </p>

              <div className="mt-7 flex items-center gap-3">
                <span className="h-px w-8 bg-[#858A70]" />

                <span className="text-[10px] tracking-[0.2em] text-[#999D8D] uppercase">
                  Still finding my direction
                </span>
              </div>
            </div>
          </div>
        </motion.div>

        {/* Timeline */}
        <div
          ref={timelineRef}
          className="relative"
        >
          {/* Timeline base line */}
          <div className="absolute bottom-0 left-[15px] top-0 w-px bg-[#55584F] md:left-1/2 md:-translate-x-1/2" />

          {/* Animated line */}
          <motion.div
            style={{
              scaleY: lineScale,
              transformOrigin: "top",
            }}
            className="absolute bottom-0 left-[15px] top-0 w-px bg-[#B5BA9F] md:left-1/2 md:-translate-x-1/2"
          />

          {journey.map((item, index) => {
            const Icon = item.icon;
            const isLeft = item.side === "left";

            return (
              <motion.div
                key={item.year}
                initial={{
                  opacity: 0,
                  y: 40,
                }}
                whileInView={{
                  opacity: 1,
                  y: 0,
                }}
                viewport={{
                  once: true,
                  amount: 0.25,
                }}
                transition={{
                  duration: 0.7,
                  delay: 0.08,
                }}
                className={`relative mb-24 last:mb-0 md:mb-36 ${
                  isLeft
                    ? "md:pr-[52%]"
                    : "md:pl-[52%]"
                }`}
              >
                {/* Timeline node */}
                <div className="absolute left-[7px] top-2 z-10 flex h-[17px] w-[17px] items-center justify-center rounded-full border border-[#B5BA9F] bg-[#30332D] md:left-1/2 md:-translate-x-1/2">
                  <div className="h-1.5 w-1.5 rounded-full bg-[#B5BA9F]" />
                </div>

                {/* Content */}
                <div
                  className={`pl-12 md:pl-0 ${
                    isLeft
                      ? "md:text-right"
                      : "md:text-left"
                  }`}
                >
                  {/* Period */}
                  <div
                    className={`mb-5 flex items-center gap-3 ${
                      isLeft
                        ? "md:justify-end"
                        : "md:justify-start"
                    }`}
                  >
                    <span className="text-[10px] tracking-[0.2em] text-[#B5BA9F] uppercase">
                      {item.period}
                    </span>

                    <span className="h-px w-6 bg-[#66695E]" />
                  </div>

                  {/* Number */}
                  <span className="mb-3 block font-serif text-5xl italic text-[#72776A] md:text-6xl">
                    {item.year}
                  </span>

                  {/* Title */}
                  <h3 className="max-w-lg text-2xl leading-snug tracking-[-0.035em] text-[#F1EFE7] sm:text-3xl md:ml-auto">
                    {item.title}
                  </h3>

                  {/* Description */}
                  <p
                    className={`mt-5 max-w-md text-sm leading-7 text-[#BFC0B5] ${
                      isLeft
                        ? "md:ml-auto"
                        : ""
                    }`}
                  >
                    {item.description}
                  </p>

                  {/* Tag & Icon */}
                  <div
                    className={`mt-7 flex items-center gap-4 ${
                      isLeft
                        ? "md:justify-end"
                        : "md:justify-start"
                    }`}
                  >
                    <div className="flex h-9 w-9 items-center justify-center rounded-full border border-[#55584F] text-[#B5BA9F]">
                      <Icon
                        size={15}
                        strokeWidth={1.5}
                      />
                    </div>

                    <span className="text-[10px] tracking-[0.16em] text-[#999D8D] uppercase">
                      {item.tag}
                    </span>
                  </div>

                </div>

                {/* Center year marker on desktop */}
                <div
                  className={`absolute top-0 hidden md:block ${
                    isLeft
                      ? "right-[calc(50%-45px)]"
                      : "left-[calc(50%+25px)]"
                  }`}
                >
                  <span className="text-[10px] tracking-widest text-[#73776B]">
                    {String(index + 1).padStart(2, "0")}
                  </span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Footer */}
        <motion.div
          initial={{
            opacity: 0,
          }}
          whileInView={{
            opacity: 1,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.8,
          }}
          className="mt-28 border-t border-[#55584F] pt-8"
        >
          <div className="flex flex-col justify-between gap-6 sm:flex-row sm:items-center">
            <p className="max-w-md text-sm leading-7 text-[#BFC0B5]">
              This is not a finished story.
              There is still so much to learn,
              build, and discover.
            </p>

            <div className="flex items-center gap-3 text-[#B5BA9F]">
              <span className="text-xs tracking-wide">
                To be continued
              </span>

              <ArrowUpRight size={15} />
            </div>
          </div>
        </motion.div>

      </div>
    </section>
  );
}