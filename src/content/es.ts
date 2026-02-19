export const content = {
  // Navbar
  nav: {
    howItWorks: "Cómo Funciona",
    skills: "Skills",
    architecture: "Arquitectura",
    ethics: "Ética",
    ctaOperator: "Soy Operador",
    ctaIntegrate: "Integrar mi IA",
  },

  // Hero
  hero: {
    badge: "PLATAFORMA DE ORQUESTACIÓN HITL",
    title1: "IA que",
    titleHighlight1: "orquesta",
    title2: "Humanos que",
    titleHighlight2: "ejecutan",
    subtitle: "Conecta tus agentes de IA con operadores humanos para tareas del mundo real. Arquitectura MCP, sistema de Skills y compensación justa.",
    ctaPrimary: "Soy Operador",
    ctaSecondary: "Integrar mi IA",
    terminalTitle: "humanloop-orchestrator",
    flowLabel: "Flujo de orquestación en tiempo real",
  },

  // How It Works
  howItWorks: {
    badge: "FLUJO HITL",
    title1: "Cómo funciona",
    titleHighlight: "HumanLoop",
    title2: "",
    subtitle: "Flujo de 6 pasos desde la detección del evento hasta la ejecución humana con feedback continuo.",
    steps: [
      {
        number: "01",
        title: "IA detecta evento",
        description: "Sensores IoT, APIs o triggers programados inician un evento que requiere acción física.",
      },
      {
        number: "02",
        title: "Agentes MCP analizan",
        description: "TaskAgent, RoutingAgent y ValidationAgent procesan contexto y requerimientos.",
      },
      {
        number: "03",
        title: "Skills procesan",
        description: "Skills especializados (Delivery, Legal, Diagnóstico) preparan instrucciones y rutas óptimas.",
      },
      {
        number: "04",
        title: "Decisión HITL",
        description: "El operador humano recibe la sugerencia con contexto completo. Valida, ajusta o rechaza.",
      },
      {
        number: "05",
        title: "Enrutamiento a operador",
        description: "La tarea se asigna al operador más adecuado según skills, ubicación y disponibilidad.",
      },
      {
        number: "06",
        title: "Ejecución + Feedback",
        description: "El operador ejecuta con autonomía. Provee feedback que mejora futuras orquestaciones.",
      },
    ],
    loopLabel: "Loop de mejora continua",
  },

  // Skills/Services
  skills: {
    badge: "ECOSISTEMA DE SKILLS",
    title1: "Capacidades cognitivas",
    titleHighlight: "con ejecución humana",
    subtitle: "Cada Skill combina procesamiento cognitivo de IA con un operador humano que aporta criterio, presencia física y ejecución profesional.",
    items: [
      {
        title: "Comunicación & Presencia",
        skillTag: "EventSkill + PresenterOperator",
        description: "Actores, presentadores y voceros para eventos, lanzamientos o representación corporativa.",
        features: ["Lanzamientos de producto", "Representación de marca", "Eventos corporativos"],
      },
      {
        title: "Gestión Legal & Documental",
        skillTag: "LegalSkill + LawyerOperator",
        description: "Firma de documentos, notarías, representación legal y trámites certificados.",
        features: ["Firma de documentos", "Representación legal", "Trámites notariales"],
      },
      {
        title: "Logística & Entregas",
        skillTag: "DeliverySkill + CourierOperator",
        description: "Delivery last-mile, compras, mensajería con rutas optimizadas y tracking en tiempo real.",
        features: ["Entregas last-mile", "Compras presenciales", "Optimización de rutas"],
      },
      {
        title: "Diagnóstico & Gasfitería",
        skillTag: "DiagnosticSkill + PlumberOperator",
        description: "Gasfiter certificado SEC para instalaciones, reparaciones y diagnóstico de sistemas.",
        features: ["Detección de filtraciones", "Instalaciones de gas", "Mantención preventiva"],
      },
      {
        title: "Planificación & Electricidad",
        skillTag: "PlanningSkill + ElectricianOperator",
        description: "Trabajo eléctrico certificado SEC: instalaciones, reparaciones y planificación de cargas.",
        features: ["Instalaciones eléctricas", "Inspecciones de seguridad", "Planificación de carga"],
      },
      {
        title: "Gestión Presencial",
        skillTag: "AssistantSkill + AssistantOperator",
        description: "Trámites públicos, bancarios, filas y gestiones que requieren presencia física.",
        features: ["Trámites públicos", "Gestión bancaria", "Servicio de filas"],
      },
      {
        title: "Traducción & Mediación",
        skillTag: "TranslationSkill + InterpreterOperator",
        description: "Interpretación simultánea y consecutiva, traducción de documentos con contexto cultural.",
        features: ["Interpretación simultánea", "Traducción legal", "Mediación cultural"],
      },
      {
        title: "Contenido Visual",
        skillTag: "ContentSkill + PhotographerOperator",
        description: "Fotografía y video profesional para productos, eventos e inmobiliarias.",
        features: ["Fotografía de productos", "Cobertura de eventos", "Edición y entrega"],
      },
    ],
    feedbackLabel: "Feedback continuo",
    feedbackItems: [
      "Métricas de ejecución",
      "Satisfacción del operador",
      "NPS del cliente",
      "Optimización de tiempos",
    ],
    ctaOperator: "Unirme como Operador",
    ctaIntegrate: "Integrar a mi IA",
  },

  // Scenarios
  scenarios: {
    badge: "ESCENARIOS REALES",
    title1: "IA + Humanos",
    titleHighlight: "en acción",
    subtitle: "Ejemplos reales de cómo los agentes y operadores colaboran para resolver situaciones del mundo real.",
    items: [
      {
        agent: "PropertyAgent",
        action: "Check-in urgente Las Condes: huésped llega en 2h, requiere limpieza + entrega de llaves",
        operator: "CleaningOperator",
        response: "En camino. Limpieza profunda + toallas frescas. ETA 45min.",
        skill: "CleaningSkill",
        feedback: "Cliente calificó 5/5. Ruta de limpieza óptima registrada.",
      },
      {
        agent: "LegalAgent",
        action: "Contrato requiere firma antes de las 18:00 en Santiago Centro. Firma digital rechazada.",
        operator: "NotaryOperator",
        response: "En notaría. Documento verificado y firmado. Copia digital adjunta.",
        skill: "LegalSkill",
        feedback: "Proceso de notaría express documentado. Alternativa sugerida para futuro.",
      },
      {
        agent: "LogisticsAgent",
        action: "Paquete médico de alto valor requiere entrega certificada a clínica en Providencia.",
        operator: "CertifiedCourier",
        response: "Paquete entregado. Firma de recepción + evidencia fotográfica.",
        skill: "DeliverySkill",
        feedback: "Cadena de frío mantenida. Ruta optimizada para futuras entregas.",
      },
      {
        agent: "MaintenanceAgent",
        action: "Filtración de agua detectada en edificio Vitacura. Requiere gasfiter inmediato.",
        operator: "SECPlumber",
        response: "Filtración localizada y reparada. Reemplazo preventivo de válvula adyacente.",
        skill: "DiagnosticSkill",
        feedback: "Patrón de diagnóstico registrado. Alerta predictiva actualizada.",
      },
      {
        agent: "AirbnbCleaningAgent",
        action: "Checkout detectado en房源 SR-CZ-57. Chapa detectada saliendo. Servicio de limpieza contratado. Notificando al equipo...",
        operator: "CleaningTeamOperator",
        response: "Recibido. Equipo en camino. ETA 20min al domicilio. Iniciando limpieza profunda.",
        skill: "CleaningServiceSkill",
        feedback: "Limpieza completada. Propiedad lista para next guest. Photos attached.",
      },
    ],
    legend: {
      agent: "Agente IA",
      operator: "Operador",
      feedback: "Loop de Feedback",
    },
  },

  // MCP Section
  mcp: {
    badge: "ARQUITECTURA TÉCNICA",
    title1: "Model Context Protocol",
    titleHighlight: "+ Skills",
    subtitle: "Arquitectura de 4 capas que permite a agentes de IA orquestar tareas del mundo real a través de operadores humanos.",
    layers: [
      {
        name: "Orquestación",
        description: "HumanLoop Orchestrator",
        detail: "Detección de eventos, enrutamiento de tareas y gestión de prioridades",
      },
      {
        name: "Agentes MCP",
        description: "TaskAgent | RoutingAgent | ValidationAgent | FeedbackAgent",
        detail: "Agentes especializados coordinando via Model Context Protocol",
      },
      {
        name: "Skills",
        description: "DeliverySkill | LegalSkill | DiagnosticSkill | EventSkill",
        detail: "Capacidades cognitivas reutilizables con lógica de ejecución",
      },
      {
        name: "Operadores",
        description: "Ejecución humana con criterio profesional",
        detail: "Operadores autónomos que validan, ejecutan y proveen feedback",
      },
    ],
    codeTitle: "Ejemplo de Integración",
    docsButton: "Documentación MCP",
    sdkButton: "Descargar SDK",
  },

  // Ethics Framework
  ethics: {
    badge: "MARCO ÉTICO",
    title1: "Principios",
    titleHighlight: "de colaboración",
    subtitle: "HumanLoop opera bajo un marco ético estricto que asegura que los humanos mantengan control, autonomía y compensación justa.",
    principles: [
      {
        title: "Supervisión humana siempre",
        description: "Cada decisión de IA pasa por un operador humano que tiene poder de veto. La IA sugiere, el humano decide.",
        highlight: "Poder de veto",
      },
      {
        title: "Responsabilidad humana explícita",
        description: "Los operadores no son simples ejecutores. Tienen responsabilidad plena de las decisiones y mantienen criterio profesional.",
        highlight: "Criterio profesional",
      },
      {
        title: "IA como asistente, no jefe",
        description: "La IA orquesta y sugiere, pero nunca ordena. El operador decide cómo, cuándo y si ejecuta.",
        highlight: "Sugerir, no ordenar",
      },
      {
        title: "Colaboración bidireccional",
        description: "El feedback del operador mejora directamente la IA. No es un sistema unidireccional: los humanos entrenan y corrigen la IA.",
        highlight: "Humanos entrenan IA",
      },
      {
        title: "Amplificación, no reemplazo",
        description: "La IA amplifica las capacidades humanas, no las reemplaza. El objetivo es potenciar el trabajo humano, no automatizarlo.",
        highlight: "Potenciar trabajo",
      },
      {
        title: "Compensación justa y directa",
        description: "Los operadores reciben pago directo por su trabajo. El 85% va directo a ellos. La compensación refleja el valor real de sus habilidades.",
        highlight: "85% directo",
      },
    ],
    commitment: {
      title: "Nuestro compromiso",
      description: "HumanLoop está comprometido con desarrollar IA que respete y amplifique el trabajo humano. Estamos construyendo tecnología que crea oportunidades justas, no sistemas que explotan o reemplazan.",
    },
  },

  // Pricing
  pricing: {
    badge: "MODELO DE COMPENSACIÓN",
    title1: "Compensación justa",
    titleHighlight: "por trabajo real",
    subtitle: "Los operadores reciben compensación directa por su trabajo, experiencia y criterio profesional. Pago transparente y proporcional al valor aportado.",
    categories: [
      {
        category: "Operadores Básicos",
        icon: "🚴",
        description: "Tareas de ejecución física y logística",
        services: [
          { name: "Operador Delivery", price: "5.000 - 15.000", unit: "por entrega" },
          { name: "Operador de Gestión", price: "15.000 - 25.000", unit: "por hora" },
          { name: "Operador de Compras", price: "8.000 - 12.000", unit: "por gestión" },
          { name: "Operador de Trámites", price: "12.000 - 20.000", unit: "por trámite" },
        ],
      },
      {
        category: "Operadores Certificados",
        icon: "🔧",
        description: "Profesionales con certificaciones verificadas",
        services: [
          { name: "Gasfiter SEC", price: "20.000 - 45.000", unit: "por visita" },
          { name: "Electricista SEC", price: "18.000 - 50.000", unit: "por visita" },
          { name: "Fotógrafo Profesional", price: "22.000 - 60.000", unit: "por hora" },
          { name: "Intérprete Bilingüe", price: "30.000 - 70.000", unit: "por hora" },
        ],
      },
      {
        category: "Operadores Expertos",
        icon: "⚖️",
        description: "Profesionales con criterio especializado",
        services: [
          { name: "Presentador Corporativo", price: "25.000 - 80.000", unit: "por hora" },
          { name: "Abogado Colegiado", price: "45.000 - 120.000", unit: "por gestión" },
          { name: "Representante Ejecutivo", price: "35.000 - 90.000", unit: "por reunión" },
          { name: "Equipo Multidisciplinario", price: "150.000+", unit: "por proyecto" },
        ],
      },
    ],
    payment: {
      title: "Pago directo al operador",
      description: "La plataforma garantiza que el 85% del pago va directamente al operador que ejecuta la tarea. El 15% cubre operación, seguros y soporte. El operador mantiene autonomía sobre cómo ejecutar el trabajo.",
      methods: ["Transferencia bancaria", "Mercado Pago", "Cuenta RUT", "Pago inmediato"],
    },
    note: "Los rangos de compensación reflejan la experiencia, certificaciones y complejidad de cada tarea. El operador tiene derecho a negociar según las condiciones específicas de cada asignación.",
  },

  // Pilot Payment
  pilotPayment: {
    badge: "PROGRAMA PILOTO - ÚNETE HOY",
    title1: "Sé socio fundador de",
    titleHighlight: "HumanLoop",
    subtitle: "Únete al programa piloto y sé el primero en usar nuestra plataforma. Precios exclusivos de por vida + participación en el éxito.",
    programTitle: "Founder Pilot - Solo 50 cupos",
    programDescription: "Por solo $50 USD obtienes acceso de por vida a HumanLoop con precios especiales. Además, tu feedback define el producto final. Esta es tu oportunidad de ser socio temprano.",
    features: [
      "✅ Acceso de por vida a la plataforma",
      "✅ Precios especiales bloqueados para siempre",
      "✅ Tu nombre en la página de fundadores",
      "✅ Acceso prioritario a nuevos skills",
      "✅ Chat directo con los fundadores",
      "✅ Participación en decisiones del producto",
    ],
    selectAmount: "Selecciona tu contribución:",
    pilotFee: "Ser Founder - $50 USD",
    tip: "Apoyar el Proyecto",
    tipDescription: " Cualquier monto nos ayuda a crecer",
    transparencyTitle: "Inversión transparente",
    transparencyDescription: "Tu inversión va directamente al desarrollo del producto. Sin intermediarios, sin costos ocultos. Recibirás actualizaciones semanales del progreso.",
    alternativeTitle: "Otros Métodos de Pago",
    alternativeMethods: ["Mercado Pago", "Transferencia Bancaria", "Crypto", "Transferencia Internacional"],
    alternativeNote: "Contáctanos para transferencias internacionales o pagos crypto. Aceptamos USDT, BTC, ETH.",
    trustBadges: [
      { icon: "🔒", text: "Pagos seguros PayPal" },
      { icon: "📋", text: "Recibos para todos los pagos" },
      { icon: "💬", text: "Canal de soporte directo" },
    ],
  },

  // WebMCP Services
  webMCP: {
    badge: "INTEGRACIÓN WEBMCP",
    title1: "Servicios Reales",
    titleHighlight: "vía WebMCP",
    subtitle: "Conecta tus agentes de IA con servicios del mundo real a través de WebMCP. Profesionales certificados, scheduling en tiempo real y precios transparentes.",
    integrationTitle: "Cómo Funciona la Integración WebMCP",
    integrate: "Integrar",
    ctaText: "¿Listo para conectar tu IA a servicios reales?",
    ctaIntegrate: "Iniciar Integración",
    viewDocs: "Ver Documentación MCP",
  },

  // Concept Banner
  concept: {
    badge: "PROOF OF CONCEPT",
    title1: "Esto es un",
    titleHighlight: "proof of concept",
    subtitle: {
      part1: "HumanLoop.cl es un",
      highlight: "experimento de arquitectura HITL",
      part2: "que explora cómo los agentes de IA pueden colaborar con humanos mediante orquestación inteligente, sin reemplazar el trabajo humano.",
    },
    readVision: "Leer la visión completa",
    hideVision: "Ocultar visión",
    visionPoints: [
      {
        title: "Amplificación, no automatización",
        text: "Las IAs pueden procesar datos, generar contenido y coordinar tareas. Pero las acciones físicas, el juicio profesional y la presencia humana son insustituibles. HumanLoop amplifica las capacidades humanas con IA, no las reemplaza.",
        icon: "🚀",
      },
      {
        title: "Human-in-the-Loop como arquitectura",
        text: "HITL no es una limitación: es un principio de diseño. Los operadores humanos no son simples ejecutores de instrucciones de IA. Son profesionales con criterio que validan, corrigen y mejoran las sugerencias del sistema.",
        icon: "🔄",
      },
      {
        title: "MCP como capa de orquestación",
        text: "El Model Context Protocol permite que agentes de IA coordinen tareas complejas. En HumanLoop, la IA orquesta y planifica. El humano decide y ejecuta. La colaboración es bidireccional: el feedback humano mejora la IA.",
        icon: "🌉",
      },
      {
        title: "Skills compartidos, criterio humano",
        text: "Los Skills son capacidades cognitivas reutilizables: optimización de rutas, análisis de documentos, diagnóstico. Pero el operador humano aporta el contexto local, la experiencia en terreno y el juicio que ningún algoritmo puede replicar.",
        icon: "🧠",
      },
      {
        title: "Chile como punto de partida",
        text: "Este concepto está contextualizado en Chile: con comunas reales, precios en CLP, y servicios locales. Porque la colaboración IA-humano debe pensarse desde contextos reales, no solo desde Silicon Valley.",
        icon: "🇨🇱",
      },
    ],
    finalNote: {
      line1: "Este es un proof of concept de arquitectura HITL.",
      line2: "Los operadores mantienen autonomía y criterio profesional.",
      line3: "La IA amplifica. El humano decide.",
    },
  },

  // Footer
  footer: {
    brand: {
      description: "Plataforma de orquestación HITL que conecta agentes de IA con operadores humanos para tareas del mundo físico.",
    },
    skills: {
      title: "SKILLS DISPONIBLES",
      items: [
        "Comunicación & Presencia",
        "Gestión Legal & Documental",
        "Logística & Entregas",
        "Diagnóstico & Gasfitería",
        "Planificación & Electricidad",
        "Gestión Presencial",
        "Traducción & Mediación",
        "Contenido Visual",
      ],
    },
    developers: {
      title: "PARA DESARROLLADORES",
      items: [
        "Documentación MCP",
        "API REST v1",
        "SDK TypeScript",
        "SDK Python",
        "Webhooks & Eventos",
        "Sandbox de pruebas",
        "Status de API",
        "Changelog",
      ],
    },
    about: {
      title: "SOBRE EL PROYECTO",
      items: [
        "Marco Ético",
        "Arquitectura HITL",
        "Model Context Protocol",
        "Colaboración IA + Humanos",
        "Para Operadores",
        "Para Agentes IA",
        "Contacto",
        "GitHub",
      ],
    },
    bottom: {
      tagline: "Orquestación HITL para agentes de IA",
      madeWith: "Hecho con",
      collaboration: "colaboración",
      inChile: "en Chile",
      humans: "Humanos",
    },
    disclaimer: "HumanLoop.cl es un proof of concept de arquitectura Human-in-the-Loop. La plataforma demuestra cómo agentes de IA pueden orquestar tareas mientras operadores humanos mantienen autonomía, criterio y responsabilidad sobre la ejecución. La IA amplifica el trabajo humano, no lo reemplaza.",
  },

  // Pilot Skills
  pilotSkills: {
    badge: "SKILLS PILOTO - DISPONIBLES AHORA",
    title1: "Skills Reales,",
    titleHighlight: "Servicios Reales",
    subtitle: "Estos skills están disponibles ahora. Conecta orquestación de IA con operadores humanos para servicios físicos en Santiago, Chile.",
    compensation: "Compensación Operador:",
    ctaText: "Únete como operador o integra estos skills en tu agente de IA.",
    ctaOperator: "Unirme como Operador",
    ctaIntegrate: "Integrar a mi IA",
    skills: [
      {
        title: "Consultoría de Negocios",
        description: "Conecta con un ingeniero de software profesional para sesiones de consultoría presencial. Traducción técnica, consultoría de arquitectura, scoping de proyectos y evaluación de riesgos.",
        features: ["Traducción Técnica", "Consultoría Arquitectura", "Scoping Proyectos", "Due Diligence"],
        example: {
          input: "/business-consultant Explicar microservicios a inversores",
          output: "✅ Software Engineer asignado. Sesión confirmada: Mañana 10:00, Las Condes. Entregables: One-pager técnico + diagrama de arquitectura.",
        },
      },
      {
        title: "Instalación IoT & Seguridad",
        description: "Instalación profesional de cámaras de seguridad, dispositivos smart home y sensores IoT. Técnicos certificados con autorización SEC para trabajo eléctrico.",
        features: ["Cámaras IP", "NVR/DVR Setup", "Smart Locks", "Sensores IoT"],
        example: {
          input: "/iot-security-installer 4 cámaras + NVR en Providencia",
          output: "✅ Técnico IoT disponible. Visita programada: Viernes 14:00. Cotización: $180,000 CLP (4 cámaras IP + NVR 2TB + instalación).",
        },
      },
    ],
  },

  // Tech Architecture
  techArch: {
    badge: "PLATAFORMA OPERADORES",
    title1: "¿Web o Mobile?",
    titleHighlight: "Análisis Técnico",
    subtitle: "Eligiendo la plataforma correcta para operadores: PWA vs App Nativa con comunicación WebSocket en tiempo real.",
    tabs: {
      comparison: "Comparación",
      pwa: "Detalles PWA",
      websocket: "Demo WebSocket",
    },
    pwa: {
      recommended: "RECOMENDADO",
      techStack: "Stack Tecnológico",
      title: "Progressive Web App para Operadores",
      pros: [
        "Un solo codebase para web + mobile",
        "Sin aprobación de app store",
        "Actualizaciones instantáneas sin acción del usuario",
        "Funciona offline con datos cacheados",
        "Push notifications soportadas",
        "Menor costo de desarrollo",
        "Onboarding fácil via URL",
      ],
      features: [
        {
          icon: "📶",
          title: "Offline First",
          description: "Service workers cachean tareas y sincronizan cuando vuelve la conexión.",
        },
        {
          icon: "🔔",
          title: "Push Notifications",
          description: "Alertas en tiempo real para nuevas tareas, actualizaciones y mensajes.",
        },
        {
          icon: "📍",
          title: "GPS Tracking",
          description: "Ubicación en background para optimización de rutas y ETAs.",
        },
      ],
    },
    native: {
      alternative: "ALTERNATIVA",
      techStack: "Stack Tecnológico",
      cons: [
        "Codebases separados para iOS y Android",
        "Delays de review en app store (1-7 días)",
        "Usuarios deben actualizar manualmente",
        "Mayor costo de desarrollo",
        "Pipeline de deployment complejo",
      ],
    },
    websocket: {
      title: "Comunicación en Tiempo Real",
      features: [
        {
          icon: "⚡",
          title: "Actualizaciones Instantáneas",
          description: "Comunicación bidireccional para asignación de tareas y cambios de estado.",
        },
        {
          icon: "📍",
          title: "Tracking en Vivo",
          description: "Ubicación del operador en tiempo real para clientes y despachadores.",
        },
        {
          icon: "💬",
          title: "Chat In-App",
          description: "Mensajería directa entre operadores, clientes y agentes de IA.",
        },
        {
          icon: "🔄",
          title: "Auto Reconexión",
          description: "Reconexión automática con cola de mensajes para períodos offline.",
        },
      ],
    },
    recommendation: {
      title: "Nuestra Recomendación",
      description: "PWA con WebSocket provee el mejor balance de funcionalidad, costo y experiencia del operador. Onboarding fácil, actualizaciones instantáneas y comunicación en tiempo real sin fricción de app stores.",
    },
  },
};
