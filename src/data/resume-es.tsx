import { Icons } from "@/components/icons";
import { DATA } from "./resume";

// Spanish translations for the resume data
export const DATA_ES = {
  ...DATA,
  description:
    "Estudiante de Analisis de Sistemas Informáticos con más de 2 años de experiencia. Me encanta construir cosas y ayudar a las personas. Muy activo en GitHub.",
  summary:
    "Me encanta resolver problemas y crear experiencias de software; mi especialidad es construir aplicaciones de IA y web full-stack. Actualmente estoy cursando una especialización de MIT en Ciencias de Datos y Estadiística. En el pasado, [empecé estudiando ingeniería electrónica y cambié para asistir a clases nocturnas de analisis de sistemas mientras trabajaba de día](/#education), trabajé en un equipo de IA en una de las principales empresas tecnológicas locales.",
  work: [
    {
      ...DATA.work[0],
      title: "Ingeniero de Software",
      description:
        "Implementé un sistema para analizar imágenes médicas de rayos X utilizando GCP Vertex AI, BigQuery, Firestore y Cloud Functions, logrando una reducción del 15% del presupuesto estimado y un 25% menos de tiempo de diagnóstico. Ayudé a desarrollar un chatbot personalizado para uso interno de la empresa con Gemini para el seguimiento del hardware y otro para el onboarding de nuevos empleados. Mantuve y diseñé pipelines de MLOps con Linux, Docker, Kubeflow, CUDAs y Colab para modelos de conteo de árboles en producción para el proyecto Terraview. Acompañé al equipo comercial como ingeniero técnico de preventa en migraciones a GCP y proyectos de software.",
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
        "Construí un sistema para permitir a los usuarios crear Agentes de manera eficiente y actualizar su base de conocimientos utilizando documentos de la empresa, para interactuar con ellos usando lenguaje natural. Utilicé GCP Vertex AI, AI SDK y Langchain.",
    },
    {
      ...DATA.projects[1],
      description:
        "Diseñé, desarrollé y vendí un sistema empresarial de evaluación que permite a los departamentos de Recursos Humanos crear formularios de evaluación, distribuirlos a los empleados y generar informes completos sobre métricas de rendimiento y áreas de mejora. El sistema agiliza el proceso de evaluación, mejora la precisión de los datos y proporciona información útil para el crecimiento organizacional.",
    },
    {
      ...DATA.projects[2],
      description:
        "Desarrollando un sistema de código abierto para citas médicas donde los usuarios pueden seleccionar y filtrar médicos según su seguro médico.",
    },
    {
      ...DATA.projects[3],
      description:
        "Desarrollé un sitio web para una escuela nacional, contactando responsables y gestionando el dominio.",
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
        "Asistí a la Conferencia IBM TechXchange 2025 en Orlando, un evento que reúne a líderes tecnológicos, desarrolladores e innovadores para explorar los últimos avances en IA, computación en la nube y soluciones empresariales.",
    },
    {
      ...DATA.moreInProgress[3],
      description:
        "Voluntario activo en programas comunitarios como Apoyo Escolar, apoyando la educación y mentoreando a jóvenes interesados en programación y ciencias de la computación.",
    },
  ],
} as const;
