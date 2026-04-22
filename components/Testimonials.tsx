'use client'

import { Star, Quote } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

const reviews = [
  {
    text: 'An unforgettable show with thrilling music and a lively, fun-filled atmosphere — definitely a night to remember!',
    author: 'Stephanie Mangan',
  },
  {
    text: "We were completely hooked, singing along with the Troubadours' every song, from beginning to end.",
    author: 'Philippa O\'Shea',
  },
  {
    text: 'The show was a blast — totally engaging from the get-go, we loved every second!',
    author: 'Kathryn Nolan',
  },
  {
    text: 'These guys should be on Broadway!',
    author: 'Jim Deignan',
  },
]

function StarRating() {
  return (
    <div className="flex gap-1" aria-label="5 out of 5 stars">
      {Array.from({ length: 5 }).map((_, i) => (
        <Star
          key={i}
          className="w-4 h-4 fill-current"
          style={{ color: 'var(--color-primary-light)' }}
          aria-hidden="true"
        />
      ))}
    </div>
  )
}

export default function Testimonials() {
  return (
    <section
      id="reviews"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-muted)' }}
    >
      <div className="max-w-5xl mx-auto px-6">
        <AnimatedSection className="text-center mb-14">
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3 font-medium"
            style={{ color: 'var(--color-primary)' }}
          >
            Audience Reviews
          </p>
          <h2
            className="text-4xl md:text-5xl font-light"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
          >
            What audiences are saying
          </h2>
        </AnimatedSection>

        {/* Desktop grid */}
        <div
          className="hidden sm:grid grid-cols-2 gap-6"
          style={{ gridAutoRows: '1fr' }}
          role="list"
          aria-label="Audience reviews"
        >
          {reviews.map((review, i) => (
            <AnimatedSection key={review.author} delay={i * 0.1} className="h-full">
              <div
                role="listitem"
                className="h-full rounded-xl p-8 flex flex-col gap-4 hover:shadow-lg transition-all duration-200 hover:-translate-y-0.5"
                style={{
                  backgroundColor: 'var(--color-card)',
                  border: '1px solid var(--color-border)',
                  boxShadow: '0 2px 12px rgba(28,25,23,0.06)',
                }}
              >
                <Quote
                  className="w-7 h-7"
                  style={{ color: 'var(--color-primary)' }}
                  aria-hidden="true"
                />
                <p
                  className="text-lg md:text-xl font-light leading-relaxed flex-1"
                  style={{
                    fontFamily: 'var(--font-display)',
                    fontStyle: 'italic',
                    color: 'var(--color-foreground)',
                  }}
                >
                  {review.text}
                </p>
                <div className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                  <StarRating />
                  <p className="text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>
                    {review.author}
                  </p>
                </div>
              </div>
            </AnimatedSection>
          ))}
        </div>

        {/* Mobile scroll carousel */}
        <div
          className="sm:hidden flex gap-4 overflow-x-auto snap-x snap-mandatory pb-4 -mx-6 px-6"
          role="list"
          aria-label="Audience reviews"
          style={{ scrollbarWidth: 'none' }}
        >
          {reviews.map((review) => (
            <div
              key={review.author}
              role="listitem"
              className="flex-none w-[82vw] snap-center rounded-xl p-7 flex flex-col gap-4"
              style={{
                backgroundColor: 'var(--color-card)',
                border: '1px solid var(--color-border)',
                boxShadow: '0 2px 12px rgba(28,25,23,0.06)',
              }}
            >
              <Quote
                className="w-6 h-6"
                style={{ color: 'var(--color-primary)' }}
                aria-hidden="true"
              />
              <p
                className="text-lg font-light leading-relaxed flex-1"
                style={{
                  fontFamily: 'var(--font-display)',
                  fontStyle: 'italic',
                  color: 'var(--color-foreground)',
                }}
              >
                {review.text}
              </p>
              <div className="flex flex-col gap-2 pt-2 border-t" style={{ borderColor: 'var(--color-border)' }}>
                <StarRating />
                <p className="text-sm font-medium" style={{ color: 'var(--color-muted-foreground)' }}>
                  {review.author}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  )
}
