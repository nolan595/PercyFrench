'use client'

import { motion, useReducedMotion } from 'framer-motion'
import Image from 'next/image'
import { ChevronDown } from 'lucide-react'

export default function Hero() {
  const reduced = useReducedMotion()

  return (
    <section className="relative min-h-dvh flex items-center justify-center overflow-hidden">
      {/* Background portrait */}
      <div className="absolute inset-0">
        <Image
          src="/images/percy-french.jpg"
          alt="Percy French, Irish songwriter and entertainer"
          fill
          priority
          className="object-cover object-top"
          sizes="100vw"
        />
        {/* Warm dark overlay — heavier at bottom for text legibility */}
        <div
          className="absolute inset-0"
          style={{
            background:
              'linear-gradient(to bottom, rgba(28,25,23,0.55) 0%, rgba(28,25,23,0.72) 60%, rgba(28,25,23,0.90) 100%)',
          }}
        />
      </div>

      {/* Content */}
      <div className="relative z-10 text-center px-6 max-w-3xl mx-auto">
        {/* Gold treble clef decoration */}
        <motion.div
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
          className="flex justify-center mb-6"
        >
          <Image
            src="/images/decoration.png"
            alt=""
            width={80}
            height={80}
            className="drop-shadow-lg"
            aria-hidden="true"
          />
        </motion.div>

        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="text-sm tracking-[0.25em] uppercase text-amber-300 font-medium mb-4"
        >
          Percy French Troubadours
        </motion.p>

        <motion.h1
          initial={{ opacity: 0, y: reduced ? 0 : 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.55 }}
          className="text-5xl sm:text-6xl md:text-7xl font-light text-white leading-tight mb-6"
          style={{ fontFamily: 'var(--font-display)' }}
        >
          The Songs and Poems<br />
          <em className="italic font-normal" style={{ color: '#D4A947' }}>
            of Percy French
          </em>
        </motion.h1>

        <motion.p
          initial={{ opacity: 0, y: reduced ? 0 : 15 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.75 }}
          className="text-lg md:text-xl text-stone-300 leading-relaxed max-w-xl mx-auto"
        >
          A two-hour show on the life of Percy French — a musical journey from
          the Mountains of Mourne to Ballyjamesduff, Drumcolliher and beyond.
        </motion.p>

        <motion.a
          href="#about"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 1.1 }}
          className="inline-flex items-center gap-2 mt-10 text-sm tracking-widest uppercase text-amber-300/80 hover:text-amber-300 transition-colors duration-200"
          aria-label="Scroll down to learn more"
        >
          Discover the show
          <ChevronDown className="w-4 h-4 animate-bounce" aria-hidden="true" />
        </motion.a>
      </div>
    </section>
  )
}
