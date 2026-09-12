export const content = {
  // Navbar
  nav: {
    howItWorks: "How It Works",
    skills: "Skills",
    tools: "Tools",
    architecture: "Architecture",
    ethics: "Ethics",
    ctaOperator: "I'm an Operator",
    ctaIntegrate: "Integrate my AI",
  },

  // Hero
  hero: {
    badge: "HITL ORCHESTRATION PLATFORM",
    title1: "AI that",
    titleHighlight1: "orchestrates",
    title2: "Humans that",
    titleHighlight2: "execute",
    subtitle: "Connect your AI agents to human operators for real-world tasks. MCP architecture, Skills system, and fair compensation.",
    ctaPrimary: "I'm an Operator",
    ctaSecondary: "Integrate my AI",
    terminalTitle: "humanloop-orchestrator",
    flowLabel: "Real-time orchestration flow",
  },

  // How It Works
  howItWorks: {
    badge: "HITL FLOW",
    title1: "How",
    titleHighlight: "HumanLoop",
    title2: "works",
    subtitle: "6-step flow from event detection to human execution with continuous feedback.",
    steps: [
      {
        number: "01",
        title: "AI detects event",
        description: "IoT sensors, APIs or scheduled triggers initiate an event requiring physical action.",
      },
      {
        number: "02",
        title: "MCP agents analyze",
        description: "TaskAgent, RoutingAgent and ValidationAgent process context and requirements.",
      },
      {
        number: "03",
        title: "Skills process",
        description: "Specialized Skills (Delivery, Legal, Diagnostic) prepare instructions and optimal routes.",
      },
      {
        number: "04",
        title: "HITL decision",
        description: "Human operator receives suggestion with full context. They validate, adjust or reject.",
      },
      {
        number: "05",
        title: "Operator routing",
        description: "Task is assigned to the most suitable operator based on skills, location and availability.",
      },
      {
        number: "06",
        title: "Execution + Feedback",
        description: "Operator executes with autonomy. Provides feedback that improves future orchestrations.",
      },
    ],
    loopLabel: "Continuous improvement loop",
  },

  // Skills/Services
  skills: {
    badge: "SKILL ECOSYSTEM",
    title1: "Cognitive capabilities",
    titleHighlight: "with human execution",
    subtitle: "Each Skill combines AI cognitive processing with a human operator who provides judgment, physical presence, and professional execution.",
    items: [
      {
        title: "Communication & Presence",
        skillTag: "EventSkill + PresenterOperator",
        description: "Actors, presenters and spokespersons for events, launches or corporate representations.",
        features: ["Product launches", "Brand representation", "Corporate events"],
      },
      {
        title: "Legal & Document Management",
        skillTag: "LegalSkill + LawyerOperator",
        description: "Document signing, notarization, legal representation and certified procedures.",
        features: ["Document signing", "Legal representation", "Notary procedures"],
      },
      {
        title: "Logistics & Deliveries",
        skillTag: "DeliverySkill + CourierOperator",
        description: "Last-mile delivery, shopping, route-optimized courier with real-time tracking.",
        features: ["Last-mile delivery", "In-person shopping", "Route optimization"],
      },
      {
        title: "Diagnostics & Plumbing",
        skillTag: "DiagnosticSkill + PlumberOperator",
        description: "Certified plumber with SEC certification for installations, repairs and diagnostics.",
        features: ["Leak detection", "Gas installations", "Preventive maintenance"],
      },
      {
        title: "Planning & Electrical",
        skillTag: "PlanningSkill + ElectricianOperator",
        description: "SEC certified electrical work: installations, repairs and load planning.",
        features: ["Electrical installations", "Safety inspections", "Load planning"],
      },
      {
        title: "In-Person Management",
        skillTag: "AssistantSkill + AssistantOperator",
        description: "Public procedures, banking, queuing and presence-requiring management.",
        features: ["Public procedures", "Bank management", "Queue service"],
      },
      {
        title: "Translation & Mediation",
        skillTag: "TranslationSkill + InterpreterOperator",
        description: "Simultaneous and consecutive interpretation, document translation with cultural context.",
        features: ["Simultaneous interpretation", "Legal translation", "Cultural mediation"],
      },
      {
        title: "Visual Content",
        skillTag: "ContentSkill + PhotographerOperator",
        description: "Professional photography and videography for products, events and real estate.",
        features: ["Product photography", "Event coverage", "Editing and delivery"],
      },
    ],
    feedbackLabel: "Continuous feedback",
    feedbackItems: [
      "Execution metrics",
      "Operator satisfaction",
      "Client NPS",
      "Time optimization",
    ],
    ctaOperator: "Join as Operator",
    ctaIntegrate: "Integrate into my AI",
  },

  // Scenarios
  scenarios: {
    badge: "REAL SCENARIOS",
    title1: "AI + Humans",
    titleHighlight: "in action",
    subtitle: "Real examples of how agents and operators collaborate to solve real-world situations.",
    items: [
      {
        agent: "PropertyAgent",
        action: "Urgent check-in Las Condes: guest arrives in 2h, needs cleaning + key handover",
        operator: "CleaningOperator",
        response: "On my way. Deep cleaning + fresh towels. 45min ETA.",
        skill: "CleaningSkill",
        feedback: "Client rated 5/5. Optimal cleaning route recorded.",
      },
      {
        agent: "LegalAgent",
        action: "Contract requires signature before 18:00 in Santiago Centro. Digital signature rejected.",
        operator: "NotaryOperator",
        response: "At notary. Document verified and signed. Digital copy attached.",
        skill: "LegalSkill",
        feedback: "Notary express process documented. Alternative suggested for future.",
      },
      {
        agent: "LogisticsAgent",
        action: "High-value medical package needs certified delivery to Providencia clinic.",
        operator: "CertifiedCourier",
        response: "Package delivered. Recipient signature + photographic evidence.",
        skill: "DeliverySkill",
        feedback: "Cold chain maintained. Route optimized for future deliveries.",
      },
      {
        agent: "MaintenanceAgent",
        action: "Water leak detected in Vitacura building. Requires immediate plumber.",
        operator: "SECPlumber",
        response: "Leak located and repaired. Preventive replacement of adjacent valve.",
        skill: "DiagnosticSkill",
        feedback: "Diagnostic pattern recorded. Predictive alert updated.",
      },
      {
        agent: "AirbnbCleaningAgent",
        action: "Checkout detected at property SR-CZ-57. License plate detected leaving. Cleaning service hired. Notifying team...",
        operator: "CleaningTeamOperator",
        response: "Received. Team on the way. 20min ETA to property. Starting deep cleaning.",
        skill: "CleaningServiceSkill",
        feedback: "Cleaning completed. Property ready for next guest. Photos attached.",
      },
    ],
    legend: {
      agent: "AI Agent",
      operator: "Operator",
      feedback: "Feedback Loop",
    },
  },

  // MCP Section
  mcp: {
    badge: "TECHNICAL ARCHITECTURE",
    title1: "Model Context Protocol",
    titleHighlight: "+ Skills",
    subtitle: "4-layer architecture enabling AI agents to orchestrate real-world tasks through human operators.",
    layers: [
      {
        name: "Orchestration",
        description: "HumanLoop Orchestrator",
        detail: "Event detection, task routing and priority management",
      },
      {
        name: "MCP Agents",
        description: "TaskAgent | RoutingAgent | ValidationAgent | FeedbackAgent",
        detail: "Specialized agents coordinating via Model Context Protocol",
      },
      {
        name: "Skills",
        description: "DeliverySkill | LegalSkill | DiagnosticSkill | EventSkill",
        detail: "Reusable cognitive capabilities with execution logic",
      },
      {
        name: "Operators",
        description: "Human execution with professional judgment",
        detail: "Autonomous operators who validate, execute and provide feedback",
      },
    ],
    codeTitle: "Integration Example",
    docsButton: "MCP Documentation",
    sdkButton: "Download SDK",
  },

  // Ethics Framework
  ethics: {
    badge: "ETHICAL FRAMEWORK",
    title1: "Principles",
    titleHighlight: "of collaboration",
    subtitle: "HumanLoop operates under a strict ethical framework that ensures humans maintain control, autonomy and fair compensation.",
    principles: [
      {
        title: "Human supervision always",
        description: "Every AI decision passes through a human operator who has veto power. The AI suggests, the human decides.",
        highlight: "Veto power",
      },
      {
        title: "Explicit human responsibility",
        description: "Operators are not simple executors. They have full responsibility for decisions and maintain professional judgment.",
        highlight: "Professional judgment",
      },
      {
        title: "AI as assistant, not boss",
        description: "The AI orchestrates and suggests, but never orders. The operator decides how, when and if they execute.",
        highlight: "Suggest, not order",
      },
      {
        title: "Bidirectional collaboration",
        description: "Operator feedback directly improves AI. It's not a one-way system: humans train and correct the AI.",
        highlight: "Humans train AI",
      },
      {
        title: "Amplification, not replacement",
        description: "AI amplifies human capabilities, doesn't replace them. The goal is to enhance human work, not automate it.",
        highlight: "Enhance work",
      },
      {
        title: "Fair and direct compensation",
        description: "Operators receive direct payment for their work. 85% goes directly to them. Compensation reflects the real value of their skills.",
        highlight: "85% direct",
      },
    ],
    commitment: {
      title: "Our commitment",
      description: "HumanLoop is committed to developing AI that respects and amplifies human work. We are building technology that creates fair opportunities, not systems that exploit or replace.",
    },
  },

  // Pricing
  pricing: {
    badge: "COMPENSATION MODEL",
    title1: "Fair compensation",
    titleHighlight: "for real work",
    subtitle: "Operators receive direct compensation for their work, experience and professional judgment. Transparent and proportional payment.",
    categories: [
      {
        category: "Basic Operators",
        icon: "🚴",
        description: "Physical execution and logistics tasks",
        services: [
          { name: "Delivery Operator", price: "5,000 - 15,000", unit: "per delivery" },
          { name: "Management Operator", price: "15,000 - 25,000", unit: "per hour" },
          { name: "Shopping Operator", price: "8,000 - 12,000", unit: "per task" },
          { name: "Procedures Operator", price: "12,000 - 20,000", unit: "per procedure" },
        ],
      },
      {
        category: "Certified Operators",
        icon: "🔧",
        description: "Professionals with verified certifications",
        services: [
          { name: "SEC Plumber", price: "20,000 - 45,000", unit: "per visit" },
          { name: "SEC Electrician", price: "18,000 - 50,000", unit: "per visit" },
          { name: "Professional Photographer", price: "22,000 - 60,000", unit: "per hour" },
          { name: "Bilingual Interpreter", price: "30,000 - 70,000", unit: "per hour" },
        ],
      },
      {
        category: "Expert Operators",
        icon: "⚖️",
        description: "Professionals with specialized judgment",
        services: [
          { name: "Corporate Presenter", price: "25,000 - 80,000", unit: "per hour" },
          { name: "Licensed Lawyer", price: "45,000 - 120,000", unit: "per task" },
          { name: "Executive Representative", price: "35,000 - 90,000", unit: "per meeting" },
          { name: "Multidisciplinary Team", price: "150,000+", unit: "per project" },
        ],
      },
    ],
    payment: {
      title: "Direct payment to operator",
      description: "The platform ensures 85% of payment goes directly to the operator who executes the task. 15% covers operations, insurance and support. The operator maintains autonomy over how to execute the work.",
      methods: ["Bank transfer", "Mercado Pago", "RUT Account", "Immediate payment"],
    },
    note: "Compensation ranges reflect experience, certifications and task complexity. Operators have the right to negotiate based on specific assignment conditions.",
  },

  // Pilot Payment
  pilotPayment: {
    badge: "PILOT PROGRAM - JOIN TODAY",
    title1: "Become a founding partner of",
    titleHighlight: "HumanLoop",
    subtitle: "Join the pilot and be the first to use our platform. Lifetime exclusive pricing + equity in the success. This is your chance to be an early stakeholder.",
    programTitle: "Founder Pilot - Only 50 spots",
    programDescription: "For just $50 USD you get lifetime access to HumanLoop with special prices. Your feedback shapes the final product. This is your opportunity to be an early stakeholder.",
    features: [
      "✅ Lifetime access to the platform",
      "✅ Special prices locked forever",
      "✅ Your name on the founders page",
      "✅ Priority access to new skills",
      "✅ Direct chat with founders",
      "✅ Participation in product decisions",
    ],
    selectAmount: "Select your contribution:",
    pilotFee: "Become Founder - $50 USD",
    tip: "Support the Project",
    tipDescription: "Any amount helps us grow",
    transparencyTitle: "Transparent Investment",
    transparencyDescription: "Your investment goes directly to product development. No middlemen, no hidden costs. You'll receive weekly progress updates.",
    alternativeTitle: "Other Payment Methods",
    alternativeMethods: ["Mercado Pago", "Bank Transfer", "Crypto", "Wire Transfer"],
    alternativeNote: "Contact us for wire transfers or crypto payments. USDT, BTC, ETH accepted.",
    trustBadges: [
      { icon: "🔒", text: "Secure PayPal payments" },
      { icon: "📋", text: "Receipts for all payments" },
      { icon: "💬", text: "Direct support channel" },
    ],
  },

  // WebMCP Services
  webMCP: {
    badge: "WEBMCP INTEGRATION",
    title1: "Real Services",
    titleHighlight: "via WebMCP",
    subtitle: "Connect your AI agents to real-world services through WebMCP. Certified professionals, real-time scheduling, and transparent pricing.",
    integrationTitle: "How WebMCP Integration Works",
    integrate: "Integrate",
    ctaText: "Ready to connect your AI to real services?",
    ctaIntegrate: "Start Integration",
    viewDocs: "View MCP Docs",
    mcpTools: "MCP Tools",
    operator: "Operator",
  },

  // Concept Banner
  concept: {
    badge: "PROOF OF CONCEPT",
    title1: "This is a",
    titleHighlight: "proof of concept",
    subtitle: {
      part1: "HumanLoop.cl is a",
      highlight: "HITL architecture experiment",
      part2: "exploring how AI agents can collaborate with humans through intelligent orchestration, without replacing human work.",
    },
    readVision: "Read full vision",
    hideVision: "Hide vision",
    visionPoints: [
      {
        title: "Amplification, not automation",
        text: "AIs can process data, generate content and coordinate tasks. But physical actions, professional judgment and human presence are irreplaceable. HumanLoop amplifies human capabilities with AI, doesn't replace them.",
        icon: "🚀",
      },
      {
        title: "Human-in-the-Loop as architecture",
        text: "HITL is not a limitation: it's a design principle. Human operators aren't simple executors of AI instructions. They're professionals with judgment who validate, correct and improve system suggestions.",
        icon: "🔄",
      },
      {
        title: "MCP as orchestration layer",
        text: "Model Context Protocol enables AI agents to coordinate complex tasks. In HumanLoop, AI orchestrates and plans. Humans decide and execute. Collaboration is bidirectional: human feedback improves AI.",
        icon: "🌉",
      },
      {
        title: "Shared skills, human judgment",
        text: "Skills are reusable cognitive capabilities: route optimization, document analysis, diagnostics. But the human operator provides local context, field experience and judgment no algorithm can replicate.",
        icon: "🧠",
      },
      {
        title: "Chile as starting point",
        text: "This concept is contextualized in Chile: with real communes, CLP prices, and local services. Because AI-human collaboration must be thought from real contexts, not just Silicon Valley.",
        icon: "🇨🇱",
      },
    ],
    finalNote: {
      line1: "This is a proof of concept of HITL architecture.",
      line2: "Operators maintain autonomy and professional judgment.",
      line3: "AI amplifies. Humans decide.",
    },
  },

  // Footer
  footer: {
    brand: {
      description: "HITL orchestration platform connecting AI agents with human operators for real-world tasks.",
    },
    skills: {
      title: "AVAILABLE SKILLS",
      items: [
        "Communication & Presence",
        "Legal & Document Management",
        "Logistics & Deliveries",
        "Diagnostics & Plumbing",
        "Planning & Electrical",
        "In-Person Management",
        "Translation & Mediation",
        "Visual Content",
      ],
    },
    developers: {
      title: "FOR DEVELOPERS",
      items: [
        "MCP Documentation",
        "REST API v1",
        "TypeScript SDK",
        "Python SDK",
        "Webhooks & Events",
        "Test Sandbox",
        "API Status",
        "Changelog",
      ],
    },
    about: {
      title: "ABOUT THE PROJECT",
      items: [
        "Ethical Framework",
        "HITL Architecture",
        "Model Context Protocol",
        "AI + Human Collaboration",
        "For Operators",
        "For AI Agents",
        "Contact",
        "GitHub",
      ],
    },
    bottom: {
      tagline: "HITL orchestration for AI agents",
      madeWith: "Made with",
      collaboration: "collaboration",
      inChile: "in Chile",
      humans: "Humans",
    },
    disclaimer: "HumanLoop.cl is a proof of concept of Human-in-the-Loop architecture. The platform demonstrates how AI agents can orchestrate tasks while human operators maintain autonomy, judgment and responsibility over execution. AI amplifies human work, doesn't replace it.",
  },

  // Pilot Skills
  pilotSkills: {
    badge: "PILOT SKILLS - LIVE NOW",
    title1: "Real Skills,",
    titleHighlight: "Real Services",
    subtitle: "These skills are available now. Connect AI orchestration with human operators for physical services in Santiago, Chile.",
    compensation: "Operator Compensation:",
    ctaText: "Join as an operator or integrate these skills into your AI agent.",
    ctaOperator: "Join as Operator",
    ctaIntegrate: "Integrate into my AI",
    skills: [
      {
        title: "Business Consulting",
        description: "Connect with a professional software engineer for in-person consulting sessions. Technical translation, architecture consulting, project scoping, and risk assessment.",
        features: ["Technical Translation", "Architecture Consulting", "Project Scoping", "Due Diligence"],
        example: {
          input: "/business-consultant Explain microservices to investors",
          output: "✅ Software Engineer assigned. Session confirmed: Tomorrow 10:00, Las Condes. Deliverables: Technical one-pager + architecture diagram.",
        },
      },
      {
        title: "IoT & Security Installation",
        description: "Professional installation of security cameras, smart home devices, and IoT sensors. Certified technicians with SEC authorization for electrical work.",
        features: ["IP Cameras", "NVR/DVR Setup", "Smart Locks", "IoT Sensors"],
        example: {
          input: "/iot-security-installer 4 cameras + NVR in Providencia",
          output: "✅ IoT Technician available. Visit scheduled: Friday 14:00. Quote: $180,000 CLP (4 IP cameras + 2TB NVR + installation).",
        },
      },
    ],
  },

  // Tech Architecture
  techArch: {
    badge: "OPERATOR PLATFORM",
    title1: "Web or Mobile?",
    titleHighlight: "Technical Analysis",
    subtitle: "Choosing the right platform for operators: PWA vs Native App with real-time WebSocket communication.",
    tabs: {
      comparison: "Comparison",
      pwa: "PWA Details",
      websocket: "WebSocket Demo",
    },
    pwa: {
      recommended: "RECOMMENDED",
      techStack: "Tech Stack",
      title: "Progressive Web App for Operators",
      pros: [
        "Single codebase for web + mobile",
        "No app store approval needed",
        "Instant updates without user action",
        "Works offline with cached data",
        "Push notifications supported",
        "Lower development cost",
        "Easy onboarding via URL",
      ],
      features: [
        {
          icon: "📶",
          title: "Offline First",
          description: "Service workers cache tasks and sync when connection returns.",
        },
        {
          icon: "🔔",
          title: "Push Notifications",
          description: "Real-time alerts for new tasks, status updates, and messages.",
        },
        {
          icon: "📍",
          title: "GPS Tracking",
          description: "Background location for route optimization and ETA updates.",
        },
      ],
    },
    native: {
      alternative: "ALTERNATIVE",
      techStack: "Tech Stack",
      cons: [
        "Separate iOS and Android codebases",
        "App store review delays (1-7 days)",
        "Users must update manually",
        "Higher development cost",
        "Complex deployment pipeline",
      ],
    },
    websocket: {
      title: "Real-Time Communication",
      features: [
        {
          icon: "⚡",
          title: "Instant Updates",
          description: "Bidirectional communication for task assignments and status changes.",
        },
        {
          icon: "📍",
          title: "Live Tracking",
          description: "Real-time operator location for clients and dispatchers.",
        },
        {
          icon: "💬",
          title: "In-App Chat",
          description: "Direct messaging between operators, clients, and AI agents.",
        },
        {
          icon: "🔄",
          title: "Auto Reconnect",
          description: "Automatic reconnection with message queue for offline periods.",
        },
      ],
    },
    recommendation: {
      title: "Our Recommendation",
      description: "PWA with WebSocket provides the best balance of functionality, cost, and operator experience. Easy onboarding, instant updates, and real-time communication without app store friction.",
    },
  },

  status: {
    title: "Project status:",
    body: "HumanLoop is in development. MCP services (plumbing, electrical, and others) are a vision of what we want to build. Join the waitlist to be among the first when we launch. Want to be an operator?",
    contact: "Contact us",
  },

  partners: {
    title: "Companies and organizations that trust us",
    cta: "Want to be a partner?",
    contact: "Contact us",
    items: [
      { name: "SEC", type: "Certification" },
      { name: "CChC", type: "Construction" },
      { name: "CMP", type: "Plumbing" },
      { name: "Colegio de Abogados", type: "Legal" },
      { name: "Cruz del Sur", type: "Logistics" },
      { name: "MINEDUC", type: "Education" },
    ],
  },

  revenue: {
    badge: "EARN MONEY",
    title1: "Earn income",
    titleHighlight: "with your expertise",
    subtitle: "Become a HumanLoop operator. Earn money as your own boss, using your knowledge and experience.",
    stats: [
      { label: "Average income / month", value: "$450,000 CLP" },
      { label: "Jobs completed", value: "12,500+" },
      { label: "Active operators", value: "150+" },
      { label: "Monthly growth", value: "+23%" },
    ],
    steps: [
      { step: "1", title: "Requests come to you", description: "Clients need services and our AI routes them to you by specialty and availability." },
      { step: "2", title: "You accept and execute", description: "You review the details, accept the job, and execute. We coordinate the rest." },
      { step: "3", title: "You get paid", description: "Automatic payment in 24–48 hours. No chasing, no friction." },
    ],
    ctaOperator: "Become an Operator",
    ctaHow: "How it works",
    footer: "Guaranteed payments • No unfair competition • 24/7 support",
  },

  plans: {
    badge: "PRICING",
    title1: "Flexible",
    titleHighlight: "plans",
    subtitle: "Pick the plan that fits. Change whenever you want.",
    monthly: "Monthly",
    annual: "Annual",
    annualSave: "-20%",
    saveYear: "Save 20% yearly",
    popular: "MOST POPULAR",
    trust: ["Secure payments", "Cancel anytime", "500+ active operators", "4.9/5 rating"],
    waitlistTitle: "Join the waitlist",
    waitlistSubtitle: "Be among the first to get access",
    waitlistName: "Your name",
    waitlistEmail: "Your email",
    waitlistSubmit: "Join the waitlist",
    waitlistDoneTitle: "You're in!",
    waitlistDoneBody: "We'll let you know when we launch. Thanks for your interest in HumanLoop.",
    items: [
      {
        name: "starter",
        price: 0,
        period: "free",
        icon: "🌱",
        title: "Starter",
        description: "Perfect to try the platform",
        features: ["3 basic MCP skills", "10 interactions/month", "Email support", "Basic documentation"],
        cta: "Start free",
        popular: false,
      },
      {
        name: "pro",
        price: 29,
        period: "USD/mo",
        icon: "🚀",
        title: "Professional",
        description: "For independent professionals",
        features: ["All MCP skills", "100 interactions/month", "Priority support", "API access", "Workflow customization", "Basic analytics"],
        cta: "Start 7-day trial",
        popular: true,
      },
      {
        name: "enterprise",
        price: 99,
        period: "USD/mo",
        icon: "⚡",
        title: "Enterprise",
        description: "For teams and companies",
        features: ["Everything in Pro", "Unlimited interactions", "Dedicated 24/7 support", "Multi-user", "Custom integrations", "Guaranteed SLA", "Training included"],
        cta: "Contact sales",
        popular: false,
      },
    ],
  },

  maritime: {
    badge: "New vertical",
    title: "Humanloop Maritime",
    subtitle: "Certified marine technicians when you need them. AI that orchestrates, humans that execute at sea.",
    problemTitle: "The problem",
    problem1: "The maritime industry depends on critical equipment (Furuno radars, GMDSS, AIS, GPS, echosounders) that requires certified technicians for install, maintenance, and repair.",
    problem2: "Finding a specialist today is slow, opaque, and depends on informal networks.",
    cards: [
      { icon: "📡", title: "Radar systems", text: "FAR-1523, FAR-1518, FAR-2127 — install, calibration, and maintenance.", tags: ["Furuno", "Raymarine", "JRC"] },
      { icon: "📻", title: "GMDSS & VHF/HF", text: "SOLAS-certified maritime communications systems.", tags: ["EPIRB", "SART", "VHF", "HF"] },
      { icon: "🧭", title: "Navigation & AIS", text: "GPS, navigation, AIS transponders — calibration and diagnostics.", tags: ["GP-170", "AIS", "NAV"] },
    ],
    archTitle: "HITL architecture",
    stackTitle: "Technical stack",
    stack: [
      { name: "zvec", text: "Vector search on SQLite" },
      { name: "LangGraph", text: "Agent orchestration" },
      { name: "MCP", text: "Model Context Protocol" },
      { name: "RAG", text: "Retrieval Augmented Generation" },
      { name: "PostgreSQL", text: "Primary database" },
    ],
    revenueTitle: "Revenue model",
    revenue: [
      { name: "Tech Pro:", text: "US$29/mo + 15% commission" },
      { name: "Tech Enterprise:", text: "US$99/mo + 15%" },
      { name: "85%", text: "of compensation goes to the technician" },
      { name: "Furuno", text: "present in 150+ countries" },
    ],
    ctaQuestion: "Are you a certified marine technician? Do you run a maritime agency?",
    ctaTech: "Become a marine technician",
    ctaRead: "Read more",
  },

  tools: {
    badge: "ECOSYSTEM TOOLS",
    title1: "Tools in the",
    titleHighlight: "HumanLoop stack",
    subtitle: "HumanLoop orchestrates humans in the real world. Companion tools stay local-first for models and code agents.",
    items: [
      {
        name: "HumanLoop",
        tag: "HITL orchestration",
        description: "AI agents plan. Verified humans execute. MCP + Skills for plumbing, logistics, legal, and more in Chile.",
        href: "https://humanloop.cl",
        cta: "This site",
      },
      {
        name: "Pudu-AI",
        tag: "Local AI lab",
        description: "Local-first hardware benchmarking and Agent Lab: deterministic repo search (rg + ast-grep), no invented metrics. Complements HumanLoop when the work is code, not the physical world.",
        href: "https://github.com/devjaime/pudu-ai",
        cta: "GitHub",
      },
    ],
  },

  webMCPServices: [
    {
      icon: "🔧",
      title: "SEC-certified plumbing",
      description: "Connect your AI to certified plumbers. Remote diagnosis, automatic quotes, and smart scheduling.",
      features: ["Leak diagnosis by video", "Automatic quote by issue", "Real-time availability", "Verified SEC certification"],
      mcpTools: ["plumbing.diagnose", "plumbing.quote", "plumbing.schedule", "plumbing.verify_sec"],
      price: "$20,000 - $45,000 CLP",
    },
    {
      icon: "⚡",
      title: "SEC electrical",
      description: "Certified electrical install and repair. Safety and regulatory compliance.",
      features: ["Electrical safety inspections", "Load planning", "Installation certification", "Quotes by job type"],
      mcpTools: ["electric.verify_permit", "electric.inspect", "electric.plan_load", "electric.certify"],
      price: "$18,000 - $50,000 CLP",
    },
    {
      icon: "🚚",
      title: "Logistics & deliveries",
      description: "Last mile with live tracking. In-person shopping and optimized delivery.",
      features: ["GPS-optimized routing", "In-store shopping", "Cold chain for medicines", "Photo/video evidence"],
      mcpTools: ["logistics.route", "logistics.track", "logistics.purchase", "logistics.evidency"],
      price: "$5,000 - $15,000 CLP",
    },
    {
      icon: "📋",
      title: "Legal procedures",
      description: "Notaries, signatures, and legal representation. Certified paperwork.",
      features: ["Notarial document signing", "Identity verification", "Procedure legalization", "Certified digital copy"],
      mcpTools: ["legal.sign", "legal.verify_identity", "legal.notarize", "legal.certify_copy"],
      price: "$45,000 - $120,000 CLP",
    },
    {
      icon: "🏠",
      title: "Home cleaning",
      description: "Professional cleaning for homes and offices. Supplies included.",
      features: ["Deep general clean", "Move-out cleaning", "Hourly or contract", "Eco products available"],
      mcpTools: ["cleaning.home", "cleaning.deep", "cleaning.contract", "cleaning.eco"],
      price: "$15,000 - $35,000 CLP",
    },
    {
      icon: "🎨",
      title: "Painting & décor",
      description: "Professional interior and exterior painters. Quote by m².",
      features: ["Interior/exterior paint", "Surface prep", "Color advice", "Work warranty"],
      mcpTools: ["paint.interior", "paint.exterior", "paint.quote", "paint.colors"],
      price: "$25,000 - $80,000 CLP",
    },
    {
      icon: "🌿",
      title: "Gardening & landscaping",
      description: "Garden maintenance and landscape design. Seasonal care and more.",
      features: ["Lawn mowing", "Tree pruning", "Garden design", "Automated irrigation"],
      mcpTools: ["garden.mow", "garden.prune", "garden.design", "garden.irrigation"],
      price: "$20,000 - $60,000 CLP",
    },
  ],
};
