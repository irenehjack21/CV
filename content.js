/*
 * content.js — single source of truth for the "Irene" portfolio chat app.
 * Every view and the chat both read from DATA below, so this is the only
 * file you edit to change what the site says.
 *
 * Built from your two CVs. Look for markers:
 *   [FILL]  = I don't have this, add it.
 *   [FLAG]  = a judgment call or a mismatch between your two CVs — your choice.
 */

const DATA = {
  name: "Irene Hernández Jack",
  pronouns: "She/Her",
  wordmark: "Irene",

  // Pick one; alternatives kept so you can swap.
  headline: "Senior recruiter who builds the AI tools recruiters use.",
  // "I hire people, and I build the AI that helps them get hired well."
  // "Recruiter and cognitive scientist, building human-first AI for hiring."

  tagline: "HR, AI and technology",
  location: "Málaga, Spain",
  eligibility: "Eligible to work in the EU and UK",

  languages: [
    { name: "English", level: "C2 / Full professional" },
    { name: "Spanish", level: "Native" }
  ],

  links: {
    email: "irene.h.jack@gmail.com",
    phone: "+34 662 682 228",
    linkedin: "https://www.linkedin.com/in/irenehjack",
    github: "[FILL: your GitHub profile URL]"
  },

  about: {
    short:
      "I'm Irene, a senior recruiter with a psychology and cognitive science " +
      "background and 6+ years in HR across the tech industry. Over the last " +
      "couple of years I've moved from running recruitment to rebuilding how " +
      "it works: designing and shipping AI agents and automations, and " +
      "studying how people and AI actually make decisions together.",
    long:
      "I'm passionate about understanding people: how we think, how we make " +
      "decisions, and how we work well together. That curiosity took me from " +
      "psychology into HR, and then into cognitive science. My master's at the " +
      "University of Lisbon explored human-AI interaction in decision-making, " +
      "and what shapes our judgment when we rely on AI.\n\n" +
      "In the last year I've moved from running recruitment to changing how it " +
      "works, designing and building a set of AI agents and automations and " +
      "questioning how our whole recruitment system operates. I want to help " +
      "build HR products that put people first, are trustworthy, and are " +
      "genuinely useful, bringing together the two things I care about most: " +
      "the HR world I know well and the technology I'm drawn to."
  },

  focus: [
    "Human-AI interaction",
    "AI agents & automation for hiring",
    "Responsible AI & governance",
    "Talent acquisition as a product"
  ],

  // Grouped so the Skills view can render sections rather than one long list.
  skills: {
    "AI & data": [
      "AI agents & automation", "Microsoft Copilot Studio", "Prompt design",
      "Python", "SPSS", "Cursor AI", "AI governance & compliance", "Responsible AI"
    ],
    "Recruiting & HR": [
      "Full-cycle recruitment", "Hiring strategy", "Stakeholder & C-level management",
      "ATS admin (SmartRecruiters, Lever, Bullhorn, DevSkiller)", "DEI",
      "L&D and training", "Employer branding"
    ],
    "Product & research": [
      "Human-AI interaction", "Experimental design", "Product thinking",
      "Requirements writing", "Data-informed decisions"
    ],
    "Tools": ["Microsoft 365", "Metaview", "LinkedIn Recruiter"]
  },

  certifications: [
    "Human-Centered Leadership in the Age of AI",
    "AI Fluency Framework & Foundations",
    "Responsible AI: Principles and Practical Applications",
    "Certification in Advanced English (C1)"
  ],

  // Concrete things you've built/shaped. Public-safe wording: I kept internal
  // codenames and colleague names out. Cut Intravista if you'd rather keep it
  // private for now.
  projects: [
    {
      title: "Intravista",
      blurb: "A trilingual career and CV web app I'm building: CV feedback, " +
             "interview prep and career-path exploration, drawing on my " +
             "recruiter's eye. My expertise, turned into a tool anyone can use.",
      tags: ["Product", "AI", "Web", "Personal project"],
      link: "[FILL or leave empty]"
    },
    {
      title: "Job-description agents",
      blurb: "A pair of connected agents for the recruitment team: one finds " +
             "the right existing job description in the internal library, the " +
             "other drafts new content.",
      tags: ["AI", "Automation", "Copilot Studio"],
      link: ""
    },
    {
      title: "SmartRecruiters × Copilot integration",
      blurb: "Leading the effort to connect our ATS with Microsoft Copilot: " +
             "scoping the agents and writing the requirements that guide the build.",
      tags: ["AI", "Integration", "Requirements"],
      link: ""
    },
    {
      title: "Candidate-matching safeguards",
      blurb: "The human-in-the-loop design behind an AI candidate-matching " +
             "tool: sampling rules and a clear, auditable reason for every " +
             "rejection, so a person always stays in the loop.",
      tags: ["Responsible AI", "Governance"],
      link: ""
    },
    {
      title: "People Intelligence Layer",
      blurb: "A concept to give our AI assistant a memory of each user for more " +
             "personalised support. Finalist at Unit4's CrazyLabDays innovation " +
             "event, and the first person from HR to reach the final.",
      tags: ["AI", "Product", "Innovation"],
      link: ""
    },
    {
      title: "This site",
      blurb: "My CV, reimagined as a chat app. You can browse it or just ask. " +
             "Project 01 in my portfolio.",
      tags: ["Vibe coded", "Web"],
      link: ""
    }
  ],

  experience: [
    {
      role: "Senior Recruiter, TA Transformation",
      org: "Unit4",
      dates: "Feb 2019 – Present", // [FLAG] see note on the Badger Maps interlude
      location: "Lisbon, Portugal · EMEA focus",
      summary:
        "Corporate recruiter for Unit4's global teams (Finance, Sales, " +
        "Marketing, Professional Services, IT, Cloud, R&D, Legal), now leading " +
        "the shift from running recruitment to rebuilding how it works with AI.",
      bullets: [
        "Building a suite of AI agents and automations for the recruitment team, including a pair of job-description agents. Further agents in progress handle vacancy approvals, notify hiring managers, and answer questions in plain language.",
        "Leading the work to rethink our recruitment system: partnering with IT to connect SmartRecruiters and Microsoft Copilot, and writing the requirements that guide scoping and build.",
        "Designing the human-in-the-loop safeguards for our candidate-matching tool with legal and our AI committee, so the way we use it stays human-centered.",
        "Created the People Intelligence Layer, a concept giving our AI assistant Ava a memory of each user. Finalist at CrazyLabDays and the first person from HR to reach the final (Poland, October).",
        "Designing and running hiring plans for R&D, IT and Cloud across Europe, and partnering with senior leaders (CPOs, CTOs, IT directors) while managing C-level and hiring-manager stakeholders.",
        "Leading DEI initiatives: the Business Women Network, the Equal Spanish Committee and the Women at Unit4 ERG, plus interviewer and team training."
      ],
      // Full progression, so nothing is lost even though the AI work leads.
      progression: [
        "Senior Recruiter — Apr 2024 to Present",
        "Global Recruiter — Mar 2023 to Apr 2024",
        "IT Recruiter — Feb 2022 to Apr 2023 (hired 140+ graduates for the Unit4 Academy)",
        "Professional Services Recruiter — Nov 2021 to Feb 2022",
        "Talent Acquisition Graduate — Feb 2019 to Jan 2020"
      ],
      tags: ["AI", "Automation", "Recruitment", "DEI", "Stakeholder management"]
    },
    {
      role: "Human-AI Interaction Researcher",
      org: "Hypertype",
      dates: "Jan 2026 – Jul 2026",
      location: "",
      summary:
        "Applied cognitive and social psychology to the design of Hypertype's " +
        "AI products.",
      bullets: [
        "Developed frameworks grounded in cognitive and social psychology to guide human-AI interaction design.",
        "Experimentally tested theories of trust, warmth-competence perception, and algorithm appreciation within the products.",
        "Analysed user behaviour and decision patterns to assess impact on performance, trust, and adoption.",
        "Identified ethical risks such as over-reliance, anthropomorphism, and authority bias, and proposed mitigations aligned with responsible-AI principles."
      ],
      progression: [],
      tags: ["Human-AI interaction", "Research", "Responsible AI"]
    },
    {
      role: "HR and Recruiting",
      org: "Badger Maps",
      dates: "Sep 2020 – Nov 2021",
      location: "Granada, Spain",
      summary:
        "Full-cycle recruiting across Spain, the US and the Philippines " +
        "(IT, legal, marketing, customer support), plus L&D and performance.",
      bullets: [
        "Led full-cycle recruitment for IT, legal, marketing and customer-support roles across three countries.",
        "Launched the Badger Maps Awards for employee recognition and built company-wide training programs.",
        "Set up a 360-degree feedback process and ran office functions for the Spanish team."
      ],
      progression: [],
      tags: ["Recruitment", "L&D", "Culture"]
    }
  ],

  education: [
    {
      degree: "MSc, Cognitive Science",
      org: "University of Lisbon",
      dates: "2024 – 2026", // [FLAG] your PDF says 2025–2026; using LinkedIn's dates
      note: "Research: human-AI interaction in decision-making."
    },
    {
      degree: "Master's, Human Resources Management",
      org: "ENEB (Escuela de Negocios Europea de Barcelona)",
      dates: "2020 – 2021",
      note: ""
    },
    {
      degree: "Degree in Psychology",
      org: "University of Granada",
      dates: "2015 – 2020",
      note: ""
    },
    {
      degree: "Cognitive Science, Psychology & Human Factors (exchange)",
      org: "Ulm University, Germany",
      dates: "2017 – 2018",
      note: ""
    }
  ],

  research: [
    {
      title: "Human-AI interaction in decision-making",
      org: "MSc thesis · University of Lisbon",
      summary:
        "How humans and AI make decisions together, and the variables and " +
        "moderators that shape our judgment when we rely on AI.",
      keywords: ["human-AI interaction", "decision-making", "trust", "judgment"]
    },
    {
      title: "Trust, warmth and algorithm appreciation",
      org: "Hypertype",
      summary:
        "Experimental work on how people perceive and trust AI systems, and " +
        "the ethical risks of over-reliance, anthropomorphism and authority " +
        "bias, with mitigations grounded in responsible-AI principles.",
      keywords: ["trust", "warmth-competence", "algorithm appreciation", "responsible AI"]
    }
  ],

  // ---- Chat brain --------------------------------------------------------
  // The chat greeting + tappable starter prompts.
  greeting:
    "Hi, I'm Irene. Ask me anything about my work: what I've built, my " +
    "research on how people and AI decide together, my experience in hiring, " +
    "or how to reach me.",
  suggestions: [
    "What has Irene built?",
    "Tell me about the human-AI research",
    "Walk me through the experience",
    "Why the move toward product?",
    "How do I get in touch?"
  ],

  // Matched case-insensitively against the user's message. Score by keyword
  // hits, reply as the best match, and if `goto` is set, offer to jump there.
  knowledge: [
    {
      keywords: ["build", "built", "project", "made", "ship", "agent", "automation", "tool", "intravista"],
      reply:
        "Quite a lot lately. At Unit4 I build AI agents and automations for " +
        "recruitment, including a pair of job-description agents and the " +
        "safeguards behind our candidate-matching tool. On the side I'm " +
        "building Intravista, a career and CV web app. And this site is one " +
        "of them too.",
      goto: "projects"
    },
    {
      keywords: ["research", "human-ai", "human ai", "decision", "trust", "cognitive", "master", "thesis", "study", "hypertype", "psychology"],
      reply:
        "My master's at the University of Lisbon looked at how humans and AI " +
        "make decisions together, and what shapes our judgment when we rely on " +
        "AI. I then researched trust, warmth and algorithm appreciation at " +
        "Hypertype, including risks like over-reliance and authority bias. " +
        "It's the thread that ties all my work together.",
      goto: "research"
    },
    {
      keywords: ["experience", "career", "work", "job", "role", "recruit", "unit4", "badger", "where"],
      reply:
        "I've spent 6+ years in HR and talent acquisition in tech, mostly at " +
        "Unit4, where I grew from graduate to senior recruiter and now lead " +
        "our TA transformation work. Before that I ran full-cycle recruiting " +
        "at Badger Maps across Spain, the US and the Philippines.",
      goto: "experience"
    },
    {
      keywords: ["copilot", "smartrecruiters", "how do you use ai", "llm", "how does she use"],
      reply:
        "I design and build them, not just use them. The clearest example is " +
        "a pair of job-description agents, plus the work connecting " +
        "SmartRecruiters and Microsoft Copilot. I care as much about the " +
        "guardrails as the capability.",
      goto: "projects"
    },
    {
      keywords: ["responsible", "ethic", "bias", "governance", "safeguard", "risk", "human-centered", "human centered", "fair"],
      reply:
        "This is central for me. For our candidate-matching tool I designed " +
        "the human checks: sampling rules and a clear, auditable reason for " +
        "every rejection, so a person stays in the loop. My research maps " +
        "risks like over-reliance and authority bias, and how to reduce them.",
      goto: "research"
    },
    {
      keywords: ["dei", "diversity", "inclusion", "women", "equity", "erg"],
      reply:
        "I've led DEI work throughout my career: the Business Women Network, " +
        "the Equal Spanish Committee and the Women at Unit4 ERG, along with " +
        "interviewer and team training.",
      goto: "experience"
    },
    {
      keywords: ["education", "degree", "university", "school", "learn", "academ", "studied"],
      reply:
        "Psychology at the University of Granada, an exchange in cognitive " +
        "science and human factors at Ulm, a master's in HR, and most recently " +
        "a master's in Cognitive Science at the University of Lisbon.",
      goto: "education"
    },
    {
      keywords: ["product", "pm", "product management", "product lead", "why", "future", "next", "move"],
      reply:
        "I've moved from running recruitment to rebuilding how it works. " +
        "Sitting between the people who do the hiring and the tools they use, " +
        "I keep seeing HR products that could be more useful, trustworthy and " +
        "human. That's the work I want to do next.",
      goto: "about"
    },
    {
      keywords: ["intravista", "cv app", "career app", "side project"],
      reply:
        "Intravista is a career and CV web app I'm building: CV feedback, " +
        "interview prep and career-path exploration, drawing on what I know as " +
        "a recruiter. My recruiter's eye, turned into a tool anyone can use.",
      goto: "projects"
    },
    {
      keywords: ["language", "speak", "spanish", "english", "portuguese", "multilingual"],
      reply:
        "English at C2 and Spanish as my native language. I've lived and " +
        "worked across Spain, Portugal and Germany.",
      goto: null
    },
    {
      keywords: ["contact", "reach", "email", "hire", "talk", "connect", "available", "linkedin"],
      reply:
        "Easiest is email at irene.h.jack@gmail.com, or find me on LinkedIn. " +
        "Always happy to talk about hiring, AI in HR, or human-AI interaction.",
      goto: null
    },
    {
      keywords: ["who are you", "about you", "yourself", "passion", "tell me about"],
      reply:
        "I'm a recruiter and cognitive scientist fascinated by how people " +
        "think, decide and work with technology. 6+ years in HR in tech, and " +
        "lately I build the AI tools that make hiring better.",
      goto: "about"
    },
    {
      keywords: ["strength", "why hire", "different", "stand out", "best", "good at", "unique"],
      reply:
        "I sit in a rare overlap: I've done the hiring, I understand the " +
        "psychology of how people and AI make decisions, and I can build the " +
        "tools. So I design AI for HR that people actually trust and use, not " +
        "just demos.",
      goto: null
    }
  ],

  // Shown when nothing scores above zero.
  fallback:
    "Good question, and I don't have a scripted answer for that one. Try the " +
    "menu on the left, or email me at irene.h.jack@gmail.com."
};
