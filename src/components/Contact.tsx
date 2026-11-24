import { useState } from 'react';
import { Mail, Phone, MapPin, Send, Star } from 'lucide-react';
import { useReveal } from '../hooks/useReveal';
import { GithubIcon, LinkedinIcon } from './BrandIcons';

const FORMSPREE_ENDPOINT = 'https://formspree.io/f/xaeolzza';

export default function Contact() {
  const { ref, visible } = useReveal<HTMLDivElement>();
  const [submitted, setSubmitted] = useState(false);
  const [error, setError] = useState(false);
  const [sending, setSending] = useState(false);

  const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    setSending(true);
    setError(false);

    const form = e.currentTarget;
    const data = new FormData(form);

    try {
      const response = await fetch(FORMSPREE_ENDPOINT, {
        method: 'POST',
        body: data,
        headers: { Accept: 'application/json' },
      });

      if (response.ok) {
        setSubmitted(true);
        form.reset();
      } else {
        setError(true);
      }
    } catch {
      setError(true);
    } finally {
      setSending(false);
    }
  };

  return (
    <section id="contact" className="py-24 md:py-32 bg-[var(--color-cloud)]">
      <div
        ref={ref}
        className={`max-w-6xl mx-auto px-6 lg:px-10 grid lg:grid-cols-5 gap-12 ${
          visible ? 'fade-up' : 'opacity-0'
        }`}
      >
        <div className="lg:col-span-2">
          <p className="eyebrow gradient-text mb-4">Contact</p>
          <h2 className="font-[var(--font-display)] font-bold text-3xl sm:text-4xl text-[var(--color-ink)] leading-tight">
            Let's build something great
          </h2>
          <p className="mt-5 text-[var(--color-ink-soft)] leading-relaxed">
            Have a project, opportunity, or idea you'd like to discuss? Let's connect.
          </p>

          <div className="mt-10 space-y-4">
            <p className="font-[var(--font-display)] font-semibold text-[var(--color-ink)]">
              Asiphe Khuboni
            </p>
            <p className="text-sm text-[var(--color-ink-soft)]">
              Software Developer | Application Developer
            </p>

            <div className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]">
              <MapPin size={16} className="text-[var(--color-pink)] shrink-0" />
              KwaZulu-Natal, South Africa
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]">
              <Mail size={16} className="text-[var(--color-pink)] shrink-0" />
              <a
                href="mailto:Asiphekhuboni@gmail.com"
                className="hover:underline hover:text-[var(--color-ink)] transition-colors"
              >
                Asiphekhuboni@gmail.com
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]">
              <Phone size={16} className="text-[var(--color-pink)] shrink-0" />
              <a
                href="tel:+27641447365"
                className="hover:underline hover:text-[var(--color-ink)] transition-colors"
              >
                +27 64 144 7365
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]">
              <Star size={16} className="text-[var(--color-pink)] shrink-0" />
              19 April 2002, Female
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]">
              <LinkedinIcon size={16} className="text-[var(--color-pink)] shrink-0" />
              <a
                href="https://linkedin.com/in/asiphe-khuboni-6312121a3"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[var(--color-ink)] transition-colors"
              >
                linkedin.com/in/asiphe-khuboni
              </a>
            </div>
            <div className="flex items-center gap-3 text-sm text-[var(--color-ink-soft)]">
              <GithubIcon size={16} className="text-[var(--color-pink)] shrink-0" />
              <a
                href="https://github.com/asiphek"
                target="_blank"
                rel="noopener noreferrer"
                className="hover:underline hover:text-[var(--color-ink)] transition-colors"
              >
                https://github.com/asiphek
              </a>
            </div>
          </div>
        </div>

        <div className="lg:col-span-3">
          <form onSubmit={handleSubmit} className="glass-card gradient-border rounded-3xl p-8 md:p-10 space-y-5">
            <div className="grid sm:grid-cols-2 gap-5">
              <div>
                <label htmlFor="name" className="eyebrow text-[var(--color-ink-soft)] block mb-2">
                  Name
                </label>
                <input
                  id="name"
                  name="name"
                  type="text"
                  required
                  className="w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] focus:border-[var(--color-pink)] outline-none transition-colors"
                  placeholder="Your name"
                />
              </div>
              <div>
                <label htmlFor="email" className="eyebrow text-[var(--color-ink-soft)] block mb-2">
                  Email
                </label>
                <input
                  id="email"
                  name="email"
                  type="email"
                  required
                  className="w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] focus:border-[var(--color-pink)] outline-none transition-colors"
                  placeholder="you@example.com"
                />
              </div>
            </div>

            <div>
              <label htmlFor="subject" className="eyebrow text-[var(--color-ink-soft)] block mb-2">
                Subject
              </label>
              <input
                id="subject"
                name="subject"
                type="text"
                required
                className="w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] focus:border-[var(--color-pink)] outline-none transition-colors"
                placeholder="What's this about?"
              />
            </div>

            <div>
              <label htmlFor="message" className="eyebrow text-[var(--color-ink-soft)] block mb-2">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                required
                rows={5}
                className="w-full rounded-xl border border-[var(--color-line)] bg-white px-4 py-3 text-sm text-[var(--color-ink)] focus:border-[var(--color-pink)] outline-none transition-colors resize-none"
                placeholder="Tell me a little about your project or opportunity..."
              />
            </div>

            <button
              type="submit"
              disabled={sending}
              className="w-full sm:w-auto inline-flex items-center justify-center gap-2 gradient-bg text-white font-[var(--font-display)] font-semibold px-8 py-3.5 rounded-full shadow-[0_12px_30px_-10px_rgba(240,25,122,0.55)] hover:shadow-[0_16px_36px_-8px_rgba(240,25,122,0.65)] hover:-translate-y-0.5 transition-all duration-300 disabled:opacity-60 disabled:cursor-not-allowed disabled:hover:translate-y-0"
            >
              <Send size={17} />
              {sending ? 'Sending...' : 'Send Message'}
            </button>

            {submitted && (
              <p className="text-sm text-emerald-600 font-medium">
                Thanks for reaching out — your message has been sent successfully.
              </p>
            )}

            {error && (
              <p className="text-sm text-red-600 font-medium">
                Something went wrong while sending your message. Please try again or email me
                directly at Asiphekhuboni@gmail.com.
              </p>
            )}
          </form>
        </div>
      </div>
    </section>
  );
}