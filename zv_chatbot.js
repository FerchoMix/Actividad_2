/*
  chatbot.js — Chatbot simulado para Zenith
  Sin API externa. Respuestas predefinidas sobre el proyecto de tesis.
  Proyecto: Actividad #2 · UAB 2025
*/

/* ===================================================
   BASE DE CONOCIMIENTO DEL PROYECTO
   =================================================== */
const respuestas = [
  {
    palabras: ["trata", "proyecto", "es", "qué", "sobre", "aplicación", "app", "zenith"],
    respuesta: `<strong>Zenith</strong> es una aplicación móvil de bienestar integral para jóvenes universitarios bolivianos. 😊<br><br>
Combina dos módulos en uno:<br>
• <strong>Gestión Financiera:</strong> control de gastos, ahorro y educación financiera<br>
• <strong>Apoyo Emocional con IA:</strong> acompañamiento conversacional para manejar el estrés académico<br><br>
Es el proyecto de tesis de Licenciatura en Ingeniería en Sistemas de la <em>Universidad Adventista de Bolivia (UAB)</em>.`
  },
  {
    palabras: ["tecnolog", "stack", "flutter", "firebase", "lenguaje", "herramienta", "programa", "construi", "desarrolla"],
    respuesta: `El stack tecnológico de <strong>Zenith</strong> es:<br><br>
📱 <strong>Flutter + Dart</strong> — interfaz multiplataforma (Android e iOS)<br>
☁️ <strong>Firebase Firestore</strong> — base de datos en tiempo real<br>
🔐 <strong>Firebase Auth</strong> — autenticación de usuarios<br>
🤖 <strong>API de NLP</strong> (OpenAI o Gemini) — módulo de apoyo emocional<br>
🐙 <strong>GitHub</strong> — control de versiones y colaboración<br>
🐍 <strong>Python</strong> — servidor web para esta página`
  },
  {
    palabras: ["emocional", "emocion", "sentimiento", "estrés", "estres", "ansiedad", "mental", "apoyo", "psicolog"],
    respuesta: `El módulo de <strong>Apoyo Emocional</strong> de Zenith funciona así:<br><br>
💬 <strong>Chat conversacional 24/7</strong> en español, empático y accesible<br>
📔 <strong>Diario emocional</strong> con análisis de tendencias a lo largo del tiempo<br>
🧘 <strong>Técnicas de bienestar</strong>: respiración, mindfulness, manejo del estrés<br>
🏥 <strong>Conexión con recursos</strong> universitarios de salud mental<br>
🔍 <strong>Detección de patrones</strong> de estrés en el lenguaje del usuario<br><br>
Usa procesamiento de lenguaje natural (NLP) para entender el estado emocional del estudiante.`
  },
  {
    palabras: ["financier", "dinero", "presupuest", "gasto", "ahorro", "ingreso", "plata", "economia"],
    respuesta: `El módulo de <strong>Gestión Financiera</strong> incluye:<br><br>
💳 <strong>Registro de ingresos y gastos</strong> con categorías personalizadas<br>
📊 <strong>Presupuesto mensual</strong> con visualización gráfica<br>
🎯 <strong>Metas de ahorro</strong> con seguimiento de progreso<br>
⚠️ <strong>Alertas inteligentes</strong> cuando el gasto se acerca al límite<br>
📚 <strong>Educación financiera gamificada</strong> con lecciones cortas y logros<br><br>
Está diseñado para el contexto económico boliviano, donde muchos universitarios no tienen educación financiera formal.`
  },
  {
    palabras: ["metodolog", "investigac", "causal", "determinism", "tesis", "marco", "teóric"],
    respuesta: `La investigación sigue la metodología del <strong>Determinismo Causal</strong>. 📋<br><br>
<strong>Estructura del perfil de tesis:</strong><br>
• Capítulo I: Planteamiento del problema<br>
• Árbol de problemas (causa → efecto)<br>
• Objetivos general y específicos<br>
• Justificación: teórica, práctica y metodológica<br>
• Marco teórico y referencial<br>
• Hipótesis y variables<br><br>
<strong>Institución:</strong> Universidad Adventista de Bolivia (UAB) · Cochabamba · 2025`
  },
  {
    palabras: ["problema", "justifica", "por qué", "necesidad", "soluciona", "resuelve"],
    respuesta: `<strong>El problema que Zenith resuelve:</strong><br><br>
Los jóvenes universitarios bolivianos enfrentan <em>dos crisis simultáneas</em>:<br><br>
📉 <strong>Financiera:</strong> ingresos limitados, gastos sin control, cero educación financiera formal en la universidad<br>
😟 <strong>Emocional:</strong> estrés académico alto, ansiedad y acceso limitado a apoyo psicológico accesible<br><br>
El <strong>70%</strong> de estudiantes reporta estrés académico significativo, y <strong>3 de cada 4</strong> no recibió educación financiera formal. Zenith es la primera app en Bolivia que combina ambos problemas en una sola solución, en español y adaptada al contexto local.`
  },
  {
    palabras: ["hola", "hello", "buenas", "saludo", "hi", "hey"],
    respuesta: `¡Hola! 👋 Bienvenido/a al asistente de <strong>Zenith</strong>.<br><br>
Puedo contarte sobre:<br>
• El proyecto de tesis y su objetivo<br>
• Los módulos de la app (financiero y emocional)<br>
• El stack tecnológico (Flutter, Firebase, NLP)<br>
• La metodología de investigación<br>
• El problema que busca resolver<br><br>
¿Por dónde quieres empezar?`
  },
  {
    palabras: ["objetivo", "meta", "fin", "busca", "propone"],
    respuesta: `<strong>Objetivo general de Zenith:</strong><br><br>
Desarrollar una aplicación móvil que mejore el bienestar integral de los jóvenes universitarios bolivianos, integrando herramientas de gestión financiera personal y apoyo emocional mediante inteligencia artificial. 🎯<br><br>
<strong>Objetivos específicos:</strong><br>
• Diseñar una interfaz centrada en el usuario (UX/UI con Flutter)<br>
• Implementar el módulo de control financiero personal<br>
• Integrar un modelo NLP para el apoyo emocional conversacional<br>
• Validar la app con estudiantes de la UAB`
  },
];

const respuestaDefault = `Gracias por tu pregunta. 😊 Puedo responderte sobre:<br><br>
• <strong>El proyecto</strong> — qué es Zenith y cuál es su objetivo<br>
• <strong>Módulo financiero</strong> — control de gastos y ahorro<br>
• <strong>Módulo emocional</strong> — apoyo con IA y estrés<br>
• <strong>Tecnologías</strong> — Flutter, Firebase, NLP<br>
• <strong>Metodología</strong> — determinismo causal, perfil de tesis<br><br>
¿Sobre cuál de estos temas te gustaría saber más?`;

/* ===================================================
   LÓGICA DEL CHAT
   =================================================== */
function buscarRespuesta(texto) {
  const textoLimpio = texto.toLowerCase()
    .normalize("NFD").replace(/[\u0300-\u036f]/g, "");

  for (const item of respuestas) {
    const encontrado = item.palabras.some(p => textoLimpio.includes(p));
    if (encontrado) return item.respuesta;
  }
  return respuestaDefault;
}

function agregarMensaje(html, rol) {
  const container = document.getElementById("chatMessages");
  const msg = document.createElement("div");
  msg.className = `cmsg cmsg-${rol}`;

  if (rol === "bot") {
    msg.innerHTML = `
      <div class="cmsg__avatar">Z</div>
      <div class="cmsg__bubble">${html}</div>`;
  } else {
    msg.innerHTML = `
      <div class="cmsg__avatar cmsg__avatar-u">
        <svg width="13" height="13" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2">
          <path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"/>
          <circle cx="12" cy="7" r="4"/>
        </svg>
      </div>
      <div class="cmsg__bubble">${html}</div>`;
  }

  container.appendChild(msg);
  container.scrollTop = container.scrollHeight;
}

function agregarTyping() {
  const container = document.getElementById("chatMessages");
  const typing = document.createElement("div");
  typing.className = "cmsg cmsg-bot";
  typing.id = "typing";
  typing.innerHTML = `
    <div class="cmsg__avatar">Z</div>
    <div class="cmsg__bubble typing">
      <div class="dot"></div><div class="dot"></div><div class="dot"></div>
    </div>`;
  container.appendChild(typing);
  container.scrollTop = container.scrollHeight;
}

function quitarTyping() {
  const el = document.getElementById("typing");
  if (el) el.remove();
}

function ocultarSugerencias() {
  const s = document.getElementById("suggestions");
  if (s) s.style.display = "none";
}

let bloqueado = false;

function enviarMensaje() {
  if (bloqueado) return;
  const input = document.getElementById("chatInput");
  const texto = input.value.trim();
  if (!texto) return;

  ocultarSugerencias();
  input.value = "";
  bloqueado = true;

  agregarMensaje(texto, "user");
  agregarTyping();

  // Simula un pequeño delay (0.8–1.4 s) para que se sienta natural
  const delay = 800 + Math.random() * 600;

  setTimeout(() => {
    quitarTyping();
    const respuesta = buscarRespuesta(texto);
    agregarMensaje(respuesta, "bot");
    bloqueado = false;
    document.getElementById("chatInput").focus();
  }, delay);
}

function useSuggestion(btn) {
  document.getElementById("chatInput").value = btn.textContent;
  enviarMensaje();
}
