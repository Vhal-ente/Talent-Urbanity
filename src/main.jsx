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
  ["About", "#about"],
  ["Services", "#services"],
  ["Value", "#value"],
  ["Approach", "#approach"],
  ["Clients", "#clients"],
];

const offerings = [
  {
    title: "Business Process Automation",
    icon: Workflow,
    points: [
      "Process discovery and optimization",
      "Workflow digitization",
      "Power Automate implementation",
      "RPA, approvals, document routing",
    ],
  },
  {
    title: "Microsoft Power Platform Solutions",
    icon: Cpu,
    points: [
      "Power Apps application development",
      "Power BI dashboards",
      "Copilot and Dataverse integration",
      "SharePoint automation",
    ],
  },
  {
    title: "AI-Powered Business Solutions",
    icon: Bot,
    points: [
      "AI-assisted document processing",
      "Intelligent chatbots",
      "Automated customer service",
      "AI-enabled reporting and analytics",
    ],
  },
  {
    title: "IT Advisory & Digital Transformation",
    icon: Network,
    points: [
      "Digital transformation strategy",
      "Technology roadmaps",
      "IT governance",
      "Microsoft 365 optimization",
    ],
  },
  {
    title: "Enterprise IT Support Services",
    icon: CloudCog,
    points: [
      "Managed IT services",
      "Infrastructure and end-user support",
      "System administration",
      "Network, security, and cloud support",
    ],
  },
  {
    title: "Data Analytics & Executive Dashboards",
    icon: LayoutDashboard,
    points: [
      "Executive performance dashboards",
      "KPI monitoring",
      "Business intelligence reporting",
      "Operational analytics",
    ],
  },
  {
    title: "Governance, Risk & Compliance",
    icon: ShieldCheck,
    points: [
      "Digital policy implementation",
      "Workflow compliance automation",
      "Audit readiness",
      "Information security governance",
    ],
  },
  {
    title: "Training & Change Management",
    icon: GraduationCap,
    points: [
      "Power Platform user training",
      "Digital adoption programmes",
      "Executive workshops",
      "Citizen developer enablement",
    ],
  },
];

const sectors = [
  "Government MDAs",
  "Financial institutions",
  "Healthcare organizations",
  "Educational institutions",
  "Oil & gas companies",
  "Manufacturing firms",
  "Professional services firms",
  "SMEs and growing businesses",
  "NGOs and development agencies",
];

const outcomes = [
  "Up to 70% reduction in manual processes through workflow automation",
  "Faster approvals and improved service delivery",
  "Reduced operational costs",
  "Better compliance and audit readiness",
  "Real-time visibility into business performance",
  "Improved employee productivity",
  "Enhanced customer experience",
  "Scalable digital solutions built on Microsoft technologies",
];

const approach = [
  "Business Assessment",
  "Process Mapping",
  "Solution Design",
  "Development & Configuration",
  "User Acceptance Testing",
  "Deployment",
  "User Training",
  "Continuous Support & Improvement",
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
        <span className={`section-label ${inverse ? "text-gold-bright" : "text-gold"}`}>
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
        <p className={`max-w-sm text-sm leading-7 ${inverse ? "text-white/60" : "text-charcoal-soft"}`}>
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
              <a key={label} href={href} className="text-sm font-medium text-white/70 transition hover:text-gold-bright">
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
              <a href="#contact" onClick={() => setMenuOpen(false)} className="btn-primary mt-2 w-fit">
                Book a Consultation
              </a>
            </div>
          </div>
        ) : null}
      </header>

      <main>
        <section id="home" className="relative overflow-hidden bg-navy-deep py-24 text-white md:py-32">
          <Arch className="absolute -right-52 -top-36 h-[760px] w-[760px] opacity-55 stroke-navy-mid [fill:none] md:h-[880px] md:w-[880px]" />
          <div className="mx-auto max-w-[1180px] px-6 md:px-10">
            <div className="relative z-10 max-w-4xl">
              <span className="eyebrow">Digital Transformation & Automation Practice</span>
              <h1 className="mt-7 max-w-4xl font-serif text-[clamp(2.15rem,5.4vw,4.95rem)] leading-[1.05] text-white">
                From strategy to automation. From ideas to impact.
              </h1>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/75 md:text-lg">
                Talent Urbanity helps organizations modernize operations, improve productivity, and accelerate
                growth through Microsoft Power Platform, enterprise IT services, AI-enabled workflows, and
                human-centred change.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="#contact" className="btn-primary">
                  Book a Consultation <ArrowRight size={16} />
                </a>
                <a href="#services" className="btn-ghost">
                  Explore Solutions
                </a>
              </div>
            </div>
          </div>
        </section>

        <section id="about" className="bg-white py-20 md:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 md:grid-cols-[300px_1fr] md:gap-16 md:px-10">
            <div>
              <span className="section-label text-gold">Overview</span>
              <h2 className="mt-4 font-serif text-2xl leading-tight text-navy md:text-3xl">
                Business consulting, people transformation, and technical execution in one advisory practice.
              </h2>
            </div>
            <div>
              <p className="max-w-3xl text-base leading-8 text-charcoal-soft md:text-lg">
                Talent Urbanity is expanding its consulting portfolio with a Digital Transformation & Automation
                Practice designed to bridge the gap between business strategy and technology execution. We help
                organizations work smarter, reduce costs, improve compliance, and make better decisions through
                automation and data.
              </p>
              <div className="mt-10 grid border border-navy/12 bg-navy/12 sm:grid-cols-2 lg:grid-cols-4">
                {[
                  "Business advisory",
                  "Organizational excellence",
                  "Automation delivery",
                  "Enterprise technology",
                ].map((item) => (
                  <div key={item} className="bg-white p-6">
                    <span className="mb-4 block h-0.5 w-7 bg-gold" />
                    <p className="text-sm font-semibold text-navy">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        <section id="services" className="bg-ivory py-20 md:py-28">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10">
            <SectionHeading
              eyebrow="New Service Offerings"
              title="Eight service lines for intelligent, measurable transformation."
              copy="The practice combines business diagnosis, Microsoft technology delivery, enterprise IT support, and change enablement."
            />
            <div className="grid border border-navy/12 bg-navy/12 md:grid-cols-2 xl:grid-cols-4">
              {offerings.map((offering, index) => {
                const Icon = offering.icon;
                return (
                  <article key={offering.title} className="group flex min-h-[360px] flex-col bg-ivory p-7 transition hover:bg-white">
                    <div className="mb-7 flex items-center justify-between">
                      <div className="flex h-12 w-12 items-center justify-center bg-navy text-gold-bright">
                        <Icon size={22} strokeWidth={1.7} />
                      </div>
                      <span className="font-mono text-xs tracking-[0.16em] text-gold">
                        {String(index + 1).padStart(2, "0")}
                      </span>
                    </div>
                    <h3 className="font-serif text-xl leading-snug text-navy">{offering.title}</h3>
                    <ul className="mt-5 grid gap-3">
                      {offering.points.map((point) => (
                        <li key={point} className="flex gap-3 text-sm leading-6 text-charcoal-soft">
                          <Check className="mt-1 h-4 w-4 shrink-0 text-gold" />
                          <span>{point}</span>
                        </li>
                      ))}
                    </ul>
                  </article>
                );
              })}
            </div>
          </div>
        </section>

        <section id="value" className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
          <Arch className="absolute -bottom-44 -left-36 h-[540px] w-[540px] opacity-40 stroke-navy-mid [fill:none]" />
          <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-10">
            <SectionHeading
              inverse
              eyebrow="Value Proposition"
              title="Modernization that shows up in operations, compliance, and performance."
              copy="Every engagement is tied to practical business outcomes the leadership team can see and sustain."
            />
            <div className="grid border border-white/15 bg-white/15 md:grid-cols-2">
              {outcomes.map((outcome) => (
                <div key={outcome} className="flex gap-4 bg-navy-deep p-6">
                  <Sparkles className="mt-1 h-5 w-5 shrink-0 text-gold-bright" />
                  <p className="text-sm leading-7 text-white/85">{outcome}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="approach" className="bg-white py-20 md:py-28">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10">
            <SectionHeading
              eyebrow="Delivery Approach"
              title="A complete delivery path from assessment to continuous improvement."
              copy="Talent Urbanity does not stop at recommendations. The practice designs, builds, deploys, trains, and supports."
            />
            <div className="grid gap-px bg-navy/12 sm:grid-cols-2 lg:grid-cols-4">
              {approach.map((step, index) => (
                <div key={step} className="bg-white p-7">
                  <span className="font-serif text-lg text-gold">{String(index + 1).padStart(2, "0")}</span>
                  <h3 className="mt-5 text-base font-semibold text-navy">{step}</h3>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="clients" className="bg-ivory py-20 md:py-28">
          <div className="mx-auto max-w-[1180px] px-6 md:px-10">
            <SectionHeading
              eyebrow="Target Clients"
              title="Built for public, private, and development-sector organizations."
              copy="The practice supports institutions that need stronger processes, clearer governance, and scalable technology foundations."
            />
            <div className="grid gap-px bg-navy/12 sm:grid-cols-2 lg:grid-cols-3">
              {sectors.map((sector) => (
                <div key={sector} className="flex items-center gap-4 bg-ivory p-6 transition hover:bg-white">
                  <Building2 className="h-5 w-5 shrink-0 text-gold" />
                  <span className="text-sm font-semibold text-navy">{sector}</span>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="bg-navy py-20 text-white md:py-28">
          <div className="mx-auto grid max-w-[1180px] gap-10 px-6 md:grid-cols-[1fr_0.8fr] md:items-start md:px-10">
            <div>
              <span className="section-label text-gold-bright">Why Talent Urbanity?</span>
              <h2 className="mt-4 max-w-2xl font-serif text-[clamp(1.75rem,3.3vw,2.45rem)] leading-tight text-white">
                Strategic consulting with the implementation muscle to make transformation real.
              </h2>
              <p className="mt-7 max-w-2xl text-base leading-8 text-white/70">
                Our multidisciplinary team connects advisory, organizational development, automation, and enterprise
                technology solutions so clients can define transformation strategy and successfully execute it.
              </p>
            </div>
            <div className="border-l-2 border-gold pl-7">
              {[
                ["Strategy", "Clarity on business priorities, process realities, and transformation goals."],
                ["Automation", "Microsoft-based workflows, apps, dashboards, and AI solutions that reduce manual work."],
                ["Impact", "Improved productivity, compliance, service delivery, and executive visibility."],
              ].map(([title, copy]) => (
                <div key={title} className="border-b border-white/15 py-6 first:pt-0 last:border-b-0">
                  <h3 className="text-base font-semibold text-white">{title}</h3>
                  <p className="mt-2 text-sm leading-6 text-white/60">{copy}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="contact" className="relative overflow-hidden bg-navy-deep py-20 text-white md:py-28">
          <Arch className="absolute -right-32 bottom-0 h-[520px] w-[520px] opacity-35 stroke-navy-mid [fill:none]" />
          <div className="relative z-10 mx-auto max-w-[1180px] px-6 md:px-10">
            <div className="max-w-3xl">
              <span className="section-label text-gold-bright">Contact</span>
              <h2 className="mt-4 font-serif text-[clamp(1.85rem,4vw,3.15rem)] leading-tight text-white">
                Ready to modernize processes, reduce manual work, and improve decision-making?
              </h2>
              <p className="mt-6 max-w-2xl text-base leading-8 text-white/70">
                Start with a business assessment or automation roadmap session and identify the highest-value
                opportunities for your organization.
              </p>
              <div className="mt-10 flex flex-wrap gap-4">
                <a href="mailto:hello@talenturbanity.com" className="btn-primary">
                  <Mail size={16} /> Book a Consultation
                </a>
                <a href="#services" className="btn-ghost">
                  Review Service Lines
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
              <a href="#services" className="hover:text-white">Services</a>
              <a href="#approach" className="hover:text-white">Approach</a>
              <a href="#contact" className="hover:text-white">Contact</a>
            </div>
          </div>
          <div className="flex flex-col justify-between gap-3 border-t border-white/15 pt-6 text-xs md:flex-row">
            <span>© 2026 Talent Urbanity. All rights reserved.</span>
            <span>Governance · People · Automation · Enterprise Technology</span>
          </div>
        </div>
      </footer>
    </div>
  );
}

createRoot(document.getElementById("root")).render(<App />);
