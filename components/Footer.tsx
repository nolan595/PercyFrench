import Image from 'next/image'

export default function Footer() {
  const year = new Date().getFullYear()
  const copyright = year > 2023 ? `2023–${year}` : '2023'

  return (
    <footer
      className="py-10 border-t"
      style={{ backgroundColor: 'var(--color-foreground)', borderColor: 'rgba(255,255,255,0.08)' }}
    >
      <div className="max-w-5xl mx-auto px-6 flex flex-col sm:flex-row items-center justify-between gap-4">
        <div className="flex items-center gap-3">
          <Image
            src="/images/decoration.png"
            alt=""
            width={28}
            height={28}
            aria-hidden="true"
            className="opacity-70"
          />
          <span
            className="text-base font-light"
            style={{ fontFamily: 'var(--font-display)', color: 'rgba(255,255,255,0.7)' }}
          >
            Percy French Troubadours
          </span>
        </div>
        <p className="text-sm" style={{ color: 'rgba(255,255,255,0.4)' }}>
          © {copyright} Percy French Troubadours. All rights reserved.
        </p>
      </div>
    </footer>
  )
}
