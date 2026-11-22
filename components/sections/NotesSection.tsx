"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowUpRight,
  ArrowDown,
  PenLine,
  X,
} from "lucide-react";

const notes = [
  {
    id: "01",
    category: "DEVELOPMENT",
    date: "01 / REFLECTION",
    title: "Learning by building",
    subtitle:
      "Understanding something and actually building it are two different things.",
    content:
      "Mempelajari teknologi melalui teori memberikan fondasi. Namun ketika mulai membangun sesuatu sendiri, kita akan menemukan masalah yang tidak selalu muncul ketika sekadar mengikuti tutorial. Mulai dari error yang tidak terduga, memahami bagaimana setiap bagian saling terhubung, hingga menentukan solusi yang tepat. Proses membangun membuat pembelajaran terasa lebih nyata.",
    color: "#E7E5D9",
  },
  {
    id: "02",
    category: "TECHNOLOGY",
    date: "02 / OBSERVATION",
    title: "Working alongside AI",
    subtitle:
      "A tool can accelerate the process, but understanding still matters.",
    content:
      "AI mengubah cara kita belajar dan bekerja. Ia dapat membantu menjelaskan konsep, menemukan kesalahan, mengeksplorasi ide, dan mempercepat pekerjaan. Tetapi hasil yang baik tetap membutuhkan pemahaman, penilaian, dan kemampuan untuk memeriksa apakah sesuatu benar-benar bekerja. Saya melihat AI sebagai partner eksplorasi, bukan pengganti proses berpikir.",
    color: "#D8DCCF",
  },
  {
    id: "03",
    category: "PROCESS",
    date: "03 / PERSONAL NOTE",
    title: "Progress isn't always visible",
    subtitle:
      "Some of the most meaningful progress happens quietly.",
    content:
      "Tidak semua perkembangan bisa langsung terlihat dari hasil akhir. Ada proses memahami hal yang sebelumnya terasa asing, belajar dari kesalahan, membangun kebiasaan, dan perlahan menjadi lebih baik. Kadang perkembangan terbesar justru terjadi ketika kita tetap melanjutkan sesuatu meskipun hasilnya belum terlihat.",
    color: "#E1DDD3",
  },
];

export default function NotesSection() {
  const [activeNote, setActiveNote] = useState<string | null>(null);

  const selectedNote = notes.find(
    (note) => note.id === activeNote
  );

  return (
    <section
      id="notes"
      className="relative overflow-hidden bg-[#DDE0D4] px-6 py-28 text-[#30332D] sm:px-10 md:py-36 lg:px-16"
    >
      {/* Background Details */}
      <div className="pointer-events-none absolute right-[-120px] top-[-120px] h-[450px] w-[450px] rounded-full bg-[#BEC5B0]/40 blur-[120px]" />

      <div className="relative mx-auto max-w-7xl">

        {/* Header */}
        <motion.div
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
          }}
          transition={{
            duration: 0.7,
          }}
          className="mb-20"
        >
          <div className="mb-7 flex items-center gap-3">
            <PenLine
              size={14}
              strokeWidth={1.5}
              className="text-[#777D63]"
            />

            <span className="text-[10px] tracking-[0.23em] text-[#77796F] uppercase">
              07 — Field Notes
            </span>
          </div>

          <div className="grid grid-cols-1 gap-8 lg:grid-cols-[1.3fr_0.7fr] lg:items-end">
            <h2 className="text-5xl leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl lg:text-[86px]">
              Things I&apos;m learning
              <br />

              <span className="font-serif italic text-[#777D63]">
                along the way.
              </span>
            </h2>

            <div className="max-w-sm lg:pb-3">
              <p className="text-sm leading-7 text-[#72766B]">
                Catatan kecil, pemikiran, eksperimen,
                dan hal-hal yang menarik perhatian
                sepanjang perjalanan belajar
                dan membangun sesuatu.
              </p>
            </div>
          </div>
        </motion.div>

        {/* Main Notebook Composition */}
        <div className="relative">

          {/* Note 01 — Main */}
          <motion.div
            initial={{
              opacity: 0,
              x: -30,
            }}
            whileInView={{
              opacity: 1,
              x: 0,
            }}
            viewport={{
              once: true,
              amount: 0.2,
            }}
            transition={{
              duration: 0.8,
            }}
            className="relative grid grid-cols-1 gap-10 lg:grid-cols-[1.15fr_0.85fr] lg:gap-16"
          >

            {/* Image */}
            <div className="relative">
              <div className="relative overflow-hidden">
                <motion.div
                  whileHover={{
                    scale: 1.025,
                  }}
                  transition={{
                    duration: 0.7,
                  }}
                >
                  <div className="relative aspect-[5/4] overflow-hidden">
                    <div className="absolute inset-0 bg-[#7B8069]/10" />

                    <div
                      className="absolute inset-0 bg-cover bg-center"
                      style={{
                        backgroundImage:
                          "url('https://images.unsplash.com/photo-1455390582262-044cdead277a?auto=format&fit=crop&w=1400&q=85')",
                      }}
                    />
                  </div>
                </motion.div>

                {/* Image Caption */}
                <div className="absolute bottom-4 left-4 flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-[#E8E7DD]" />

                  <span className="text-[9px] tracking-[0.18em] text-white uppercase drop-shadow-md">
                    A quiet moment of reflection
                  </span>
                </div>
              </div>

              {/* Floating Index */}
              <div className="absolute -right-3 -top-3 flex h-12 w-12 items-center justify-center rounded-full bg-[#777D63] text-xs text-[#F4F1E9] sm:-right-5 sm:-top-5">
                01
              </div>
            </div>

            {/* Main Note */}
            <div className="flex flex-col justify-center py-3 lg:py-10">
              <div className="mb-7 flex items-center gap-3">
                <span className="text-[9px] tracking-[0.2em] text-[#858579] uppercase">
                  {notes[0].date}
                </span>

                <span className="h-px w-7 bg-[#A5A797]" />

                <span className="text-[9px] tracking-[0.16em] text-[#777D63] uppercase">
                  {notes[0].category}
                </span>
              </div>

              <h3 className="max-w-xl text-3xl leading-[1.15] tracking-[-0.04em] sm:text-4xl md:text-5xl">
                {notes[0].title}
              </h3>

              <p className="mt-5 max-w-md font-serif text-lg italic leading-8 text-[#777D63]">
                {notes[0].subtitle}
              </p>

              <p className="mt-6 max-w-md text-sm leading-7 text-[#72766B]">
                {notes[0].content.slice(0, 180)}...
              </p>

              <button
                onClick={() => setActiveNote(notes[0].id)}
                className="group mt-8 flex w-fit items-center gap-3"
              >
                <span className="text-[10px] tracking-[0.16em] text-[#55574F] uppercase">
                  Read the full note
                </span>

                <ArrowUpRight
                  size={15}
                  className="text-[#777D63] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                />

                <span className="absolute mt-8 h-px w-0 bg-[#777D63] transition-all duration-500 group-hover:w-32" />
              </button>
            </div>
          </motion.div>

          {/* Divider / Notebook Line */}
          <div className="my-24 h-px bg-[#BEC2B4]" />

          {/* Notes 02 & 03 — Asymmetric */}
          <div className="grid grid-cols-1 gap-16 md:grid-cols-2 md:gap-20">

            {/* Note 02 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
              }}
              className="relative md:mt-10"
            >
              {/* Decorative Number */}
              <span className="pointer-events-none absolute -left-3 -top-12 font-serif text-8xl italic text-[#C3C8B8]/70 sm:-left-8">
                02
              </span>

              <div className="relative">
                <div className="mb-6 flex items-center gap-3">
                  <span className="text-[9px] tracking-[0.2em] text-[#858579] uppercase">
                    {notes[1].date}
                  </span>

                  <span className="h-px w-6 bg-[#A5A797]" />

                  <span className="text-[9px] tracking-[0.16em] text-[#777D63] uppercase">
                    {notes[1].category}
                  </span>
                </div>

                <h3 className="max-w-md text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                  {notes[1].title}
                </h3>

                <p className="mt-4 max-w-sm font-serif text-lg italic leading-7 text-[#777D63]">
                  {notes[1].subtitle}
                </p>

                <div className="my-8 flex items-center gap-4">
                  <div className="h-px w-10 bg-[#858A70]" />

                  <span className="text-[9px] tracking-[0.15em] text-[#929286] uppercase">
                    Thoughts on technology
                  </span>
                </div>

                <p className="max-w-md text-sm leading-7 text-[#72766B]">
                  {notes[1].content.slice(0, 160)}...
                </p>

                <button
                  onClick={() => setActiveNote(notes[1].id)}
                  className="group mt-7 flex items-center gap-3"
                >
                  <span className="text-[10px] tracking-[0.16em] text-[#55574F] uppercase">
                    Explore note
                  </span>

                  <ArrowUpRight
                    size={15}
                    className="text-[#777D63] transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                  />
                </button>
              </div>

              {/* Decorative Image */}
              <div className="mt-12 overflow-hidden">
                <motion.div
                  whileHover={{
                    scale: 1.03,
                  }}
                  transition={{
                    duration: 0.6,
                  }}
                  className="aspect-[16/9] bg-cover bg-center"
                  style={{
                    backgroundImage:
                      "url('https://images.unsplash.com/photo-1498050108023-c5249f4df085?auto=format&fit=crop&w=1200&q=85')",
                  }}
                />
              </div>
            </motion.div>

            {/* Note 03 */}
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
              }}
              whileInView={{
                opacity: 1,
                y: 0,
              }}
              viewport={{
                once: true,
              }}
              transition={{
                duration: 0.7,
                delay: 0.15,
              }}
              className="relative"
            >
              {/* Decorative notebook paper */}
              <div className="relative rotate-[1deg] bg-[#F1EFE6] p-7 shadow-[0_10px_30px_rgba(55,58,47,0.06)] sm:p-9">

                {/* Paper Lines */}
                <div
                  className="pointer-events-none absolute inset-0 opacity-30"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(to bottom, transparent 0px, transparent 31px, #C8C9BE 32px)",
                    backgroundPositionY: "100px",
                  }}
                />

                {/* Paper Header */}
                <div className="relative mb-8 flex items-center justify-between">
                  <span className="font-serif text-sm italic text-[#777D63]">
                    Personal notes
                  </span>

                  <span className="text-[9px] tracking-[0.15em] text-[#929286]">
                    03 / 03
                  </span>
                </div>

                {/* Note Content */}
                <div className="relative py-4">
                  <div className="mb-5 flex items-center gap-3">
                    <span className="text-[9px] tracking-[0.2em] text-[#858579] uppercase">
                      {notes[2].date}
                    </span>
                  </div>

                  <h3 className="max-w-sm font-serif text-3xl italic leading-tight text-[#55574F] sm:text-4xl">
                    {notes[2].title}
                  </h3>

                  <p className="mt-5 max-w-sm text-sm leading-7 text-[#77796F]">
                    {notes[2].subtitle}
                  </p>

                  <div className="mt-7">
                    <p className="max-w-sm text-sm leading-7 text-[#77796F]">
                      {notes[2].content.slice(0, 150)}...
                    </p>
                  </div>
                </div>

                {/* Paper Footer */}
                <div className="relative mt-10 flex items-center justify-between">
                  <span className="text-[9px] tracking-[0.16em] text-[#929286] uppercase">
                    {notes[2].category}
                  </span>

                  <button
                    onClick={() => setActiveNote(notes[2].id)}
                    className="group flex items-center gap-2 text-[#777D63]"
                  >
                    <span className="text-[9px] tracking-[0.12em] uppercase">
                      Read
                    </span>

                    <ArrowUpRight
                      size={14}
                      className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
                    />
                  </button>
                </div>
              </div>

              {/* Offset Decoration */}
              <div className="pointer-events-none absolute -bottom-7 -right-4 -z-10 h-28 w-28 rounded-full border border-[#BCC1B0] sm:-right-8" />
            </motion.div>

          </div>
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
            duration: 0.7,
          }}
          className="mt-24 flex flex-col justify-between gap-5 border-t border-[#BEC2B4] pt-7 sm:flex-row sm:items-center"
        >
          <div>
            <p className="text-sm text-[#72766B]">
              A notebook of ideas, not conclusions.
            </p>
          </div>

          <div className="flex items-center gap-3">
            <span className="text-[10px] tracking-[0.16em] text-[#929286] uppercase">
              Keep exploring
            </span>

            <ArrowDown
              size={14}
              className="text-[#777D63]"
            />
          </div>
        </motion.div>

      </div>

      {/* Full Note Modal */}
      <AnimatePresence>
        {selectedNote && (
          <motion.div
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            className="fixed inset-0 z-[120] flex items-center justify-center bg-[#292B26]/60 px-5 py-8 backdrop-blur-sm"
            onClick={() => setActiveNote(null)}
          >
            <motion.div
              initial={{
                opacity: 0,
                y: 25,
                scale: 0.98,
              }}
              animate={{
                opacity: 1,
                y: 0,
                scale: 1,
              }}
              exit={{
                opacity: 0,
                y: 15,
                scale: 0.98,
              }}
              transition={{
                duration: 0.3,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative max-h-[85vh] w-full max-w-2xl overflow-y-auto bg-[#F4F1E9] p-8 sm:p-12"
            >
              <button
                onClick={() => setActiveNote(null)}
                className="absolute right-6 top-6 flex h-9 w-9 items-center justify-center rounded-full border border-[#D5D2C8] text-[#77796F] transition-colors hover:bg-[#E5E2D9]"
                aria-label="Close note"
              >
                <X size={16} />
              </button>

              <span className="text-[10px] tracking-[0.2em] text-[#81856D] uppercase">
                {selectedNote.date}
              </span>

              <h3 className="mt-7 max-w-lg text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                {selectedNote.title}
              </h3>

              <p className="mt-5 font-serif text-lg italic leading-8 text-[#777D63]">
                {selectedNote.subtitle}
              </p>

              <div className="my-8 h-px w-12 bg-[#858A70]" />

              <p className="whitespace-pre-line text-sm leading-8 text-[#72766B]">
                {selectedNote.content}
              </p>

              <div className="mt-10 border-t border-[#D5D2C8] pt-6">
                <span className="text-[10px] tracking-[0.15em] text-[#929286] uppercase">
                  {selectedNote.category} / FIELD NOTES
                </span>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>

    </section>
  );
}