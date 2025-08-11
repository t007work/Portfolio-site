"use client";
import { useState } from "react";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import SectionHeader from "@/components/SectionHeader";
import TechnicalSkills from "@/components/TechnicalSkills";
import MarketingSkills from "@/components/MarketingSkills";
import SoftSkills from "@/components/SoftSkills";
import AcademicsGrid from "@/components/AcademicsGrid";
import CredentialsGrid from "@/components/CredentialsGrid";
import Footer from "@/components/Footer";
import {
  aboutText,
  skills,
  experience,
  contact,
  heroImage,
} from "@/lib/content";

export default function Page() {
  const [lightboxOpen, setLightboxOpen] = useState(false);
  const [lightboxImages, setLightboxImages] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  const openLightbox = (images, index = 0) => {
    setLightboxImages(images);
    setCurrentIndex(index);
    setLightboxOpen(true);
  };

  const prevImage = () => {
    setCurrentIndex((prev) =>
      prev === 0 ? lightboxImages.length - 1 : prev - 1
    );
  };

  const nextImage = () => {
    setCurrentIndex((prev) =>
      prev === lightboxImages.length - 1 ? 0 : prev + 1
    );
  };

  const betaImages = ["/beta/beta1.jpg", "/beta/beta2.jpg", "/beta/beta3.jpg"];
  const socialImages = [
    "/beta/ig1.jpg",
    "/beta/ig2.jpg",
    "/beta/ig3.jpg",
    "/beta/ig4.jpg",
    "/beta/ig5.jpg",
    "/beta/ig6.jpg",
    "/beta/post1.jpg",
  ];
  const posterImages = [
    "/beta/poster1.jpg",
    "/beta/poster2.jpg",
    "/beta/poster3.jpg",
    "/beta/poster4.jpg",
    "/beta/poster5.jpg",
  ];

  return (
    <main>
      <Header email={contact.email} linkedin={contact.linkedin} />

      {/* Hero */}
      <Hero contact={contact} image={heroImage} />

      {/* About */}
      <section id="about" className="py-14 px-6 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader align="center" kicker="ABOUT" />
          <h2 className="mt-6 text-5xl md:text-7xl font-semibold tracking-tight text-center grad-text glow">
            A blend of analytical precision and creative execution
          </h2>
          <p className="mx-auto mt-8 max-w-4xl text-xl md:text-2xl text-center leading-relaxed opacity-90">
            {aboutText}
          </p>
        </div>
      </section>

      {/* Technical Skills */}
      <section
        id="skills-technical"
        className="py-14 flex items-center px-6 md:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            align="center"
            kicker="CORE COMPETENCIES"
            title="Technical"
            subtitle="Tools I use daily for analysis, reporting, and production."
          />
          <div className="mt-10">
            <TechnicalSkills items={skills.technicalDetailed} />
          </div>
        </div>
      </section>

      {/* Marketing Skills */}
      <section
        id="skills-marketing"
        className="py-14 flex items-center px-6 md:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            align="center"
            kicker="CORE COMPETENCIES"
            title="Marketing & Creative"
            subtitle="Content strategy, audience targeting, and visual storytelling."
          />
          <div className="mt-10">
            <MarketingSkills items={skills.marketing_creative} />
          </div>
        </div>
      </section>

      {/* Soft Skills */}
      <section
        id="skills-soft"
        className="py-14 flex items-center px-6 md:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            align="center"
            kicker="CORE COMPETENCIES"
            title="Soft Skills"
            subtitle="Leadership, communication, problem solving, and operations."
          />
          <div className="mt-10">
            <SoftSkills
              labels={[
                "Leadership & Mentoring",
                "Communication",
                "Creative Problem-Solving",
                "Professional Diplomacy",
                "Organisational",
              ]}
            />
          </div>
        </div>
      </section>

      {/* Academics */}
      <section id="academics" className="py-14 flex items-center px-6 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            align="center"
            kicker="ACADEMICS"
            title="Strong fundamentals"
          />
          <div className="mt-10">
            <AcademicsGrid shrinkLongText />
          </div>
        </div>
      </section>

      {/* Credentials */}
      <section
        id="credentials"
        className="py-14 flex items-center px-6 md:px-12"
      >
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader
            align="center"
            kicker="CREDENTIALS"
            title="Credentials"
          />
          <div className="mt-10">
            <CredentialsGrid centerLastRow />
          </div>
        </div>
      </section>

      {/* EXPERIENCE */}
      <section id="experience" className="py-14 px-6 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader align="center" kicker="EXPERIENCE" />
          <div className="mt-8 space-y-16">
            {experience.map((e) => (
              <div key={e.title} className="text-center">
                <h3 className="text-4xl md:text-5xl font-semibold grad-text glow">
                  {e.org} — {e.title}
                </h3>
                <p className="mt-3 text-lg md:text-xl text-purple-300 glow-sm">
                  {e.time}
                </p>
                <p className="mt-6 mx-auto max-w-3xl text-lg md:text-xl leading-relaxed opacity-90">
                  {e.summary}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* PROJECTS */}
      <section id="projects" className="py-14 px-6 md:px-12">
        <div className="mx-auto w-full max-w-6xl">
          <SectionHeader align="center" kicker="PROJECTS" title="Selected work" />

          <div className="mt-12 grid gap-8 sm:grid-cols-2 lg:grid-cols-3">
{/* BETA Project */}
<div
  onClick={() => { setLightboxImages(betaImages); setLightboxOpen(true); }}
  className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition"
>
  <img src={betaImages[0]} alt="BETA Project" className="w-full h-56 object-cover" />
  <div className="p-5 bg-gray-900">
    <h3 className="text-xl font-semibold text-white">
      Business Essentials in Action (BETA) — Marketing Lead & 2IC
    </h3>
    <p className="mt-3 text-sm text-gray-300">
      Designed social campaigns (Canva) that converted to pop-up sales (sold out inventory),
      balanced creative vision with budgets; coordinated with department leads, tracked spend, and iterated on messaging based on feedback.
    </p>
  </div>
</div>

            {/* Social Media Card */}
            <div
              onClick={() => openLightbox(socialImages)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition"
            >
              <img
                src={socialImages[0]}
                alt="Social Media"
                className="w-full h-56 object-cover"
              />
              <div className="p-5 bg-gray-900">
                <h3 className="text-xl font-semibold text-white">Social Media</h3>
                <p className="mt-3 text-sm text-gray-300">
                  Instagram content and post design work.
                </p>
              </div>
            </div>

            {/* Posters Card */}
            <div
              onClick={() => openLightbox(posterImages)}
              className="cursor-pointer rounded-2xl overflow-hidden shadow-lg hover:shadow-purple-500/40 transition"
            >
              <img
                src={posterImages[0]}
                alt="Posters"
                className="w-full h-56 object-cover"
              />
              <div className="p-5 bg-gray-900">
                <h3 className="text-xl font-semibold text-white">Posters</h3>
                <p className="mt-3 text-sm text-gray-300">
                  Poster designs for campaigns and events.
                </p>
              </div>
            </div>

            {/* Financial Systems Analysis Project — Text Only */}
            <div className="rounded-2xl bg-gray-900 p-5 shadow-lg hover:shadow-purple-500/40 transition">
              <h3 className="text-xl font-semibold text-white">
                Financial Systems Analysis Project — Team Lead
              </h3>
              <p className="mt-3 text-sm text-gray-300">
                Processed realistic messy accounting docs in ABSS.
              </p>
              <ul className="mt-3 text-sm text-gray-400 space-y-2 list-disc pl-5">
                <li>
                  Specialized in invoice reconciliation; ensured every transaction had a
                  clear trail
                </li>
                <li>Led multiple review cycles until trial balance was perfect</li>
                <li>Achieved A grade for accuracy & process discipline</li>
              </ul>
            </div>
          </div>
        </div>

        {/* Lightbox */}
        {lightboxOpen && (
          <div className="fixed inset-0 bg-black bg-opacity-90 flex items-center justify-center z-50">
            <button
              onClick={() => setLightboxOpen(false)}
              className="absolute top-5 right-5 text-white text-3xl"
            >
              &times;
            </button>
            <button
              onClick={prevImage}
              className="absolute left-5 text-white text-4xl z-50"
            >
              &#10094;
            </button>
            <img
              src={lightboxImages[currentIndex]}
              alt=""
              className="max-w-full max-h-[80vh] object-contain"
            />
            <button
              onClick={nextImage}
              className="absolute right-5 text-white text-4xl z-50"
            >
              &#10095;
            </button>
          </div>
        )}
      </section>

      <Footer email={contact.email} linkedin={contact.linkedin} />
    </main>
  );
}
