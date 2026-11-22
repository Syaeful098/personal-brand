"use client";

import { motion } from "motion/react";
import { ArrowDown, ArrowUpRight, Mail } from "lucide-react";

const email = "syaefula465@gmail.com";

const contactLinks = [
  {
    label: "Email",
    href: `https://mail.google.com/mail/?view=cm&fs=1&to=${email}`,
    icon: "email",
  },
  {
    label: "GitHub",
    href: "https://github.com/Syaeful098",
    icon: "github",
  },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/syaeful-anwar-8a6550331",
    icon: "linkedin",
  },
  {
    label: "TikTok",
    href: "https://www.tiktok.com/@syyyffl?_r=1&_t=ZS-9Bc9ViPBD4G",
    icon: "tiktok",
  },
  {
    label: "Facebook",
    href: "https://www.facebook.com/share/1DhhAcdVge/",
    icon: "facebook",
  },
  {
    label: "WhatsApp",
    href: "https://wa.me/6281577171342",
    icon: "whatsapp",
  },
  {
    label: "Curriculum Vitae",
    href: "https://drive.google.com/file/d/1TsQebu19xXTYt1mUDp_duebgAC610LRZ/view?usp=drive_link",
    icon: "cv",
  },
];

function ContactIcon({ type }: { type: string }) {
  const common = {
    width: 20,
    height: 20,
    viewBox: "0 0 24 24",
    fill: "none",
    stroke: "currentColor",
    strokeWidth: 1.6,
    strokeLinecap: "round" as const,
    strokeLinejoin: "round" as const,
  };

  switch (type) {
    case "email":
      return <Mail size={19} strokeWidth={1.6} />;

    case "github":
      return (
        <svg {...common} viewBox="0 0 24 24">
          <path
            fill="currentColor"
            stroke="none"
            d="M12 2C6.477 2 2 6.477 2 12c0 4.418 2.865 8.167 6.839 9.49.5.092.682-.217.682-.482 0-.237-.009-.866-.014-1.7-2.782.604-3.369-1.342-3.369-1.342-.454-1.154-1.11-1.462-1.11-1.462-.908-.62.069-.607.069-.607 1.003.07 1.531 1.03 1.531 1.03.892 1.529 2.341 1.088 2.91.832.091-.647.35-1.088.636-1.339-2.22-.253-4.555-1.111-4.555-4.944 0-1.092.39-1.984 1.03-2.684-.103-.253-.446-1.272.098-2.65 0 0 .84-.269 2.75 1.025A9.564 9.564 0 0 1 12 6.815c.85.004 1.705.115 2.504.337 1.909-1.294 2.748-1.025 2.748-1.025.545 1.378.202 2.397.1 2.65.64.7 1.028 1.592 1.028 2.684 0 3.842-2.338 4.688-4.566 4.936.359.31.678.921.678 1.856 0 1.34-.012 2.42-.012 2.75 0 .267.18.578.688.48C19.143 20.163 22 16.416 22 12c0-5.523-4.477-10-10-10Z"
          />
        </svg>
      );

    case "linkedin":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            stroke="none"
            d="M20.447 20.452h-3.554v-5.569c0-1.328-.026-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.049c.476-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286ZM5.337 7.433a2.062 2.062 0 1 1 0-4.124 2.062 2.062 0 0 1 0 4.124ZM3.56 20.452h3.554V9H3.56v11.452ZM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.226.792 24 1.771 24h20.451C23.2 24 24 23.226 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003Z"
          />
        </svg>
      );

    case "tiktok":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            stroke="none"
            d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.33V2h-3.3v14.67a2.91 2.91 0 0 1-2.91 2.78 2.91 2.91 0 0 1 0-5.82c.31 0 .61.05.9.14V10.4a6.19 6.19 0 0 0-.9-.07 6.23 6.23 0 1 0 6.23 6.23V9.09a8.1 8.1 0 0 0 4.74 1.52V7.31a4.85 4.85 0 0 1-1-.62Z"
          />
        </svg>
      );

    case "facebook":
      return (
        <svg {...common}>
          <path
            fill="currentColor"
            stroke="none"
            d="M13.5 21v-8.2h2.75l.41-3.2H13.5V7.56c0-.93.26-1.56 1.6-1.56h1.7V3.14C16.5 3.05 15.48 3 14.46 3c-3.01 0-4.97 1.83-4.97 5.2v1.4H6.75v3.2H9.5V21h4Z"
          />
        </svg>
      );

    case "whatsapp":
      return (
        <svg {...common}>
          <path d="M20.5 11.8a8.5 8.5 0 0 1-12.7 7.4L3 20.5l1.4-4.6A8.5 8.5 0 1 1 20.5 11.8Z" />
          <path
            d="M8.2 7.6c-.3-.7-.6-.7-.9-.7h-.6c-.2 0-.5.1-.7.4-.3.3-1 1-1 2.4s1 2.8 1.1 3c.2.2 2 3.2 4.9 4.4 2.4 1 2.9.8 3.4.7.5-.1 1.6-.7 1.8-1.4.2-.7.2-1.3.1-1.4-.1-.1-.3-.2-.6-.4l-1.8-.9c-.3-.1-.5-.2-.7.2-.2.3-.7.9-.9 1.1-.2.2-.4.2-.7.1-.3-.1-1.2-.4-2.3-1.4-.9-.7-1.5-1.5-1.7-1.8-.2-.3-.1-.5.1-.7.2-.2.3-.5.3-.7 0-.2-.3-.7-1-1.3-.7-.5-.2-.9-.1-1.2.1-.3.3-.4.7-.4 1.1 0 .4.3 1.1.5 1.3.2.2 1.3 2.1 3.2 2.9 1.9.8 2.2.5 2.5.4.4-.1.8-.4 1-.7.2-.3.2-.6.2-.7-.1-.1-.3-.2-.6-.3"
            strokeWidth="1"
          />
        </svg>
      );

    case "cv":
      return (
        <svg {...common}>
          <path d="M14 2H6a2 2 0 0 0-2 2v16a2 2 0 0 0 2 2h12a2 2 0 0 0 2-2V8Z" />
          <path d="M14 2v6h6" />
          <path d="M8 13h8" />
          <path d="M8 17h8" />
          <path d="M8 9h2" />
        </svg>
      );

    default:
      return null;
  }
}

export default function ContactSection() {
  return (
    <section id="contact" className="relative w-full overflow-hidden">
      <div className="grid min-h-[680px] grid-cols-1 lg:grid-cols-2">

        {/* LEFT PANEL */}
        <div className="relative flex flex-col justify-between overflow-hidden bg-[#30332D] px-7 py-12 text-[#E8E9E2] sm:px-12 sm:py-16 lg:px-16 lg:py-20">

          {/* Decorative circles */}
          <div className="pointer-events-none absolute -right-32 -top-32 h-[420px] w-[420px] rounded-full border border-white/[0.06]" />
          <div className="pointer-events-none absolute -right-20 -top-20 h-[300px] w-[300px] rounded-full border border-white/[0.08]" />
          <div className="pointer-events-none absolute -bottom-40 -left-40 h-[420px] w-[420px] rounded-full border border-white/[0.05]" />

          {/* Top */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
            className="relative z-10"
          >
            <div className="flex items-center gap-3">
              <span className="h-2 w-2 rounded-full bg-[#A4AD91]" />

              <p className="text-[10px] tracking-[0.28em] text-white/50 uppercase">
                Contact
              </p>
            </div>
          </motion.div>

          {/* Main heading */}
          <motion.div
            initial={{ opacity: 0, y: 35 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.1 }}
            className="relative z-10 my-16 lg:my-20"
          >
            <h2 className="font-serif text-[clamp(3.5rem,7vw,6.5rem)] leading-[0.94] tracking-[-0.055em]">
              Let&apos;s make
              <br />
              something
              <br />
              <span className="text-[#A4AD91] italic">
                meaningful.
              </span>
            </h2>

            <p className="mt-8 max-w-sm text-sm leading-7 text-white/55">
              Every meaningful connection starts with a simple conversation.
              I&apos;m always open to new ideas, collaborations, and opportunities.
            </p>
          </motion.div>

          {/* CTA */}
          <motion.a
            href={`https://mail.google.com/mail/?view=cm&fs=1&to=${email}`}
            target="_blank"
            rel="noopener noreferrer"
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="group relative z-10 inline-flex w-fit items-center gap-4 border-b border-[#A4AD91]/50 pb-3 text-sm text-[#E8E9E2] transition-colors hover:border-[#A4AD91] hover:text-[#A4AD91]"
          >
            <span>Start a conversation</span>

            <ArrowUpRight
              size={17}
              className="transition-transform duration-300 group-hover:translate-x-1 group-hover:-translate-y-1"
            />
          </motion.a>

          {/* Bottom */}
          <div className="relative z-10 mt-16 flex items-end justify-between">
            <div>
              <p className="text-[10px] tracking-[0.2em] text-white/35 uppercase">
                Based in
              </p>

              <p className="mt-2 text-sm text-white/70">
                Indonesia
              </p>
            </div>

            <a
              href="#top"
              className="group flex items-center gap-2 text-xs text-white/45 transition-colors hover:text-[#A4AD91]"
            >
              Back to top

              <ArrowUpRight
                size={14}
                className="transition-transform group-hover:-translate-y-1 group-hover:translate-x-1"
              />
            </a>
          </div>
        </div>

        {/* RIGHT PANEL */}
        <div className="relative flex flex-col justify-between bg-[#A4AD91] px-7 py-12 text-[#30332D] sm:px-12 sm:py-16 lg:px-16 lg:py-20">

          {/* Top label */}
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.7 }}
          >
            <p className="text-[10px] tracking-[0.28em] uppercase text-[#30332D]/55">
              Find me elsewhere
            </p>
          </motion.div>

          {/* Contact links */}
          <div className="my-10 lg:my-12">
            <div className="flex flex-col">
              {contactLinks.map((contact, index) => (
                <motion.a
                  key={contact.label}
                  href={contact.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  initial={{ opacity: 0, x: 20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.45,
                    delay: index * 0.06,
                  }}
                  className="group flex items-center justify-between border-b border-[#30332D]/15 py-2.5 transition-colors hover:border-[#30332D]/40"
                >
                  <div className="flex items-center gap-3.5">

                    {/* Icon */}
                    <div className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#30332D]/20 transition-all duration-300 group-hover:bg-[#30332D] group-hover:text-[#A4AD91]">
                      <ContactIcon type={contact.icon} />
                    </div>

                    {/* Label only */}
                    <span className="text-sm tracking-wide transition-transform duration-300 group-hover:translate-x-1">
                      {contact.label}
                    </span>
                  </div>

                  <ArrowUpRight
                    size={16}
                    strokeWidth={1.5}
                    className="text-[#30332D]/45 transition-all duration-300 group-hover:-translate-y-1 group-hover:translate-x-1 group-hover:text-[#30332D]"
                  />
                </motion.a>
              ))}
            </div>
          </div>

          {/* Bottom right */}
          <motion.div
            initial={{ opacity: 0, y: 15 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="flex items-end justify-between border-t border-[#30332D]/15 pt-5"
          >
            <div>
              <p className="text-[10px] tracking-[0.2em] uppercase text-[#30332D]/45">
                Personal portfolio
              </p>

              <p className="mt-2 text-xs text-[#30332D]/65">
                © 2026 · Made with intention.
              </p>
            </div>

            <a
              href="#top"
              aria-label="Scroll to top"
              className="flex h-10 w-10 items-center justify-center rounded-full border border-[#30332D]/20 transition-all duration-300 hover:bg-[#30332D] hover:text-[#A4AD91]"
            >
              <ArrowDown size={16} className="rotate-180" />
            </a>
          </motion.div>
        </div>
      </div>
    </section>
  );
}