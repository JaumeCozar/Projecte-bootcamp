import { Card } from "flowbite-react";

export function PoliticaPrivacidad() {
  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen mt-15 bg-gradient-to-b from-gray-100 via-white to-gray-100 dark:from-gray-800 dark:via-gray-900 dark:to-gray-800">
      <Card className="w-full max-w-4xl shadow-2xl bg-white/80 border-4 border-blue-500 dark:bg-gray-900/80 rounded-3xl p-10 backdrop-blur-md transition-shadow duration-300 hover:shadow-blue-200 dark:hover:shadow-blue-900">
        <h1 className="text-3xl font-bold mb-4 text-gray-800 dark:text-white">Política de Privacidad</h1>
        <p className="mb-4 text-sm text-gray-500 dark:text-gray-300">Fecha de entrada en vigor: 25 de junio de 2025</p>

        <div className="space-y-6 text-gray-700 text-base leading-relaxed dark:text-white">
          <p><strong>¿Quiénes somos?</strong><br />Effinity es una plataforma impulsada por inteligencia artificial dedicada a ayudar a empresas del sector alimentario y logístico a reducir el desperdicio de alimentos, mejorar la eficiencia y aumentar la rentabilidad mediante el análisis de datos.</p>

          <p><strong>¿Qué información recopilamos?</strong><br />Podemos recopilar tu información de contacto, datos de uso, datos de pago (procesados por Stripe) y datos operativos para análisis.</p>

          <p><strong>¿Cómo usamos tu información?</strong><br />Para proveer servicios, procesar pagos, enviar comunicaciones importantes, cumplir con la ley y generar mejoras de plataforma.</p>

          <p><strong>¿Con quién compartimos tus datos?</strong><br />Con Stripe, servicios de hosting, y autoridades si es requerido. Nunca vendemos tu información.</p>

          <p><strong>Seguridad de la información:</strong><br />Cifrado SSL, acceso restringido y monitoreo constante.</p>

          <p><strong>Tus derechos:</strong><br />Puedes acceder, corregir o eliminar tus datos escribiéndonos a privacidad@effinity.ai</p>

          <p><strong>Cookies:</strong><br />Utilizamos cookies para mejorar tu experiencia. Puedes desactivarlas desde tu navegador.</p>

          <p><strong>Cambios:</strong><br />Podemos modificar esta política. Notificaremos los cambios importantes.</p>

          <p><strong>Contacto:</strong><br />📧 privacidad@effinity.ai<br />🌐 www.effinity.ai</p>
        </div>
      </Card>
    </div>
  );
}
