import { Icons } from "@/components/icons";
import { DATA } from "./resume";

// Spanish translations for the resume data
export const DATA_ES = {
  ...DATA,
  description:
    "Estudiante de Ciencias de la Computación con más de 2 años de experiencia. Me encanta construir cosas y ayudar a las personas. Muy activo en Twitter.",
  summary:
    "A finales de 2025, dejé mi trabajo como ingeniero de software para dedicarme a tiempo completo a construir y escalar mis propios Proyectos y Startups. En el pasado, [estudié ciencias de la computación por la noche y trabajé durante el día](/#education), trabajé en una gran empresa tecnológica local en Asunción",
  work: [
    {
      ...DATA.work[0],
      title: "Ingeniero de Software",
      description:
        "Implementé un sistema para análisis de imágenes médicas de rayos X utilizando GCP Vertex AI, BigQuery, Firestore y Cloud Functions, logrando una reducción del 15% y una precisión del 80% en el tiempo de diagnóstico para radiólogos. Desarrollé un chatbot personalizado para uso interno de la empresa con Gemini ayudando a mantener un seguimiento del equipo de hardware. Mantuve y mejoré pipelines MLOps usando Linux, Docker, Kubeflow, CUDAs y TPUs para modelos ML de conteo de árboles en producción para el proyecto Terraview. Ayudé al equipo comercial acompañándolos como ingeniero técnico de preventa para proyectos relacionados con GCP y Software.",
    },
    {
      ...DATA.work[1],
      title: "Técnico de IT",
      description:
        "Comencé mi pasantía como técnico de IT, gestionando y manteniendo servidores, estaciones de trabajo y bases de datos usando RHEL, Windows Server, DB2 y MySQL. Automaticé varias tareas de monitoreo y mantenimiento de IT usando Datadog, Python e Instana, reduciendo la carga de trabajo manual en un 30%.",
    },
  ],
  education: [
    {
      ...DATA.education[1],
      degree: "Análisis de Sistemas Informáticos",
    },
    {
      ...DATA.education[2],
      degree: "Bachiller Tecnico con Énfasis en Marketing",
    },
      {
      ...DATA.education[0],
      degree: "Arquitecto Profesional en la Nube",
    },
    {
      ...DATA.education[3],
      degree: "Ciencia de Datos y Estadística",
    },
  ],
  projects: [
    {
      ...DATA.projects[0],
      description:
        "Con el lanzamiento de la [Tienda GPT de OpenAI](https://openai.com/blog/introducing-the-gpt-store), decidí construir un SaaS que permite a los usuarios recopilar direcciones de correo electrónico de sus usuarios de GPT. Esta es una excelente manera de construir una audiencia y monetizar el uso de tu API de GPT.",
    },
    {
      ...DATA.projects[1],
      description:
        "Diseñé, desarrollé y vendí componentes de interfaz de usuario animados para desarrolladores.",
    },
    {
      ...DATA.projects[2],
      description:
        "Desarrollé una plataforma de código abierto de registro y análisis para OpenAI: Registra tus solicitudes de API de ChatGPT, analiza costos y mejora tus prompts.",
    },
    {
      ...DATA.projects[3],
      description:
        "Desarrollé un Chatbot de Soporte al Cliente con IA que responde automáticamente a tickets de soporte al cliente utilizando los últimos modelos GPT.",
    },
  ],
  moreInProgress: [
    {
      ...DATA.moreInProgress[0],
      description:
        "Educador Certificado de Google Nivel 1, demostrando competencia en la integración de herramientas de Google Workspace en entornos educativos y profesionales para mejorar la productividad y colaboración.",
    },
    {
      ...DATA.moreInProgress[1],
      description:
        "Desarrollando un robot autónomo impulsado por Nvidia Jetson Nano para visión por computadora y detección de objetos en tiempo real. El proyecto se enfoca en implementar modelos de aprendizaje profundo para navegación y conciencia ambiental.",
    },
    {
      ...DATA.moreInProgress[2],
      description:
        "Asistí a la Conferencia IBM TechXchange 2024, un evento premier que reúne a líderes tecnológicos, desarrolladores e innovadores para explorar los últimos avances en IA, computación en la nube y soluciones empresariales.",
    },
    {
      ...DATA.moreInProgress[3],
      description:
        "Voluntario activo en programas comunitarios locales, enfocándome en educación tecnológica y mentoría de jóvenes estudiantes interesados en programación y ciencias de la computación. Organizando talleres y sesiones de codificación para inspirar a la próxima generación de desarrolladores.",
    },
  ],
} as const;
