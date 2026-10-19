import { ArrowUpRight, Check } from "lucide-react";

const WHATSAPP_COMMUNITY_URL =
  "https://chat.whatsapp.com/CnEffGahKia2F0Y2F2mE6i?mode=gi_t";

export default function Community() {
  return (
    <main className="jm-community">
      <header className="jm-community__header">
        <a className="jm-community__wordmark" href="/" aria-label="Just Minimal">
          <span>JUST</span>
          <small>MINIMAL</small>
        </a>
        <span className="jm-community__header-label">OFFICIAL COMMUNITY</span>
      </header>

      <section className="jm-community__main">
        <div className="jm-community__invite">
          <span className="jm-community__live-dot" />
          YOU’RE INVITED
        </div>

        <div className="jm-community__logo" aria-label="Just Minimal">
          <span className="jm-community__logo-just">JUST</span>
          <span className="jm-community__logo-minimal">MINIMAL</span>
          <span className="jm-community__logo-rule" />
        </div>

        <p className="jm-community__eyebrow">MORE THAN WHAT YOU WEAR.</p>
        <h1 className="jm-community__headline">
          Be part of
          <br />
          <span>what’s next.</span>
        </h1>
        <p className="jm-community__offer">
          Get early access when our store opens
          <br className="jm-community__desktop-break" /> + <strong>10% off</strong> all products.
        </p>

        <a
          className="jm-community__button"
          href={WHATSAPP_COMMUNITY_URL}
          target="_blank"
          rel="noopener noreferrer"
        >
          <svg aria-hidden="true" viewBox="0 0 24 24" fill="none">
            <path d="M20.1 11.8a8.1 8.1 0 0 1-12 7.1L4 20l1.1-4a8.1 8.1 0 1 1 15-4.2Z" stroke="currentColor" strokeWidth="1.7" strokeLinejoin="round" />
            <path d="M8.6 8.2c.2-.4.4-.4.7-.4h.4c.2 0 .3.1.4.4l.7 1.6c.1.2 0 .4-.1.6l-.5.6c-.2.2-.2.4 0 .6.5.9 1.2 1.6 2.1 2.1.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.5.7c.3.1.4.3.3.6-.1.5-.4 1.1-.9 1.4-.5.4-1.1.5-1.8.3-1-.2-2.3-.9-3.4-1.9-1.2-1.1-2-2.5-2.2-3.4-.2-.7 0-1.3.4-1.8.2-.2.4-.4.5-.4Z" fill="currentColor" />
          </svg>
          <span>JOIN THE COMMUNITY</span>
          <ArrowUpRight size={18} strokeWidth={1.8} aria-hidden="true" />
        </a>

        <p className="jm-community__reassurance">
          <Check size={13} strokeWidth={2} aria-hidden="true" />
          Exclusive access. Special offers. Your place in the movement.
        </p>
      </section>

      <footer className="jm-community__footer">
        <p className="jm-community__description">
          <strong>JUST MINIMAL COMMUNITY</strong> — criada para todos aqueles que
          acreditam e querem fazer parte daquilo que estamos a construir, tendo
          acesso antecipado a novos lançamentos, informações exclusivas,
          descontos e muito mais.
        </p>
        <div className="jm-community__footer-bottom">
          <span>WEAR LESS. MEAN MORE.</span>
          <span>© JUST MINIMAL</span>
        </div>
      </footer>
    </main>
  );
}
