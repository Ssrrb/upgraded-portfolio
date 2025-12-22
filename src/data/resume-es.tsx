import { Icons } from "@/components/icons";
import { DATA } from "./resume";

// Spanish translations for the resume data
export const DATA_ES = {
  ...DATA,
  description:
    "Ingeniero de software orientado al backend con experiencia en producción en Python, TypeScript, sistemas en la nube y servicios con IA.",
  summary:
    "Soy desarrollador autodidacta, siempre aprendiendo y me encanta lo que hago. Trabajé tiempo completo mientras estudiaba; estoy acostumbrado a asumir responsabilidad y entregar bajo restricciones. Tengo experiencia trabajando con equipos en proyectos con arquitecturas cloud-native, servicios de IA y sistemas backend escalables.",
  work: [
    {
      ...DATA.work[0],
      title: "Ingeniero de Software",
      description:
        "Construí y mantuve servicios backend con Python y Node.js en entornos de producción. Diseñé APIs y modelos de datos para aplicaciones internas y empresariales. Desplegué y operé servicios en Google Cloud (CI/CD, cargas contenerizadas). Trabajé en backend y frontend cuando fue necesario para desbloquear entregas.",
    },
    {
      ...DATA.work[1],
      title: "Técnico de IT",
      description:
        "Comencé como pasante y luego fui contratado como técnico de IT, administrando y manteniendo servidores, estaciones de trabajo y bases de datos con DB2 y Postgres. Automaticé el monitoreo y mantenimiento de IT en RHEL usando Datadog, Python e Instana, ayudando a reducir el tiempo de inactividad en un 99,9%.",
    },
  ],
  education: [
    {
      ...DATA.education[0],
      degree: "Análisis de Sistemas Informáticos",
    },
    {
      ...DATA.education[1],
      degree: "Bachiller Técnico con Énfasis en Marketing",
    },
    {
      ...DATA.education[2],
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
        "Construí un sistema para permitir a los usuarios crear agentes y actualizar su base de conocimientos con documentos de la empresa, e interactuar con ellos usando lenguaje natural. Utilicé GCP Vertex AI, AI SDK y Langchain.",
    },
    {
      ...DATA.projects[1],
      description:
        "Diseñé, desarrollé y vendí un sistema empresarial de evaluación que permite a RR. HH. crear formularios, distribuirlos a empleados y generar informes completos sobre métricas de rendimiento y áreas de mejora. El sistema agiliza la evaluación, mejora la precisión de los datos y aporta información útil para el crecimiento organizacional.",
    },
    {
      ...DATA.projects[2],
      description:
        "Desarrollé un sistema de código abierto para citas médicas donde los usuarios pueden seleccionar y filtrar médicos según su seguro médico.",
    },
    {
      ...DATA.projects[3],
      description:
        "Desarrollé un sitio web para una escuela nacional, contacté a los responsables y gestioné el dominio.",
    },
  ],
  moreInProgress: [
    {
      ...DATA.moreInProgress[0],
      description:
        "Educador Certificado de Google Nivel 1, demostrando competencia en la integración de herramientas de Google Workspace en entornos educativos y profesionales para mejorar la productividad y la colaboración.",
    },
    {
      ...DATA.moreInProgress[1],
      description:
        "Desarrollando un robot autónomo impulsado por Nvidia Jetson Nano para visión por computadora y detección de objetos en tiempo real. El proyecto se enfoca en implementar modelos de aprendizaje profundo para navegación y conciencia ambiental.",
    },
    {
      ...DATA.moreInProgress[2],
      description:
        "Asistí a la Conferencia IBM TechXchange 2025 en Orlando, un evento que reúne a líderes tecnológicos, desarrolladores e innovadores para explorar los últimos avances en IA, computación en la nube y soluciones empresariales.",
    },
    {
      ...DATA.moreInProgress[3],
      description:
        "Voluntario activo en programas comunitarios como Apoyo Escolar, apoyando la educación y mentoreando a jóvenes interesados en programación y ciencias de la computación.",
    },
  ],
} as const;
