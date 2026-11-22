
"use client";

import { useState } from "react";
import { motion, AnimatePresence } from "motion/react";

import {
  ArrowUpRight,
  ArrowLeft,
  ArrowRight,
  FileText,
  Award,
  BookOpen,
  GraduationCap,
  Fingerprint,
  Code2,
  Database,
  BrainCircuit,
  Cpu,
  Layers3,
  X,
  Maximize2,
} from "lucide-react";

// ============================================================
// CERTIFICATE DATA
// ============================================================

const certificates = [
  {
    id: "01",
    title: "Data Science",
    issuer: "BISA.AI",
    date: "1 November 2026",
    shortDate: "01 NOV 2026",
    image: "/images/achievements/certificates/01-data-science.jpg",
    description:
      "Mempelajari dasar Data Science, proses pengolahan data, analisis, dan pemanfaatan data untuk menghasilkan informasi.",
  },
  {
    id: "02",
    title: "Introduction to Data Analytics",
    issuer: "Simplilearn SkillUp",
    date: "1 November 2026",
    shortDate: "01 NOV 2026",
    image:
      "/images/achievements/certificates/02-introduction-data-analytics.jpg",
    description:
      "Memahami dasar analisis data, tahapan analisis, interpretasi informasi, serta peran data dalam pengambilan keputusan.",
  },
  {
    id: "03",
    title: "Dasar-Dasar Python",
    issuer: "BISA.AI",
    date: "29 Oktober 2026",
    shortDate: "29 OKT 2026",
    image: "/images/achievements/certificates/03-python-basics.jpg",
    description:
      "Mempelajari fundamental Python sebagai dasar pemrograman, logika, pengolahan data, dan pengembangan aplikasi.",
  },
  {
    id: "04",
    title: "Basic Excel",
    issuer: "BISA.AI",
    date: "28 Oktober 2026",
    shortDate: "28 OKT 2026",
    image: "/images/achievements/certificates/04-basic-excel.jpg",
    description:
      "Mempelajari penggunaan Microsoft Excel untuk pengolahan data dasar, fungsi spreadsheet, dan pekerjaan administratif.",
  },
  {
    id: "05",
    title: "Duta Favorit",
    issuer: "Universitas Hasyim Asy'ari",
    date: "4 Maret 2023",
    shortDate: "04 MAR 2023",
    image: "/images/achievements/certificates/05-duta-favorit.jpg",
    description:
      "Penghargaan sebagai Duta Favorit dalam kegiatan pemilihan duta di lingkungan Universitas Hasyim Asy'ari.",
  },
  {
    id: "06",
    title: "Handsome Class Inez Cosmetic with Duta Unhasy 2023 Jombang",
    issuer: "Inez Cosmetic",
    date: "27 Februari 2023",
    shortDate: "27 FEB 2023",
    image: "/images/achievements/certificates/06-handsome-class-inez.jpg",
    description:
      "Partisipasi dalam kegiatan Handsome Class bersama Inez Cosmetic dan Duta Unhasy 2023 di Jombang.",
  },
  {
    id: "07",
    title: "New Trend in Foreign Language Teaching and Learning",
    issuer: "Universitas Hasyim Asy'ari",
    date: "22 Desember 2022",
    shortDate: "22 DES 2022",
    image:
      "/images/achievements/certificates/07-foreign-language-learning.jpg",
    description:
      "Partisipasi dalam kegiatan yang membahas perkembangan dan tren baru dalam pengajaran serta pembelajaran bahasa asing.",
  },
  {
    id: "08",
    title: "POSMARU",
    issuer: "Universitas Hasyim Asy'ari",
    date: "23 Oktober 2022",
    shortDate: "23 OKT 2022",
    image: "/images/achievements/certificates/08-posmaru.jpg",
    description:
      "Mengikuti Pekan Orientasi Mahasiswa Baru sebagai bagian dari pengenalan lingkungan akademik dan kehidupan mahasiswa.",
  },
];

// ============================================================
// LEARNING NOTES
// ============================================================

const learningNotes = [
  {
    title: "Web Development",
    subtitle: "Building digital experiences",
    icon: Code2,
    color: "#777D63",
    note:
      "Belajar membangun website menggunakan Next.js, React, TypeScript, dan Tailwind CSS. Mulai memahami bagaimana komponen, layout, interaksi, animasi, serta struktur aplikasi bekerja bersama dalam membangun website yang fungsional dan nyaman digunakan.",
    topics: [
      "Next.js & React",
      "TypeScript",
      "Tailwind CSS",
      "UI & Interaction",
    ],
  },
  {
    title: "Data Analytics",
    subtitle: "Turning data into insights",
    icon: Database,
    color: "#858A70",
    note:
      "Mengeksplorasi pengolahan data menggunakan Python, Pandas, NumPy, dan Excel. Belajar melakukan data cleaning, transformasi data, analisis statistik, visualisasi, serta menyusun hasil analisis menjadi laporan yang lebih mudah dipahami.",
    topics: [
      "Data Cleaning",
      "Statistical Analysis",
      "Data Visualization",
      "Automated Reporting",
    ],
  },
  {
    title: "AI Engineering",
    subtitle: "Exploring intelligent systems",
    icon: BrainCircuit,
    color: "#929782",
    note:
      "Mengenal integrasi AI ke dalam aplikasi, mengeksplorasi model lokal menggunakan Ollama, Llama 3.1, dan Qwen 2.5 3B. Belajar memahami bagaimana model AI dapat dimanfaatkan untuk membantu analisis, pemrosesan informasi, dan menghadirkan fitur yang lebih cerdas.",
    topics: [
      "AI Integration",
      "Ollama",
      "Local LLM",
      "AI-assisted Development",
    ],
  },
  {
    title: "IoT & Embedded Systems",
    subtitle: "Connecting hardware and software",
    icon: Cpu,
    color: "#A1A18F",
    note:
      "Mempelajari interaksi perangkat keras dan perangkat lunak melalui ESP32, Arduino, sensor, MQTT, dan Node-RED. Mengeksplorasi bagaimana perangkat dapat membaca kondisi lingkungan, mengirimkan data, dan terhubung dengan sistem digital.",
    topics: [
      "ESP32 & Arduino",
      "Sensor Integration",
      "MQTT",
      "Node-RED",
    ],
  },
  {
    title: "Software Engineering",
    subtitle: "Building with structure",
    icon: Layers3,
    color: "#777D63",
    note:
      "Belajar menyusun aplikasi secara bertahap, memisahkan frontend dan backend, membangun API menggunakan FastAPI, melakukan debugging, mengelola versi kode dengan Git, serta memahami pentingnya struktur dan maintainability sebuah proyek.",
    topics: [
      "Backend & REST API",
      "FastAPI",
      "Git & GitHub",
      "Debugging",
    ],
  },
];

// ============================================================
// ARCHIVE DATA
// ============================================================

const archiveItems = [
  {
    id: "001",
    title: "Academic Journey",
    subtitle: "Bachelor of Informatics",
    category: "EDUCATION",
    date: "2026",
    icon: GraduationCap,
    status: "COMPLETED",
    description:
      "Menyelesaikan pendidikan Sarjana Teknik Informatika di Universitas Hasyim Asy'ari dengan predikat Dengan Pujian dan IPK 3.75/4.00.",
    detail: "Academic milestone",
    color: "#777D63",
  },
  {
    id: "002",
    title: "Data Analyzer",
    subtitle: "Independent Project",
    category: "PROJECT",
    date: "2026",
    icon: FileText,
    status: "DOCUMENTED",
    description:
      "Mengembangkan aplikasi analisis data yang menggabungkan pengolahan data, visualisasi, statistik, integrasi AI, dan pembuatan laporan dalam satu aplikasi.",
    detail: "Project documentation",
    color: "#858A70",
  },
  {
    id: "003",
    title: "Certificates & Training",
    subtitle: "Learning records",
    category: "CERTIFICATION",
    date: "2022 — 2026",
    icon: Award,
    status: "8 DOCUMENTS",
    description:
      "Kumpulan sertifikat pelatihan, pembelajaran, partisipasi kegiatan, dan pencapaian yang terdokumentasi sepanjang perjalanan akademik dan pengembangan diri.",
    detail: "Certificate collection",
    color: "#A1A18F",
  },
  {
    id: "004",
    title: "Notes of Learning",
    subtitle: "Continuous development",
    category: "LEARNING",
    date: "ONGOING",
    icon: BookOpen,
    status: "IN PROGRESS",
    description:
      "Catatan perjalanan belajar di bidang Web Development, Data Analytics, AI Engineering, IoT, dan Software Engineering.",
    detail: "Learning journal",
    color: "#929782",
  },
];

// ============================================================
// CERTIFICATE THUMBNAIL
// ============================================================

function CertificateThumbnail({
  certificate,
  active,
  onClick,
}: {
  certificate: (typeof certificates)[number];
  active: boolean;
  onClick: () => void;
}) {
  const [imageError, setImageError] = useState(false);

  return (
    <button
      onClick={onClick}
      aria-label={`Select certificate: ${certificate.title}`}
      className={`group relative overflow-hidden border text-left transition-all duration-300 ${
        active
          ? "border-[#81856D] bg-[#E5E3D9]"
          : "border-[#D5D2C7] hover:border-[#A3A48F]"
      }`}
    >
      {/* Thumbnail Image */}
      <div className="relative aspect-[4/3] overflow-hidden bg-[#EAE7DE]">
        {!imageError ? (
          <img
            src={certificate.image}
            alt={certificate.title}
            loading="lazy"
            className="h-full w-full object-cover transition-transform duration-500 group-hover:scale-105"
            onError={() => setImageError(true)}
          />
        ) : (
          <div className="flex h-full w-full items-center justify-center">
            <FileText
              size={18}
              strokeWidth={1.2}
              className="text-[#A1A18F]"
            />
          </div>
        )}

        {/* Overlay */}
        <div
          className={`absolute inset-0 flex items-center justify-center bg-[#30332D]/30 transition-opacity duration-300 ${
            active
              ? "opacity-100"
              : "opacity-0 group-hover:opacity-100"
          }`}
        >
          <span className="flex h-7 w-7 items-center justify-center rounded-full border border-white/60 text-white">
            <ArrowUpRight size={13} />
          </span>
        </div>
      </div>

      {/* Thumbnail Information */}
      <div className="p-2.5">
        <span
          className={`text-[9px] tracking-widest ${
            active ? "text-[#777D63]" : "text-[#929286]"
          }`}
        >
          {certificate.id}
        </span>

        <p className="mt-1 line-clamp-2 min-h-[32px] text-[9px] leading-4 text-[#77796F]">
          {certificate.title}
        </p>
      </div>

      {/* Active Indicator */}
      <motion.div
        initial={false}
        animate={{
          scaleX: active ? 1 : 0,
        }}
        transition={{
          duration: 0.3,
        }}
        className="absolute bottom-0 left-0 h-[2px] w-full origin-left bg-[#81856D]"
      />
    </button>
  );
}

// ============================================================
// MAIN COMPONENT
// ============================================================

export default function AchievementsSection() {
  const [activeIndex, setActiveIndex] = useState(0);
  const [activeCertificate, setActiveCertificate] = useState(0);
  const [imageError, setImageError] = useState(false);
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImageError, setLightboxImageError] = useState(false);

  const activeItem = archiveItems[activeIndex];
  const ActiveIcon = activeItem.icon;
  const selectedCertificate = certificates[activeCertificate];

  // ============================================================
  // ARCHIVE NAVIGATION
  // ============================================================

  const goNext = () => {
    setActiveIndex((current) =>
      current === archiveItems.length - 1 ? 0 : current + 1
    );
  };

  const goPrevious = () => {
    setActiveIndex((current) =>
      current === 0 ? archiveItems.length - 1 : current - 1
    );
  };

  // ============================================================
  // CERTIFICATE NAVIGATION
  // ============================================================

  const selectCertificate = (index: number) => {
    setActiveCertificate(index);
    setImageError(false);
    setLightboxImageError(false);
  };

  const openLightbox = () => {
    if (imageError) return;

    setLightboxImageError(false);
    setLightboxOpen(true);
  };

  const closeLightbox = () => {
    setLightboxOpen(false);
    setLightboxImageError(false);
  };

  const nextCertificate = () => {
    const nextIndex =
      activeCertificate === certificates.length - 1
        ? 0
        : activeCertificate + 1;

    selectCertificate(nextIndex);
  };

  const previousCertificate = () => {
    const previousIndex =
      activeCertificate === 0
        ? certificates.length - 1
        : activeCertificate - 1;

    selectCertificate(previousIndex);
  };

  return (
    <section
      id="achievements"
      className="relative overflow-hidden bg-[#EAE7DE] px-6 py-28 text-[#30332D] sm:px-10 md:py-36 lg:px-16"
    >
      {/* ============================================================
          DECORATIVE BACKGROUND
      ============================================================ */}

      <div className="pointer-events-none absolute right-[-120px] top-[-100px] h-[450px] w-[450px] rounded-full bg-[#D5D8C8]/40 blur-[130px]" />

      <div className="relative mx-auto max-w-7xl">
        {/* ============================================================
            HEADER
        ============================================================ */}

        <div className="mb-20 flex flex-col justify-between gap-10 lg:flex-row lg:items-end">
          <div>
            <div className="mb-7 flex items-center gap-3">
              <span className="h-1.5 w-1.5 rounded-full bg-[#81856D]" />

              <span className="text-[10px] tracking-[0.24em] text-[#818176] uppercase">
                06 — Certificates & Achievements
              </span>
            </div>

            <h2 className="text-5xl leading-[1.08] tracking-[-0.055em] sm:text-6xl md:text-7xl">
              A collection
              <br />

              <span className="font-serif italic text-[#81856D]">
                of things worth keeping.
              </span>
            </h2>
          </div>

          <div className="max-w-sm lg:pb-2">
            <p className="text-sm leading-7 text-[#77796F]">
              Sebuah arsip personal dari perjalanan,
              pencapaian, pembelajaran, dan hal-hal
              yang menjadi bagian dari proses
              perkembangan.
            </p>
          </div>
        </div>

        {/* ============================================================
            ARCHIVE LAYOUT
        ============================================================ */}

        <div className="grid grid-cols-1 gap-14 lg:grid-cols-[0.75fr_1.25fr] lg:gap-20">
          {/* ============================================================
              LEFT — ARCHIVE INDEX
          ============================================================ */}

          <div>
            <div className="mb-6 flex items-center justify-between border-b border-[#C9C6BB] pb-4">
              <span className="text-[10px] tracking-[0.2em] text-[#818176] uppercase">
                Archive Index
              </span>

              <span className="text-xs text-[#99998C]">
                04 entries
              </span>
            </div>

            <div className="relative">
              {archiveItems.map((item, index) => {
                const Icon = item.icon;
                const isActive = activeIndex === index;

                return (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    className="group relative w-full border-b border-[#D2CFC5] py-6 text-left"
                  >
                    {/* INDEX ITEM CONTENT */}
                    <div className="flex items-start gap-3">
                      {/* Archive Number - LEFT SIDE, KEEP */}
                      <span
                        className={`pt-1 font-serif text-[10px] tracking-[0.08em] transition-colors duration-300 ${
                          isActive
                            ? "text-[#A3A48F]"
                            : "text-[#B8B6AA] group-hover:text-[#A3A48F]"
                        }`}
                      >
                        {item.id}
                      </span>

                      <div className="flex-1">
                        <div className="flex items-center justify-between gap-3">
                          <h3
                            className={`text-lg tracking-tight transition-colors duration-300 ${
                              isActive
                                ? "text-[#30332D]"
                                : "text-[#77796F] group-hover:text-[#30332D]"
                            }`}
                          >
                            {item.title}
                          </h3>

                          <ArrowUpRight
                            size={15}
                            className={`shrink-0 transition-all duration-300 ${
                              isActive
                                ? "translate-x-0 text-[#81856D] opacity-100"
                                : "-translate-x-1 text-[#A4A394] opacity-0 group-hover:translate-x-0 group-hover:opacity-100"
                            }`}
                          />
                        </div>

                        <p className="mt-2 text-xs text-[#929286]">
                          {item.subtitle}
                        </p>

                        <div className="mt-4 flex items-center gap-3">
                          <span
                            className={`text-[9px] tracking-[0.16em] uppercase ${
                              isActive
                                ? "text-[#81856D]"
                                : "text-[#A09F91]"
                            }`}
                          >
                            {item.category}
                          </span>

                          <span className="h-1 w-1 rounded-full bg-[#C0BDAF]" />

                          <span className="text-[10px] text-[#99998C]">
                            {item.date}
                          </span>
                        </div>
                      </div>
                    </div>

                    {/* Active Indicator */}
                    <motion.div
                      initial={false}
                      animate={{
                        scaleX: isActive ? 1 : 0,
                      }}
                      transition={{
                        duration: 0.35,
                      }}
                      className="absolute bottom-[-1px] left-0 h-px w-full origin-left bg-[#81856D]"
                    />
                  </button>
                );
              })}
            </div>

            {/* Index Footer */}
            <div className="mt-8 flex items-center gap-3">
              <Fingerprint
                size={15}
                className="text-[#929782]"
              />

              <span className="text-[10px] tracking-[0.15em] text-[#99998C] uppercase">
                Personal archive / 2026
              </span>
            </div>
          </div>

          {/* ============================================================
              RIGHT — SELECTED RECORD PREVIEW
          ============================================================ */}

          <div className="relative">
            {/* Preview Header */}
            <div className="mb-5 flex items-center justify-between">
              <span className="text-[10px] tracking-[0.2em] text-[#818176] uppercase">
                Selected Record
              </span>

              {/* Selected Record Counter - KEEP */}
              <span className="text-xs text-[#99998C]">
                {activeItem.id} / 00{archiveItems.length}
              </span>
            </div>

            {/* Preview Paper */}
            <div className="relative min-h-[470px] overflow-hidden border border-[#D0CDC2] bg-[#F5F3EC] p-7 sm:p-10 md:p-12">
              {/* Paper Texture */}
              <div className="pointer-events-none absolute inset-0 opacity-[0.035]">
                <div
                  className="h-full w-full"
                  style={{
                    backgroundImage:
                      "repeating-linear-gradient(0deg, #30332D 0px, transparent 1px, transparent 4px)",
                  }}
                />
              </div>

              {/* Corner Marks */}
              <div className="absolute left-5 top-5 h-4 w-4 border-l border-t border-[#B9B7AA]" />
              <div className="absolute right-5 top-5 h-4 w-4 border-r border-t border-[#B9B7AA]" />
              <div className="absolute bottom-5 left-5 h-4 w-4 border-b border-l border-[#B9B7AA]" />
              <div className="absolute bottom-5 right-5 h-4 w-4 border-b border-r border-[#B9B7AA]" />

              {/* Record Content */}
              <AnimatePresence mode="wait">
                <motion.div
                  key={activeItem.id}
                  initial={{
                    opacity: 0,
                    y: 12,
                  }}
                  animate={{
                    opacity: 1,
                    y: 0,
                  }}
                  exit={{
                    opacity: 0,
                    y: -8,
                  }}
                  transition={{
                    duration: 0.3,
                  }}
                  className="relative flex min-h-[390px] flex-col"
                >
                  {/* DOCUMENT TOP */}
                  <div className="flex items-start justify-between">
                    <div>
                      <span className="text-[9px] tracking-[0.22em] text-[#8B8B7E] uppercase">
                        Personal Record
                      </span>

                      <div className="mt-3 flex items-center gap-2">
                        <div
                          className="h-1.5 w-1.5 rounded-full"
                          style={{
                            backgroundColor: activeItem.color,
                          }}
                        />

                        <span className="text-[9px] tracking-[0.15em] text-[#929286] uppercase">
                          {activeItem.status}
                        </span>
                      </div>
                    </div>

                    <div className="flex h-12 w-12 items-center justify-center rounded-full border border-[#D4D1C6] text-[#858A70]">
                      <ActiveIcon
                        size={19}
                        strokeWidth={1.4}
                      />
                    </div>
                  </div>

                  {/* ============================================================
                      001 — ACADEMIC RECORD
                      LARGE NUMBER REMOVED
                  ============================================================ */}

                  {activeItem.id === "001" && (
                    <div className="my-auto py-10">
                      <h3 className="mt-5 text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                        {activeItem.title}
                      </h3>

                      <p className="mt-3 text-xs tracking-wide text-[#85857A]">
                        {activeItem.detail}
                      </p>

                      <div className="my-7 h-px w-14 bg-[#A3A48F]" />

                      <p className="text-sm font-medium text-[#55574F]">
                        Universitas Hasyim Asy&apos;ari (UNHASY)
                      </p>

                      <p className="mt-2 text-sm text-[#77796F]">
                        Sarjana Teknik Informatika
                      </p>

                      {/* Academic Stats */}
                      <div className="mt-7 grid grid-cols-2 border-y border-[#D7D4C9]">
                        {/* GPA */}
                        <div className="border-r border-[#D7D4C9] py-5 pl-5 pr-4 sm:py-6 sm:pl-6">
                          <span className="text-[10px] tracking-[0.2em] text-[#929286] uppercase">
                            GPA
                          </span>

                          <div className="mt-3 flex items-baseline whitespace-nowrap">
                            <span className="font-serif text-2xl leading-none tracking-[-0.04em] text-[#777D63] sm:text-3xl">
                              3.75
                            </span>

                            <span className="ml-0.5 font-serif text-sm text-[#A2A28F] sm:text-base">
                              /4.00
                            </span>
                          </div>
                        </div>

                        {/* Graduation */}
                        <div className="py-5 pl-5 pr-3 sm:py-6 sm:pl-6">
                          <span className="text-[10px] tracking-[0.2em] text-[#929286] uppercase">
                            Graduation
                          </span>

                          <p className="mt-3 text-sm leading-tight tracking-tight text-[#55574F] sm:text-base">
                            Cum Laude
                          </p>

                          <p className="mt-1.5 text-[11px] text-[#85857A]">
                            Dengan Pujian
                          </p>
                        </div>
                      </div>

                      <p className="mt-6 max-w-md text-sm leading-7 text-[#77796F]">
                        {activeItem.description}
                      </p>
                    </div>
                  )}

                  {/* ============================================================
                      002 — PROJECT RECORD
                      LARGE NUMBER REMOVED
                  ============================================================ */}

                  {activeItem.id === "002" && (
                    <div className="my-auto py-12">
                      <h3 className="mt-5 text-3xl leading-tight tracking-[-0.04em] sm:text-4xl">
                        {activeItem.title}
                      </h3>

                      <p className="mt-3 text-xs tracking-wide text-[#85857A]">
                        {activeItem.detail}
                      </p>

                      <div className="my-7 h-px w-14 bg-[#A3A48F]" />

                      <p className="max-w-md text-sm leading-7 text-[#77796F]">
                        {activeItem.description}
                      </p>

                      {/* Project Technologies */}
                      <div className="mt-7 flex flex-wrap gap-2">
                        {[
                          "Next.js",
                          "TypeScript",
                          "FastAPI",
                          "Python",
                          "Pandas",
                          "AI Integration",
                        ].map((tech) => (
                          <span
                            key={tech}
                            className="border border-[#D5D2C7] px-3 py-2 text-[10px] text-[#77796F]"
                          >
                            {tech}
                          </span>
                        ))}
                      </div>
                    </div>
                  )}

                  {/* ============================================================
                      003 — CERTIFICATE GALLERY
                      LARGE NUMBER REMOVED
                  ============================================================ */}

                  {activeItem.id === "003" && (
                    <div className="mt-8 flex-1">
                      {/* Gallery Header */}
                      <div className="mb-5">
                        <h3 className="mt-3 text-2xl tracking-tight sm:text-3xl">
                          Certificates & Training
                        </h3>

                        <p className="mt-2 text-xs leading-6 text-[#85857A]">
                          A collection of learning milestones and
                          participation records.
                        </p>
                      </div>

                      {/* Selected Certificate Preview */}
                      <div className="group relative overflow-hidden border border-[#D5D2C7] bg-[#EAE7DE]">
                        <div className="relative flex items-center justify-center overflow-hidden p-3 sm:p-5">
                          {!imageError ? (
                            <img
                              src={selectedCertificate.image}
                              alt={selectedCertificate.title}
                              className="h-auto max-h-[600px] w-auto max-w-full object-contain transition-transform duration-500 group-hover:scale-[1.015]"
                              onError={() => setImageError(true)}
                            />
                          ) : (
                            <div className="flex min-h-[300px] flex-col items-center justify-center px-6 text-center">
                              <FileText
                                size={30}
                                strokeWidth={1}
                                className="text-[#929782]"
                              />

                              <p className="mt-4 text-xs text-[#77796F]">
                                Certificate image not found
                              </p>

                              <p className="mt-2 max-w-xs text-[10px] leading-5 text-[#99998C]">
                                Place your certificate image in the
                                certificates directory using the
                                filename specified in the project.
                              </p>
                            </div>
                          )}

                          {/* Fullscreen Button */}
                          {!imageError && (
                            <button
                              onClick={openLightbox}
                              aria-label="View certificate in fullscreen"
                              className="absolute bottom-4 right-4 flex items-center gap-2 border border-[#D5D2C7] bg-[#F5F3EC]/90 px-3 py-2 text-[9px] tracking-[0.12em] text-[#55574F] opacity-100 transition-all duration-300 hover:bg-[#F5F3EC] sm:opacity-0 sm:group-hover:opacity-100"
                            >
                              <Maximize2 size={12} />
                              VIEW FULL
                            </button>
                          )}
                        </div>
                      </div>

                      {/* Certificate Information */}
                      <AnimatePresence mode="wait">
                        <motion.div
                          key={selectedCertificate.id}
                          initial={{
                            opacity: 0,
                            y: 8,
                          }}
                          animate={{
                            opacity: 1,
                            y: 0,
                          }}
                          exit={{
                            opacity: 0,
                            y: -5,
                          }}
                          transition={{
                            duration: 0.2,
                          }}
                          className="mt-5"
                        >
                          <div className="flex items-start justify-between gap-4">
                            <div>
                              <span className="text-[9px] tracking-[0.18em] text-[#929286] uppercase">
                                {selectedCertificate.id} / Certificate
                              </span>

                              <h4 className="mt-2 text-lg leading-snug">
                                {selectedCertificate.title}
                              </h4>

                              <p className="mt-1 text-xs text-[#85857A]">
                                {selectedCertificate.issuer}
                              </p>
                            </div>

                            <span className="shrink-0 text-[10px] text-[#929286]">
                              {selectedCertificate.shortDate}
                            </span>
                          </div>

                          <p className="mt-4 text-xs leading-6 text-[#77796F]">
                            {selectedCertificate.description}
                          </p>
                        </motion.div>
                      </AnimatePresence>

                      {/* Certificate Selector */}
                      <div className="mt-6 grid grid-cols-2 gap-2 sm:grid-cols-4">
                        {certificates.map((certificate, index) => (
                          <CertificateThumbnail
                            key={certificate.id}
                            certificate={certificate}
                            active={activeCertificate === index}
                            onClick={() => selectCertificate(index)}
                          />
                        ))}
                      </div>

                      {/* Certificate Counter */}
                      <div className="mt-4 flex items-center justify-between">
                        <span className="text-[9px] tracking-[0.15em] text-[#929286] uppercase">
                          Certificate Collection
                        </span>

                        <span className="text-[10px] tabular-nums text-[#85857A]">
                          {String(activeCertificate + 1).padStart(2, "0")}{" "}
                          / {String(certificates.length).padStart(2, "0")}
                        </span>
                      </div>
                    </div>
                  )}

                  {/* ============================================================
                      004 — LEARNING NOTES
                      LARGE NUMBER REMOVED
                  ============================================================ */}

                  {activeItem.id === "004" && (
                    <div className="mt-8 flex-1">
                      {/* Learning Header */}
                      <h3 className="mt-3 text-2xl tracking-tight sm:text-3xl">
                        Notes of Learning
                      </h3>

                      <p className="mt-3 text-xs leading-6 text-[#85857A]">
                        A reflection of the things I have explored,
                        built, and continue to learn.
                      </p>

                      {/* Learning Categories */}
                      <div className="mt-7 space-y-6">
                        {learningNotes.map((note, index) => {
                          const NoteIcon = note.icon;

                          return (
                            <motion.div
                              key={note.title}
                              initial={{
                                opacity: 0,
                                y: 8,
                              }}
                              animate={{
                                opacity: 1,
                                y: 0,
                              }}
                              transition={{
                                duration: 0.25,
                                delay: index * 0.04,
                              }}
                              className="border-t border-[#D8D5CA] pt-5"
                            >
                              <div className="flex items-start gap-4">
                                {/* Icon */}
                                <div
                                  className="flex h-9 w-9 shrink-0 items-center justify-center rounded-full border border-[#D5D2C7]"
                                  style={{
                                    color: note.color,
                                  }}
                                >
                                  <NoteIcon
                                    size={16}
                                    strokeWidth={1.5}
                                  />
                                </div>

                                {/* Content */}
                                <div className="min-w-0 flex-1">
                                  <div className="flex flex-wrap items-baseline justify-between gap-2">
                                    <h4 className="text-sm font-medium">
                                      {note.title}
                                    </h4>

                                    <span className="text-[9px] tracking-[0.12em] text-[#99998C] uppercase">
                                      {String(index + 1).padStart(2, "0")}
                                    </span>
                                  </div>

                                  <p className="mt-1 text-[10px] text-[#929286]">
                                    {note.subtitle}
                                  </p>

                                  <p className="mt-3 text-xs leading-6 text-[#77796F]">
                                    {note.note}
                                  </p>

                                  {/* Topics */}
                                  <div className="mt-3 flex flex-wrap gap-1.5">
                                    {note.topics.map((topic) => (
                                      <span
                                        key={topic}
                                        className="border border-[#D8D5CA] px-2 py-1 text-[9px] text-[#85857A]"
                                      >
                                        {topic}
                                      </span>
                                    ))}
                                  </div>
                                </div>
                              </div>
                            </motion.div>
                          );
                        })}
                      </div>
                    </div>
                  )}

                  {/* DOCUMENT BOTTOM */}
                  <div className="mt-8 flex items-end justify-between gap-4 border-t border-[#D8D5CA] pt-5">
                    {/* Record Date */}
                    <div>
                      <span className="text-[9px] tracking-[0.18em] text-[#929286] uppercase">
                        Record Date
                      </span>

                      <p className="mt-2 text-sm text-[#55574F]">
                        {activeItem.date}
                      </p>
                    </div>

                    {/* Archive Stamp */}
                    <div className="rotate-[-12deg] rounded-full border border-[#858A70]/60 p-2">
                      <div className="flex h-[62px] w-[62px] flex-col items-center justify-center rounded-full border border-[#858A70]/40">
                        <span className="text-[7px] tracking-[0.15em] text-[#858A70]">
                          PERSONAL
                        </span>

                        <span className="my-1 font-serif text-sm italic text-[#777D63]">
                          Archive
                        </span>

                        <span className="text-[7px] tracking-[0.12em] text-[#858A70]">
                          COLLECTION
                        </span>
                      </div>
                    </div>
                  </div>
                </motion.div>
              </AnimatePresence>
            </div>

            {/* ============================================================
                PREVIEW NAVIGATION
            ============================================================ */}

            <div className="mt-6 flex items-center justify-between">
              {/* Pagination Indicators */}
              <div className="flex items-center gap-2">
                {archiveItems.map((item, index) => (
                  <button
                    key={item.id}
                    onClick={() => setActiveIndex(index)}
                    aria-label={`Select archive ${item.id}`}
                    className={`h-1 transition-all duration-300 ${
                      activeIndex === index
                        ? "w-8 bg-[#81856D]"
                        : "w-3 bg-[#D0CDC2] hover:bg-[#A3A48F]"
                    }`}
                  />
                ))}
              </div>

              {/* Navigation Buttons */}
              <div className="flex items-center gap-2">
                <button
                  onClick={goPrevious}
                  aria-label="Previous archive"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D0CDC2] text-[#77796F] transition-colors hover:bg-[#DCD9CF]"
                >
                  <ArrowLeft size={15} />
                </button>

                <button
                  onClick={goNext}
                  aria-label="Next archive"
                  className="flex h-9 w-9 items-center justify-center rounded-full border border-[#D0CDC2] text-[#77796F] transition-colors hover:bg-[#DCD9CF]"
                >
                  <ArrowRight size={15} />
                </button>
              </div>
            </div>
          </div>
        </div>

        {/* ============================================================
            FOOTER
        ============================================================ */}

        <div className="mt-24 flex flex-col justify-between gap-5 border-t border-[#C9C6BB] pt-7 sm:flex-row sm:items-center">
          <p className="text-xs leading-6 text-[#85857A]">
            A growing archive of experiences,
            milestones, and lessons learned.
          </p>

          <span className="text-[10px] tracking-[0.15em] text-[#99998C] uppercase">
            Collected along the way
          </span>
        </div>
      </div>

      {/* ============================================================
          CERTIFICATE LIGHTBOX
      ============================================================ */}

      <AnimatePresence>
        {lightboxOpen && (
          <motion.div
            key="certificate-lightbox"
            initial={{
              opacity: 0,
            }}
            animate={{
              opacity: 1,
            }}
            exit={{
              opacity: 0,
            }}
            transition={{
              duration: 0.2,
            }}
            className="fixed inset-0 z-[100] flex items-center justify-center bg-[#252721]/95 p-4 backdrop-blur-sm sm:p-8"
            onClick={closeLightbox}
          >
            {/* Lightbox Content */}
            <motion.div
              initial={{
                opacity: 0,
                scale: 0.96,
                y: 10,
              }}
              animate={{
                opacity: 1,
                scale: 1,
                y: 0,
              }}
              exit={{
                opacity: 0,
                scale: 0.96,
                y: 10,
              }}
              transition={{
                duration: 0.25,
              }}
              onClick={(event) => event.stopPropagation()}
              className="relative flex max-h-[92vh] w-full max-w-6xl flex-col"
            >
              {/* Lightbox Header */}
              <div className="mb-4 flex items-start justify-between gap-4">
                <div>
                  <span className="text-[9px] tracking-[0.2em] text-[#B9B9A9] uppercase">
                    Certificate Preview
                  </span>

                  <h3 className="mt-2 text-sm text-[#F1EFE8] sm:text-base">
                    {selectedCertificate.title}
                  </h3>

                  <p className="mt-1 text-xs text-[#A5A69A]">
                    {selectedCertificate.issuer}
                  </p>
                </div>

                {/* Close Button */}
                <button
                  onClick={closeLightbox}
                  aria-label="Close certificate preview"
                  className="flex h-10 w-10 shrink-0 items-center justify-center border border-white/20 text-white/70 transition-colors hover:bg-white/10 hover:text-white"
                >
                  <X size={18} />
                </button>
              </div>

              {/* Main Image */}
              <div className="relative flex min-h-0 flex-1 items-center justify-center overflow-hidden border border-white/10 bg-[#33352F] p-3 sm:p-6">
                {!lightboxImageError ? (
                  <img
                    src={selectedCertificate.image}
                    alt={selectedCertificate.title}
                    className="max-h-[72vh] max-w-full object-contain"
                    onError={() => setLightboxImageError(true)}
                  />
                ) : (
                  <div className="flex flex-col items-center justify-center py-20 text-center">
                    <FileText
                      size={36}
                      strokeWidth={1}
                      className="text-[#A1A18F]"
                    />

                    <p className="mt-4 text-sm text-[#D0CEC4]">
                      Unable to display certificate
                    </p>
                  </div>
                )}

                {/* Previous Certificate */}
                <button
                  onClick={previousCertificate}
                  aria-label="Previous certificate"
                  className="absolute left-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#252721]/60 text-white/70 transition-colors hover:bg-[#252721] hover:text-white sm:left-5"
                >
                  <ArrowLeft size={17} />
                </button>

                {/* Next Certificate */}
                <button
                  onClick={nextCertificate}
                  aria-label="Next certificate"
                  className="absolute right-3 top-1/2 flex h-10 w-10 -translate-y-1/2 items-center justify-center border border-white/20 bg-[#252721]/60 text-white/70 transition-colors hover:bg-[#252721] hover:text-white sm:right-5"
                >
                  <ArrowRight size={17} />
                </button>
              </div>

              {/* Lightbox Footer */}
              <div className="mt-4 flex flex-col justify-between gap-3 sm:flex-row sm:items-center">
                <div>
                  <p className="text-xs text-[#D0CEC4]">
                    {selectedCertificate.date}
                  </p>

                  <p className="mt-1 text-[9px] tracking-[0.15em] text-[#85877B] uppercase">
                    {selectedCertificate.id} / {certificates.length} certificates
                  </p>
                </div>

                {/* Certificate Pagination */}
                <div className="flex items-center gap-1.5">
                  {certificates.map((certificate, index) => (
                    <button
                      key={certificate.id}
                      onClick={() => selectCertificate(index)}
                      aria-label={`View certificate ${certificate.id}`}
                      className={`h-1 transition-all duration-300 ${
                        activeCertificate === index
                          ? "w-6 bg-[#A3A48F]"
                          : "w-2 bg-white/20 hover:bg-white/50"
                      }`}
                    />
                  ))}
                </div>
              </div>
            </motion.div>
          </motion.div>
        )}
      </AnimatePresence>
    </section>
  );
}
