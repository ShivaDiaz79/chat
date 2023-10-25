const { createBot, createProvider, createFlow, addKeyword } = require('@bot-whatsapp/bot');

const QRPortalWeb = require('@bot-whatsapp/portal');
const BaileysProvider = require('@bot-whatsapp/provider/baileys');
const MockAdapter = require('@bot-whatsapp/database/mock');

const flowCasos = addKeyword(['3','especialidades', 'tipos de casos']).addAnswer([
  '📚 Nuestro bufete de abogados se especializa en diversos tipos de casos, como:',
  '➡️ Derecho penal',
  '➡️ Derecho civil',
  '➡️ Derecho laboral',
  '➡️ Derecho de familia',
  '➡️ Derecho mercantil',
  '➡️ Derecho tributario',
  '➡️ Derecho inmobiliario',
  '➡️ Derecho de propiedad intelectual',
  '➡️ Derecho administrativo',
  '➡️ Derecho de migración',
  'Si tienes alguna pregunta específica sobre alguno de estos casos, no dudes en consultarnos.',
  '\n*0* Para continuar con más preguntas frecuentes.',
]);

const flowHorarios = addKeyword(['1', 'horarios', 'atención', 'contacto']).addAnswer([
  '⌚ Nuestro horario de atención es de lunes a viernes de 9:00 a.m. a 6:00 p.m.',
  '📞 Puedes contactarnos llamando al número +591-73665607 o enviándonos un mensaje por WhatsApp al mismo número.',
  '📧 También puedes enviarnos un correo electrónico a info@abogados.com.',
  'Estamos disponibles para responder tus consultas y agendar citas.',
  '\n*2* Para continuar con más preguntas frecuentes.',
]);

const flowHonorarios = addKeyword(['2', 'honorarios', 'costos']).addAnswer([
  '💰 Nuestros honorarios varían según el tipo de caso y la complejidad del asunto legal.',
  '📝 Es recomendable agendar una consulta inicial para evaluar tu situación y proporcionarte una cotización detallada.',
  '💼 Ofrecemos opciones de pago flexibles y planes de financiamiento adaptados a tus necesidades.',
  'No dudes en contactarnos para obtener más información sobre nuestros honorarios y costos.',
  '\n*0* Para continuar con más preguntas frecuentes.',
]);

// Agrega más flujos de preguntas y respuestas aquí...

const flowPrincipal = addKeyword(['hola', 'alo','todo bien', 'shiva', '0',]).addAnswer('🤝 ¡Hola! Bienvenido a nuestro servicio de abogacía. ¿En qué puedo ayudarte? MARQUE = (1)horarios, atencion, contacto (2) honorarios , costos (3)Especialidades, tipos de casos');

const main = async () => {
  const adapterDB = new MockAdapter();
  const adapterFlow = createFlow([flowPrincipal, flowCasos, flowHorarios, flowHonorarios]); // Agrega aquí más flujos si es necesario
  const adapterProvider = createProvider(BaileysProvider);

  createBot({
    flow: adapterFlow,
    provider: adapterProvider,
    database: adapterDB,
  });

  QRPortalWeb();
};

main();
