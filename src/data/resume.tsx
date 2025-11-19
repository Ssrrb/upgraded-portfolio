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
    "I love programming and math; my expertise lies in the interesection between logic, communication and technology. Currently I'm enrolled in an MITx course. In the past, [I started studying electronics engineering and switched to attend computer science classes at night while working during the day](/#education), worked at an AI team in a local top tech company",
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
    "Pub/Sub",
    "AI/ML",
    "RAG"
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
      logoUrl: "/softshop.png",
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
      logoUrl: "/softshop.png",
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
      title: "RAG ChatBot",
      href: "https://chat.softshop.com.py",
      dates: "Dec 2024 - Feb 2025",
      active: true,
      description:
        "Built a system to efficiently let users create Agents and update their knowledge base using company documents, to interact with it using natural language. Used GCP Vertex AI, AI SDK, and Langchain.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "GCP",
        "Milvus",
      ],
      links: [
        {
          type: "Website",
          href: "https://chat.softshop.com.py",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/rag-chatbot.png",
      video:
        "",
    },
    {
      title: "EVA360",
      href: "https://eva360.it.com",
      dates: "Aug 2025 - Jan 2026",
      active: true,
      description:
        "Designed, developed and sold an enterprise evaluation system that enables HR departments to create evaluation forms, distribute them to employees, and generate comprehensive reports on performance metrics and areas for improvement. The system streamlines the evaluation process, enhances data accuracy, and provides actionable insights for organizational growth.",
      technologies: [
        "Next.js",
        "Typescript",
        "PostgreSQL",
        "Prisma",
        "TailwindCSS",
        "Shadcn UI",
        "Clerk",
      ],
      links: [
        {
          type: "Webapp",
          href: "https://eva360.it.com",
          icon: <Icons.globe className="size-3" />,
        },
      ],
      image: "/eva360.png",
      video: "",
    },
    {
      title: "Heko pora",
      href: "https://heko-pora-823216545609.us-central1.run.app",
      dates: "In progress",
      active: true,
      description:
        "Developed an open-source system for medical appointments where users can select and filter clinicians based on their medical secure.",
      technologies: [
        "Node.js",
        "Express.js",
        "Sybase SQL",
        "Bootstrap",
        "Docker",
        "GCP",
        "HTMX"
      ],
      links: [
        {
          type: "Webapp",
          href: "https://heko-pora-823216545609.us-central1.run.app",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ssrrb/heko-pora",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/heko-pora.png",
      video: "",
    },
    {
      title: "Mariscal Estigarribia",
      href: "https://mcalestigarribia.edu.py",
      dates: "July 2025 -  September 2025",
      active: true,
      description:
        "Developed a website for a national school, contacting responsibles and managing the domain.",
      technologies: [
        "React",
        "Typescript",
        "TailwindCSS",
        "Shadcn UI",
        "Magic UI",
      ],
      links: [
        {
          type: "Website",
          href: "https://mcalestigarribia.edu.py",
          icon: <Icons.globe className="size-3" />,
        },
        {
          type: "Source",
          href: "https://github.com/Ssrrb/mcal-estigarribia",
          icon: <Icons.github className="size-3" />,
        },
      ],
      image: "/mcal.png",
      video:
        "",
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
        "/ibm.jpg",
      links: [],
    },
    {
      title: "Community Volunteering",
      dates: "2020 - Present",
      location: "Asunción, Paraguay",
      description:
        "Active volunteer in community programs such as Apoyo Escolar, volunteering for education and mentoring young students interested in programming and computer science.",
      image:
        "https://cdn-icons-png.flaticon.com/512/2917/2917995.png",
      links: [],
    },
  ],
} as const;
