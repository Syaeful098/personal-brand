"use client";

import { useEffect, useState } from "react";

import {
  Home,
  UserRound,
  FolderKanban,
  Code2,
  Route,
  Award,
  BookOpen,
  Activity,
  Mail,
  Menu,
  X,
} from "lucide-react";

import { AnimatePresence, motion } from "motion/react";

const items = [
  { label: "Home", href: "#home", icon: Home },
  { label: "About", href: "#about", icon: UserRound },
  { label: "Projects", href: "#projects", icon: FolderKanban },
  { label: "Skills", href: "#skills", icon: Code2 },
  { label: "Journey", href: "#journey", icon: Route },
  { label: "Achievements", href: "#achievements", icon: Award },
  { label: "Notes", href: "#notes", icon: BookOpen },
  { label: "Now", href: "#now", icon: Activity },
  { label: "Contact", href: "#contact", icon: Mail },
];

export default function RadialSidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const [activeSection, setActiveSection] = useState("home");

  // ==========================================
  // ACTIVE SECTION DETECTION
  // ==========================================

  useEffect(() => {
    const handleScroll = () => {
      let currentSection = "home";

      items.forEach((item) => {
        const element = document.querySelector(item.href);

        if (!element) return;

        const top = element.getBoundingClientRect().top;

        if (top <= window.innerHeight * 0.45) {
          currentSection = element.id;
        }
      });

      setActiveSection(currentSection);
    };

    window.addEventListener("scroll", handleScroll, {
      passive: true,
    });

    handleScroll();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // ==========================================
  // BODY SCROLL LOCK
  // ==========================================

  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "";

    return () => {
      document.body.style.overflow = "";
    };
  }, [isOpen]);

  // ==========================================
  // CLOSE ON ESCAPE
  // ==========================================

  useEffect(() => {
    const handleEscape = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        setIsOpen(false);
      }
    };

    window.addEventListener("keydown", handleEscape);

    return () => {
      window.removeEventListener("keydown", handleEscape);
    };
  }, []);

  // ==========================================
  // RENDER
  // ==========================================

  return (
    <>
      {/* ====================================== */}
      {/* BACKDROP */}
      {/* ====================================== */}

      <AnimatePresence>
        {isOpen && (
          <motion.button
            type="button"
            aria-label="Close navigation"
            className="fixed inset-0 z-90 bg-[#242622]/5 backdrop-blur-[1px]"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            onClick={() => setIsOpen(false)}
          />
        )}
      </AnimatePresence>

      {/* ====================================== */}
      {/* NAVIGATION */}
      {/* ====================================== */}

      <div className="fixed left-5 top-5 z-100 sm:left-7 sm:top-7">
        <div className="relative">

          {/* ================================== */}
          {/* MAIN BUTTON */}
          {/* ================================== */}

          <motion.button
            type="button"
            onClick={() => setIsOpen((prev) => !prev)}
            whileTap={{ scale: 0.92 }}
            whileHover={{ scale: 1.04 }}
            className="relative z-110 flex h-12 w-12 items-center justify-center rounded-full bg-[#242622] text-[#F5F3EE] shadow-lg shadow-[#242622]/10 transition-colors hover:bg-[#45483F]"
            aria-label={
              isOpen
                ? "Close navigation"
                : "Open navigation"
            }
            aria-expanded={isOpen}
          >
            <AnimatePresence mode="wait">
              <motion.span
                key={isOpen ? "close" : "menu"}
                initial={{
                  opacity: 0,
                  rotate: -45,
                  scale: 0.7,
                }}
                animate={{
                  opacity: 1,
                  rotate: 0,
                  scale: 1,
                }}
                exit={{
                  opacity: 0,
                  rotate: 45,
                  scale: 0.7,
                }}
                transition={{ duration: 0.18 }}
              >
                {isOpen ? (
                  <X size={19} strokeWidth={1.8} />
                ) : (
                  <Menu size={19} strokeWidth={1.8} />
                )}
              </motion.span>
            </AnimatePresence>

            {/* Decorative Dot */}
            <span className="absolute bottom-1.75 right-1.75 h-2 w-2 rounded-full border-2 border-[#242622] bg-[#A5AD96]" />
          </motion.button>

          {/* ================================== */}
          {/* MENU ITEMS */}
          {/* ================================== */}

          <AnimatePresence>
            {isOpen && (
              <>
                {items.map((item, index) => {
                  const Icon = item.icon;

                  const isActive =
                    activeSection === item.href.slice(1);

                  return (
                    <motion.a
                      key={item.label}
                      href={item.href}
                      onClick={() => {
                        setActiveSection(item.href.slice(1));
                        setIsOpen(false);
                      }}
                      className="absolute left-0 top-0 flex items-center"
                      initial={{
                        opacity: 0,
                        scale: 0.5,
                        x: 0,
                        y: 0,
                      }}
                      animate={{
                        opacity: 1,
                        scale: 1,
                        x: 0,
                        y: 56 + index * 54,
                      }}
                      exit={{
                        opacity: 0,
                        scale: 0.5,
                        x: 0,
                        y: 0,
                      }}
                      transition={{
                        type: "spring",
                        stiffness: 280,
                        damping: 23,
                        delay: index * 0.035,
                      }}
                    >
                      {/* ICON */}
                      <motion.div
                        whileHover={{
                          scale: 1.08,
                        }}
                        whileTap={{
                          scale: 0.94,
                        }}
                        className={`flex h-11 w-11 shrink-0 items-center justify-center rounded-full border shadow-sm transition-colors ${
                          isActive
                            ? "border-[#7D8570] bg-[#7D8570] text-white"
                            : "border-[#E6E3DC] bg-[#F5F3EE] text-[#55584F] hover:border-[#B8BEAD] hover:bg-[#E6E8DF]"
                        }`}
                      >
                        <Icon
                          size={18}
                          strokeWidth={1.7}
                        />
                      </motion.div>

                      {/* LABEL */}
                      <motion.span
                        initial={{
                          opacity: 0,
                          x: -8,
                        }}
                        animate={{
                          opacity: 1,
                          x: 0,
                        }}
                        transition={{
                          delay: index * 0.035 + 0.12,
                          duration: 0.25,
                        }}
                        className="ml-3 whitespace-nowrap rounded-full bg-[#F5F3EE]/95 px-3 py-2 text-xs font-medium text-[#42443D] shadow-sm backdrop-blur-md"
                      >
                        {item.label}
                      </motion.span>
                    </motion.a>
                  );
                })}
              </>
            )}
          </AnimatePresence>
        </div>
      </div>
    </>
  );
}