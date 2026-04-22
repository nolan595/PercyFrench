import { Phone } from 'lucide-react'
import AnimatedSection from './AnimatedSection'

export default function Contact() {
  return (
    <section
      id="contact"
      className="py-20 md:py-28"
      style={{ backgroundColor: 'var(--color-background)' }}
    >
      <div className="max-w-2xl mx-auto px-6 text-center">
        <AnimatedSection>
          <p
            className="text-sm tracking-[0.2em] uppercase mb-3 font-medium"
            style={{ color: 'var(--color-primary)' }}
          >
            Book the Troubadours
          </p>
          <h2
            className="text-4xl md:text-5xl font-light mb-6 leading-snug"
            style={{ fontFamily: 'var(--font-display)', color: 'var(--color-foreground)' }}
          >
            We&apos;d be delighted to help raise funds for{' '}
            <em className="italic" style={{ color: 'var(--color-primary)' }}>your charity</em>
          </h2>
          <p className="text-base md:text-lg mb-12 leading-relaxed" style={{ color: 'var(--color-muted-foreground)' }}>
            Get in touch with Oliver to discuss booking the Troubadours for your charity event.
          </p>
        </AnimatedSection>

        <AnimatedSection delay={0.15}>
          <div
            className="inline-flex flex-col items-center gap-4 rounded-2xl px-10 py-8"
            style={{
              backgroundColor: 'var(--color-muted)',
              border: '1px solid var(--color-border)',
            }}
          >
            <p className="font-medium text-lg" style={{ color: 'var(--color-foreground)' }}>
              Oliver Beirne
            </p>
            <a
              href="tel:+353862454223"
              className="inline-flex items-center gap-3 rounded-xl px-6 py-3.5 text-white font-medium text-base transition-all duration-200 hover:opacity-90 hover:shadow-lg hover:-translate-y-px active:translate-y-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2"
              style={{
                backgroundColor: 'var(--color-primary)',
                outlineColor: 'var(--color-primary)',
              }}
            >
              <Phone className="w-4 h-4" aria-hidden="true" />
              (353) 86 245 4223
            </a>
          </div>
        </AnimatedSection>
      </div>
    </section>
  )
}
