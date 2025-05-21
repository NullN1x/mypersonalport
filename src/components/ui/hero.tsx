"use client";

import React from "react";
import Particles from "./Particles";
import { useTheme } from "next-themes";
import Link from "next/link";
import ShinyText from "../shineytext";
import GradientText from "../gradianttext";

const Hero = () => {
  const { resolvedTheme } = useTheme();
  const isDark = resolvedTheme === "dark";

  const colors = isDark
    ? ["#38bdf8", "#f472b6", "#facc15"]
    : ["#0ea5e9", "#7c3aed", "#059669"];

  return (
    // <section className="relative h-screen w-full overflow-hidden">
    <section className="relative mx-auto h-screen w-full max-w-4xl overflow-hidden px-6 py-20 text-center sm:py-32">
      {/* Particle background */}
      <div className="pointer-events-none absolute inset-0 z-0">
        <Particles
          className="h-full w-full"
          particleColors={colors}
          alphaParticles={true}
          particleCount={1000}
          speed={0.2}
          particleSpread={10}
          particleBaseSize={80}
          moveParticlesOnHover={true}
          disableRotation={false}
        />
      </div>

      {/* Overlay to soften particles */}
      <div className="pointer-events-none absolute inset-0 z-10 bg-white/50 dark:bg-black/50" />

      {/* Content container */}
      <div className="fade-in relative z-20 flex h-full w-full items-start justify-center px-4 pt-70 text-center">
        <div className="container max-w-3xl">
          <h1 className="text-4xl font-bold text-black md:text-6xl dark:text-white">
            Hi, I&apos;m
            <GradientText
              colors={["#7c3aed", "#6366f1", "#7c3aed", "#6366f1"]}
              animationSpeed={3}
              showBorder={false}
              className="ml-2"
            >
              Daniel
            </GradientText>{" "}
            Osibodu
          </h1>

          <p className="mt-4 text-lg text-black md:text-xl dark:text-white">
            I&apos;m a Front-End Web Developer specializing in React and other
            modern web technologies. My goal is to create clean, performant, and
            user-friendly web applications that drive engagement.
          </p>

          <Link
            href="#projects"
            className="mt-8 inline-block rounded-full bg-indigo-600 px-8 py-3 transition hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-600"
          >
            <ShinyText
              text="Explore My Projects"
              className="text-lg font-semibold"
              speed={2}
            />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Hero;
