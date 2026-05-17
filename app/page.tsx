type ProjectVariant = "blue" | "emerald";

type Project = {
  name: string;
  eyebrow: string;
  summary: string;
  tech: string[];
  highlights: string[];
  details: string[];
  security: string[];
  variant: ProjectVariant;
};

const projects: Project[] = [
  {
    name: "AI Team Knowledge Hub",
    eyebrow: "RAG-based Internal Knowledge SaaS",
    summary:
      "A modular internal knowledge platform that turns team documents into grounded, citation-backed AI answers with vector search and production-grade retrieval flows.",
    tech: ["Next.js", "TypeScript", "PostgreSQL", "pgvector", "OpenAI SDK", "SumoPod AI", "Docker"],
    highlights: [
      "Retrieval-Augmented Generation with pgvector similarity search",
      "Embedding pipelines for document ingestion and semantic recall",
      "Grounded responses with citations and AI document processing",
      "OpenAI SDK-compatible integration with TypeScript-first modules"
    ],
    details: ["Containerized service boundaries", "Typed ingestion workers", "Citation-aware answer pipeline"],
    security: ["Source-scoped retrieval", "Controlled internal access", "Auditable AI response paths"],
    variant: "blue"
  },
  {
    name: "Vaultiva",
    eyebrow: "Secure File Sharing Platform",
    summary:
      "Secure document delivery infrastructure for password-protected links, signed access, download limits, watermarked previews, and audit-ready file workflows.",
    tech: ["Angular", "NestJS", "PostgreSQL", "Prisma", "Cloudflare R2"],
    highlights: [
      "Password-protected links with expiry controls and download limits",
      "Signed URLs, secure preview flows, and Cloudflare R2 integration",
      "Dynamic watermarking using Sharp and pdf-lib",
      "Audit logging, CSP/XSS protection, and transactional email workflows"
    ],
    details: ["Object storage architecture", "Policy-driven access controls", "Preview and delivery pipeline"],
    security: ["CSP/XSS hardening", "Expiring signed URLs", "Traceable access events"],
    variant: "emerald"
  }
];

const metrics: [string, string, string][] = [
  ["Duplication", "Reduced", "Reusable hooks and shared frontend primitives"],
  ["Re-renders", "Fixed", "Stabilized state boundaries and memoized expensive flows"],
  ["Velocity", "Improved", "Reusable patterns for forms, tables, data fetching, and UI states"],
  ["Security", "Hardened", "Secure frontend workflows, CSP awareness, and protected access patterns"]
];

const skillGroups: [string, string[]][] = [
  ["Frontend Development", ["React", "Vue/Nuxt", "Angular", "TypeScript", "Next.js", "Tailwind CSS", "Pinia", "Redux"]],
  ["Backend & API Development", ["Node.js", "NestJS", "REST APIs", "JWT Authentication", "Transactional Workflows"]],
  ["AI & RAG Systems", ["Vector Search", "OpenAI SDK Integration", "Embedding Pipelines", "RAG", "pgvector"]],
  ["Database & ORM", ["PostgreSQL", "Prisma", "Schema Design", "Query Modeling"]],
  ["Security Engineering", ["CSP", "XSS Prevention", "Signed URLs", "Secure File Preview", "Audit Logging"]],
  ["Cloud & Infrastructure", ["Docker", "Cloudflare R2", "Object Storage", "Deployment Workflows"]],
  ["Testing", ["Jest", "Component Testing", "Regression Coverage", "Behavioral QA"]],
  ["Architecture & Practices", ["Reusable Components", "Modular Architecture", "Clean Code", "Scalable SaaS Patterns"]]
];

const experiences = [
  {
    company: "Pohon Dana Indonesia",
    role: "Software Engineer",
    focus: "Fintech financing systems, production frontend workflows, and secure product delivery.",
    bullets: [
      "Built and maintained fintech-facing product interfaces for financing operations.",
      "Improved frontend maintainability through reusable patterns and modular UI architecture.",
      "Collaborated across product, backend, and QA to ship reliable production features."
    ]
  },
  {
    company: "Elefin Indonesia",
    role: "Software Engineer",
    focus: "B2B platform development with scalable frontend systems and cross-functional delivery.",
    bullets: [
      "Developed B2B SaaS interfaces with attention to performance, clarity, and maintainability.",
      "Reduced repeated implementation work through shared UI and state-management patterns.",
      "Supported product iteration through clean integration with backend services."
    ]
  },
  {
    company: "Freelance Fullstack Engineer",
    role: "Frontend-Focused Fullstack Engineer",
    focus: "AI-powered SaaS products, secure file-sharing systems, and end-to-end product builds.",
    bullets: [
      "Delivered AI-integrated applications with typed frontend architecture and backend APIs.",
      "Designed secure document access workflows with previews, limits, and auditability.",
      "Created reusable engineering systems for faster, cleaner SaaS development."
    ]
  }
];

function SectionHeading({
  eyebrow,
  title,
  children
}: {
  eyebrow: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <div className="section-heading">
      <p className="eyebrow">{eyebrow}</p>
      <h2>{title}</h2>
      <p>{children}</p>
    </div>
  );
}

function ArchitectureMockup({ variant }: { variant: "blue" | "emerald" }) {
  return (
    <div className={`mockup mockup-${variant}`} aria-hidden="true">
      <div className="mockup-top">
        <span />
        <span />
        <span />
      </div>
      <div className="mockup-grid">
        <div className="mockup-sidebar">
          <i />
          <i />
          <i />
          <i />
        </div>
        <div className="mockup-main">
          <div className="mockup-chart">
            <b />
            <b />
            <b />
          </div>
          <div className="mockup-flow">
            <span>API</span>
            <span>Queue</span>
            <span>DB</span>
          </div>
          <div className="mockup-lines">
            <i />
            <i />
            <i />
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Home() {
  return (
    <main>
      <nav className="nav" aria-label="Primary navigation">
        <a className="brand" href="#top" aria-label="Setya portfolio home">
          <span>SP</span>
          Setya Pangga
        </a>
        <div className="nav-links">
          <a href="#projects">Projects</a>
          <a href="#impact">Impact</a>
          <a href="#skills">Skills</a>
          <a href="#contact">Contact</a>
        </div>
      </nav>

      <section className="hero" id="top">
        <div className="hero-bg" aria-hidden="true" />
        <div className="hero-content">
          <p className="eyebrow">Frontend architecture / fintech / AI SaaS</p>
          <h1>Setya Pangga Raka Pangestu</h1>
          <h2>Frontend-Focused Software Engineer</h2>
          <p>
            Frontend-focused software engineer with experience building fintech platforms, B2B systems,
            AI-powered applications, and secure SaaS products.
          </p>
          <div className="hero-actions">
            <a className="button button-primary" href="#projects">View Projects</a>
            <a className="button button-secondary" href="#contact">Contact Me</a>
          </div>
        </div>
        <div className="hero-visual" aria-label="Architecture inspired product preview">
          <div className="signal-card">
            <span>Production Surface</span>
            <strong>Scalable SaaS UI</strong>
            <p>Typed components, secure access flows, API-driven screens, and reusable patterns.</p>
          </div>
          <div className="architecture-panel">
            <div className="node node-active">Next.js</div>
            <div className="node">API</div>
            <div className="node">Auth</div>
            <div className="node node-emerald">Storage</div>
            <div className="node">RAG</div>
            <div className="node">Audit</div>
          </div>
          <div className="code-panel">
            <span>const product = buildSaaS(&#123;</span>
            <span>&nbsp;&nbsp;frontend: &quot;modular&quot;,</span>
            <span>&nbsp;&nbsp;security: &quot;aware&quot;,</span>
            <span>&nbsp;&nbsp;systems: &quot;scalable&quot;</span>
            <span>&#125;)</span>
          </div>
        </div>
      </section>

      <section className="section" id="projects">
        <SectionHeading eyebrow="Featured work" title="SaaS systems built with architecture in mind">
          Project showcases are framed around product constraints: retrieval quality, secure document delivery,
          maintainability, and reliable production workflows.
        </SectionHeading>
        <div className="project-grid">
          {projects.map((project) => (
            <article className="project-card" key={project.name}>
              <ArchitectureMockup variant={project.variant} />
              <div className="project-copy">
                <p className="eyebrow">{project.eyebrow}</p>
                <h3>{project.name}</h3>
                <p>{project.summary}</p>
                <div className="project-lists">
                  <div>
                    <h4>Architecture Highlights</h4>
                    <ul>
                      {project.highlights.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Infrastructure</h4>
                    <ul>
                      {project.details.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                  <div>
                    <h4>Security Considerations</h4>
                    <ul>
                      {project.security.map((item) => <li key={item}>{item}</li>)}
                    </ul>
                  </div>
                </div>
                <div className="badges">
                  {project.tech.map((tech) => <span key={tech}>{tech}</span>)}
                </div>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section-split" id="impact">
        <SectionHeading eyebrow="Engineering impact" title="Production habits that compound">
          The work emphasizes predictable systems, reusable abstractions, and frontend architecture that keeps
          product teams moving without sacrificing quality.
        </SectionHeading>
        <div className="metric-grid">
          {metrics.map(([label, value, description]) => (
            <div className="metric-card" key={label}>
              <span>{label}</span>
              <strong>{value}</strong>
              <p>{description}</p>
            </div>
          ))}
        </div>
        <div className="impact-timeline">
          {[
            "Built scalable frontend patterns for forms, dashboards, data tables, and authenticated flows.",
            "Improved maintainability through modular architecture and reusable component systems.",
            "Implemented secure frontend systems for protected access, validation, and delivery workflows.",
            "Applied production-ready SaaS practices across fintech, AI, and file-sharing products."
          ].map((item) => (
            <div className="impact-item" key={item}>
              <span />
              <p>{item}</p>
            </div>
          ))}
        </div>
      </section>

      <section className="section" id="skills">
        <SectionHeading eyebrow="Technical stack" title="Frontend depth with fullstack range">
          Organized around the practical surfaces of modern SaaS products: interfaces, APIs, data, AI,
          infrastructure, testing, and secure delivery.
        </SectionHeading>
        <div className="skills-grid">
          {skillGroups.map(([category, skills]) => (
            <article className="skill-card" key={category}>
              <h3>{category}</h3>
              <div className="badges">
                {(skills as string[]).map((skill) => <span key={skill}>{skill}</span>)}
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section" id="experience">
        <SectionHeading eyebrow="Experience" title="Fintech, B2B platforms, and product engineering">
          A timeline of engineering work focused on shipping maintainable frontend systems inside real product
          constraints.
        </SectionHeading>
        <div className="experience-list">
          {experiences.map((experience) => (
            <article className="experience-item" key={experience.company}>
              <div className="timeline-dot" />
              <div>
                <p className="eyebrow">{experience.role}</p>
                <h3>{experience.company}</h3>
                <p>{experience.focus}</p>
                <ul>
                  {experience.bullets.map((bullet) => <li key={bullet}>{bullet}</li>)}
                </ul>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section philosophy" id="philosophy">
        <SectionHeading eyebrow="Security & architecture philosophy" title="Build interfaces like product infrastructure">
          The frontend should be a reliable system boundary: accessible, typed, secure, fast to extend, and clear
          enough for future engineers to trust.
        </SectionHeading>
        <div className="philosophy-grid">
          {[
            ["Scalable frontend architecture", "Feature modules, shared primitives, predictable state, and composition patterns that reduce incidental complexity."],
            ["Secure access systems", "CSP/XSS prevention, signed access flows, guarded previews, and audit-friendly event modeling."],
            ["Maintainable product code", "Clean component boundaries, reusable hooks, practical testing, and naming that mirrors product behavior."],
            ["AI-integrated SaaS", "RAG pipelines, grounded responses, embedding workflows, and AI interfaces designed for user trust."]
          ].map(([title, copy]) => (
            <article className="philosophy-card" key={title}>
              <h3>{title}</h3>
              <p>{copy}</p>
            </article>
          ))}
        </div>
      </section>

      <section className="section contact" id="contact">
        <div>
          <p className="eyebrow">Contact</p>
          <h2>Let’s build secure, scalable SaaS products.</h2>
          <p>
            Available for frontend-focused fullstack engineering across fintech platforms, B2B SaaS,
            AI-powered applications, and secure product infrastructure.
          </p>
          <div className="contact-links">
            <a href="mailto:setyarakap@gmail.com">setyarakap@gmail.com</a>
            <a href="https://www.linkedin.com/in/setyapanggarakapangestu/" target="_blank" rel="noreferrer">LinkedIn</a>
            <a href="https://github.com/setyaraka" target="_blank" rel="noreferrer">GitHub</a>
          </div>
        </div>
        <form className="contact-form" action="mailto:setyarakap@gmail.com" method="post" encType="text/plain">
          <label>
            Name
            <input name="name" autoComplete="name" placeholder="Your name" />
          </label>
          <label>
            Email
            <input name="email" type="email" autoComplete="email" placeholder="you@company.com" />
          </label>
          <label>
            Message
            <textarea name="message" placeholder="Tell me about the product or system." rows={5} />
          </label>
          <button type="submit">Send Message</button>
        </form>
      </section>
    </main>
  );
}
