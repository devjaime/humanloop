export const content = {
  // Navbar
  nav: {
    howItWorks: "How It Works",
    skills: "Skills",
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
};
