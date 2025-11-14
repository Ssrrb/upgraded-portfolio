import { Icons } from "@/components/icons";
import { HomeIcon, NotebookIcon } from "lucide-react";

export const DATA = {
  name: "Sebastián Rojas",
  initials: "SR",
  url: "https://sebastianrojas.lat",
  location: "Asunción, PY",
  locationLink: "https://www.google.com/maps/place/asunci%C3%B3n,+paraguay/",
  description:
    "Computer Science Student with +2 years of experience. I love building things and helping people. Very active on GitHub.",
  summary:
    "At the end of 2025, I quit my job as a software engineer to go fulltime into building my own Projects and learning Data Science. In the past, [I started studying electronics engineering and switched to attend computer science classes at night and work during the day](/#education), worked at an AI team in a local top tech company",
  avatarUrl: "/me.jpeg",
  skills: [
    "Typescript",
    "Node.js",
    "Python",
    "Postgres",
    "CI/CD",
    "Next.js",
    "Docker",
    "Java",
    "Unix/Linux",
    "Google Cloud",
    "Azure",
  ],
  navbar: [
    { href: "/", icon: HomeIcon, label: "Home" },
    { href: "/blog", icon: NotebookIcon, label: "Blog" },
  ],
  contact: {
    email: "sirsebastianrojas@gmail.com",
    tel: "982403532",
    social: {
      GitHub: {
        name: "GitHub",
        url: "https://github.com/Ssrrb",
        icon: Icons.github,

        navbar: true,
      },
      LinkedIn: {
        name: "LinkedIn",
        url: "https://www.linkedin.com/in/sebastian-rojas-swe",
        icon: Icons.linkedin,
        navbar: true,
      },
      X: {
        name: "X",
        url: "https://x.com/basestian",
        icon: Icons.x,

        navbar: true,
      },
      email: {
        name: "Send Email",
        url: "#",
        icon: Icons.email,

        navbar: false,
      },
    },
  },

  work: [
    {
      company: "SoftShop",
      href: "https://softshop.com.py",
      badges: [],
      location: "Asunción, Paraguay",
      title: "Software Engineer",
      logoUrl: "/softshop.svg",
      start: "Aug 2024",
      end: "Dec 2025",
      description:
        "Implemented a system for X-Ray medical image analysis using GCP Vertex AI, BigQuery, Firestore, and Cloud Functions, resulting in a 15% cost reduction of the expected budget, resulting in 25% of reduction in diagnostic time. Helped developing a custom chatbot for internal usage of the company with Gemini helping keep track of hardware equipment, and another for new employees. Mantained and designed MLOps pipelines using Linux, Docker, Kubeflow, CUDAs, and Collab for tree-counting ML models in production for project Terraview. Helped the commercial team accompanying them as technical pre-sales engineer for migrations to GCP and Software related projects.",
    },
    {
      company: "Softshop",
      badges: [],
      href: "https://softshop.com.py",
      location: "Asunción, Paraguay",
      title: "IT Technician",
      logoUrl: "/softshop.svg",
      start: "Dec 2023",
      end: "May 2024",
      description:
        "Started as an intern later contracted for an IT technician role, managed and maintained servers, workstations, and databases using DB2, and Postgres. Automated IT monitoring and maintenance in RHEL used Datadog, Python and Instana, helped reducing downtime by 99,9%.",
    },
  ],
  education: [
    {
      school: "Universidad Católica Nuestra Señora de la Asunción",
      href: "https://universidadcatolica.edu.py/producto/analisis-de-sistemas-asuncion/",
      degree: "Analisis de Sistemas Informáticos",
      logoUrl: "/logo-UC-PNG.png",
      start: "2023",
      end: "2027",
    },
    {
      school: "Colegio Internacional de Asunción",
      href: "https://inter.edu.py",
      degree: "High School Diploma with an Emphasis in Marketing",
      logoUrl: "/inter-logo.png",
      start: "2011",
      end: "2022",
    },
    {
      school: "Google Cloud Platform",
      href: "https://www.credly.com/badges/481045c7-3588-4e12-906f-e24610f71981/public_url",
      degree: "Professional Cloud Architect",
      logoUrl: "/gcp.png",
      start: "2024",
      end: "2026",
    },
      {
      school: "Massachusetts Institute of Technology (MITx)",
      href: "https://idss.mit.edu/academics/micromasters-program-in-statistics-and-data-science-sds/",
      degree: "Data Science and Statistics",
      logoUrl: "/mit.png",
      start: "2026",
      end: "2027",
    },
  ],
  projects: [
    {
      title: "Chat Collect",
      href: "https://chatcollect.com",
      dates: "Jan 2024 - Feb 2024",
      active: true,
      description:
        "With the release of the [OpenAI GPT Store](https://openai.com/blog/introducing-the-gpt-store), I decided to build a SaaS which allows users to collect email addresses from their GPT users. This is a great way to build an audience and monetize your GPT API usage.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://chatcollect.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/chat-collect.mp4",
    },
    {
      title: "Magic UI",
      href: "https://magicui.design",
      dates: "June 2023 - Present",
      active: true,
      description:
        "Designed, developed and sold animated UI components for developers.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Stripe",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://magicui.design",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/magicuidesign/magicui",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.magicui.design/bento-grid.mp4",
    },
    {
      title: "llm.report",
      href: "https://llm.report",
      dates: "April 2023 - September 2023",
      active: true,
      description:
        "Developed an open-source logging and analytics platform for OpenAI: Log your ChatGPT API requests, analyze costs, and improve your prompts.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://llm.report",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/dillionverma/llm.report",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "",
      video: "https://cdn.llm.report/openai-demo.mp4",
    },
    {
      title: "Automatic Chat",
      href: "https://automatic.chat",
      dates: "April 2023 - March 2024",
      active: true,
      description:
        "Developed an AI Customer Support Chatbot which automatically responds to customer support tickets using the latest GPT models.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
        "Stripe",
        "Cloudflare Workers",
      ],
      links: [
        {
          type: "Website",
          href: "https://automatic.chat",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "",
      video:
        "https://pub-83c5db439b40468498f97946200806f7.r2.dev/automatic-chat.mp4",
    },
  ],
  moreInProgress: [
    {
      title: "Google Certified Educator Level 1",
      dates: "2024",
      location: "Online",
      description:
        "Certified Google Educator Level 1, demonstrating proficiency in integrating Google Workspace tools into educational and professional environments to enhance productivity and collaboration.",
      image:
        "https://upload.wikimedia.org/wikipedia/commons/thumb/c/c1/Google_%22G%22_logo.svg/1024px-Google_%22G%22_logo.svg.png",
      links: [
        {
          type: "Certificate",
          href: "https://edu.google.accredible.com/ed423a89-589e-415f-a26a-9ca8151185f5?key=d41d52dcbaa2bd5376b5a01ea8bd0cec5d7fd63ac6a345ef27c748fb351d7aac#acc.4Svyzi7r",
          icon: <Icons.globe className="size-3" />,
        },
      ],
    },
    {
      title: "Autonomous Robot with Nvidia Jetson Nano",
      dates: "2024 - Present",
      location: "Asunción, Paraguay",
      description:
        "Developing an autonomous robot powered by Nvidia Jetson Nano for computer vision and real-time object detection. The project focuses on implementing deep learning models for navigation and environmental awareness.",
      image:
        "https://developer.nvidia.com/sites/default/files/akamai/embedded/images/jetsonNano/gettingStarted/jetson-nano-dev-kit.png",
      links: [],
    },
    {
      title: "IBM TechXchange Conference",
      dates: "October 2025",
      location: "Florida, Orlando",
      description:
        "Attended IBM TechXchange Conference 2025, a premier event bringing together technology leaders, developers, and innovators to explore the latest advancements in AI, cloud computing, and enterprise solutions.",
      image:
        "ibm.jpg",
      links: [],
    },
    {
      title: "Community Volunteering",
      dates: "2020 - Present",
      location: "Asunción, Paraguay",
      description:
        "Active volunteer in local community programs, focusing on technology education and mentoring young students interested in programming and computer science. Organizing workshops and coding sessions to inspire the next generation of developers.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
      links: [],
    },
  ],
} as const;
