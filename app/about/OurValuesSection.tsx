"use client";

import { motion } from "framer-motion";
import {
  Award,
  Handshake,
  Lightbulb,
  ShieldCheck,
  Users,
} from "lucide-react";

const values = [
  {
    icon: ShieldCheck,
    title: "Integrity",
    description:
      "We uphold the highest standards of honesty and transparency.",
  },
  {
    icon: Award,
    title: "Excellence",
    description:
      "We are committed to delivering accurate and high-quality services.",
  },
  {
    icon: Handshake,
    title: "Partnership",
    description:
      "We work closely with our clients to understand and achieve their goals.",
  },
  {
    icon: Lightbulb,
    title: "Innovation",
    description:
      "We embrace technology and new ideas to provide smarter solutions.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We support the communities where we live and work.",
  },
];

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
      delayChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: {
    opacity: 0,
    y: 35,
    scale: 0.95,
  },
  visible: {
    opacity: 1,
    y: 0,
    scale: 1,
    transition: {
      duration: 0.6,
      ease: "easeOut" as const,
    },
  },
};

export default function OurValuesSection() {
  return (
    <section className="relative overflow-hidden px-6 py-24 sm:px-10">
      {/* Decorative background shape */}
      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -left-24 top-16 h-72 w-72 rounded-full bg-[var(--light-green)]/10 blur-3xl"
        animate={{
          x: [-10, 10, -10],
          y: [0, 8, 0],
        }}
        transition={{
          duration: 12,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <motion.div
        aria-hidden="true"
        className="pointer-events-none absolute -right-24 bottom-10 h-64 w-64 rounded-full bg-[#ffdb11]/10 blur-3xl"
        animate={{
          x: [8, -8, 8],
          y: [0, -6, 0],
        }}
        transition={{
          duration: 14,
          repeat: Infinity,
          ease: "easeInOut",
        }}
      />

      <div className="relative mx-auto max-w-7xl">
        {/* Heading */}
        <motion.div
          className="text-center"
          initial={{
            opacity: 0,
            y: 25,
          }}
          whileInView={{
            opacity: 1,
            y: 0,
          }}
          viewport={{
            once: true,
            amount: 0.5,
          }}
          transition={{
            duration: 0.65,
            ease: "easeOut",
          }}
        >
          <p className="text-sm font-bold uppercase tracking-[0.18em] text-[var(--primary-green)]">
            Our Values
          </p>

          <h2 className="mt-4 font-serif text-4xl text-[var(--primary-brown)] sm:text-5xl">
            What We Stand For
          </h2>

          <motion.div
            className="mx-auto mt-5 h-[3px] rounded-full bg-[#ffdb11]"
            initial={{ width: 0 }}
            whileInView={{ width: 56 }}
            viewport={{ once: true }}
            transition={{
              duration: 0.7,
              delay: 0.25,
              ease: "easeOut",
            }}
          />
        </motion.div>

        {/* Values */}
        <motion.div
          className="mt-16 grid gap-8 sm:grid-cols-2 lg:grid-cols-5 lg:gap-0"
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{
            once: true,
            amount: 0.25,
          }}
        >
          {values.map((value, index) => {
            const Icon = value.icon;

            return (
              <motion.article
                key={value.title}
                variants={cardVariants}
                whileHover={{
                  y: -8,
                }}
                transition={{
                  duration: 0.3,
                  ease: "easeOut",
                }}
                className={`group relative rounded-2xl px-5 py-7 text-center transition-colors duration-300 hover:bg-[#fffaf0] ${
                  index !== values.length - 1
                    ? "lg:rounded-none lg:border-r lg:border-[#f19f28]/45"
                    : ""
                }`}
              >
                {/* Icon circle */}
                <motion.div
                  className="mx-auto flex h-24 w-24 items-center justify-center rounded-full bg-[#80ab7e]/12 transition-colors duration-300 group-hover:bg-[#80ab7e]/20"
                  variants={{
                    hidden: {
                      scale: 0,
                      rotate: -15,
                    },
                    visible: {
                      scale: 1,
                      rotate: 0,
                      transition: {
                        duration: 0.55,
                        ease: "backOut",
                      },
                    },
                  }}
                  whileHover={{
                    rotate: 7,
                    scale: 1.07,
                  }}
                >
                  <Icon
                    size={43}
                    strokeWidth={1.7}
                    className="text-[var(--primary-green)]"
                  />
                </motion.div>

                <h3 className="mt-6 font-serif text-2xl text-[var(--primary-brown)]">
                  {value.title}
                </h3>

                {/* Animated gold line */}
                <motion.div
                  className="mx-auto mt-3 h-[2px] bg-[#ffdb11]"
                  initial={{ width: 0 }}
                  whileInView={{ width: 32 }}
                  viewport={{ once: true }}
                  transition={{
                    duration: 0.5,
                    delay: index * 0.12 + 0.35,
                    ease: "easeOut",
                  }}
                  whileHover={{
                    width: 50,
                  }}
                />

                <p className="mx-auto mt-4 max-w-[210px] text-sm leading-7 text-[#66574d]">
                  {value.description}
                </p>
              </motion.article>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}