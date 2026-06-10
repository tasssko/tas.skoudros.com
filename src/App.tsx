import { ArrowDown, ArrowRight, Check, Contact, ExternalLink, Mail } from 'lucide-react'
import { reviewIncludes, site, situations, supportAreas } from './data/content'

const externalProps = { target: '_blank', rel: 'noreferrer' }

function App() {
  return (
    <div className="min-h-screen overflow-hidden bg-paper text-ink">
      <header className="absolute inset-x-0 top-0 z-20">
        <div className="page-shell flex h-20 items-center justify-between border-b border-ink/15">
          <a className="font-display text-xl font-semibold" href="#top" aria-label="Tas Skoudros, home">
            TS<span className="text-coral">.</span>
          </a>
          <nav className="hidden items-center gap-8 text-sm font-medium md:flex" aria-label="Main navigation">
            <a className="nav-link" href="#work">How I help</a>
            <a className="nav-link" href="#review">Clarity review</a>
            <a className="nav-link" href="#about">About</a>
            <a className="nav-link" href={site.links.substack} {...externalProps}>Writing</a>
          </nav>
          <a className="button button-small button-dark" href={site.links.book} {...externalProps}>
            Book a call <ArrowRight size={16} aria-hidden="true" />
          </a>
        </div>
      </header>

      <main>
        <section id="top" className="relative flex min-h-[760px] items-end pt-32 lg:min-h-screen">
          <div className="hero-grid" aria-hidden="true" />
          <div className="page-shell relative z-10 grid w-full gap-12 pb-14 pt-20 lg:grid-cols-[1fr_280px] lg:items-end lg:pb-20">
            <div>
              <p className="eyebrow mb-8">{site.name} · {site.role}</p>
              <h1 className="max-w-[1050px] font-display text-[clamp(3.5rem,8.2vw,8rem)] font-medium leading-[0.92]">
                Pragmatic technical leadership<span className="text-coral">,</span> when the decisions matter<span className="text-coral">.</span>
              </h1>
            </div>
            <div className="lg:pb-2">
              <p className="text-lg leading-8 text-muted">{site.description}</p>
              <div className="mt-8 flex flex-wrap gap-3">
                <a className="button button-primary" href={site.links.book} {...externalProps}>Book a call <ArrowRight size={18} /></a>
                <a className="button button-quiet" href={site.links.substack} {...externalProps}>Read my notes <ExternalLink size={17} /></a>
              </div>
            </div>
            <a className="hidden w-fit items-center gap-2 text-sm font-medium lg:flex" href="#work">
              <span className="flex size-9 items-center justify-center rounded-full border border-ink/25"><ArrowDown size={16} /></span>Explore
            </a>
            <p className="text-sm text-muted lg:justify-self-end">{site.location}</p>
          </div>
        </section>

        <section id="work" className="section-pad bg-ink text-paper">
          <div className="page-shell">
            <div className="section-heading">
              <p className="eyebrow text-paper/55">What I help with</p>
              <h2 className="font-display text-4xl leading-tight sm:text-6xl">Clear thinking across the whole technology function.</h2>
            </div>
            <div className="mt-16 grid border-y border-paper/20 sm:grid-cols-2 lg:grid-cols-4">
              {site.expertise.map((item, index) => (
                <div className="expertise-item" key={item}>
                  <span className="mb-12 block font-mono text-xs text-coral">0{index + 1}</span>
                  <p className="text-lg font-medium">{item}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-shell">
            <div className="section-heading">
              <p className="eyebrow">Common situations</p>
              <h2 className="font-display text-4xl leading-tight sm:text-6xl">You do not need more noise. You need a useful next move.</h2>
            </div>
            <div className="mt-14 border-t border-ink/20">
              {situations.map((situation) => (
                <article className="situation-row" key={situation.number}>
                  <span className="font-mono text-xs text-coral">{situation.number}</span>
                  <h3 className="font-display text-2xl leading-snug sm:text-3xl">{situation.title}</h3>
                  <p className="max-w-md leading-7 text-muted">{situation.description}</p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="review" className="section-pad bg-moss text-paper">
          <div className="page-shell grid gap-14 lg:grid-cols-[0.8fr_1.2fr] lg:gap-24">
            <div>
              <p className="eyebrow mb-8 text-paper/60">A focused starting point</p>
              <p className="font-mono text-xs uppercase text-sun">CTO Clarity Review</p>
              <h2 className="mt-4 font-display text-5xl leading-none sm:text-7xl">Get unstuck in weeks, not quarters.</h2>
            </div>
            <div className="lg:pt-12">
              <p className="max-w-2xl text-xl leading-8 text-paper/80">A short, independent review of your technology, team, and delivery. It gives you an honest picture of where you are, what is getting in the way, and what to do next.</p>
              <ul className="my-10 border-y border-paper/25 py-4">
                {reviewIncludes.map((item) => (
                  <li className="flex items-center gap-3 border-b border-paper/15 py-4 last:border-0" key={item}>
                    <Check className="shrink-0 text-sun" size={18} /><span>{item}</span>
                  </li>
                ))}
              </ul>
              <a className="button bg-sun text-ink hover:bg-paper" href={site.links.book} {...externalProps}>Discuss a clarity review <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-shell grid gap-12 lg:grid-cols-2 lg:gap-24">
            <div>
              <p className="eyebrow mb-8">Ongoing support</p>
              <h2 className="font-display text-4xl leading-tight sm:text-6xl">A senior technology partner, without the full-time hire.</h2>
            </div>
            <div className="lg:pt-14">
              <p className="text-lg leading-8 text-muted">For teams that need consistent leadership, I work alongside founders and executives as a fractional CTO: part of the leadership team, accountable for progress, and close enough to the work to be useful.</p>
              <ul className="mt-9 border-t border-ink/20">
                {supportAreas.map((item) => <li className="flex gap-3 border-b border-ink/15 py-4" key={item}><ArrowRight className="mt-0.5 shrink-0 text-coral" size={18} />{item}</li>)}
              </ul>
            </div>
          </div>
        </section>

        <section id="about" className="border-y border-ink/15 bg-white">
          <div className="page-shell grid lg:grid-cols-[0.72fr_1.28fr]">
            <div className="portrait-panel min-h-[420px] lg:min-h-[680px]">
              <div className="portrait-mark" aria-hidden="true">TS</div>
              <p className="absolute bottom-8 left-8 font-mono text-xs uppercase text-paper/65">Technology · People · Delivery</p>
            </div>
            <div className="flex items-center py-16 lg:px-20 lg:py-24">
              <div className="max-w-2xl">
                <p className="eyebrow mb-8">About Tas</p>
                <h2 className="font-display text-4xl leading-tight sm:text-6xl">Technology should create leverage, not anxiety.</h2>
                <div className="mt-9 space-y-5 text-lg leading-8 text-muted">
                  <p>I work with ambitious founders and leadership teams who need experienced technical judgment, but not another layer of management.</p>
                  <p>My approach is practical and direct. I connect technology decisions to business outcomes, make risk visible, and help teams build the confidence and operating rhythm to deliver.</p>
                </div>
                <a className="mt-10 inline-flex items-center gap-2 font-semibold underline decoration-coral decoration-2 underline-offset-8" href={site.links.linkedin} {...externalProps}>Connect on LinkedIn <Contact size={18} /></a>
              </div>
            </div>
          </div>
        </section>

        <section className="section-pad">
          <div className="page-shell grid items-end gap-10 lg:grid-cols-[1.1fr_0.9fr]">
            <div>
              <p className="eyebrow mb-8">Notes from the field</p>
              <h2 className="max-w-4xl font-display text-4xl leading-tight sm:text-6xl">Clear notes on technology, leadership, and building resilient teams.</h2>
            </div>
            <div className="lg:justify-self-end">
              <p className="mb-6 max-w-md leading-7 text-muted">Occasional writing for founders and technology leaders. Useful ideas, no content treadmill.</p>
              <a className="button button-dark" href={site.links.substack} {...externalProps}>Read at notes.skoudros.com <ExternalLink size={17} /></a>
            </div>
          </div>
        </section>

        <section className="bg-coral py-20 text-ink sm:py-28">
          <div className="page-shell">
            <p className="eyebrow mb-8">Start a conversation</p>
            <div className="grid items-end gap-10 lg:grid-cols-[1fr_auto]">
              <h2 className="max-w-5xl font-display text-5xl leading-[0.98] sm:text-7xl lg:text-8xl">Let’s make the next technical decision a good one.</h2>
              <a className="button button-dark shrink-0" href={site.links.book} {...externalProps}>Book a call <ArrowRight size={18} /></a>
            </div>
          </div>
        </section>
      </main>

      <footer className="bg-ink py-10 text-paper">
        <div className="page-shell flex flex-col gap-6 text-sm sm:flex-row sm:items-center sm:justify-between">
          <p className="font-display text-xl">{site.name}<span className="text-coral">.</span></p>
          <div className="flex flex-wrap gap-6 text-paper/65">
            <a className="footer-link" href={`mailto:${site.email}`}><Mail size={15} /> Email</a>
            <a className="footer-link" href={site.links.linkedin} {...externalProps}><Contact size={15} /> LinkedIn</a>
            <a className="footer-link" href={site.links.substack} {...externalProps}>Writing</a>
          </div>
          <p className="text-paper/45">© {new Date().getFullYear()} Tas Skoudros</p>
        </div>
      </footer>
    </div>
  )
}

export default App
