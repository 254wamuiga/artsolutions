"use client";

import { motion } from "motion/react";
import { TextRotate } from "@/components/ui/text-rotate";
import { Dock, DockIcon } from "@/components/ui/dock";
import Image from "next/image";
import Link from "next/link";
import { Mail } from "lucide-react";

export function Hero() {
  return (
    <section className="relative bg-background overflow-hidden">
      <div className="container mx-auto max-w-7xl px-4 md:px-8 pt-24 md:pt-32 pb-16">
        <div className="flex flex-col lg:flex-row justify-between items-start lg:items-center gap-6 md:gap-10">

          {/* Profile & Heading */}
          <div className="flex flex-col md:flex-row items-start md:items-center gap-6 md:gap-8">
            <motion.div
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6 }}
              className="relative flex-shrink-0"
            >
              <div className="relative w-28 h-28 md:w-36 md:h-36">
                <div className="absolute inset-0 rounded-full bg-[#FF9D00]" />
                <div className="relative w-full h-full overflow-hidden">
                  <Image
                    src="/DP.webp"
                    alt="Kamau Wamuiga"
                    fill
                    className="object-contain object-bottom scale-110"
                    priority
                  />
                </div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6, delay: 0.2 }}
              className="flex flex-col"
            >
              <p className="text-muted-foreground font-medium mb-2 md:mb-3 uppercase tracking-widest text-[10px]">Hello, I&apos;m</p>

              <div className="flex items-center gap-2 md:gap-3 text-2xl md:text-4xl text-muted-foreground font-medium flex-wrap">
                <span>Building</span>
                <TextRotate
                  texts={[
                    "User Interfaces",
                    "Digital Products",
                    "Web Applications",
                    "Brand Experiences",
                  ]}
                  mainClassName="text-foreground font-bold"
                  staggerFrom="first"
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  staggerDuration={0.02}
                  splitLevelClassName="overflow-hidden"
                  transition={{ type: "spring", damping: 30, stiffness: 400 }}
                  rotationInterval={3000}
                />
              </div>

              <p className="text-muted-foreground mt-4 md:mt-8 max-w-sm leading-relaxed text-[13px] opacity-80">
                I bridge the gap between thought and execution, crafting digital experiences that transform ideas into reality.
              </p>
            </motion.div>
          </div>

          {/* Social Dock */}
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.6, delay: 0.4 }}
            className="hidden md:flex justify-start lg:justify-end"
          >
            <Dock direction="middle" className="bg-neutral-900 border-none px-4 md:px-6 h-14 md:h-16 rounded-full shadow-md gap-4 md:gap-6">
              <DockIcon className="bg-transparent hover:bg-transparent">
                <Link href="https://www.linkedin.com/in/kelvin-wamuiga" target="_blank" rel="noopener noreferrer" className="p-1 md:p-2 transition-all duration-300 opacity-60 hover:opacity-100 hover:-translate-y-0.5 text-white">
                  <svg className="size-6 md:size-7" viewBox="0 0 24 24" fill="currentColor" aria-label="LinkedIn">
                    <path d="M20.447 20.452h-3.554v-5.569c0-1.328-.027-3.037-1.852-3.037-1.853 0-2.136 1.445-2.136 2.939v5.667H9.351V9h3.414v1.561h.046c.477-.9 1.637-1.85 3.37-1.85 3.601 0 4.267 2.37 4.267 5.455v6.286zM5.337 7.433a2.062 2.062 0 0 1-2.063-2.065 2.064 2.064 0 1 1 2.063 2.065zm1.782 13.019H3.555V9h3.564v11.452zM22.225 0H1.771C.792 0 0 .774 0 1.729v20.542C0 23.227.792 24 1.771 24h20.451C23.2 24 24 23.227 24 22.271V1.729C24 .774 23.2 0 22.222 0h.003z" />
                  </svg>
                </Link>
              </DockIcon>
              <DockIcon className="bg-transparent hover:bg-transparent">
                <Link href="https://github.com/254wamuiga" target="_blank" rel="noopener noreferrer" className="p-1 md:p-2 transition-all duration-300 opacity-60 hover:opacity-100 hover:-translate-y-0.5 text-white">
                  <svg className="size-6 md:size-7" viewBox="0 0 24 24" fill="currentColor" aria-label="GitHub">
                    <path d="M12 .297c-6.63 0-12 5.373-12 12 0 5.303 3.438 9.8 8.205 11.385.6.113.82-.258.82-.577 0-.285-.01-1.04-.015-2.04-3.338.724-4.042-1.61-4.042-1.61C4.422 18.07 3.633 17.7 3.633 17.7c-1.087-.744.084-.729.084-.729 1.205.084 1.838 1.236 1.838 1.236 1.07 1.835 2.809 1.305 3.495.998.108-.776.417-1.305.76-1.605-2.665-.3-5.466-1.332-5.466-5.93 0-1.31.465-2.38 1.235-3.22-.135-.303-.54-1.523.105-3.176 0 0 1.005-.322 3.3 1.23.96-.267 1.98-.399 3-.405 1.02.006 2.04.138 3 .405 2.28-1.552 3.285-1.23 3.285-1.23.645 1.653.24 2.873.12 3.176.765.84 1.23 1.91 1.23 3.22 0 4.61-2.805 5.625-5.475 5.92.42.36.81 1.096.81 2.22 0 1.606-.015 2.896-.015 3.286 0 .315.21.69.825.57C20.565 22.092 24 17.592 24 12.297c0-6.627-5.373-12-12-12" />
                  </svg>
                </Link>
              </DockIcon>
              <DockIcon className="bg-transparent hover:bg-transparent">
                <Link href="https://www.behance.net/kelvinwamuiga" target="_blank" rel="noopener noreferrer" className="p-1 md:p-2 transition-all duration-300 opacity-60 hover:opacity-100 hover:-translate-y-0.5 text-white">
                  <svg className="size-6 md:size-7" viewBox="0 0 24 24" fill="currentColor" aria-label="Behance">
                    <path d="M22 14.4c0-2.4-1.1-4.4-3.5-4.4-2.4 0-3.5 1.9-3.5 4.5s1.2 4.3 3.5 4.3c2.1 0 3-1.6 3-1.6l-1.6-1c0 0-.6.8-1.5.8s-1.4-.6-1.4-1.5H22zm-3.5-2.6c1.1 0 1.5.8 1.5 1.6h-3.1s0-1.6 1.6-1.6zM0 6.1v11.8h5.3c3.4 0 5.3-1.6 5.3-4.3 0-1.8-1-3.2-2.7-3.8 1.4-.5 2.1-1.7 2.1-3.2 0-2.3-1.8-3.9-4.8-3.9H0zm2.7 2.2h2.2c1.4 0 2.2.6 2.2 1.6s-.8 1.6-2.2 1.6H2.7V8.3zm0 5.4h2.4c1.6 0 2.6.7 2.6 1.9s-1 1.9-2.6 1.9H2.7v-3.8zM15.3 7.8h6.4v1.6h-6.4V7.8z" />
                  </svg>
                </Link>
              </DockIcon>
              <DockIcon className="bg-transparent hover:bg-transparent">
                <Link href="mailto:kelvinwamuiga@gmail.com" className="p-1 md:p-2 transition-all duration-300 opacity-60 hover:opacity-100 hover:-translate-y-0.5 text-white">
                  <Mail className="size-6 md:size-7" />
                </Link>
              </DockIcon>
            </Dock>
          </motion.div>

        </div>
      </div>
    </section>
  );
}
