import { Card } from "flowbite-react";

export function PoliticaPrivacidad() {
  return (
    <div className="flex justify-center p-6 bg-gray-100 min-h-screen mt-15">
      <Card className="w-full max-w-4xl shadow-lg bg-white">
        <h1 className="text-3xl font-bold mb-4 text-gray-800">Política de Privacidad</h1>
        <p className="mb-4 text-sm text-gray-500">Fecha de entrada en vigor: 25 de junio de 2025</p>

        <div className="space-y-6 text-gray-700 text-base leading-relaxed">
          <p><strong>¿Quiénes somos?</strong><br />Effinity es una plataforma impulsada por inteligencia artificial dedicada a ayudar a empresas del sector alimentario y logístico a reducir el desperdicio de alimentos, mejorar la eficiencia y aumentar la rentabilidad mediante el análisis de datos.</p>

          <p><strong>¿Qué información recopilamos?</strong><br />Podemos recopilar tu información de contacto, datos de uso, datos de pago (procesados por Stripe) y datos operativos para análisis.</p>

          <p><strong>¿Cómo usamos tu información?</strong><br />Para proveer servicios, procesar pagos, enviar comunicaciones importantes, cumplir con la ley y generar mejoras de plataforma.</p>

          <p><strong>¿Con quién compartimos tus datos?</strong><br />Con Stripe, servicios de hosting, y autoridades si es requerido. Nunca vendemos tu información.</p>

          <p><strong>Seguridad de la información:</strong><br />Cifrado SSL, acceso restringido y monitoreo constante.</p>

          <p><strong>Tus derechos:</strong><br />Puedes acceder, corregir o eliminar tus datos escribiéndonos a <a href="mailto:privacidad@effinity.ai" className="text-blue-600 underline">privacidad@effinity.ai</a>.</p>

          <p><strong>Cookies:</strong><br />Utilizamos cookies para mejorar tu experiencia. Puedes desactivarlas desde tu navegador.</p>

          <p><strong>Cambios:</strong><br />Podemos modificar esta política. Notificaremos los cambios importantes.</p>

          <p><strong>Contacto:</strong><br />📧 privacidad@effinity.ai<br />🌐 www.effinity.ai</p>
        </div>
      </Card>
    </div>
  );
}
