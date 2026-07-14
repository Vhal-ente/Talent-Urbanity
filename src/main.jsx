import React from "react";
import { createRoot } from "react-dom/client";
import {
  ArrowRight,
  BarChart3,
  Bot,
  Building2,
  Check,
  CloudCog,
  Cpu,
  GraduationCap,
  Landmark,
  LayoutDashboard,
  Mail,
  Menu,
  Network,
  ShieldCheck,
  Sparkles,
  Workflow,
  X,
} from "lucide-react";
import "./styles.css";

const navLinks = [
  ["Home", "#home"],
  ["About", "#about"],
  ["Services", "#services"],
  ["Board Practice", "#board-practice"],
  ["Insights", "#insights"],
  ["Contact", "#contact"],
];

const offerings = [
  {
    title: "Board Advisory & Leadership Excellence",
    icon: Workflow,
    desc: "Board effectiveness, governance structures and executive leadership support for organisations that need their top table to perform.",
    href: "#board-practice",
    cta: "View Board Practice →",
  },
  {
    title: "People, Performance & HR Advisory",
    icon: Cpu,
    desc: "Organisation design, performance frameworks and HR advisory that align people strategy with business strategy.",
    href: "#contact",
    cta: "Discuss this practice →",
  },
  {
    title: "Learning, Capability & Executive Development",
    icon: Bot,
    desc: "Capability-building programmes and executive development designed around real business challenges, not generic curricula.",
    href: "#contact",
    cta: "Discuss this practice →",
  },
  {
    title: "Organisation Transformation, Governance & Risk",
    icon: Network,
    desc: "Operating model redesign, governance frameworks and risk management for organisations navigating structural change.",
    href: "#board-practice",
    cta: "View Board Practice →",
  },
  {
    title: "Digital Transformation, Intelligent Automation & AI",
    icon: CloudCog,
    desc: "Business process automation, AI-enabled workflows and enterprise applications built on Microsoft Power Platform.",
    href: "#digital",
    cta: "View the practice in detail →",
  },
  {
    title: "Managed IT Advisory & Technology Enablement",
    icon: LayoutDashboard,
    desc: "IT support, cloud advisory and managed services that keep the technology estate running while transformation happens.",
    href: "#digital",
    cta: "View the practice in detail →",
  },
];

const sectors = [
  {
    title: "Diagnose",
    desc: "Understand governance, people and process realities as they actually stand.",
  },
  {
    title: "Design",
    desc: "Architect the governance model, people strategy or automation solution.",
  },
  {
    title: "Deliver",
    desc: "Implement from board frameworks to platform builds with the people who will use it.",
  },
  {
    title: "Optimise",
    desc: "Refine against real usage and real outcomes, not assumptions.",
  },
  {
    title: "Sustain",
    desc: "Hand over a model the organisation can run and improve on its own.",
  },
];
const approach = [
  {
    title: "Board Effectiveness",
    desc: "Structure, composition and rhythm reviews that sharpen how a board actually operates.",
  },
  {
    title: "Governance Frameworks",
    desc: "Policies, charters and reporting lines built for accountability, not just compliance.",
  },
  {
    title: "Executive & Board Development",
    desc: "Targeted development for directors and executives stepping into greater oversight roles.",
  },
  {
    title: "Risk & Oversight",
    desc: "Risk frameworks that give boards real visibility into what the organisation is exposed to.",
  },
];

const outcomes = [
  "Business process automation using Microsoft Power Automate",
  "Custom business applications with Microsoft Power Apps",
  "Executive dashboards with Power BI",
  "Microsoft 365 optimisation and Copilot adoption",
  "AI-enabled workflows and document automation",
  "IT support, cloud advisory and managed service",
  "Governance, compliance and digital operating models",
];

function LogoMark({ className = "h-10 w-10" }) {
  return (
    <img
      src="/talent-urbanity-logo.jpeg"
      alt="Talent Urbanity logo"
      className={`${className} object-contain`}
    />
  );
}

function Arch({ className = "" }) {
  return (
    <svg className={className} viewBox="0 0 400 400" aria-hidden="true">
      <path d="M60 380V180C60 108 122 50 200 50C278 50 340 108 340 180V380" />
      <path d="M90 380V190C90 126 140 78 200 78C260 78 310 126 310 190V380" />
      <path d="M130 380V210C130 160 160 130 200 130" />
    </svg>
  );
}

function SectionHeading({ eyebrow, title, copy, inverse = false }) {
  return (
    <div className="mb-12 flex flex-col gap-5 md:mb-14 md:flex-row md:items-end md:justify-between">
      <div className="max-w-2xl">
        <span
          className={`section-label ${inverse ? "text-gold-bright" : "text-gold"}`}
        >
          {eyebrow}
        </span>
        <h2
          className={`mt-4 font-serif text-[clamp(1.75rem,3.3vw,2.45rem)] leading-tight ${
            inverse ? "text-white" : "text-navy"
          }`}
        >
          {title}
        </h2>
      </div>
      {copy ? (
        <p
          className={`max-w-sm text-base leading-7 ${inverse ? "text-white/60" : "text-charcoal-soft"}`}
        >
          {copy}
        </p>
      ) : null}
    </div>
  );
}

function App() {
  const [menuOpen, setMenuOpen] = React.useState(false);

  return (
    <div className="min-h-screen bg-white text-charcoal">
      <header className="sticky top-0 z-50 border-b border-white/15 bg-navy-deep/95 backdrop-blur">
        <nav className="mx-auto flex max-w-[1180px] items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="flex min-w-0 items-center gap-3">
            <LogoMark />
            <span className="leading-none">
              <span className="block font-serif text-sm font-semibold tracking-[0.13em] text-white">
                TALENT URBANITY
              </span>
              <span className="mt-1 block font-mono text-[0.55rem] tracking-[0.22em] text-gold-bright">
                ADVISORY & TRANSFORMATION
              </span>
            </span>
          </a>

          <div className="hidden items-center gap-7 lg:flex">
            {navLinks.map(([label, href]) => (
              <a
                key={label}
                href={href}
                className="text-sm font-medium text-white/70 transition hover:text-gold-bright"
              >
                {label}
              </a>
            ))}
            <a href="#contact" className="btn-primary">
              Book a Consultation
            </a>
          </div>

          <button
            className="inline-flex h-10 w-10 items-center justify-center border border-white/15 text-white lg:hidden"
            aria-label="Toggle navigation"
            onClick={() => setMenuOpen((value) => !value)}
          >
            {menuOpen ? <X size={19} /> : <Menu size={19} />}
          </button>
        </nav>
        {menuOpen ? (
          <div className="border-t border-white/15 bg-navy-deep px-6 py-4 lg:hidden">
            <div className="mx-auto grid max-w-[1180px] gap-3">
              {navLinks.map(([label, href]) => (
                <a
                  key={label}
                  href={href}
                  onClick={() => setMenuOpen(false)}
                  className="py-2 text-sm font-medium text-white/80"
                >
                  {label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={() => setMenuOpen(false)}
                className="btn-primary mt-2 w-fit"
              >
                Book a Consultation
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section
          id="home"
          className="relative overflow-hidden bg-navy-deep py-24 text-white md:py-32"
        >
          <Arch className="absolute -right-52 -top-36 h-[760px] w-[760px] opacity-55 stroke-navy-mid [fill:none] md:h-[880px] md:w-[880px]" />
          <div className="mx-auto max-w-[1180px] px-6 md:px-10">
            <div className="relative z-10 max-w-4xl">
              <span className="eyebrow">
                Strategic Advisory &amp; Transformation
              </span>
              <h1 className="mt-7 max-w-4xl font-serif text-[clamp(2.15rem,5.4vw,4.95rem)] leading-[1.05] text-white">
                Empowering people. Strengthening governance. Accelerating
                digital transformation.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                We help organisations align leadership, governance, people and
                technology to achieve measurable business outcomes. Our
                consultants combine strategic insight with practical
                implementation, so transformation initiatives deliver
                sustainable value rather than reports that sit on a shelf.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">
                  Book a Consultation <ArrowRight size={16} />
                </a>
                <a href="#services" className="btn-ghost">
                  Explore Our Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 md:grid-cols-[300px_1fr] md:gap-16 md:px-10">
            <div>
              <span className="section-label text-gold">
                About Talent Urbanity
              </span>
              <h2 className="mt-4 font-serif text-2xl leading-tight text-navy md:text-3xl">
                A strategic advisory and transformation firm
              </h2>
            </div>
            <div>
              <p className="max-w-2xl text-base leading-8 text-charcoal-soft md:text-lg">
                Talent Urbanity is a strategic advisory and transformation firm
                that helps boards, executives and organisations strengthen
                governance, optimise people and processes, and accelerate
                digital transformation through intelligent automation and
                data-driven decision-making.
              </p>
              <br />
              <p className="max-w-2xl text-base leading-8 text-charcoal-soft md:text-lg">
                We work across the full distance between{" "}
                <strong>boardroom decisions and operational reality</strong> —
                bringing the same team from strategy and governance design
                through to the automation and platforms that make change stick.
              </p>
              <div className="mt-10 grid border border-navy/12 bg-navy/12 sm:grid-cols-3 lg:grid-cols-3">
                {[
                  "Integrated business and technology consulting",
                  "Strategy-to-execution delivery model",
                  "Governance and board expertise",
                  "Microsoft Power Platform automation capability",
                  "Human-centred transformation",
                  "Measurable business outcomes",
                ].map((item) => (
                  <div
                    key={item}
                    className="bg-white p-8 border-b border-r last:border-b-0 last:border-r-0"
                  >
                    <span className="mb-4 block h-0.5 w-7 bg-gold" />
                    <p className="text-base font-normal text-navy w-full">
                      {item}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-ivory py-20 md:py-28">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10">
            <SectionHeading
              eyebrow="Core Service Portfolio"
              title="Six disciplines. One integrated practice."
              copy="Each practice area stands on its own, and each is built to connect
            to the others — governance informs people strategy, people strategy
            informs the systems we build."
            />
            <div className="grid border border-navy/12 bg-navy/12 md:grid-cols-2 xl:grid-cols-3">
              {offerings.map((offering, index) => {
                const Icon = offering.icon;
                return (
                  <article
                    key={offering.title}
                    className="group flex min-h-[360px] flex-col bg-ivory p-7 transition hover:bg-white border-b border-r last:border-b-0 last:border-r-0 md:min-h-[400px] xl:min-h-[360px]"
                  >
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center bg-navy text-gold-bright">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>
                      <span className="font-mono text-xs tracking-[0.16em] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl leading-snug text-navy">
                      {offering.title}
                    </h3>
                    <p className="mt-5 text-sm leading-6 text-charcoal-soft border-b border-navy/15 pb-6">
                      {offering.desc}
                    </p>
                    <a
                      href={offering.href}
                      className="text-xs font-light uppercase mt-auto pt-6 inline-flex items-center text-gold hover:text-navy transition-colors"
                    >
                      {offering.cta}
                    </a>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section
          id="digital"
          className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28"
        >
          <Arch className="absolute -bottom-44 -left-36 h-[540px] w-[540px] opacity-40 stroke-navy-mid [fill:none]" />
          <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-10">
            <SectionHeading
              inverse
              eyebrow="Digital Transformation Practice"
              title="Where automation becomes an operating advantage"
              copy="The technical backbone behind our digital transformation and
            intelligent automation work."
            />
            <div className="grid md:grid-cols-2">
              {outcomes.map((outcome, index) => (
                <div
                  key={outcome}
                  className={`border border-white/15 bg-navy-deep p-6 ${
                    index === outcomes.length - 1 ? "md:col-span-2" : ""
                  }`}
                >
                  <div className="flex gap-4">
                    <Sparkles className="mt-1 h-5 w-5 shrink-0 text-gold-bright" />
                    <p className="text-sm leading-7 text-white/85">{outcome}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="board-practice" className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-16 px-6 md:px-10 lg:grid-cols-[1.1fr_0.9fr] lg:items-start">
            <div>
              <span className="font-mono text-xs font-light uppercase tracking-[0.24em] text-gold">
                Board Practice
              </span>

              <h2 className="mt-5 font-serif text-3xl leading-tight text-navy md:text-4xl">
                Governance built for boards that carry real weight
              </h2>

              <p className="mt-6 text-base leading-8 text-charcoal-soft">
                Boards are being asked to hold more. Oversight of strategy,
                risk, technology and culture often happens at the same time. Our
                Board Practice strengthens that capacity through sharper
                governance structures, better-informed directors and clearer
                alignment between board decisions and executive delivery.
              </p>

              <p className="mt-6 text-base leading-8 text-charcoal-soft">
                We work directly with{" "}
                <strong className="font-semibold text-navy">
                  boards, chairs and executive committees
                </strong>
                , drawing on the same governance and risk expertise that runs
                through our wider Organisation Transformation practice.
              </p>
            </div>

            <div className="space-y-5 border-l-2 border-gold pl-7 lg:pl-10  ">
              {approach.map((item) => (
                <article key={item.title} className=" text-navy font-semibold">
                  <h3 className="font-serif text-lg leading-snug text-navy">
                    {item.title}
                  </h3>

                  <p className="mt-3 text-sm leading-7 text-charcoal-soft font-light  border-b border-navy/15 pb-6">
                    {item.desc}
                  </p>
                </article>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="bg-navy py-20 text-white md:py-28">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10">
            <span className="font-mono text-xs font-light uppercase tracking-[0.24em] text-gold">
              Delivery Methodology
            </span>

            <div className="mt-4 flex flex-col gap-8 md:flex-row md:justify-between">
              <h2 className="font-serif text-3xl leading-tight text-white md:text-4xl">
                Five stages, one continuous line
              </h2>

              <p className="max-w-md gap-5 text-sm leading-8 text-white/80 text-wrap">
                From first diagnosis to a solution the organisation can sustain
                on its own.
              </p>
            </div>

            <div className="mt-14 grid gap-px bg-white/15 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector, index) => (
                <div
                  key={sector.title}
                  className={`flex flex-col gap-3 bg-navy-deep p-6 ${
                    index === sectors.length - 1 ? "lg:col-span-2" : ""
                  }`}
                >
                  <div className="flex items-center gap-4">
                    <Building2 className="h-5 w-5 shrink-0 text-gold" />

                    <span className="text-sm font-semibold text-white">
                      {sector.title}
                    </span>
                  </div>

                  <p className="text-sm leading-7 text-white/75">
                    {sector.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="insights" className="bg-ivory py-20 md:py-28">
  <div className="mx-auto max-w-[1180px] px-6 md:px-10">
    <div className="flex flex-col gap-6 md:flex-row md:items-end md:justify-between">
      <div>
        <span className="font-mono text-xs font-light uppercase tracking-[0.24em] text-gold">
          Insights & Thought Leadership
        </span>

        <h2 className="mt-5 font-serif text-3xl leading-tight text-navy md:text-4xl">
          Perspective from across the practice
        </h2>
      </div>

      <p className="max-w-lg text-sm leading-8 mt-5 text-charcoal-soft">
        Short-form thinking from our board, people and digital transformation
        advisors.
      </p>
    </div>

    <div className="mt-14 grid gap-6 md:grid-cols-3">
      {[
        {
          tag: "Board Practice",
          title: "What boards should be asking about technology risk",
          desc: "A short brief on where governance and digital risk oversight most often break down.",
        },
        {
          tag: "People & Performance",
          title: "Aligning performance frameworks to strategy, not headcount",
          desc: "Why performance systems built around targets alone tend to drift from the business plan.",
        },
        {
          tag: "Digital Transformation",
          title: "Automation ROI: what to measure in the first 90 days",
          desc: "The early indicators that tell you whether a Power Platform rollout is actually landing.",
        },
      ].map((insight) => (
        <article
          key={insight.title}
          className="border border-navy/10 bg-white p-7"
        >
          <span className="font-mono text-xs uppercase tracking-[0.18em] text-gold">
            {insight.tag}
          </span>

          <h4 className="mt-5 font-serif text-xl leading-snug text-navy">
            {insight.title}
          </h4>

          <p className="mt-4 text-sm leading-7 text-charcoal-soft">
            {insight.desc}
          </p>
        </article>
      ))}
    </div>

    <p className="mt-10 text-sm text-charcoal-soft italic">
      Full articles publishing soon. This section will house our ongoing
      thought leadership.
    </p>
  </div>
</section>

        <section
          id="contact"
          className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28"
        >
          <Arch className="absolute -right-32 bottom-0 h-[520px] w-[520px] opacity-35 stroke-navy-mid [fill:none]" />
          <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-10">
            <div className="max-w-3xl">
              <span className="section-label text-gold-bright">Contact</span>
              <h2 className="mt-4 font-serif text-[clamp(1.85rem,4vw,3.15rem)] leading-tight text-white">
               Ready to strengthen governance, people or technology?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                 Book a consultation and we'll help you work out where to start —
          whether that's a board effectiveness review, a people strategy reset,
          or an automation roadmap.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a
                  href="mailto:hello@talenturbanity.com"
                  className="btn-primary"
                >
                  <Mail size={16} /> Book a Consultation
                </a>
                <a href="#services" className="btn-ghost">
                  Explore Our Solutions
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>

      <footer className="border-t border-white/15 bg-navy-deep py-10 text-white/60">
        <div className="mx-auto flex max-w-[1180px] flex-col gap-8 px-6 md:px-10">
          <div className="flex flex-col justify-between gap-7 md:flex-row md:items-start">
            <div className="flex items-center gap-3">
              <LogoMark className="h-12 w-12" />
              <span>
                <span className="block font-serif text-base font-semibold tracking-[0.12em] text-white">
                  TALENT URBANITY
                </span>
                <span className="mt-1 block font-mono text-[0.58rem] tracking-[0.22em] text-gold-bright">
                  DIGITAL TRANSFORMATION & AUTOMATION
                </span>
              </span>
            </div>
            <div className="grid gap-3 text-sm sm:grid-cols-3 sm:gap-8">
              <a href="#services" className="hover:text-white">
                Services
              </a>
              <a href="#approach" className="hover:text-white">
                Approach
              </a>
              <a href="#contact" className="hover:text-white">
                Contact
              </a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs md:flex-row">
            <span>© 2026 Talent Urbanity. All rights reserved.</span>
            <span>
              Governance · People · Automation · Enterprise Technology
            </span>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
