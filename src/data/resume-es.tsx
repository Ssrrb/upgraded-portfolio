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
  hackathons: [
    {
      ...DATA.hackathons[0],
      description:
        "Desarrollé una aplicación móvil que entregaba cuentos para dormir a niños usando realidad aumentada.",
    },
    {
      ...DATA.hackathons[1],
      description:
        "Desarrollé una aplicación móvil que entrega eventos de todo el campus universitario en tiempo real a todos los estudiantes.",
    },
    {
      ...DATA.hackathons[2],
      description:
        "Desarrollé una aplicación móvil que comunica los datos médicos de una víctima desde el interior de una ambulancia a los médicos del hospital.",
    },
    {
      ...DATA.hackathons[3],
      description:
        "Desarrollé una aplicación web que agrega datos de redes sociales sobre criptomonedas y predice precios futuros.",
    },
    {
      ...DATA.hackathons[4],
      description:
        "Desarrollé una aplicación móvil que asigna una asignación diaria de emisiones de carbono a los usuarios para avanzar hacia un entorno sostenible.",
      win: "Mejor Hack de Datos",
    },
    {
      ...DATA.hackathons[5],
      description:
        "Desarrollé una aplicación blockchain para médicos y farmacéuticos para realizar transacciones sin confianza y prevenir sobredosis en pacientes.",
    },
    {
      ...DATA.hackathons[6],
      description:
        "Desarrollé una aplicación de realidad virtual que permite a los usuarios verse a sí mismos en tercera persona.",
    },
    {
      ...DATA.hackathons[7],
      description:
        "Desarrollé una plataforma abierta para personas que envían artículos al mismo lugar para combinar costos de envío y ahorrar dinero.",
    },
    {
      ...DATA.hackathons[8],
      description:
        "Desarrollé una extensión de Chrome que rastrea qué perfiles de Facebook has visitado y envía inmediatamente un mensaje de texto a tu novia si visitaste la página de otra chica.",
    },
    {
      ...DATA.hackathons[9],
      description:
        "Desarrollé una biblioteca de Python que se puede importar a cualquier juego de Python y cambiar la dificultad del juego según la emoción en tiempo real del jugador. Utiliza OpenCV y cámara web para reconocimiento facial, y un Modelo de Aprendizaje Automático personalizado entrenado en un [Conjunto de Datos de Emociones de Kaggle](https://www.kaggle.com/c/challenges-in-representation-learning-facial-expression-recognition-challenge/leaderboard) usando [Tensorflow](https://www.tensorflow.org/Tensorflow) y [Keras](https://keras.io/). Este proyecto recibió el primer lugar en el Global AI Hackathon - Toronto y también fue invitado a demostrar en [NextAI Canada](https://www.nextcanada.com/next-ai).",
      win: "Ganador del Primer Lugar",
    },
    {
      ...DATA.hackathons[10],
      description:
        "Desarrollé un analizador de microexpresiones faciales en tiempo real usando IA",
    },
    {
      ...DATA.hackathons[11],
      description:
        "Desarrollé una interfaz de administración personalizada para la startup de residuos alimentarios <a href='http://genecis.co/'>Genecis</a> para administrar sus datos y proporcionar análisis.",
      win: "Ganador del Primer Lugar",
    },
    {
      ...DATA.hackathons[12],
      description: "Mejoré PocketDoc y lo envié a una competencia en línea",
      win: "Top 10 Finalista | Mención de Honor",
    },
    {
      ...DATA.hackathons[13],
      description: "Desarrollé una red neuronal para optimizar un proceso de minería",
    },
    {
      ...DATA.hackathons[14],
      description:
        "Desarrollé Pocketdoc, una aplicación en la que tomas una foto de una herida física, y la aplicación devuelve soluciones comunes o curas para las lesiones o enfermedades.",
    },
    {
      ...DATA.hackathons[15],
      description:
        "Desarrollé Earthwatch, una aplicación web que permite a los usuarios en un avión ver virtualmente puntos importantes de interés sobre el mundo debajo de ellos. Incluso pueden elegir volar lejos de su ruta y luego volver si lo desean. Agradecimientos especiales a CesiumJS por proporcionar modelos de mundo y avión de código abierto.",
    },
    {
      ...DATA.hackathons[16],
      description:
        "Desarrollé Super Graphic Air Traffic, un sitio web de RV creado para presentar a las personas al mundo del control de tráfico aéreo. Este proyecto fue construido completamente usando THREE.js así como un servidor backend de node.",
    },
    {
      ...DATA.hackathons[17],
      description:
        "Desarrollado en StartHacks 2017, Recipic es una aplicación móvil que te permite tomar fotos de ingredientes alrededor de tu casa, y reconocerá esos ingredientes usando la API de reconocimiento de imágenes de ClarifAI y devolverá posibles recetas para hacer. Recipic recibió el primer lugar en el hackathon por mejor presentación y hack.",
      win: "Ganador del Primer Lugar",
    },
    {
      ...DATA.hackathons[18],
      description:
        "Desarrollé un juego móvil que permite una cacería humana en toda la ciudad con lobbies aleatorios",
    },
    {
      ...DATA.hackathons[19],
      description:
        "Desarrollé una simulación de Windows 11 con notificaciones y funcionalidad interesantes",
    },
    {
      ...DATA.hackathons[20],
      description:
        "Desarrollé un widget interno para cargar tareas usando la aplicación de portal de Waterloo",
    },
  ],
} as const;
