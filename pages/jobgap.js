/* eslint-disable react/no-unescaped-entities */
import { GradientTxt } from "../component";
import { Arrow, CupPin } from "../asset/convertedSvgs";
import Container from "../StyleComponents/jobgap";
import Image from "next/image";

// ── Image paths (served from public/jobgap — avoids Squoosh WASM at build time)
const CompRestore1 = "/jobgap/Screenshot-2026-03-16-07.43.53-1.webp";
const CompRestore2 = "/jobgap/Screenshot-2026-03-16-07.43.53-2.webp";
const CompPredict  = "/jobgap/Screenshot-2026-03-16-07.44.55-1.webp";
const CompCoinSnap = "/jobgap/Screenshot-2026-03-16-07.44.55-2.webp";

const Form7Step       = "/jobgap/Screenshot-2026-03-16-07.37.20-1.webp";
const OnboardBlacklist = "/jobgap/Screenshot-2026-04-27-20.45.15.webp";
const OnboardJobTitles = "/jobgap/Screenshot-2026-04-27-20.45.29.webp";

const FreeDashboard  = "/jobgap/Screenshot-2026-03-16-08.00.23-1.webp";
const PaidDashV1     = "/jobgap/Screenshot-2026-03-16-07.52.20-1.webp";
const PaidDashV2     = "/jobgap/Screenshot-2026-03-16-07.52.20-1-1.webp";
const PaidDashClean  = "/jobgap/Screenshot-2026-03-16-08.01.23-1.webp";
const AppTransparency = "/jobgap/Screenshot-2026-03-16-08.51.49-1.webp";

const PricingCard  = "/jobgap/Screenshot-2026-03-16-08.07.40-1.webp";
const LandingFinal = "/jobgap/Screenshot-2026-03-16-08.29.19-1.webp";
const LandingEarly = "/jobgap/Screenshot-2026-03-16-08.30.21-1.webp";

const HotjarDash = "/jobgap/Screenshot-2026-03-16-08.55.58-1.webp";

const EmailOpen  = "/jobgap/PHOTO-2025-07-31-09-39-30-1.webp";
const EmailBody  = "/jobgap/PHOTO-2025-07-31-09-41-07-1.webp";
const EmailClose = "/jobgap/PHOTO-2025-07-31-09-41-08-1.webp";

export default function JobGap() {
  return (
    <Container>
      {/* ─── HERO ─────────────────────────────────────────── */}
      <section className="jumbotron--item">
        <h1>
          Turning a struggling job-seeker toolkit into an automated AI-powered
          application engine
        </h1>
        <div className="item-row">
          <div>
            <h3 className="about">
              JobGap started as an all-in-one hub — a job board, AI résumé
              reviewer, and applications CRM. We acquired 5,000 users, but
              engagement and monetization struggled. Qualitative discovery
              through customer conversations revealed the real pain: users
              didn't need more CV tips, they lacked the time to apply. I led the
              full product redesign that turned it into an autonomous AI
              application engine — optimising the acquisition funnel for
              £50,000 in monthly revenue.
            </h3>
            <button>
              <GradientTxt>
                <a href="https://jobgap.io/" target="_blank" rel="noreferrer">
                  Visit JobGap
                </a>
              </GradientTxt>
              <Arrow direction="right" />
            </button>
          </div>
          <ol className="details">
            <li>
              <span>Client</span>
              <span>JOBGAP AI</span>
            </li>
            <li>
              <span>Role</span>
              <span>
                Growth Product Designer — UX Strategy, Behavioural Analytics,
                Conversion Optimisation, Prototyping
              </span>
            </li>
            <li>
              <span>Tools</span>
              <span>Figma · Hotjar · Mixpanel · Jitter</span>
            </li>
          </ol>
        </div>
      </section>

      {/* ─── CONTEXT ─────────────────────────────────────── */}
      <section className="section-context">
        <h1>
          <GradientTxt>Context &amp; the Pivot</GradientTxt>
        </h1>
        <div className="row">
          <div className="col-1">
            <p>
              The original JobGap product was comprehensive on paper: a job
              board, AI résumé reviewer, interview prep, and application
              tracker. The problem was that the internet had already solved
              every one of those problems individually. Users signed up, looked
              around, and left.
            </p>
            <p>
              We briefly pivoted to connecting candidates with Virtual
              Assistants who applied on their behalf. Traction was promising
              but the model wasn't scalable. The 2023 AI boom gave us one shot
              to automate what humans were doing manually. We rebuilt the entire
              product around a centralised job application engine: users set
              their preferences once — job title, location, salary, visa
              requirements — and the AI found matching roles, tailored a CV for
              each one, completed the application form, and submitted it.
            </p>
          </div>
          <div className="col-2">
            <div className="stat-block">
              <span className="stat-number">5,000</span>
              <p>users acquired before the rebuild — with near-zero retention</p>
            </div>
            <div className="stat-block">
              <span className="stat-number">35k+</span>
              <p>automated job applications delivered per paying user, monthly</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE 1 — ONBOARDING ─────────────────────────── */}
      <section className="section-case">
        <div className="case-label">Case 01</div>
        <h1>
          <GradientTxt>The Onboarding Problem</GradientTxt>
        </h1>

        {/* GRAVEYARD */}
        <div className="graveyard-block">
          <h2 className="graveyard-title">What existed before — and why it failed</h2>
          <p>
            I started with what felt like the right instinct: a comprehensive
            7-step onboarding form. The form covered visa status, work
            arrangement preferences, salary expectations, preferred industries,
            location, and company size — everything the AI needed to do its job
            well. Completeness seemed logical. The data requirement was real.
          </p>

          {/* 7-step form evidence */}
          <div className="img-single img-shadow">
            <Image
              src={Form7Step}
              alt="Original 7-step onboarding form — step 2 of 7 showing work & career preferences"
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
            <p className="img-caption">Original 7-step onboarding — step 2/7. Hotjar recordings showed steep drop-off from this point.</p>
          </div>

          <p>
            Behavioural data analysis via Hotjar session recordings told a
            brutal story: most users clicked through step one with enthusiasm,
            slowed at step two, and abandoned entirely around step four. The
            users who did push through all seven steps almost always converted
            to paid — the problem was pressing enough for them that they
            powered through. But they were a tiny fraction of everyone who
            started.
          </p>

          {/* Hotjar evidence */}
          <div className="img-single img-shadow">
            <Image
              src={HotjarDash}
              alt="Hotjar session analytics showing 831 sessions, 18:27 avg duration — behavioural data analysis"
              width={1200}
              height={800}
              style={{ width: "100%", height: "auto" }}
            />
            <p className="img-caption">Hotjar behavioural data analysis: 831 sessions, 18:27 avg. session duration. Top-clicked CTA was "Sign In" — users were returning, not converting.</p>
          </div>

          <p>
            My first hypothesis was that the form was simply too long. I cut it
            to 3 steps. Drop-off reduced but persisted. User interviews then
            surfaced a sequencing problem rather than a length problem: I had
            been asking for sensitive data — visa type, work authorisation —
            before showing a single piece of product value. We had the sequence
            completely backwards.
          </p>

          <div className="experiment-grid">
            <div className="experiment-item bad">
              <span className="experiment-label">❌ Experiment 1: 7-Step Form</span>
              <p>Complete upfront data collection. Near-total abandonment at step 4.</p>
            </div>
            <div className="experiment-item warning">
              <span className="experiment-label">⚠️ Experiment 2: Cut to 3 Steps</span>
              <p>Drop-off reduced but persisted. User interviews revealed it wasn't length — it was sequence.</p>
            </div>
            <div className="experiment-item good">
              <span className="experiment-label">✓ Experiment 3: Value-First Flow</span>
              <p>Show product output before the paywall. Single-screen completion. Conversions improved immediately.</p>
            </div>
          </div>
        </div>

        {/* COMPETITIVE RESEARCH */}
        <div className="comp-research-block">
          <h2>Competitive Research — Activation Patterns That Worked</h2>
          <p>
            To find the right onboarding model, I ran a competitive audit of
            high-converting mobile apps using a value-first activation pattern.
            Two clear patterns emerged: show a personalised output immediately,
            and defer the payment ask until after the "aha moment."
          </p>
          <div className="comp-grid">
            <div className="comp-item">
              <div className="comp-img">
                <Image src={CompRestore1} alt="Restore fitness app — paywall after personalised value" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
              </div>
              <p className="comp-label">Restore — paywall deferred until after personalised value is shown</p>
            </div>
            <div className="comp-item">
              <div className="comp-img">
                <Image src={CompRestore2} alt="Restore fitness app — onboarding screen" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
              </div>
              <p className="comp-label">Restore — progressive data collection, minimal friction per step</p>
            </div>
            <div className="comp-item">
              <div className="comp-img comp-img--mobile">
                <Image src={CompPredict} alt="Fitness app personalised prediction screen — 'We predict you'll be 50.2kg by September 4'" width={800} height={1200} style={{ width: "100%", height: "auto" }} />
              </div>
              <p className="comp-label">Value-first prediction: personalised output shown before any payment ask</p>
            </div>
            <div className="comp-item">
              <div className="comp-img comp-img--mobile">
                <Image src={CompCoinSnap} alt="CoinSnap app home screen — value demonstrated immediately" width={800} height={1200} style={{ width: "100%", height: "auto" }} />
              </div>
              <p className="comp-label">CoinSnap — core value (identify + grade) surface-level from home screen</p>
            </div>
          </div>
        </div>

        {/* SOLUTION */}
        <div className="solution-block">
          <h2>Re-engineering the Form — Value-First Onboarding</h2>
          <p>
            I studied the onboarding flows of high-converting mobile apps and
            identified two principles that changed everything: collect the
            absolute minimum upfront, and show value before asking for anything
            sensitive. I had been doing the opposite — presenting a paywall at
            the end of a data collection exercise, asking users who had given
            everything and received nothing to now hand over their credit card.
          </p>

          <div className="aha-block">
            <h3>The "Aha Moment" — Activation Metric Optimisation</h3>
            <p>
              Once users experienced the product before the paywall, the
              conversion ask finally had context behind it. The redesigned
              flow: user completes one minimal page → app hits the API → pulls
              real matching job listings → generates a tailored CV for one of
              those roles on screen, in real time. Not a demo video. Not a
              marketing mockup. Their actual data, processed instantly,
              producing a real output in under a minute. Only after that moment
              did we present the paywall with a visible option to skip to the
              free tier.
            </p>
          </div>

          <div className="fixes-grid">
            <h3>Incremental fixes surfaced through ongoing behavioural data analysis:</h3>
            {/* Onboarding field screenshots */}
            <div className="img-pair">
              <div className="img-pair__item img-shadow">
                <Image src={OnboardJobTitles} alt="Onboarding job titles field — open text input replacing dropdowns" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
                <p className="img-caption">Open-text job title field replacing dropdowns — support tickets about missing titles stopped immediately.</p>
              </div>
              <div className="img-pair__item img-shadow">
                <Image src={OnboardBlacklist} alt="Onboarding company and industry exclusion (blacklist) feature" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
                <p className="img-caption">Company & industry exclusion list — users could tell the AI which employers to avoid. This single feature visibly increased trust.</p>
              </div>
            </div>
            <ul>
              <li>
                Dropdown menus for job titles replaced with open text fields —
                support tickets about missing job titles stopped the same week
              </li>
              <li>
                Country selector expanded to city-level — users targeting
                specific metro areas could finally set that
              </li>
              <li>
                Company &amp; Industry exclusion list added — users told the AI
                which employers to avoid based on past experience. This one
                feature alone visibly increased trust during onboarding
              </li>
              <li>Multi-country + multi-city support: select Canada, then specify Toronto or Vancouver</li>
            </ul>
          </div>
        </div>
      </section>

      {/* ─── CASE 2 — CONVERSION ENGINE ─────────────────── */}
      <section className="section-case section-case--alt">
        <div className="case-label">Case 02</div>
        <h1>
          <GradientTxt>The Conversion Engine</GradientTxt>
        </h1>

        <div className="two-dashboards">
          <h2>Two Dashboards. Two Jobs to Be Done.</h2>
          <p>
            Applying jobs-to-be-done to information architecture revealed that
            free users and paid users had fundamentally different needs — not
            just different features. Free users needed to <em>want</em> the
            product. Paid users needed to <em>trust</em> it. I designed each
            dashboard for exactly that outcome.
          </p>
          <div className="dashboard-grid">
            <div className="dashboard-card">
              <h3>Free Dashboard</h3>
              <p>
                Its purpose was to show value and encourage upgrades. A free CV
                ATS analysis was included to create desire: <em>"if this is free,
                what's paid like?"</em> Matched jobs were visible but locked,
                with an unavoidable upgrade prompt: "Get 200+ applications
                submitted automatically on your behalf."
              </p>
              <div className="dashboard-img img-shadow">
                <Image src={FreeDashboard} alt="Free dashboard — locked job previews and upgrade prompt" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
            <div className="dashboard-card dashboard-card--paid">
              <h3>Paid Dashboard</h3>
              <p>
                Served as a live command centre, visibly tracking applications
                through a pipeline: Found → Tailoring CV → Submitting →
                Submitted. Crucially, users could open any application to see
                the exact CV, cover letter, and AI-written form answers used.
                This deliberate transparency was essential for retaining users
                who entrusted the platform with their job search.
              </p>
              <div className="dashboard-img img-shadow">
                <Image src={PaidDashV2} alt="Paid dashboard — applications submitted, target roles, target salary" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
              </div>
            </div>
          </div>

          {/* Dashboard evolution */}
          <div className="dashboard-evolution">
            <h3>Dashboard Evolution</h3>
            <p>The paid dashboard was iterated across multiple cycles based on user feedback and session data.</p>
            <div className="evolution-row">
              <div className="evolution-item">
                <div className="img-shadow">
                  <Image src={PaidDashV1} alt="Paid dashboard v1 — early version" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
                </div>
                <span className="evo-label">v1 — Early dashboard (missing target salary, no nav avatars)</span>
              </div>
              <div className="evolution-item">
                <div className="img-shadow">
                  <Image src={PaidDashClean} alt="Paid dashboard — clean view without sidebar" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
                </div>
                <span className="evo-label">v2 — Cleaner layout, sidebar collapsed for focus</span>
              </div>
              <div className="evolution-item">
                <div className="img-shadow">
                  <Image src={PaidDashV2} alt="Paid dashboard v3 — target salary added, nav avatar" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
                </div>
                <span className="evo-label">v3 — Final: target salary surfaced, profile avatar added</span>
              </div>
            </div>
          </div>

          {/* Application transparency */}
          <div className="transparency-block">
            <h3>Transparency as a Retention Tool</h3>
            <p>Paid users could open any submitted application and see exactly what the AI filled in — CV, cover letter, personal information, and form answers. This visibility was critical to trust.</p>
            <div className="img-single img-shadow">
              <Image src={AppTransparency} alt="Application detail view — showing exactly how JobgapAI filled in personal info, work info and CV for each role" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
              <p className="img-caption">Application detail view: full transparency into every field the AI submitted — personal info, work authorisation, salary expectation, CV and cover letter.</p>
            </div>
          </div>
        </div>

        <div className="pricing-block">
          <h2>The Business Model Shift</h2>
          <p>
            Subscriptions weren't converting. I recommended the pricing model
            shift based on financial risk patterns I was seeing in user
            interviews — job seekers were financially stressed, making a
            recurring monthly charge feel like a risk they couldn't absorb. We
            moved on it the same week. Switching to a one-time payment,
            explicitly stated in the hero section, immediately boosted
            conversions by removing a previously unnamed objection.
          </p>

          <div className="pricing-result-row">
            <div className="pricing-result-item">
              <span className="tag tag--bad">Before</span>
              <p>Subscription → consistent resistance, low conversion</p>
            </div>
            <div className="pricing-result-item">
              <span className="tag tag--good">After</span>
              <p>One-time payment stated upfront → immediate spike in signups and paid conversions the same day it launched</p>
            </div>
            <div className="pricing-result-item">
              <span className="tag tag--neutral">Later</span>
              <p>Instalment option added → unlocked a segment that wanted the product but couldn't commit to a lump sum</p>
            </div>
          </div>

          {/* Pricing card screenshot */}
          <div className="img-single img-shadow img-narrow">
            <Image src={PricingCard} alt="Professional plan pricing card — $469 one-time, $0.72/job, Afterpay and Klarna instalments" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
            <p className="img-caption">Final pricing card: $469 one-time, instalment options via Afterpay & Klarna. "One-time payment. No subscription." stated prominently.</p>
          </div>
        </div>

        <div className="landing-block">
          <h2>Landing Page — The 80% Rule</h2>
          <p>
            Behavioural data analysis showed 80% of ad traffic never scrolled
            past the hero. I had been optimising the wrong part of the page.
            Realising most visitors decided on the first screen, I shifted all
            investment from below the fold to the hero section. I rewrote the
            hero three times before it was effective — early, feature-focused
            copy performed poorly. The breakthrough came from accepting the
            uncomfortable truth: users prioritise what the product does for
            them, not what it does.
          </p>
          <div className="copy-comparison">
            <div className="copy-item copy-item--before">
              <span className="copy-label">Before</span>
              <h3>"AI-powered job applications"</h3>
              <p className="copy-sub">Generic sub-copy about AI capability</p>
              <p className="cta-before">"Sign Up"</p>
            </div>
            <div className="copy-arrow">→</div>
            <div className="copy-item copy-item--after">
              <span className="copy-label">After</span>
              <h3>"Land your dream job without sending hundreds of applications every week"</h3>
              <p className="copy-sub">Pain point addressed + preference reassurance in one line</p>
              <p className="cta-after">"Start Applying For Me"</p>
            </div>
          </div>

          {/* Landing page screenshots */}
          <div className="landing-screens">
            <div className="img-shadow">
              <Image src={LandingEarly} alt="Early landing page — 'Job Hunting is Exhausting, We Make it Effortless'" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
              <p className="img-caption">Early version — generic pain framing, feature-led copy</p>
            </div>
            <div className="img-shadow">
              <Image src={LandingFinal} alt="Final landing page — 'Land your dream job without sending hundreds of applications every week'" width={1200} height={800} style={{ width: "100%", height: "auto" }} />
              <p className="img-caption">Final version — outcome-led headline, one-time payment stated in hero, dual CTA</p>
            </div>
          </div>
        </div>
      </section>

      {/* ─── CASE 3 — RETENTION ──────────────────────────── */}
      <section className="section-case">
        <div className="case-label">Case 03</div>
        <h1>
          <GradientTxt>Retention &amp; Reactivation</GradientTxt>
        </h1>

        <div className="reactivation-block">
          <h2>The Reactivation Engine</h2>
          <p>
            A segment of users signed up, went quiet, and never came back.
            Rather than accepting this as normal churn, I identified it as a
            reactivation opportunity — users who cared enough to sign up but
            hadn't yet seen the product work for them personally. I designed an
            AI email engine where no two emails were the same.
          </p>
          <p>
            The engine matched each dormant user's profile (role, location,
            preferences, CV) with live job listings and crafted personalised
            emails — not generic re-engagement blasts, but a specific role, a
            tailored fit analysis, and an explicit offer:
          </p>
          <blockquote>
            "I found this role at [Company]. Based on your profile, here is why
            I think you are a strong match. Here are a few things worth
            considering before applying. Should I handle the application for
            you?"
          </blockquote>

          {/* Retention email screenshots */}
          <div className="email-grid">
            <div className="email-item img-shadow">
              <Image src={EmailOpen} alt="Personalised retention email — 'Interested in your thoughts on recent job opportunities, Abdulrahim'" width={800} height={1200} style={{ width: "100%", height: "auto" }} />
              <p className="img-caption">Subject line: personalised with recipient name and specific role context — not a generic re-engagement blast.</p>
            </div>
            <div className="email-item img-shadow">
              <Image src={EmailBody} alt="Email body — personalised job match at Perplexity and Sanity.io with tailored fit analysis" width={800} height={1200} style={{ width: "100%", height: "auto" }} />
              <p className="img-caption">Body: specific role, company context, personalised fit rationale — drafted by the AI from the user's live profile.</p>
            </div>
            <div className="email-item img-shadow">
              <Image src={EmailClose} alt="Email close — JobgapAI Career Assistant sign-off with application link and next steps" width={800} height={1200} style={{ width: "100%", height: "auto" }} />
              <p className="img-caption">Sign-off: explicit offer to handle the application + direct application link. Sarah (JobgapAI Career Assistant) as sender persona.</p>
            </div>
          </div>

          <p>
            Once users saw the product actively working on their behalf before
            committing financially, the conversion ask finally had the evidence
            it needed. Paid conversions clustered consistently at email 2 and
            3. Users needed to see the product working for them more than once
            before committing.
          </p>
        </div>
      </section>

      {/* ─── RESULTS ─────────────────────────────────────── */}
      <section className="section-results">
        <h1>
          <GradientTxt>Results</GradientTxt>
        </h1>
        <p className="results-intro">Every decision compounded. Here is where the funnel landed.</p>
        <div className="results-grid">
          {[
            {
              metric: "1 screen",
              label: "Onboarding",
              causation: "Once the sequence matched the user's trust curve — value before data collection — abandonment collapsed.",
              result: "7 steps of near-total abandonment reduced to a single completing screen",
            },
            {
              metric: "£50k/mo",
              label: "Revenue",
              causation: "Once users experienced the product before the paywall, the conversion ask finally had context behind it.",
              result: "£50,000 in monthly sales generated consistently from the optimised funnel",
            },
            {
              metric: "Same day",
              label: "Pricing Uplift",
              causation: "Removing the recurring risk from financially stressed job seekers immediately cleared a hidden objection.",
              result: "One-time payment switch produced an immediate, visible uplift the same day it launched",
            },
            {
              metric: "Email 2–3",
              label: "Reactivation",
              causation: "Personalised, profile-matched emails gave dormant users a concrete reason to return rather than a generic reminder.",
              result: "3-part email sequence reliably converted dormant users at message 2 and 3",
            },
            {
              metric: "35,000+",
              label: "Scale",
              causation: "Automating the full application loop meant volume scaled with AI, not with human hours.",
              result: "35,000+ automated job applications delivered per paying user every month",
            },
            {
              metric: "Highest ever",
              label: "Conversion Rate",
              causation: "The value-first preview flow gave users proof the product worked before asking them to pay.",
              result: "Value-first preview flow drove the strongest free-to-paid rate in the product's history",
            },
          ].map((item) => (
            <div className="result-card" key={item.label}>
              <span className="result-metric">{item.metric}</span>
              <span className="result-label">{item.label}</span>
              <p className="result-causation">{item.causation}</p>
              <p className="result-stat">{item.result}</p>
            </div>
          ))}
        </div>
      </section>

      {/* ─── LEARNINGS ───────────────────────────────────── */}
      <section className="section-learnings">
        <h1>
          <GradientTxt>Personal Learnings</GradientTxt>
        </h1>
        <div className="list-container">
          {[
            {
              title: "Earn the right to ask",
              detail: "Asking for sensitive data too early reduces conversions and breaks trust. I learned this after three form versions — each one a deliberate experiment, each one teaching something the previous hadn't.",
            },
            {
              title: "The sequence is the solution",
              detail: "The 7-step form failed not due to length, but because it appeared before the user was invested. The fix wasn't subtraction — it was reordering.",
            },
            {
              title: "The business model is a UX decision",
              detail: "The shift from subscription to one-time payment was driven by understanding job seekers' financial risk tolerance. Pricing is a product decision, not just a commercial one.",
            },
            {
              title: "Transparency retains users",
              detail: "Visible AI decisions — exact CVs, cover letters, form answers — ensured paid users returned. They needed proof their delegated job search was active.",
            },
            {
              title: "Kill experiments before they become the default",
              detail: "Quickly abandoning unsuccessful elements — free trial, 7-step form, subscription model — based on data led us to the combinations that compounded.",
            },
          ].map((item, index) => (
            <div key={index} className="list-item">
              <CupPin />
              <div>
                <h3>{item.title}</h3>
                <p>{item.detail}</p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </Container>
  );
}
