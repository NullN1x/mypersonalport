"use client";

import React from "react";
import Image from "next/image";
import { ExternalLink } from "lucide-react";
import { Spotlight } from "./spotlight";
import { GlowEffect } from "../gloweffect";
import GradientText from "../gradianttext";

const projects = [
  {
    title: "SaaS Landing Page",
    description: "A beautiful landing page app using React and Tailwind.",
    tech: ["React", "TailwindCSS", "Supabase"],
  },
  {
    title: "Orbit Analytics Dashboard",
    description: "Interactive analytics dashboard with data visualization.",
    tech: ["TypeScript", "D3.js", "Next.js"],
  },
  {
    title: "E-commerce Platform",
    description: "Full-featured e-commerce platform with auth and payments.",
    tech: ["React", "Node.js", "Stripe"],
  },
];

export default function ProjectsSection() {
  return (
    <section id="projects" className="relative mx-auto max-w-5xl px-6 py-24">
      <h2 className="mb-4 text-center text-4xl font-bold">
        Featured
        <GradientText
          colors={["#7c3aed", "#6366f1", "#7c3aed", "#6366f1"]}
          animationSpeed={3}
          showBorder={false}
          className="ml-2"
        >
          Projects
        </GradientText>
      </h2>
      <p className="mx-auto mb-16 max-w-2xl text-center">
        This personal portfolio aside, here are some future projects to look
        forward too!
      </p>

      <div className="grid gap-10 sm:grid-cols-2 lg:grid-cols-3">
        {projects.map((project, index) => (
          <div
            key={index}
            className="relative overflow-visible rounded-2xl p-[1.5px]"
          >
            {/* GlowEffect as glowing border with indigo/purple colors */}
            <GlowEffect
              className="absolute inset-0 rounded-2xl opacity-40"
              colors={["#4f46e5", "#4338ca", "#5b21b6"]}
              mode="rotate"
              blur="medium" // Smaller blur radius
              scale={0.99} // Very tight glow
              duration={8}
            />

            {/* Actual card content with border and background */}
            <div className="relative z-10 overflow-hidden rounded-2xl border border-neutral-800 bg-[#0b0b0f] p-4 shadow-lg">
              <Spotlight
                className="absolute inset-0 rounded-2xl bg-white/10 blur-2xl dark:bg-white/20"
                size={200}
                springOptions={{ bounce: 0.3, duration: 0.1 }}
              />

              <div className="relative overflow-hidden rounded-xl">
                <Image
                  src="/comingsoon.webp"
                  alt="Project Screenshot"
                  width={500}
                  height={300}
                  className="h-52 w-full rounded-xl object-cover"
                />
              </div>

              <div className="mt-4 space-y-3">
                <div className="flex flex-wrap gap-2 text-sm text-white">
                  {project.tech.map((tech, i) => (
                    <span
                      key={i}
                      className="rounded-full bg-white/10 px-3 py-1 text-xs text-gray-300"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                <h3 className="text-lg font-semibold text-white">
                  {project.title}
                </h3>
                <p className="text-sm text-gray-400">{project.description}</p>

                <div className="mt-4 flex gap-4 text-gray-400">
                  <div className="relative rounded-full p-1">
                    <GlowEffect
                      className="absolute inset-0 rounded-full opacity-50"
                      colors={["#4f46e5", "#4338ca", "#5b21b6"]}
                      mode="colorShift"
                      blur="none" // Smaller spread
                      duration={4}
                      scale={1.1} // Tight glow around icon
                    />
                    <a
                      href="#"
                      className="relative z-10 flex items-center justify-center hover:text-white"
                    >
                      <ExternalLink size={18} />
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
