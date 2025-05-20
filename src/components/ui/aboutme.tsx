"use client";

import React from "react";
import ScrollReveal from "../scrollreveal";
import BlurText from "../blurtext";
import GradientText from "../gradianttext";
import ShinyText from "../shineytext";
import Link from "next/link";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-32"
    >
      <h1 className="text-4xl font-bold text-black md:text-6xl dark:text-white">
        About
        <GradientText
          colors={["#7c3aed", "#6366f1", "#7c3aed", "#6366f1"]}
          animationSpeed={3}
          showBorder={false}
          className="ml-2"
        >
          Me
        </GradientText>{" "}
      </h1>
      <ScrollReveal
        baseOpacity={0}
        enableBlur={true}
        baseRotation={5}
        blurStrength={10}
      >
        I’m a front-end developer who transforms ideas into fast, accessible,
        and visually engaging web applications—built with precision and purpose.
      </ScrollReveal>

      <BlurText
        text="Building beautiful, performant web apps that make a lasting impact xxxxxxx."
        delay={150}
        animateBy="words"
        direction="top"
        className="mb-8 text-2xl"
      />

      <Link
        href="#Contact"
        className="mt-8 inline-block rounded-full bg-indigo-600 px-8 py-3 transition hover:bg-indigo-700 focus:ring-4 focus:ring-indigo-400 focus:outline-none dark:bg-indigo-500 dark:hover:bg-indigo-600"
      >
        <ShinyText
          text="Get in Touch"
          className="text-lg font-semibold"
          speed={2}
        />
      </Link>
    </section>
  );
};

export default AboutMe;
