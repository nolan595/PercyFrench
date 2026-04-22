'use client'

import { useEffect, useRef, useState } from 'react'
import { useInView, useReducedMotion } from 'framer-motion'
import AnimatedSection from './AnimatedSection'

function CountUp({ target, duration = 2000 }: { target: number; duration?: number }) {
  const [count, setCount] = useState(0)
  const ref = useRef(null)
  const inView = useInView(ref, { once: true })
  const reduced = useReducedMotion()

  useEffect(() => {
    if (!inView) return

    if (reduced) {
      setCount(target)
      return
    }

    const start = Date.now()
    const step = () => {
      const elapsed = Date.now() - start
      const progress = Math.min(elapsed / duration, 1)
      // Ease out cubic
      const eased = 1 - Math.pow(1 - progress, 3)
      setCount(Math.floor(eased * target))
      if (progress < 1) requestAnimationFrame(step)
    }
    requestAnimationFrame(step)
  }, [inView, target, duration, reduced])

  return <span ref={ref}>{count.toLocaleString()}</span>
}

export default function ImpactStats() {
  return (
    <section
      id="impact"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-secondary)', color: '#fff' }}
    >
      <div className="max-w-4xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p className="text-sm tracking-[0.2em] uppercase mb-4 font-medium text-emerald-200">
            Charity Impact
          </p>
          <h2
            className="font-light mb-3 leading-none"
            style={{
              fontFamily: 'var(--font-display)',
              fontSize: 'clamp(4rem, 12vw, 8rem)',
              color: 'var(--color-primary-light)',
            }}
          >
            €<CountUp target={127000} />
          </h2>
          <p className="text-xl md:text-2xl font-light text-emerald-100 mb-12">
            raised for charity to date
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.2}>
          <div
            className="max-w-xl mx-auto rounded-xl p-8 text-left"
            style={{ backgroundColor: 'rgba(255,255,255,0.08)', border: '1px solid rgba(255,255,255,0.15)' }}
          >
            <svg
              className="w-8 h-8 mb-4 opacity-50"
              fill="currentColor"
              viewBox="0 0 24 24"
              aria-hidden="true"
              style={{ color: 'var(--color-primary-light)' }}
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote
              className="text-xl md:text-2xl font-light leading-relaxed text-white mb-4"
              style={{ fontFamily: 'var(--font-display)' }}
            >
              Thanks to the Troubadours we raised almost €6,000 for the Mater
              Foundation.
            </blockquote>
            <cite className="not-italic text-sm text-emerald-200 tracking-wide">
              — Angi McNulty, October 2023
            </cite>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
