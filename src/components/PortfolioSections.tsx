import { motion } from "motion/react";
import { Brain, Code2, Globe, Database, Award, ExternalLink, Mail, MessageCircle, Phone, Eye, Zap, TrendingUp, ShieldCheck, BarChart3, Building2, Linkedin } from "lucide-react";

export function SectionTitle({ children, subtitle }: { children: React.ReactNode, subtitle?: string }) {
  return (
    <div className="mb-12">
      <motion.p 
        initial={{ opacity: 0, y: 10 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.5, ease: "easeOut" }}
        className="text-brand-primary font-mono text-sm uppercase tracking-widest mb-2"
      >
        {subtitle}
      </motion.p>
      <motion.h2 
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true, margin: "-50px" }}
        transition={{ duration: 0.6, ease: "easeOut", delay: 0.1 }}
        className="text-4xl md:text-5xl font-extrabold text-black dark:text-white"
      >
        {children}
      </motion.h2>
    </div>
  );
}

export function BentoCard({ title, description, icon: Icon, delay = 0 }: any) {
  return (
    <motion.div
      initial={{ opacity: 0, scale: 0.95 }}
      whileInView={{ opacity: 1, scale: 1 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ delay, duration: 0.5, ease: "easeOut" }}
      whileHover={{ y: -5, scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
      className="glass-morphism p-8 rounded-3xl group cursor-default"
    >
      <div className="w-12 h-12 rounded-2xl bg-brand-primary/10 flex items-center justify-center mb-6 group-hover:bg-brand-primary transition-all">
        <Icon className="text-brand-primary group-hover:text-black dark:group-hover:text-black w-6 h-6 transition-colors" />
      </div>
      <h3 className="text-xl font-bold mb-3 text-black dark:text-white">{title}</h3>
      <p className="text-black/80 dark:text-white/60 leading-relaxed text-sm">{description}</p>
    </motion.div>
  );
}

const skills = [
  { name: "Generative AI & LLMs", level: "95%", icon: Brain },
  { name: "Data Analytics & Business Intelligence", level: "92%", icon: Database },
  { name: "Process Thinking & Systems Design", level: "88%", icon: Globe },
  { name: "Intelligent Automation", level: "94%", icon: Zap },
];

const valueCards = [
  {
    title: "Drive Revenue",
    description: "Identify sales trends, high-value customers, and cost leaks to improve profitability.",
    icon: TrendingUp
  },
  {
    title: "Improve Efficiency",
    description: "Automate reporting workflows and eliminate manual Excel-based processes.",
    icon: Zap
  },
  {
    title: "Reduce Risk",
    description: "Detect anomalies, data inconsistencies, and potential compliance issues early.",
    icon: ShieldCheck
  }
];

const projects = [
  {
    title: "AI Job Automation Agent",
    description: "End-to-end autonomous system leveraging LLMs to automate job matching, resume tailoring, and multi-channel recruiter outreach.",
    tags: ["Python", "LLM APIs", "Playwright", "Automation"],
    image: "https://images.unsplash.com/photo-1677442136019-21780ecad995?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Kisan Smart Agri App",
    description: "AI-driven agricultural assistant providing real-time crop advisory, weather intelligence, and mandi price tracking for regional farmers.",
    tags: ["Android", "Node.js", "AI Models", "AgriTech"],
    image: "https://images.unsplash.com/photo-1560493676-04071c5f467b?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Healthcare Management Super App",
    description: "Enterprise-grade multi-module hospital ERP system managing doctor workflows, pharmacy inventory, and electronic health records.",
    tags: ["Firebase", "Kotlin", "Node.js", "SaaS"],
    image: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "Android CI/CD Pipeline",
    description: "Automated DevOps workflow for Android build-to-deploy cycles using GitHub Actions, ensuring zero-configuration artifact management.",
    tags: ["DevOps", "GitHub Actions", "YAML", "CI/CD"],
    image: "https://images.unsplash.com/photo-1555949963-aa79dcee981c?auto=format&fit=crop&q=80&w=800",
  },
  {
    title: "BhaiBill : Your Billing App",
    description: "Business management suite featuring automated accounting, transaction tracking, and role-based secure access control.",
    tags: ["Android", "Fintech", "REST APIs", "Accounting"],
    image: "https://images.unsplash.com/photo-1554224155-6726b3ff858f?auto=format&fit=crop&q=80&w=800",
  }
];

const experiences = [
  {
    role: "Technical Trainer Consultant",
    company: "Coyolia Technologies",
    period: "Oct 2025 – Present",
    description: "Delivers structured technical training on Cloud Computing, AI, and Data Analytics. Designs practical learning materials and hands-on labs for real-world workflows.",
    logo: "/logos/coyolia.png",
    contributions: [
      "Curated and delivered advanced training batches on Cloud & AI engineering",
      "Simplified complex technical concepts for professionals across diverse industries",
      "Architected hands-on labs and simulations for production-grade environments"
    ],
    techStack: ["Python", "SQL", "GCP", "Data Analytics"],
    impact: "Improved learner performance and job readiness through targeted mentorship and curriculum optimization."
  },
  {
    role: "Co-Founder & CTO",
    company: "Qoumi Security Solutions (QSS)",
    period: "Aug 2023 – Sep 2025",
    description: "Drove company strategy with an innovation-first focus on Generative AI. Built strategic partnerships and AI-powered insights for enhanced security operations.",
    logo: "/logos/qss.png",
    contributions: [
      "Led cross-functional teams in fine-tuning and deploying AI/ML models",
      "Integrated AI-powered automation into core security solutions",
      "Engineered operational efficiency improvements through team-wide automation"
    ],
    techStack: ["Generative AI", "Automation", "Leadership", "AI Systems"],
    impact: "Positioned QSS as a trusted industry leader by delivering high-impact AI security insights."
  },
  {
    role: "Associate Consultant",
    company: "Capgemini",
    period: "Aug 2021 – May 2023",
    description: "Specialized in AI-driven migrations, large-scale analytics, and digital twin development for sustainability and e-commerce growth.",
    logo: "/logos/capgemini.png",
    contributions: [
      "Built a GPT-3 powered SAS-to-Python accelerator, cutting conversion time by 30%",
      "Analyzed e-commerce campaigns using BigQuery, boosting conversion rates by 15%",
      "Developed a Digital Twin for transport that reduced carbon emissions by 20%"
    ],
    techStack: ["Python", "SQL", "Looker", "Generative AI"],
    impact: "Delivered multi-million hour savings and measurable ROI across global analytics initiatives."
  },
  {
    role: "Software Engineer",
    company: "Young Innovation",
    period: "Jan 2019 – Jun 2021",
    description: "Built scalable CRM and web-based systems focused on customer engagement and operational workflows.",
    logo: "/logos/young-innovation.png",
    contributions: [
      "Developed flexible CRM systems with relationship and engagement tracking",
      "Designed customizable workflows and form-based systems for data capture",
      "Integrated web platforms with backend systems for seamless user interaction"
    ],
    techStack: ["CRM Systems", "Web Applications", "Data Tracking", "System Design"],
    impact: "Streamlined operational workflows and enhanced data capture through scalable system architectures."
  }
];

export function PortfolioSections() {
  return (
    <div className="relative z-10 space-y-32 pb-32">
      {/* About Section */}
      <section id="about" className="max-w-7xl mx-auto px-6 pt-20">
        <div className="grid md:grid-cols-2 gap-16 items-center">
          <div>
            <SectionTitle subtitle="About Me">Engineering Scalable Intelligence</SectionTitle>
            <p className="text-black dark:text-white/80 leading-relaxed text-lg mb-8">
              I am <span className="text-black dark:text-white font-semibold italic">S K Khaja Moinuddin</span>, a specialist in building intelligent automation, data-driven systems, and scalable architectures. 
              As a Co-Founder & CTO, I focus on the intersection of AI engineering and production-grade system design.
            </p>
            <div className="flex gap-4">
              <motion.a 
                href="https://lablab.ai/u/@skateeq/clbupgski00ek9c0sc7tm8glt"
                target="_blank"
                rel="noopener noreferrer"
                title="View Hackathon Certificate"
                aria-label="View Hackathon Certificate"
                whileHover={{ scale: 1.05, y: -5 }}
                whileTap={{ scale: 0.95 }}
                className="p-4 glass-morphism rounded-2xl flex-1 text-center cursor-pointer group/card relative border border-transparent hover:border-brand-primary/30 transition-all"
              >
                <ExternalLink className="absolute top-2 right-2 w-3 h-3 text-brand-primary opacity-0 group-hover/card:opacity-100 transition-opacity" />
                <p className="text-3xl font-black text-brand-primary">1st</p>
                <p className="text-xs uppercase tracking-tighter opacity-50 dark:opacity-50">Hackathon Winner</p>
              </motion.a>
              <div className="p-4 glass-morphism rounded-2xl flex-1 text-center">
                <p className="text-3xl font-black text-brand-secondary">7+</p>
                <p className="text-xs uppercase tracking-tighter opacity-50 dark:opacity-50">Years Experience</p>
              </div>
            </div>
          </div>
          <div className="grid grid-cols-2 gap-4">
            <BentoCard title="Scalability" description="Building systems that grow seamlessly with user needs." icon={Globe} delay={0.1} />
            <BentoCard title="Innovation" description="Leveraging Large Language Models for automated intelligence." icon={Brain} delay={0.2} />
          </div>
        </div>
      </section>

      {/* Skills Section */}
      <section id="stack" className="max-w-7xl mx-auto px-6 mt-12 mb-16">
        <SectionTitle subtitle="Excellence">Technical Stack</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {skills.map((skill, index) => (
            <motion.div 
              key={skill.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05 }}
              className="flex flex-col items-center justify-center text-center p-8 glass-morphism rounded-2xl border border-black/5 dark:border-white/5 bg-white/50 dark:bg-gray-900/50 transition-all duration-300 min-h-[200px]"
            >
              <div className="mb-4 p-4 rounded-xl bg-brand-primary/10 text-brand-primary">
                <skill.icon className="w-8 h-8" />
              </div>
              <h4 className="text-lg font-semibold text-black dark:text-white leading-tight">
                {skill.name}
              </h4>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Value I Create Section */}
      <section id="value" className="max-w-7xl mx-auto px-6 mt-16 mb-16">
        <SectionTitle subtitle="Impact">Value I Create</SectionTitle>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {valueCards.map((card, index) => (
            <motion.div
              key={card.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              whileHover={{ scale: 1.05, y: -5 }}
              className="p-6 bg-white dark:bg-gray-900 border border-gray-200 dark:border-gray-800 rounded-2xl shadow-sm hover:shadow-md transition-all duration-300 group"
            >
              <div className="mb-4 p-3 w-fit rounded-xl bg-brand-primary/5 text-brand-primary group-hover:bg-brand-primary group-hover:text-black dark:group-hover:text-black transition-colors">
                <card.icon className="w-6 h-6" />
              </div>
              <h4 className="text-xl font-bold mb-2 text-black dark:text-white">
                {card.title}
              </h4>
              <p className="text-black/80 dark:text-white/60 text-sm leading-relaxed">
                {card.description}
              </p>
            </motion.div>
          ))}
        </div>
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-50px" }}
          transition={{ duration: 0.8, ease: "easeOut" }}
          className="mt-12 p-8 glass-morphism rounded-[2.5rem] text-center border border-brand-primary/20"
        >
          <p className="text-xl md:text-2xl font-medium text-black/90 dark:text-white flex flex-col md:flex-row items-center justify-center gap-2">
            <BarChart3 className="text-brand-primary w-8 h-8" />
            <span className="italic">"I turn raw data into clear, actionable dashboards that show exactly where you’re making money and where you’re losing it."</span>
          </p>
        </motion.div>
      </section>

      {/* Projects Section */}
      <section id="projects" className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Portfolio">Featured Work</SectionTitle>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {projects.map((project, index) => (
            <motion.div 
              key={project.title}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ delay: index * 0.1, duration: 0.5, ease: "easeOut" }}
              className="group overflow-hidden rounded-[2.5rem] glass-morphism border-none"
            >
              <div className="relative aspect-video overflow-hidden">
                <img 
                  src={project.image} 
                  alt={project.title} 
                  loading="lazy"
                  className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-700 opacity-60 grayscale group-hover:grayscale-0 group-hover:opacity-100"
                />
                <div className="absolute inset-0 bg-brand-primary/20 opacity-0 group-hover:opacity-100 transition-opacity flex items-center justify-center gap-4">
                  <div className="px-4 py-2 bg-black dark:bg-white text-white dark:text-black rounded-full text-xs font-bold flex items-center gap-2">
                    <Eye className="w-4 h-4" />
                    View Details
                  </div>
                </div>
              </div>
              <div className="p-8">
                <h4 className="text-xl font-bold mb-3 text-black dark:text-white">{project.title}</h4>
                <p className="text-black/70 dark:text-white/50 text-sm mb-6 leading-relaxed">{project.description}</p>
                <div className="flex flex-wrap gap-2">
                  {project.tags.map(tag => (
                    <span key={tag} className="text-[10px] uppercase tracking-widest px-3 py-1 bg-black/5 dark:bg-white/5 rounded-full border border-black/5 dark:border-white/10 text-black/80 dark:text-white/60">
                      {tag}
                    </span>
                  ))}
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Experience Section */}
      <section id="experience" className="max-w-7xl mx-auto px-6">
        <SectionTitle subtitle="Journey">Professional Orbit</SectionTitle>
        <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 before:-translate-x-px md:before:ml-[50%] md:before:translate-x-0 before:h-full before:w-0.5 before:bg-gradient-to-b before:from-brand-primary before:via-brand-secondary before:to-transparent">
          {experiences.map((exp, index) => (
            <motion.div 
              key={exp.company}
              initial={{ opacity: 0, x: index % 2 === 0 ? -50 : 50 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ type: "spring", stiffness: 100, damping: 20, delay: index * 0.1 }}
              className={`relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group`}
            >
              {/* Dot */}
              <div className="flex items-center justify-center w-10 h-10 rounded-full border border-black/20 dark:border-white/20 glass-morphism bg-[var(--color-bg-current)] text-brand-primary absolute left-0 md:left-1/2 md:-ml-5 transition-transform group-hover:scale-125 z-10">
                <div className="w-2 h-2 bg-brand-primary rounded-full animate-pulse" />
              </div>
              
              {/* Content Card */}
              <div className="w-[calc(100%-4rem)] md:w-[45%] glass-morphism p-6 md:p-8 rounded-[2rem] ml-16 md:ml-0 relative overflow-hidden group/card">
                {/* Background Logo Watermark */}
                <div className="absolute bottom-2 right-4 md:bottom-4 md:right-8 flex items-center justify-center pointer-events-none z-0">
                  <img 
                    src={exp.logo} 
                    alt="" 
                    className="h-16 md:h-32 opacity-15 dark:opacity-20 grayscale object-contain group-hover/card:scale-110 group-hover/card:opacity-100 group-hover/card:grayscale-0 transition-all duration-500 blur-[1px] group-hover/card:blur-0 mix-blend-multiply dark:mix-blend-screen" 
                  />
                </div>
                
                <div className="relative z-10">
                  <span className="text-[10px] md:text-xs font-mono text-brand-primary mb-2 block uppercase tracking-widest">{exp.period}</span>
                  <h4 className="text-xl font-extrabold mb-1 text-black dark:text-white leading-tight">{exp.role}</h4>
                  <p className="text-black/60 dark:text-white/40 text-sm font-bold mb-4">{exp.company}</p>
                  <p className="text-black/80 dark:text-white/60 text-sm leading-relaxed mb-4">{exp.description}</p>
                  
                  {/* Contributions */}
                  <ul className="space-y-2 mb-6">
                    {exp.contributions.map((bullet, i) => (
                      <li key={i} className="flex items-start gap-2 text-xs md:text-sm text-black/70 dark:text-white/50">
                        <div className="w-1.5 h-1.5 rounded-full bg-brand-primary/40 mt-1.5 shrink-0" />
                        {bullet}
                      </li>
                    ))}
                  </ul>

                  {/* Impact Line */}
                  <p className="text-[10px] md:text-xs font-semibold text-brand-primary px-3 py-2 bg-brand-primary/5 rounded-lg border border-brand-primary/10 mb-6 italic">
                    Impact: {exp.impact}
                  </p>

                  {/* Tech Tags */}
                  <div className="flex flex-wrap gap-2">
                    {exp.techStack.map(tag => (
                      <span key={tag} className="text-[9px] md:text-[10px] font-bold uppercase tracking-wider px-2 py-1 bg-black/5 dark:bg-white/5 rounded-md border border-black/5 dark:border-white/10 text-black/60 dark:text-white/40">
                        {tag}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </section>

      {/* Collaborations Section */}
      <section id="collaborations" className="max-w-7xl mx-auto px-6 py-10">
        <div className="text-center mb-16">
          <motion.h3 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="text-sm font-mono uppercase tracking-[0.4em] text-black/60 dark:text-white/60 mb-4 font-bold"
          >
            Worked & Collaborated With
          </motion.h3>
          <motion.p 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-black/40 dark:text-white/40 text-xs"
          >
            Organizations and platforms I've worked with or built solutions for
          </motion.p>
        </div>
        
        <div className="flex flex-wrap items-center justify-center gap-10">
            {[
            { name: "Capgemini", logo: "/logos/capgemini.png", url: "https://capgemini.com" },
            { name: "AWS", logo: "/logos/aws.png", url: "https://aws.amazon.com" },
            { name: "Google Cloud", logo: "/logos/google-cloud.png", url: "https://cloud.google.com" },
            { name: "Cohere", logo: "/logos/cohere.png", url: "https://cohere.com" },
            { name: "Coyolia", logo: "/logos/coyolia.png", url: "https://coyolia.com" },
            { name: "Young Innovation", logo: "/logos/young-innovation.png", url: "#" },
            { name: "Ikatra", logo: "/logos/ikatra.png", url: "https://ikatra.in" },
            { name: "Qoumi Security Solutions", logo: "/logos/qss.png", url: "https://qoumisecurity.com/" }
          ].map((company, i) => (
            <motion.a
              key={company.name}
              href={company.url}
              target="_blank"
              rel="noopener noreferrer"
              title={company.name}
              initial={{ opacity: 0, y: 10 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.05, duration: 0.3 }}
              whileHover={{ scale: 1.1 }}
              className="group transition-all duration-300"
            >
              <img 
                src={company.logo}
                alt={company.name}
                loading="lazy"
                className="h-8 w-auto object-contain opacity-70 grayscale hover:opacity-100 hover:grayscale-0 transition-all duration-300 dark:invert"
                onError={(e) => {
                  e.currentTarget.style.display = 'none';
                  const parent = e.currentTarget.parentElement;
                  if (parent) {
                    const span = document.createElement('span');
                    span.className = "text-[10px] font-bold uppercase tracking-[0.2em] text-black/30 dark:text-white/20 group-hover:text-brand-primary transition-colors";
                    span.innerText = company.name;
                    parent.appendChild(span);
                  }
                }}
              />
            </motion.a>
          ))}
        </div>
        
        <motion.p 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ delay: 0.8 }}
          className="text-center mt-16 text-[10px] uppercase tracking-[0.2em] text-black/40 dark:text-white/20"
        >
          Including enterprise projects, consulting, and independent collaborations
        </motion.p>
      </section>

      {/* Contact Section */}
      <section id="contact" className="max-w-4xl mx-auto px-6 text-center">
          <SectionTitle subtitle="Connect">Let’s Build Together.</SectionTitle>
          <div className="glass-morphism p-10 md:p-16 rounded-[3rem] relative overflow-hidden">
            <div className="absolute top-0 right-0 w-32 h-32 bg-brand-primary/20 blur-[60px] rounded-full -mr-16 -mt-16" />
            <div className="relative z-10">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-green-500/10 border border-green-500/20 text-green-500 text-[10px] font-mono uppercase tracking-[0.2em] mb-8">
                <div className="w-1.5 h-1.5 bg-green-500 rounded-full animate-pulse" />
                Available for opportunities
              </div>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6 }}
              >
                <p className="text-black/80 dark:text-white/80 text-xl md:text-2xl italic max-w-2xl mx-auto mb-4 leading-relaxed">
                  Open to <span className="text-brand-primary font-bold not-italic">collaborations</span>, freelance work, hackathons, and full-time opportunities.
                </p>
                <p className="text-black/60 dark:text-white/60 text-sm mb-12 max-w-lg mx-auto">
                  Available for impactful projects in AI, Data Engineering, and Automation.
                </p>
              </motion.div>
              
              <div className="flex flex-wrap gap-6 justify-center items-center">
                {/* Email */}
                <div className="group relative">
                  <a 
                    href="mailto:atq.com@gmail.com" 
                    aria-label="Email"
                    className="w-14 h-14 glass-morphism rounded-2xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-500 hover:scale-110 transition-all duration-300 border border-black/5 dark:border-white/10 shadow-sm"
                  >
                    <Mail className="w-6 h-6" />
                  </a>
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl translate-y-2 group-hover:translate-y-0">
                    Email
                  </span>
                </div>

                {/* Phone */}
                <div className="group relative">
                  <a 
                    href="tel:+918867017559" 
                    aria-label="Phone"
                    className="w-14 h-14 glass-morphism rounded-2xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-green-500 hover:scale-110 transition-all duration-300 border border-black/5 dark:border-white/10 shadow-sm"
                  >
                    <Phone className="w-6 h-6" />
                  </a>
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl translate-y-2 group-hover:translate-y-0">
                    +91 88670 17559
                  </span>
                </div>

                {/* WhatsApp */}
                <div className="group relative">
                  <a 
                    href="https://wa.me/918867017559" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="WhatsApp"
                    className="w-14 h-14 glass-morphism rounded-2xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-green-600 hover:scale-110 transition-all duration-300 border border-black/5 dark:border-white/10 shadow-sm"
                  >
                    <MessageCircle className="w-6 h-6" />
                  </a>
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl translate-y-2 group-hover:translate-y-0">
                    WhatsApp
                  </span>
                </div>

                {/* LinkedIn */}
                <div className="group relative">
                  <a 
                    href="https://linkedin.com/in/atq-com/" 
                    target="_blank" 
                    rel="noopener noreferrer"
                    aria-label="LinkedIn"
                    className="w-14 h-14 glass-morphism rounded-2xl flex items-center justify-center text-gray-700 dark:text-gray-300 hover:text-blue-700 hover:scale-110 transition-all duration-300 border border-black/5 dark:border-white/10 shadow-sm"
                  >
                    <Linkedin className="w-6 h-6" />
                  </a>
                  <span className="absolute -top-12 left-1/2 -translate-x-1/2 text-[10px] font-black uppercase tracking-[0.2em] px-3 py-1.5 rounded-lg bg-black text-white dark:bg-white dark:text-black opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none whitespace-nowrap shadow-2xl translate-y-2 group-hover:translate-y-0">
                    LinkedIn
                  </span>
                </div>
              </div>
            </div>
          </div>
      </section>
    </div>
  );
}
