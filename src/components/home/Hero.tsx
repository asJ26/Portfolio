"use client";

import { TypewriterEffect } from "@/components/ui/TypewriterEffect";
import { BsGithub, BsLinkedin } from "react-icons/bs";
import { FaMediumM } from "react-icons/fa";
import { ButtonLitLink } from "@/components/ui/ButtonLit";
import { Particles } from "@/components/ui/Particles";
import ClientOnly from "@/components/ui/ClientOnly";
import { SOCIAL_LINKS, PERSONAL_INFO } from "@/constants/contact";

export default function Hero() {
  const words = [
    {
      text: "Hi",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "I'm",
      className: "text-neutral-800 dark:text-white"
    },
    {
      text: "Akhilesh",
      className: "text-neutral-800 dark:text-white font-bold"
    },
    {
      text: "Jadhav",
      className: "text-neutral-800 dark:text-white font-bold"
    }
  ];

  return (
    <section className="h-screen w-full relative overflow-hidden">
      {/* Particles Background */}
      <div className="absolute inset-0">
        <ClientOnly>
          <Particles quantity={80} ease={30} />
        </ClientOnly>
      </div>

      {/* Content */}
      <div className="relative h-full max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="h-full w-full flex flex-col items-center justify-center">
          <div className="hidden md:block">
            <TypewriterEffect words={words} className="text-4xl sm:text-5xl" />
          </div>
          <div className="md:hidden">
            <h1 className="text-4xl sm:text-5xl font-bold text-neutral-800 dark:text-white">
              Hi, I'm Akhilesh Jadhav
            </h1>
          </div>
          
          <p className="text-neutral-600 dark:text-white/80 max-w-2xl mx-auto text-center mt-6">
            {PERSONAL_INFO.tagline}
          </p>

          <div className="flex gap-4 mt-8">
            <a
              href={SOCIAL_LINKS.github}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-900 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <BsGithub className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.linkedin}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-900 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <BsLinkedin className="w-6 h-6" />
            </a>
            <a
              href={SOCIAL_LINKS.medium}
              target="_blank"
              rel="noopener noreferrer"
              className="p-3 bg-white dark:bg-neutral-900 rounded-full hover:scale-110 transition-transform duration-200"
            >
              <FaMediumM className="w-6 h-6" />
            </a>
          </div>

          <div className="flex gap-4 mt-8">
            <ButtonLitLink
              href="#projects"
            >
              View Projects
            </ButtonLitLink>
          </div>
        </div>
      </div>
    </section>
  );
}
