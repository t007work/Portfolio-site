"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const fade = {
  hidden: { opacity: 0, y: 16 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

export default function Hero({ contact, image = {} }) {
  const { src = "/hero.jpg", alt = "Portrait" } = image;

  return (
    <section
      id="top"
      className="relative min-h-screen flex items-center justify-center px-6 md:px-12 lg:px-20"
    >
      {/* subtle gradient flares */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 -z-10 opacity-20 [mask-image:radial-gradient(60%_50%_at_50%_15%,#000_40%,transparent_70%)]"
        style={{
          background:
            "radial-gradient(900px 500px at 15% 0%, rgba(110,178,255,0.16), transparent 60%), radial-gradient(900px 500px at 85% 0%, rgba(255,93,177,0.12), transparent 60%)",
        }}
      />

      <div className="grid w-full max-w-7xl items-center gap-12 lg:grid-cols-2">
        {/* Image */}
        <motion.div
          variants={fade}
          initial="hidden"
          animate="show"
          className="relative aspect-[4/5] w-full max-w-md mx-auto overflow-hidden rounded-[44px] bg-surface ring-1 ring-border"
        >
          <Image
            src={src}
            alt={alt}
            fill
            priority
            className="object-cover"
            sizes="(min-width:1024px) 480px, 90vw"
          />
        </motion.div>

        {/* Content */}
        <div className="text-center lg:text-left">
          <motion.h1
            variants={fade}
            initial="hidden"
            animate="show"
            className="text-5xl md:text-6xl lg:text-7xl font-extrabold tracking-tight glow"
          >
            SIRI<br className="hidden lg:block" /> POCHAREDDY
          </motion.h1>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-5 text-xl md:text-2xl opacity-90"
          >
            Aspiring Product Marketing Professional · Business Administration
            Student — Singapore Polytechnic (2027)
          </motion.p>

          <motion.p
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 max-w-xl mx-auto lg:mx-0 text-lg md:text-xl leading-relaxed opacity-90"
          >
            Meticulous, resilient, and growth-driven. I pair analytical
            precision with creative execution — from balancing complex
            accounting entries to crafting scroll-stopping social content.
          </motion.p>

          {/* Buttons */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-10 flex flex-wrap justify-center lg:justify-start gap-4"
          >
            <a
              href="#projects"
              className="rounded-xl border border-border px-5 py-3 text-lg font-medium hover:bg-surface/70"
            >
              View projects
            </a>
            <a
              href="#contact"
              className="rounded-xl bg-foreground px-5 py-3 text-lg font-medium text-background shadow-sm hover:opacity-90"
            >
              Contact
            </a>
          </motion.div>

          {/* Contact badges */}
          <motion.div
            variants={fade}
            initial="hidden"
            animate="show"
            className="mt-8 flex flex-wrap justify-center lg:justify-start gap-3"
          >
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-base">
              📧 {contact.email}
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-base">
              🔗{" "}
              <a
                className="underline underline-offset-4"
                href={contact.linkedin}
                target="_blank"
                rel="noreferrer"
              >
                linkedin.com/in/pochareddysiri
              </a>
            </span>
            <span className="inline-flex items-center gap-2 rounded-full border border-border bg-surface px-4 py-2 text-base">
              📍 {contact.location}
            </span>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
