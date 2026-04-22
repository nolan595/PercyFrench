import Image from 'next/image'
import AnimatedSection from './AnimatedSection'

export default function About() {
  return (
    <section id="about" className="py-20 md:py-28" style={{ backgroundColor: 'var(--color-background)' }}>
      <div className="max-w-5xl mx-auto px-6">
        <div className="flex flex-col md:flex-row items-center gap-12 md:gap-16">
          {/* Image */}
          <AnimatedSection className="flex-shrink-0" delay={0}>
            <div className="relative w-52 h-52 md:w-64 md:h-64">
              <Image
                src="/images/percy-circle.png"
                alt="Percy French — songwriter, entertainer and painter (1854–1920)"
                fill
                className="object-cover rounded-full shadow-xl"
                sizes="(max-width: 768px) 208px, 256px"
              />
              {/* Gold ring */}
              <div
                className="absolute inset-0 rounded-full"
                style={{
                  boxShadow: '0 0 0 3px #D4A947',
                }}
                aria-hidden="true"
              />
            </div>
          </AnimatedSection>

          {/* Text */}
          <div>
            <AnimatedSection delay={0.1}>
              <p
                className="text-sm tracking-[0.2em] uppercase mb-3 font-medium"
                style={{ color: 'var(--color-primary)' }}
              >
                About the Show
              </p>
              <h2
                className="text-4xl md:text-5xl font-light mb-6 leading-snug"
                style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
              >
                Music, laughter & <em className="italic" style={{ color: 'var(--color-primary)' }}>Irish spirit</em>
              </h2>
            </AnimatedSection>
            <AnimatedSection delay={0.2}>
              <p className="text-base md:text-lg leading-relaxed mb-4" style={{ color: 'var(--color-muted-foreground)' }}>
                The Percy French Troubadours are an Irish charity choir who bring to life the
                wonderful songs, poems and stories of Percy French — one of Ireland&apos;s best-loved
                entertainers, whose timeless songs like{' '}
                <em className="italic" style={{ fontFamily: 'var(--font-display)' }}>The Mountains of Mourne</em>{' '}
                and{' '}
                <em className="italic" style={{ fontFamily: 'var(--font-display)' }}>Come Back Paddy Reilly</em>{' '}
                have endured for over a century.
              </p>
              <p className="text-base md:text-lg leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
                Their two-hour show is a joyful, foot-tapping celebration of Irish heritage — and
                every performance raises money for worthy causes.
              </p>
            </AnimatedSection>
          </div>
        </div>
      </div>
    </section>
  )
}
