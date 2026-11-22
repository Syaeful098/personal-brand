"use client";

import { motion } from "motion/react";
import {
  ArrowUpRight,
  Code2,
  Compass,
  Leaf,
  Sparkles,
} from "lucide-react";

const focusItems = [
  {
    number: "01",
    label: "BUILDING",
    title: "Personal portfolio",
    description:
      "Creating a personal space to document my work, ideas, and the journey ahead.",
    icon: Code2,
    color: "#DCE5DE",
  },
  {
    number: "02",
    label: "WORKING ON",
    title: "Data Analyzer",
    description:
      "Improving a data analysis application with meaningful insights, visualizations, and structured reports.",
    icon: Sparkles,
    color: "#E8DFCE",
  },
  {
    number: "03",
    label: "EXPLORING",
    title: "Career & opportunities",
    description:
      "Exploring professional opportunities, learning from the process, and finding the right place to grow.",
    icon: Compass,
    color: "#DDE2EB",
  },
];

export default function NowSection() {
  return (
    <section
      id="now"
      className="relative overflow-hidden bg-[#E8EAE3] text-[#30352F]"
    >
      {/* Decorative background */}
      <div className="pointer-events-none absolute right-[-150px] top-[100px] h-[450px] w-[450px] rounded-full border border-[#BEC8BE]/50" />

      <div className="pointer-events-none absolute right-[-100px] top-[150px] h-[350px] w-[350px] rounded-full border border-[#BEC8BE]/40" />

      <div className="pointer-events-none absolute right-[-50px] top-[200px] h-[250px] w-[250px] rounded-full border border-[#BEC8BE]/30" />

      <div className="relative mx-auto max-w-[1500px] px-6 py-28 md:px-12 md:py-36 lg:px-20">
        {/* Header */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mb-20 flex items-center justify-between"
        >
          <div className="flex items-center gap-3">
            <span className="h-2 w-2 rounded-full bg-[#778C76]" />

            <span className="text-[10px] tracking-[0.25em] text-[#697568] md:text-xs">
              A CURRENT SNAPSHOT
            </span>
          </div>

          <span className="text-xs tracking-widest text-[#697568]">
            08 / NOW
          </span>
        </motion.div>

        {/* Main heading */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.8 }}
            className="lg:col-span-8"
          >
            <p className="mb-6 text-sm text-[#788276]">
              A little update on where I am.
            </p>

            <h2 className="max-w-4xl text-[clamp(3.5rem,9vw,8rem)] leading-[0.95] tracking-[-0.075em]">
              Right now,
              <br />

              <span className="font-serif italic text-[#778C76]">
                I&apos;m in
              </span>

              <br />

              the process.
            </h2>
          </motion.div>

          {/* Orbit illustration */}
          <motion.div
            initial={{ opacity: 0, scale: 0.85 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 1 }}
            className="relative flex min-h-[300px] items-center justify-center lg:col-span-4 lg:min-h-[400px]"
          >
            <div className="relative flex h-[260px] w-[260px] items-center justify-center md:h-[320px] md:w-[320px]">
              {/* Outer orbit */}
              <motion.div
                animate={{ rotate: 360 }}
                transition={{
                  duration: 40,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-0 rounded-full border border-[#B8C3B7]"
              >
                <div className="absolute left-[16%] top-[14%] h-2 w-2 rounded-full bg-[#778C76]" />
              </motion.div>

              {/* Middle orbit */}
              <motion.div
                animate={{ rotate: -360 }}
                transition={{
                  duration: 28,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[25px] rounded-full border border-dashed border-[#B8C3B7]"
              >
                <div className="absolute bottom-[12%] right-[8%] h-3 w-3 rounded-full bg-[#C4B9A5]" />
              </motion.div>

              {/* Inner circle */}
              <div className="absolute inset-[65px] flex items-center justify-center rounded-full bg-[#D8DED5] md:inset-[80px]">
                <div className="text-center">
                  <Leaf
                    size={28}
                    strokeWidth={1}
                    className="mx-auto mb-3 text-[#778C76]"
                  />

                  <p className="text-[10px] tracking-[0.2em] text-[#697568]">
                    GROWING
                  </p>

                  <p className="mt-1 font-serif text-2xl italic">
                    slowly
                  </p>
                </div>
              </div>

              {/* Small orbit label */}
              <div className="absolute -bottom-2 right-4 rounded-full border border-[#B8C3B7] bg-[#E8EAE3] px-4 py-2">
                <span className="text-[9px] tracking-[0.2em] text-[#697568]">
                  IN PROGRESS
                </span>
              </div>
            </div>
          </motion.div>
        </div>

        {/* Description */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7, delay: 0.15 }}
          className="mt-16 max-w-xl lg:ml-[8.33%]"
        >
          <p className="text-base leading-8 text-[#656D62] md:text-lg md:leading-9">
            Not everything is figured out yet. I&apos;m building things,
            learning along the way, and taking small steps toward the
            direction I want to go.
          </p>
        </motion.div>

        {/* Divider */}
        <div className="my-24 h-px w-full bg-[#C6CEC3]" />

        {/* Focus list */}
        <div className="grid grid-cols-1 gap-12 lg:grid-cols-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, amount: 0.3 }}
            transition={{ duration: 0.7 }}
            className="lg:col-span-3"
          >
            <p className="text-xs tracking-[0.25em] text-[#788276]">
              CURRENT FOCUS
            </p>

            <h3 className="mt-5 text-3xl tracking-tight">
              What occupies
              <br />
              my time.
            </h3>

            <p className="mt-5 max-w-xs text-sm leading-7 text-[#72796E]">
              A few things I&apos;m currently giving my attention to.
            </p>
          </motion.div>

          <div className="lg:col-span-9">
            {focusItems.map((item, index) => {
              const Icon = item.icon;

              return (
                <motion.div
                  key={item.number}
                  initial={{ opacity: 0, x: 25 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.2 }}
                  transition={{
                    duration: 0.6,
                    delay: index * 0.12,
                  }}
                  className="group border-t border-[#C6CEC3] py-8 md:py-10"
                >
                  <div className="grid grid-cols-12 items-start gap-5">
                    {/* Number */}
                    <div className="col-span-1 pt-2">
                      <span className="text-xs text-[#899184]">
                        {item.number}
                      </span>
                    </div>

                    {/* Content */}
                    <div className="col-span-8 md:col-span-9">
                      <p className="mb-3 text-[10px] tracking-[0.2em] text-[#788276]">
                        {item.label}
                      </p>

                      <h4 className="text-2xl tracking-tight transition-transform duration-500 group-hover:translate-x-1 md:text-4xl">
                        {item.title}
                      </h4>

                      <p className="mt-4 max-w-xl text-sm leading-7 text-[#70776D]">
                        {item.description}
                      </p>
                    </div>

                    {/* Icon */}
                    <div className="col-span-3 flex justify-end md:col-span-2">
                      <div
                        className="flex h-12 w-12 items-center justify-center rounded-full transition-transform duration-500 group-hover:rotate-12 group-hover:scale-110 md:h-16 md:w-16"
                        style={{ backgroundColor: item.color }}
                      >
                        <Icon
                          size={22}
                          strokeWidth={1.2}
                          className="text-[#586356]"
                        />
                      </div>
                    </div>
                  </div>
                </motion.div>
              );
            })}

            {/* Bottom border */}
            <div className="h-px w-full bg-[#C6CEC3]" />
          </div>
        </div>

        {/* Closing */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.3 }}
          transition={{ duration: 0.7 }}
          className="mt-28 flex flex-col justify-between gap-8 md:flex-row md:items-end"
        >
          <div>
            <p className="text-xs tracking-[0.2em] text-[#788276]">
              THE PRESENT IS A WORK IN PROGRESS
            </p>

            <h3 className="mt-5 max-w-2xl text-3xl leading-tight tracking-tight md:text-5xl">
              Small steps.
              <br />

              <span className="font-serif italic text-[#778C76]">
                Forward, nonetheless.
              </span>
            </h3>
          </div>

          <a
            href="#contact"
            className="group inline-flex w-fit items-center gap-3 border-b border-[#879182] pb-2 text-sm transition-colors hover:text-[#778C76]"
          >
            Let&apos;s connect

            <ArrowUpRight
              size={16}
              className="transition-transform duration-300 group-hover:-translate-y-1 group-hover:translate-x-1"
            />
          </a>
        </motion.div>
      </div>
    </section>
  );
}