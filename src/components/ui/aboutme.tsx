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
        More About
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
        My passion lies in creating web experiences that are as intuitive as
        they are impactful. With a strong foundation in designing user-centric
        and creative interfaces, I&apos;m driven to build applications that not
        only look great but also enhance the user experience.
      </ScrollReveal>

      <p className="mb-6 text-2xl">
        I have hands-on experience utilizing a variety of modern technologies
        and software to craft engaging and responsive web applications. Beyond
        the code, I pride myself on being highly adaptable and skilled at
        multitasking in fast-paced environments.
      </p>

      <BlurText
        text="I thrive on problem-solving and am eager to use my skills to deliver high-quality results that make a real difference."
        delay={150}
        animateBy="words"
        direction="top"
        className="text-1xl"
      />

      <Link
        href="#contact"
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
