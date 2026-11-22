"use client";

import {
  ArrowDown,
  ArrowRight,
  FileText,
} from "lucide-react";

import { motion } from "motion/react";

// ================================
// SOCIAL ICONS
// ================================

function GitHubIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.39.6.11.82-.26.82-.58v-2.05c-3.34.73-4.04-1.42-4.04-1.42-.55-1.39-1.33-1.76-1.33-1.76-1.09-.75.08-.73.08-.73 1.2.09 1.83 1.23 1.83 1.23 1.07 1.83 2.8 1.3 3.49.99.11-.77.42-1.3.76-1.6-2.67-.3-5.47-1.34-5.47-5.95 0-1.31.47-2.38 1.23-3.22-.12-.3-.53-1.52.12-3.17 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 6 0c2.3-1.55 3.3-1.23 3.3-1.23.65 1.65.24 2.87.12 3.17.77.84 1.23 1.91 1.23 3.22 0 4.62-2.8 5.65-5.48 5.95.43.37.82 1.1.82 2.22v3.3c0 .32.22.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0Z" />
    </svg>
  );
}

function LinkedInIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      width="19"
      height="19"
      viewBox="0 0 24 24"
      fill="currentColor"
      aria-hidden="true"
    >
      <path d="M20.45 20.45h-3.55v-5.57c0-1.33-.02-3.04-1.85-3.04-1.85 0-2.13 1.44-2.13 2.94v5.67H9.37V9h3.4v1.56h.05c.47-.9 1.63-1.85 3.35-1.85 3.58 0 4.24 2.35 4.24 5.4v6.34ZM5.34 7.43a2.06 2.06 0 1 1 0-4.12 2.06 2.06 0 0 1 0 4.12ZM7.12 20.45H3.56V9h3.56v11.45ZM22.22 0H1.78C.8 0 0 .78 0 1.75v20.5C0 23.22.8 24 1.78 24h20.44c.98 0 1.78-.78 1.78-1.75V1.75C24 .78 23.2 0 22.22 0Z" />
    </svg>
  );
}

// ================================
// HERO SECTION
// ================================

export default function HeroSection() {
  return (
    <section id="home" className="hero-section">
      <div className="container-main">

        <div className="hero-grid">

          {/* LEFT CONTENT */}

          <motion.div
            initial={{ opacity: 0, y: 24 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              duration: 0.8,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* STATUS */}

            <div className="mb-8 inline-flex items-center gap-2 rounded-full border border-[#E6E3DC] px-4 py-2">

              <span className="relative flex h-2 w-2">

                <span className="absolute inline-flex h-full w-full animate-ping rounded-full bg-[#7D8570] opacity-40" />

                <span className="relative inline-flex h-2 w-2 rounded-full bg-[#7D8570]" />

              </span>

              <span className="text-xs text-[#777970]">
                Open to opportunities &amp; collaborations
              </span>

            </div>

            {/* TITLE */}

            <h1 className="hero-title">
              Curious
              <br />
              by nature.
              <br />

              <span className="accent-text">
                Building
              </span>

              <br />
              with intention.
            </h1>

            {/* DESCRIPTION */}

            <p className="hero-description mt-7">

              Hello, I&apos;m{" "}

              <span className="font-medium text-[#242622]">
                Syaeful Anwar
              </span>
              .

              A technology enthusiast who enjoys exploring ideas,
              learning new things, and turning them into something
              meaningful.

            </p>

            {/* CTA */}

            <div className="mt-9 flex flex-wrap items-center gap-3">

              {/* Explore Projects */}

              <a
                href="#projects"
                className="button-primary"
              >
                Explore my work
                <ArrowRight size={16} />
              </a>

              {/* About Me */}

              <a
                href="#about"
                className="button-secondary"
              >
                More about me
                <ArrowDown size={15} />
              </a>

              {/* Documentation / Google Drive */}

              <a
                href="https://drive.google.com/drive/folders/12x-6tl1kkWwQtAamOkgHX9drQEL_YtCH?usp=drive_link"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 rounded-full border border-[#D8DCD0] bg-[#EEF0E9] px-5 py-3 text-sm text-[#626A57] transition-all duration-300 hover:border-[#7D8570] hover:bg-[#E3E7DC] hover:text-[#242622]"
              >
                <FileText size={16} />

                View documentation

                <ArrowRight
                  size={14}
                  className="transition-transform duration-300 group-hover:translate-x-1"
                />
              </a>

            </div>

            {/* SOCIAL LINKS */}

            <div className="mt-10 flex items-center gap-5">

              {/* GitHub */}

              <a
                href="https://github.com/Syaeful098"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="GitHub"
                className="text-[#777970] transition hover:text-[#242622]"
              >
                <GitHubIcon />
              </a>

              {/* LinkedIn */}

              <a
                href="https://www.linkedin.com/in/syaeful-anwar-8a6550331/"
                target="_blank"
                rel="noopener noreferrer"
                aria-label="LinkedIn"
                className="text-[#777970] transition hover:text-[#242622]"
              >
                <LinkedInIcon />
              </a>

              <div className="h-4 w-px bg-[#E6E3DC]" />

              <p className="text-xs text-[#777970]">
                Based in Indonesia
              </p>

            </div>

          </motion.div>

          {/* RIGHT VISUAL */}

          <motion.div
            className="hero-visual"
            initial={{ opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{
              duration: 1,
              delay: 0.2,
              ease: [0.22, 1, 0.36, 1],
            }}
          >

            {/* HERO ART */}

            <div className="hero-art">

              <div className="art-circle" />

              <div className="art-line" />

              <div className="absolute inset-0 flex items-center justify-center">

                <div className="relative z-2 text-center">

                  <p className="text-[10px] tracking-[0.3em] text-[#626A57]">
                    PERSONAL
                  </p>

                  <p className="mt-3 text-5xl font-light tracking-[-0.08em] text-[#626A57]">
                    01
                  </p>

                </div>

              </div>

              <div className="art-text">
                A journey of becoming
              </div>

            </div>

            {/* FLOATING CARD 1 */}

            <motion.div
              className="floating-card floating-card-top"
              animate={{ y: [0, -5, 0] }}
              transition={{
                duration: 5,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <p className="text-[10px] uppercase tracking-[0.15em] text-[#777970]">
                Currently building
              </p>

              <div className="mt-3 flex items-center gap-3">

                <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-[#E6E8DF] text-[#626A57]">

                  <span className="text-sm font-medium">
                    D
                  </span>

                </div>

                <div>

                  <p className="text-xs font-medium">
                    Data Analyzer
                  </p>

                  <p className="mt-1 text-[10px] text-[#777970]">
                    Personal project
                  </p>

                </div>

              </div>

            </motion.div>

            {/* FLOATING CARD 2 */}

            <motion.div
              className="floating-card floating-card-bottom"
              animate={{ y: [0, 5, 0] }}
              transition={{
                duration: 6,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            >

              <div className="flex items-center gap-3">

                <div className="flex h-9 w-9 items-center justify-center rounded-full bg-[#7D8570] text-white">

                  <ArrowRight size={15} />

                </div>

                <div>

                  <p className="text-xs font-medium">
                    Always evolving
                  </p>

                  <p className="mt-1 text-[10px] text-[#777970]">
                    Learning · Building · Exploring
                  </p>

                </div>

              </div>

            </motion.div>

          </motion.div>

        </div>

        {/* HERO FOOTER */}

        <div className="mt-16 flex items-center justify-between border-t border-[#E6E3DC] pt-5">

          <p className="text-[11px] tracking-wide text-[#777970]">
            A little about who I am
          </p>

          <a
            href="#about"
            className="flex items-center gap-2 text-[11px] text-[#777970] transition hover:text-[#242622]"
          >
            Scroll to explore
            <ArrowDown size={14} />
          </a>

        </div>

      </div>
    </section>
  );
}