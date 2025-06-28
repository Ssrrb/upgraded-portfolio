import { type UIMessage, type TextPart } from 'ai';
import { generateUUID } from './utils';

export function createCVMessage(): UIMessage {
  return {
    id: generateUUID(),
    role: 'assistant',
    content: '',
    createdAt: new Date(),
    parts: [
      {
        type: 'text',
        text: `# Sebastián Rojas - Resumen Profesional

Ingeniero de Software | Especializado en Inteligencia Artificial y Machine Learning  | AI/ML Engineer  |
Asunción, Paraguay | sebastianrojas@gmail.com | LinkedIn: https://www.linkedin.com/in/sebastian-rojas-28674a303/ | GitHub: https://github.com/Ssrrb

---

## Resumen Profesional
Ingeniero de Software con experiencia en el desarrollo y despliegue de soluciones de Inteligencia Artificial y Machine Learning. Experto en sistemas RAG, visión computacional, procesamiento de datos y arquitecturas cloud/serverless. Certificado Google Cloud Professional Architect. Destacado por la integración de modelos escalables en producción y la colaboración en equipos multidisciplinarios.

---

## Experiencia Laboral

**Ingeniero de Software Junior – Softshop, Equipo de IA**  
Asunción, Paraguay | 2023 – presente

* Diseño y desarrollo de agentes RAG personalizados, integrando modelos generativos con contexto dinámico de usuario para respuestas más precisas y personalizadas.
* Implementación de un sistema de detección de imágenes médicas (tórax) en Google Cloud Platform, utilizando arquitecturas event-driven y serverless para lograr inferencia escalable y eficiente.
* Desarrollo de pipeline completo de visión computacional para conteo de plantas con ClearML, abarcando gestión de datos, tracking de experimentos y despliegue en producción.
* Colaboración directa con científicos de datos y equipos backend para integrar soluciones de machine learning de manera robusta y eficiente en sistemas productivos.

---

## Proyectos Destacados

**Optimización Financiera de Portafolios – Paraguay Stock Market (En curso)**
- Desarrollo de aplicación para optimización de portafolios de inversión.
- Implementación de modelos de optimización convexa: Markowitz, Risk Budgeting, CVaR.
- Aplicación de análisis matemático y estadístico para maximizar rendimientos ajustados al riesgo.
- Integración con herramientas cloud para análisis eficiente y escalable.

---

## Educación

**Licenciatura en Análisis de Sistemas Informáticos**  
Universidad Católica “Nuestra Señora de la Asunción”, Asunción  
2023 – 2027 (en curso)

---

## Certificaciones
- Google Cloud Professional Architect

---

## **🔹 Habilidades Técnicas**

* **Lenguajes de Programación:** Python, Bash, SQL, NoSQL, Java (básico), JavaScript (básico), Next.js
* **Cloud & DevOps:** Google Cloud Platform (serverless, event-driven), microservicios, Git, Redis
* **Machine Learning:** ClearML, Scikit-learn, Vertex AI, LangChain 
* **Matemáticas & Optimización:** Estadística, Álgebra Lineal, Optimización Convexa (Markowitz, CVaR, Risk Budgeting)
* **Sistemas Operativos:** Ubuntu, RHEL, Windows, macOS

---

## Idiomas
- Español: Nativo
- Inglés: Fluido

---!*`
      } as TextPart
    ],
    experimental_attachments: []
  };
}
