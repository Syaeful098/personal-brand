"use client";

import RadialSidebar from "@/components/RadialSidebar";

import HeroSection from "@/components/sections/HeroSection";
import AboutSection from "@/components/sections/AboutSection";
import ProjectsSection from "@/components/sections/ProjectsSection";
import SkillsSection from "@/components/sections/SkillsSection";
import JourneySection from "@/components/sections/JourneySection";
import AchievementsSection from "@/components/sections/AchievementsSection";
import NotesSection from "@/components/sections/NotesSection";
import NowSection from "@/components/sections/NowSection";
import ContactSection from "@/components/sections/ContactSection";

export default function Home() {
  return (
    <main className="min-h-screen">
      <RadialSidebar />

      {/* 01 — HOME */}
      <HeroSection />

      {/* 02 — ABOUT ME */}
      <AboutSection />

      {/* 03 — PROJECTS */}
      <ProjectsSection />

      {/* 04 — SKILLS & TOOLS */}
      <SkillsSection />

      {/* 05 — JOURNEY */}
      <JourneySection />

      {/* 06 — CERTIFICATES & ACHIEVEMENTS */}
      <AchievementsSection />

      {/* 07 — NOTES */}
      <NotesSection />

      {/* 08 — NOW */}
      <NowSection />

      {/* 09 — CONTACT */}
      <ContactSection />
    </main>
  );
}