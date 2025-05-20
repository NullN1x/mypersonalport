"use client";

import React from "react";

const AboutMe: React.FC = () => {
  return (
    <section
      id="about"
      className="mx-auto max-w-4xl px-6 py-20 text-center sm:py-32"
    >
      <h2 className="mb-6 text-3xl font-bold">About Me</h2>
      <p className="mx-auto max-w-3xl text-lg leading-relaxed">
        I&apos;m Daniel Osibodu, a passionate Front-End Developer specializing
        in React and modern web technologies. I build clean, performant, and
        user-friendly web applications focused on great user experiences and
        maintainable code. With a strong foundation in JavaScript, TypeScript,
        and UI design principles, I aim to deliver solutions that not only look
        great but also perform seamlessly across devices.
      </p>
    </section>
  );
};

export default AboutMe;
