"use client";

import {
  ArrowRight,
  Sparkles,
  Compass,
  Lightbulb,
  Leaf,
  GraduationCap,
} from "lucide-react";

import { motion } from "motion/react";

// ================================
// ABOUT SECTION
// ================================

export default function AboutSection() {
  return (
    <section
      id="about"
      className="relative overflow-hidden border-t border-[#E6E3DC]"
    >
      <div className="grid min-h-screen grid-cols-1 lg:grid-cols-[0.85fr_1.15fr]">

        {/* ================================================== */}
        {/* LEFT SIDE — FULL IMAGE */}
        {/* ================================================== */}

        <div className="relative min-h-[650px] overflow-hidden bg-[#D8D8CF] lg:min-h-screen">

          {/* PROFILE IMAGE */}

          <motion.div
            initial={{ scale: 1.08 }}
            whileInView={{ scale: 1 }}
            viewport={{ once: true }}
            transition={{
              duration: 1.4,
              ease: [0.22, 1, 0.36, 1],
            }}
            className="absolute inset-0"
          >
            <div
              className="absolute inset-0 bg-cover bg-center"
              style={{
                backgroundImage: "url('/images/profile.jpg')",
              }}
            />
          </motion.div>

          {/* IMAGE OVERLAY */}

          <div className="absolute inset-0 bg-gradient-to-t from-[#1F211D]/70 via-transparent to-[#1F211D]/10" />

          <div className="absolute inset-0 bg-gradient-to-r from-transparent to-[#1F211D]/10" />

          {/* TOP LABEL */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="absolute left-6 right-6 top-8 z-10 flex items-center justify-between sm:left-10 sm:right-10"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#E5E7D9]" />

              <span className="text-xs tracking-[0.2em] text-white/80">
                A LITTLE ABOUT ME
              </span>
            </div>

            <span className="text-xs tracking-[0.2em] text-white/60">
              02
            </span>
          </motion.div>

          {/* PHOTO CAPTION */}

          <div className="absolute bottom-0 left-0 right-0 z-10 p-6 sm:p-10">

            <motion.div
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{
                duration: 0.8,
                delay: 0.2,
              }}
            >

              <p className="text-xs uppercase tracking-[0.2em] text-white/60">
                A little reminder
              </p>

              <h3 className="mt-4 max-w-md text-2xl font-light leading-relaxed tracking-[-0.03em] text-white sm:text-3xl">
                Keep growing,
                <br />
                at your own pace.
              </h3>

              {/* Decorative line */}

              <div className="mt-8 flex items-center gap-4">

                <div className="h-px w-12 bg-white/50" />

                <p className="text-xs tracking-wide text-white/60">
                  Learning · Exploring · Becoming
                </p>

              </div>

            </motion.div>

          </div>

          {/* IMAGE FRAME DECORATION */}

          <div className="pointer-events-none absolute inset-5 border border-white/15 sm:inset-8" />

        </div>


        {/* ================================================== */}
        {/* RIGHT SIDE — ABOUT CONTENT */}
        {/* ================================================== */}

        <div className="relative flex flex-col overflow-hidden bg-[#F5F3EE] px-6 py-12 sm:px-10 md:px-14 lg:px-16 lg:py-14">

          {/* Background decoration */}

          <div className="pointer-events-none absolute -right-32 -top-32 h-[400px] w-[400px] rounded-full border border-[#7D8570]/10" />

          <div className="pointer-events-none absolute -right-20 -top-20 h-[250px] w-[250px] rounded-full border border-[#7D8570]/10" />


          {/* HEADER */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >

            <p className="text-xs uppercase tracking-[0.2em] text-[#7D8570]">
              02 — About Me
            </p>

            <h2 className="mt-7 text-[clamp(2.8rem,5vw,5rem)] font-medium leading-[1.05] tracking-[-0.06em]">

              Not just what I do,

              <br />

              <span className="text-[#7D8570]">
                but who I am.
              </span>

            </h2>

          </motion.div>


          {/* INTRO */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.2 }}
            transition={{
              duration: 0.7,
              delay: 0.1,
            }}
            className="relative z-10 mt-12"
          >

            {/* Paragraph 1 */}

            <p className="text-lg leading-8 text-[#55584F] md:text-xl md:leading-9">

              I&apos;m someone who believes that growth comes
              from curiosity, consistency, and the willingness
              to explore things beyond what is already familiar.

            </p>

            {/* Paragraph 2 */}

            <p className="mt-6 text-sm leading-8 text-[#777970] md:text-base">

              With a background in Informatics Engineering,
              I&apos;m interested in how technology can turn
              ideas into useful things. I enjoy learning,
              experimenting, solving problems, and building
              projects that have a purpose beyond simply
              looking good.

            </p>

            {/* Paragraph 3 */}

            <p className="mt-5 text-sm leading-8 text-[#777970] md:text-base">

              I don&apos;t see learning as something that ends
              with a degree or a particular skill. There will
              always be something new to understand, something
              to improve, and another idea worth exploring.

            </p>

          </motion.div>


          {/* ================================================== */}
          {/* EDUCATIONAL BACKGROUND */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.15,
            }}
            className="relative z-10 mt-9"
          >

            <div className="border-y border-[#E2DFD7] py-6">

              {/* Section Label */}

              <div className="flex items-center gap-2">

                <GraduationCap
                  size={16}
                  strokeWidth={1.5}
                  className="text-[#7D8570]"
                />

                <p className="text-[10px] uppercase tracking-[0.18em] text-[#777970]">
                  Educational Background
                </p>

              </div>

              {/* University */}

              <div className="mt-5 flex items-start justify-between gap-4">

                <div>

                  <h3 className="text-base font-medium leading-7 text-[#242622] sm:text-lg">
                    Universitas Hasyim Asy&apos;ari
                  </h3>

                  <p className="mt-1 text-sm text-[#777970]">
                    Informatics Engineering
                  </p>

                  <p className="mt-1 text-xs text-[#92958C]">
                    Bachelor&apos;s Degree
                  </p>

                </div>

                {/* GPA */}

                <div className="shrink-0 rounded-xl border border-[#DCDDD3] bg-[#E9EAE2] px-4 py-3 text-center">

                  <p className="text-[9px] uppercase tracking-[0.15em] text-[#777970]">
                    GPA
                  </p>

                  <p className="mt-1 text-lg font-medium tracking-tight text-[#626A57]">
                    3.75
                    <span className="text-xs font-normal text-[#92958C]">
                      /4.00
                    </span>
                  </p>

                </div>

              </div>

            </div>

          </motion.div>


          {/* ================================================== */}
          {/* PERSONAL VALUES */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 25 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="relative z-10 mt-12"
          >

            <p className="text-xs uppercase tracking-[0.18em] text-[#7D8570]">
              What matters to me
            </p>

            <div className="mt-5 grid grid-cols-1 gap-3 sm:grid-cols-2">

              {/* VALUE 1 */}

              <div className="group border border-[#E6E3DC] p-5 transition duration-300 hover:border-[#B8BEAD] hover:bg-[#EEECE6]">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6E8DF] text-[#626A57] transition-transform duration-300 group-hover:scale-110">
                  <Lightbulb size={19} strokeWidth={1.5} />
                </div>

                <h3 className="mt-4 text-sm font-medium text-[#242622]">
                  Stay curious
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#777970]">
                  Keep asking questions and never stop learning.
                </p>

              </div>


              {/* VALUE 2 */}

              <div className="group border border-[#E6E3DC] p-5 transition duration-300 hover:border-[#B8BEAD] hover:bg-[#EEECE6]">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6E8DF] text-[#626A57] transition-transform duration-300 group-hover:scale-110">
                  <Compass size={19} strokeWidth={1.5} />
                </div>

                <h3 className="mt-4 text-sm font-medium text-[#242622]">
                  Explore with purpose
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#777970]">
                  Find direction while remaining open to new possibilities.
                </p>

              </div>


              {/* VALUE 3 */}

              <div className="group border border-[#E6E3DC] p-5 transition duration-300 hover:border-[#B8BEAD] hover:bg-[#EEECE6]">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6E8DF] text-[#626A57] transition-transform duration-300 group-hover:scale-110">
                  <Sparkles size={19} strokeWidth={1.5} />
                </div>

                <h3 className="mt-4 text-sm font-medium text-[#242622]">
                  Build meaningful things
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#777970]">
                  Turn ideas into something useful and tangible.
                </p>

              </div>


              {/* VALUE 4 */}

              <div className="group border border-[#E6E3DC] p-5 transition duration-300 hover:border-[#B8BEAD] hover:bg-[#EEECE6]">

                <div className="flex h-10 w-10 items-center justify-center rounded-full bg-[#E6E8DF] text-[#626A57] transition-transform duration-300 group-hover:scale-110">
                  <Leaf size={19} strokeWidth={1.5} />
                </div>

                <h3 className="mt-4 text-sm font-medium text-[#242622]">
                  Grow at my own pace
                </h3>

                <p className="mt-2 text-xs leading-6 text-[#777970]">
                  Value progress, patience, and a sustainable journey.
                </p>

              </div>

            </div>

          </motion.div>


          {/* CLOSING QUOTE */}

          <motion.div
            initial={{ opacity: 0, x: -15 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.2,
            }}
            className="relative z-10 mt-12 border-l-2 border-[#7D8570] pl-5"
          >

            <p className="text-sm italic leading-7 text-[#626A57]">

              &ldquo;There is always more to discover,
              more to learn, and more to become.&rdquo;

            </p>

          </motion.div>


          {/* ================================================== */}
          {/* BOTTOM DIVIDER */}
          {/* ================================================== */}

          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="relative z-10 mt-auto pt-16"
          >

            <div className="flex items-center justify-between border-t border-[#E6E3DC] pt-5">

              <p className="text-[11px] tracking-wide text-[#777970]">
                A continuous journey of learning and becoming
              </p>

              <a
                href="#projects"
                className="group flex items-center gap-2 text-[11px] text-[#777970] transition hover:text-[#242622]"
              >
                Discover my projects

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

          </motion.div>

        </div>

      </div>
    </section>
  );
}