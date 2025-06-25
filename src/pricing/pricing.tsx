import { Card, Button } from "flowbite-react";

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
    <section className="py-16 px-6 bg-white text-gray-800" id="pricing">
      <div className="max-w-6xl mx-auto text-center mb-12">
        <h2 className="text-3xl sm:text-4xl font-bold mb-4">Planes y Precios</h2>
        <p className="text-gray-600 text-lg">
          Escoge el plan que mejor se adapte a las necesidades de tu empresa.
        </p>
      </div>

      <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
        {planes.map(({ nombre, precio, beneficios, destacado }, index) => (
          <Card
            key={index}
            className={`p-6 border ${
              destacado
                ? "border-blue-600 shadow-lg bg-blue-50"
                : "border-gray-200 bg-white"
            } transition duration-300 hover:shadow-xl`}
          >
            <h3 className="text-2xl font-semibold mb-4">{nombre}</h3>
            <p className="text-3xl font-bold mb-6">{precio}</p>
            <ul className="mb-6 space-y-3 text-gray-700">
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
            <Button color={destacado ? "blue" : "gray"} fullSized>
              {destacado ? "Empezar ahora" : "Más info"}
            </Button>
          </Card>
        ))}
      </div>
    </section>
  );
};
