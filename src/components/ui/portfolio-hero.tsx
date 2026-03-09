"use client";

import { motion } from "motion/react";
import Image from "next/image";
import Link from "next/link";
import { Button } from "@/components/ui/button";

interface PortfolioHeroProps {
  title: string;
  subtitle: string;
  description: string;
  ctaButtons?: Array<{
    label: string;
    href: string;
    variant?: "default" | "ghost";
  }>;
  showcaseImages?: Array<{
    src: string;
    alt: string;
    size: number;
    position: { x: string; y: string };
    delay: number;
  }>;
  className?: string;
}

export default function PortfolioHero({
  title = "Web Development",
  subtitle = "& AI Solutions",
  description = "We craft stunning websites, intelligent chatbots, and innovative digital experiences that elevate your brand and drive results.",
  ctaButtons = [
    { label: "View Projects", href: "#portfolio", variant: "default" },
    { label: "Contact Us", href: "/contact", variant: "ghost" },
  ],
  showcaseImages = [
    {
      src: "/images/valueservice.png",
      alt: "ValueServices",
      size: 280,
      position: { x: "5%", y: "5%" },
      delay: 0,
    },
    {
      src: "/images/ziyarah travels.png",
      alt: "Ziyarah Travels",
      size: 240,
      position: { x: "55%", y: "15%" },
      delay: 0.2,
    },
    {
      src: "/images/new life traders.png",
      alt: "New Life Traders",
      size: 220,
      position: { x: "25%", y: "55%" },
      delay: 0.4,
    },
  ],
  className = "",
}: PortfolioHeroProps) {
  return (
    <section
      className={`relative min-h-screen w-full overflow-hidden bg-background ${className}`}
    >
      {/* Radial Glow Effect */}
      <motion.div
        className="absolute pointer-events-none"
        style={{
          top: "10%",
          right: "10%",
          width: "600px",
          height: "600px",
          borderRadius: "50%",
          background:
            "radial-gradient(circle, hsl(var(--primary) / 0.15) 0%, transparent 70%)",
          filter: "blur(80px)",
        }}
        animate={{
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3],
        }}
        transition={{
          duration: 8,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      {/* Content Container */}
      <div className="relative z-10 min-h-screen flex items-center px-6 py-20 pt-32">
        <div className="max-w-7xl mx-auto w-full grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          {/* Left Content */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.3 }}
            className="space-y-8"
          >
            {/* Title */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-bold leading-tight tracking-tight">
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
              >
                {title}
              </motion.span>
              <br />
              <motion.span
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
                className="text-primary"
              >
                {subtitle}
              </motion.span>
            </h1>

            {/* Description */}
            <motion.p
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="text-lg md:text-xl max-w-xl text-muted-foreground leading-relaxed"
            >
              {description}
            </motion.p>

            {/* CTA Buttons */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1 }}
              className="flex flex-col sm:flex-row items-start sm:items-center gap-4"
            >
              {ctaButtons.map((button, index) => (
                <Button
                  key={index}
                  asChild
                  size="lg"
                  variant={button.variant || "default"}
                  className="rounded-xl px-6 text-base"
                >
                  <Link href={button.href}>{button.label}</Link>
                </Button>
              ))}
            </motion.div>

            {/* Stats */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 1.2 }}
              className="flex flex-wrap gap-8 pt-4"
            >
              <div>
                <p className="text-3xl font-bold text-primary">50+</p>
                <p className="text-sm text-muted-foreground">Projects Completed</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">30+</p>
                <p className="text-sm text-muted-foreground">Happy Clients</p>
              </div>
              <div>
                <p className="text-3xl font-bold text-primary">5+</p>
                <p className="text-sm text-muted-foreground">AI Solutions</p>
              </div>
            </motion.div>
          </motion.div>

          {/* Right Content - Project Showcase */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.8, delay: 0.5 }}
            className="relative h-[500px] hidden lg:block"
          >
            {/* Floating Project Images */}
            {showcaseImages.map((image, index) => (
              <motion.div
                key={index}
                className="absolute rounded-2xl overflow-hidden shadow-2xl"
                style={{
                  width: `${image.size}px`,
                  left: image.position.x,
                  top: image.position.y,
                }}
                initial={{ opacity: 0, y: 50, scale: 0.8 }}
                animate={{
                  opacity: 1,
                  y: [0, -15, 0],
                  scale: 1,
                }}
                transition={{
                  opacity: { duration: 0.6, delay: 0.8 + image.delay },
                  y: {
                    duration: 4 + index * 0.5,
                    repeat: Infinity,
                    ease: "easeInOut",
                    delay: image.delay,
                  },
                  scale: { duration: 0.6, delay: 0.8 + image.delay },
                }}
                whileHover={{ scale: 1.05, zIndex: 50 }}
              >
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.size}
                  height={image.size * 0.6}
                  className="w-full h-auto object-cover"
                />
              </motion.div>
            ))}

            {/* Decorative Elements */}
            <motion.div
              className="absolute w-32 h-32 rounded-full border-2 border-primary/20"
              style={{ right: "10%", bottom: "20%" }}
              animate={{
                scale: [1, 1.2, 1],
                opacity: [0.3, 0.6, 0.3],
              }}
              transition={{
                duration: 4,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
            <motion.div
              className="absolute w-20 h-20 rounded-full bg-primary/10"
              style={{ left: "40%", bottom: "10%" }}
              animate={{
                y: [0, -20, 0],
              }}
              transition={{
                duration: 3,
                repeat: Infinity,
                ease: "easeInOut",
              }}
            />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
