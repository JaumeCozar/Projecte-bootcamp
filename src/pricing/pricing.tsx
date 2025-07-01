import { Card } from "flowbite-react";
import { CheckoutButton } from "../components/checkout/CheckoutButton";

export const Pricing = () => {
  const planes = [
    {
      nombre: "Básico",
      precio: "€29/mes",
      beneficios: [
        "Análisis básico de residuos",
        "Informes mensuales",
        "Soporte por email",
      ],
      destacado: false,
    },
    {
      nombre: "Profesional",
      precio: "€59/mes",
      beneficios: [
        "Análisis avanzado y reportes personalizados",
        "Alertas en tiempo real",
        "Soporte prioritario",
      ],
      destacado: true,
    },
    {
      nombre: "Empresa",
      precio: "Contacta para precio",
      beneficios: [
        "Soluciones a medida",
        "Integración con sistemas propios",
        "Consultoría dedicada",
      ],
      destacado: false,
    },
  ];

  return (
    <section className="py-16 px-6 bg-gradient-to-b from-white via-gray-50 to-white dark:from-gray-800 dark:via-gray-900 dark:to-gray-800 text-gray-800 dark:text-gray-100" id="pricing">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4 dark:text-white">Planes y Precios</h2>
        <p className="text-gray-600 text-lg dark:text-gray-300">
          Escoge el plan que mejor se adapte a las necesidades de tu empresa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {planes.map(({ nombre, precio, beneficios, destacado }, index) => (
          <Card
            key={index}
            className={`flex flex-col items-start p-6 bg-white border border-gray-200 shadow-md rounded-2xl transition hover:shadow-lg hover:ring-1 hover:ring-teal-500 dark:bg-gray-900 dark:text-gray-100 ${destacado ? 'ring-2 ring-blue-600' : ''}`}
          >
            <h3 className="text-2xl font-semibold mb-4 dark:text-gray-100">{nombre}</h3>
            <p className="text-3xl font-bold mb-6">{precio}</p>
            <ul className="mb-6 space-y-3 text-gray-700 dark:text-gray-300">
              {beneficios.map((beneficio, i) => (
                <li key={i} className="flex items-center">
                  <svg
                    className="w-5 h-5 text-green-500 mr-2 flex-shrink-0"
                    fill="none"
                    stroke="currentColor"
                    strokeWidth="2"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                    aria-hidden="true"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      d="M5 13l4 4L19 7"
                    ></path>
                  </svg>
                  {beneficio}
                </li>
              ))}
            </ul>
            {nombre.toLowerCase() === "empresa" ? (
              <div className="flex justify-center mt-4 w-full">
                <a
                  href="#contact-section"
                  className="bg-teal-600 hover:bg-teal-700 text-white font-semibold py-2 px-4 rounded w-full text-center text-xl shadow-lg transition-all duration-200"
                  style={{ display: 'inline-block' }}
                >
                  Contactar para contratar
                </a>
              </div>
            ) : (
              <div className="flex justify-center mt-4 w-full">
                <CheckoutButton plan={nombre.toLowerCase()} />
              </div>
            )}
          </Card>
        ))}
      </div>
    </section>
  );
};
